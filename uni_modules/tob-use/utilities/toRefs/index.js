import { toRefs as _toRefs, customRef, isRef } from 'vue'

/**
 * 扩展之后的 toRefs，允许接受对象型的 ref
 */
export const toRefs = objectRef => {
	if (!isRef(objectRef)) return _toRefs(objectRef)

	const result = Array.isArray(objectRef.value)
		? new Array(objectRef.value.length)
		: {}

	for (const key in objectRef.value) {
		result[key] = customRef(() => ({
			get() {
				return objectRef.value[key]
			},
			set(v) {
				if (Array.isArray(objectRef.value)) {
					const copy = [...objectRef.value]
					copy[key] = v
					objectRef.value = copy
				} else {
					objectRef.value = {
						...objectRef.value,
						[key]: v
					}
				}
			}
		}))
	}
	return result
}
