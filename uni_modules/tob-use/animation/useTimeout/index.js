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

	// 定时器触发完成标志
	const ready = computed(() => !controls.isPending.value)

	// 暴露定时器控制权
	if (exposeControls) {
		return {
			ready,
			...controls
		}
	} else {
		return ready
	}
}
