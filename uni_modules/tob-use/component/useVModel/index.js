import {
	ref,
	watch,
	computed,
	getCurrentInstance
} from 'vue'

/**
 * 使用 v-model
 */
export const useVModel = (
	props,
	key = 'modelValue',
	emit,
	options = {}
) => {
	const {
		eventName,
		deep = false,
		passive = false
	} = options

	const vm = getCurrentInstance()

	// 获取 emit
	const _emit = emit || vm?.emit || vm?.$emit?.bind(vm)

	// 获取事件名
	let event = eventName || `update:${key}`

	if (passive) {
		const proxy = ref(props[key])

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
