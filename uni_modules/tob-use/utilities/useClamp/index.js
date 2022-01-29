import { clamp } from '../../shared/is'
import { ref, computed, unref } from 'vue'

/**
 * 在两个值范围之间取一个值
 */
export const useClamp = (value, min, max) => {
	const _value = ref(value)
	return computed({
		get() {
			return clamp(_value.value, unref(min), unref(max))
		},
		set(value) {
			_value.value = clamp(value, unref(min), unref(max))
		}
	})
}
