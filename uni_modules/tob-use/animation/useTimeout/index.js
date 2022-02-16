import { computed } from 'vue'
import { noop } from '../../shared/base'
import { useTimeoutFn } from '../useTimeoutFn'

/**
 * 定时器
 */
export const useTimeout = (
	interval = 1000,
	options = {}
) => {
	const { controls: exposeControls = false } = options

	const controls = useTimeoutFn(noop, interval, options)

	const ready = computed(() => !controls.isPending.value)

	if (exposeControls) {
		return {
			ready,
			...controls
		}
	} else {
		return ready
	}
}
