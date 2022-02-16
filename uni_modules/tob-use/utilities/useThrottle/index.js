import { ref, watch } from 'vue'
import { useThrottleFn } from '../useThrottleFn'

/**
 * 使用节流
 */
export const useThrottle = (
	value,
	delay = 200,
	leading = true,
	trailing = true
) => {
	if (delay <= 0) {
		return value
	}

	const throttled = ref(value.value)

	const updater = useThrottleFn(
		() => {
			throttled.value = value.value
		},
		delay,
		trailing,
		leading
	)

	watch(value, () => updater())

	return throttled
}
