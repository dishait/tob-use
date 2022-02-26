import { computed } from 'vue'

/**
 * ref 的默认值
 */
export const refDefault = (source, defaultValue) => {
	return computed({
		get() {
			return source.value ?? defaultValue
		},
		set(value) {
			source.value = value
		}
	})
}
