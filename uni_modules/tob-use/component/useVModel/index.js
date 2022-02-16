import {
	computed,
	getCurrentInstance,
	ref,
	watch
} from 'vue-demi'

/**
 * 使用 v-model
 */
export const useVModel = (
	props,
	key,
	emit,
	options = {}
) => {
	const {
		passive = false,
		eventName,
		deep = false
	} = options
	const vm = getCurrentInstance()

	const _emit = emit || vm?.emit || vm?.$emit?.bind(vm)
	let event = eventName

	if (!key) {
		key = 'modelValue'
	}

	event = eventName || event || `update:${key}`

	if (passive) {
		const proxy = ref < P[K] > props[key]

		watch(
			() => props[key],
			v => (proxy.value = v)
		)

		watch(
			proxy,
			v => {
				if (v !== props[key] || deep) _emit(event, v)
			},
			{
				deep
			}
		)

		return proxy
	} else {
		return computed({
			get() {
				return props[key]
			},
			set(value) {
				_emit(event, value)
			}
		})
	}
}
