import { ref, isRef } from 'vue'
import { isBoolean } from '../../shared/is'

/**
 * 切换
 */
export const useToggle = (initialValue = false) => {
	if (isRef(initialValue)) {
		return value => {
			initialValue.value = isBoolean(value)
				? value
				: !initialValue.value
			return initialValue.value
		}
	} else {
		const boolean = ref(initialValue)
		const toggle = value => {
			boolean.value = isBoolean(value)
				? value
				: !boolean.value
			return boolean.value
		}

		return [boolean, toggle]
	}
}
