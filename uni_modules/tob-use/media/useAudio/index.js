import { watch } from 'vue'
import { createAudio } from '../createAudio'
import { useCycleList } from '../../utilities/useCycleList'

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

	const shouldReset = list.length === 1
	// 长度为 1 时重新播放
	const shouldReplay = shouldReset

	audio.onEnded(() => (shouldReset ? reset() : next()))

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
