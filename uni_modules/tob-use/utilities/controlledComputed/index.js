import { ref, customRef } from 'vue'

/**
 * 控制型计算属性
 */
export const controlledComputed = (source, fn) => {
	let v
	let track
	let trigger
	const dirty = ref(true)

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
