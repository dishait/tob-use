import { customRef } from 'vue'
import { extendRef } from '../extendRef'

/**
 * 控制型ref
 */
export const controlledRef = (initial, options = {}) => {
	let source = initial
	let track
	let trigger

	const ref = customRef((_track, _trigger) => {
		track = _track
		trigger = _trigger

		return {
			get() {
				return get()
			},
			set(v) {
				set(v)
			}
		}
	})

	function get(tracking = true) {
		if (tracking) track()
		return source
	}

	function set(value, triggering = true) {
		if (value === source) return

		const old = source
		if (options.onBeforeChange?.(value, old) === false) {
			return
		}

		source = value

		options.onChanged?.(value, old)

		if (triggering) trigger()
	}

	const untrackedGet = () => get(false)

	const silentSet = v => set(v, false)

	const peek = () => get(false)

	const lay = v => set(v, false)

	return extendRef(
		ref,
		{
			get,
			set,
			untrackedGet,
			silentSet,
			peek,
			lay
		},
		{ enumerable: true }
	)
}
