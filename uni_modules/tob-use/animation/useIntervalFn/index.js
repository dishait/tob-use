import { isRef, ref, unref, watch } from 'vue'
import { tryOnScopeDispose } from '../../component/tryOnScopeDispose'

/**
 * 间隔循环函数
 */
export const useIntervalFn = (
	cb,
	interval = 1000,
	options = {}
) => {
	const {
		immediate = true, // 立即开启间隔函数
		immediateCallback = false // 立即触发间隔函数
	} = options

	let timer = null
	const isActive = ref(false) // 是否处于开启间隔状态

	// 清除
	const clean = () => {
		if (timer) {
			clearInterval(timer)
			timer = null
		}
	}

	// 暂停
	const pause = () => {
		isActive.value = false
		clean()
	}

	// 恢复
	const resume = () => {
		if (interval <= 0) return
		isActive.value = true
		if (immediateCallback) cb()
		clean()
		timer = setInterval(cb, unref(interval))
	}

	// 立即触发间隔函数
	if (immediate) resume()

	// interval 为 ref 时，可动态设置间隔大小
	if (isRef(interval)) {
		const stopWatch = watch(interval, () => {
			if (immediate) resume()
		})
		// 尝试获取区域内副作用暂停
		tryOnScopeDispose(stopWatch)
	}

	//尝试获取区域内副作用暂停
	tryOnScopeDispose(pause)

	return {
		isActive,
		pause,
		resume
	}
}
