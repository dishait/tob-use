import { ref, customRef } from 'vue'

/**
 * 受控型计算属性
 */
export const controlledComputed = (source, fn) => {
	let v
	let track
	let trigger
	const dirty = ref(true)

	// 只有 source 源改变时才去触发
	watch(
		source,
		() => {
			dirty.value = true
			trigger()
		},
		{ flush: 'sync' }
	)

	return customRef((_track, _trigger) => {
		track = _track
		trigger = _trigger

		return {
			get() {
				if (dirty.value) {
					v = fn()
					dirty.value = false
				}
				track()
				return v
			},
			set() {}
		}
	})
}
