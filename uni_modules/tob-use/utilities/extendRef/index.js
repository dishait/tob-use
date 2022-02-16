import { isRef } from 'vue'

/**
 * ref 扩展
 */
export const extendRef = (ref, extend, options = {}) => {
	const { enumerable = false, unwrap = true } = options

	for (const [key, value] of Object.entries(extend)) {
		if (key === 'value') continue // 忽略 .value 键

		// 保留原有 ref
		if (isRef(value) && unwrap) {
			Object.defineProperty(ref, key, {
				get() {
					return value.value
				},
				set(v) {
					value.value = v
				},
				enumerable
			})
		} else {
			Object.defineProperty(ref, key, { value, enumerable })
		}
	}
	return ref
}
