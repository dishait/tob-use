import { isRef, reactive } from 'vue'

/**
 * 转化为 Reactive
 */
export const toReactive = objectRef => {
	if (!isRef(objectRef)) {
		return reactive(objectRef)
	}

	const proxy = new Proxy(
		{},
		{
			get(_, p, receiver) {
				return Reflect.get(objectRef.value, p, receiver)
			},
			set(_, p, value) {
				objectRef.value[p] = value
				return true
			},
			deleteProperty(_, p) {
				return Reflect.deleteProperty(objectRef.value, p)
			},
			has(_, p) {
				return Reflect.has(objectRef.value, p)
			},
			ownKeys() {
				return Object.keys(objectRef.value)
			},
			getOwnPropertyDescriptor() {
				return {
					enumerable: true,
					configurable: true
				}
			}
		}
	)

	return reactive(proxy)
}
