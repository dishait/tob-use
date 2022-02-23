import { customRef } from 'vue'
import { extendRef } from '../extendRef'

/**
 * 受控型 ref
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

	// 获取
	const get = (tracking = true) => {
		if (tracking) {
			track()
		}
		return source
	}

	// 设置
	const set = (value, triggering = true) => {
		const shouldUpdate = value !== source
		if (!shouldUpdate) return

		const old = source
		// 调用变更之前的 hook
		if (options.onBeforeChange?.(value, old) === false) {
			return
		}

		source = value

		// 调用变更之后的 hook
		options.onChanged?.(value, old)

		if (triggering) {
			trigger()
		}
	}

	// 不触发收集的获取
	const untrackedGet = () => get(false)

	// 单纯的设置，单不触发副作用
	const silentSet = v => set(v, false)

	// 偷窥，untrackedGet 的别名
	const peek = () => get(false)

	// 轻放，silentSet 的别名
	const lay = v => set(v, false)

	// 扩展原有的 ref
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
