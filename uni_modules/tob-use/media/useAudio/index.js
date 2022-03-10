import { watch } from 'vue'
import { createAudio } from '../createAudio'
import { useCycleList } from '../../utilities/useCycleList'

/**
 * 正确化时间
 */
const normalizeTime = time => {
	if (time === Infinity) return '00:00'

	const division = Math.floor(time / 60)
	const remainder = Math.floor(time % 60)
	const zero = x => '0'.repeat(2 - String(x).length)
	return `${zero(division) + division}:${
		zero(remainder) + remainder
	}`
}

/**
 * 使用 audio
 */
export const useAudio = (list = [], options = {}) => {
	const {
		play,
		stop,
		seek,
		reset,
		audio,
		pause,
		error,
		toggle,
		replay,
		destroy,
		buffered,
		duration,
		isActive,
		isWaiting,
		currentTime
	} = createAudio({
		src: list[0],
		...options
	})

	const { state, next, prev, index } = useCycleList(list)

	watch(state, src => play(src))

	// 需要重置
	const shouldReset = list.length === 1
	// 需要重新播放
	const shouldReplay = shouldReset

	audio.onEnded(() => (shouldReset ? reset() : next()))

	// 规范后的总时长
	const normalizedDuration = eagerComputed(() => {
		return normalizeTime(duration.value)
	})

	// 规范化后的进度
	const normalizedCurrentTime = eagerComputed(() => {
		return normalizeTime(currentTime.value)
	})

	return {
		play,
		stop,
		seek,
		audio,
		error,
		pause,
		index,
		toggle,
		replay,
		destroy,
		buffered,
		duration,
		isActive,
		isWaiting,
		currentTime,
		normalizedDuration,
		normalizedCurrentTime,
		src: state,
		next: n => {
			if (shouldReplay) {
				return replay()
			} else {
				reset()
				next(n)
			}
		},
		prev: n => {
			if (shouldReplay) {
				return replay()
			} else {
				reset()
				prev(n)
			}
		}
	}
}
