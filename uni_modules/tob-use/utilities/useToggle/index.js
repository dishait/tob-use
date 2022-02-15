import { ref, isRef } from 'vue'

/**
 * 切换
 */
export const useToggle = () => {
	if (isRef(initialValue)) {
		return value => {
			initialValue.value =
				typeof value === 'boolean'
					? value
					: !initialValue.value
			return initialValue.value
		}
	} else {
		const boolean = ref(initialValue)
		const toggle = value => {
			boolean.value =
				typeof value === 'boolean' ? value : !boolean.value
			return boolean.value
		}

		return [boolean, toggle]
	}
}
