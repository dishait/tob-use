import { ref } from 'vue'
import { useIntervalFn } from '../useIntervalFn'

/**
 * 间隔
 */
export const useInterval = (
	interval = 1000,
	options = {}
) => {
	const {
		controls: exposeControls = false,
		immediate = true
	} = options

	const counter = ref(0)
	const controls = useIntervalFn(
		() => (counter.value += 1),
		interval,
		{ immediate }
	)

	if (exposeControls) {
		return {
			counter,
			...controls
		}
	} else {
		return counter
	}
}
