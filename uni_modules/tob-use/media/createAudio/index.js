import { ref, reactive, watch, effectScope } from 'vue'
import { useToggle } from '../../utilities/useToggle'
import { isString } from '../../shared/is'
import { useThrottleFn } from '../../utilities/useThrottleFn'
import { tryOnScopeDispose } from '../../component/tryOnScopeDispose'

/**
 * 创建音频
 */
export const createAudio = (options = {}) => {
	options = reactive(options)

	const audio = uni.createInnerAudioContext()

	// 合并选项
	Object.assign(audio, options)

	// 跳转脏标识
	let seekDirty = false
	// 错误信息
	const error = ref(null)
	// 当前进度
	const currentTime = ref(0)
	// 总时长
	const duration = ref(Infinity)
	// 音频缓冲的时间点
	const buffered = ref(0)
	// 是否加载追踪
	const [isWaiting, toggleWaiting] = useToggle()
	// 是否激活状态，播放中
	const [isActive, toggleActive] = useToggle(
		Boolean(options.autoplay)
	)

	// 播放
	const play = newSrc => {
		const shouldUpdateSrc =
			isString(newSrc) && newSrc !== options.src
		if (shouldUpdateSrc) {
			audio.src = options.src = newSrc
		}
		isActive.value ? audio.play() : toggleActive(true)
	}

	// 暂停
	const pause = () => toggleActive(false)

	// 开关 (语法糖)
	const toggle = (status = !isActive.value, newSrc) => {
		status ? play(newSrc) : pause()
	}

	// 跳转
	const seek = (position, changing = false) => {
		seekDirty = true
		if (changing) {
			return
		}
		currentTime.value = Number(position)
	}

	// 重置
	const reset = () => {
		seek(0)
		seekDirty = false
		toggleWaiting(false)
		toggleActive(false)
	}

	// 重新播放
	const replay = () => {
		reset()
		toggleActive(true)
	}

	// 停止
	const stop = () => audio.stop()

	// 销毁
	const destroy = () => {
		toggleActive(false)
		audio.destroy()
		scope.stop()
	}

	const scope = effectScope()
	scope.run(() => {
		const watchOptions = { flush: 'sync' }
		// 监听激活状态
		watch(
			isActive,
			status => {
				status ? audio.play() : audio.pause()
			},
			watchOptions
		)

		// 监听跳转
		watch(
			currentTime,
			position => {
				if (seekDirty) {
					audio.seek(position)
				}
			},
			watchOptions
		)
	})

	// 可播放时
	audio.onCanplay(() => {
		toggleWaiting(false)
		duration.value = audio.duration
	})

	// 加载中
	audio.onWaiting(() => {
		toggleWaiting(true)
		isWaiting.value = true
	})

	// 自然结束时
	audio.onEnded(() => {
		seekDirty = false
		toggleActive(false)
		toggleWaiting(false)
	})

	// 发生错误时
	audio.onError(err => {
		seekDirty = false
		toggleActive(false)
		toggleWaiting(false)
		error.value = err
	})

	// 停止时
	audio.onStop(() => {
		seekDirty = false
		toggleActive(false)
		toggleWaiting(false)
	})

	// 播放进度更新
	audio.onTimeUpdate(
		useThrottleFn(
			() => {
				if (!seekDirty) {
					// 部分浏览器只支持在进度更新时获取时长
					// #ifdef H5
					duration.value = audio.duration
					// #endif
					// 部分 App 端只支持在播放进度更新时处理是否等待
					// #ifdef APP
					toggleWaiting(false)
					// #endif

					buffered.value = audio.buffered
					currentTime.value = audio.currentTime
				}
			},
			500,
			true,
			false
		)
	)

	// 跳转后
	audio.onSeeked(() => {
		seekDirty = false
	})

	// 副作用域被 stop 时，触发 destroy
	tryOnScopeDispose(destroy)

	return {
		play,
		stop,
		seek,
		reset,
		audio,
		pause,
		replay,
		toggle,
		destroy,
		buffered,
		isActive,
		duration,
		isWaiting,
		currentTime
	}
}
