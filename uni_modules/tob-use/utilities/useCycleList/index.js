import { computed, shallowRef } from 'vue'

/**
 * 环表
 */
export const useCycleList = () => {
	const state = shallowRef(options?.initialValue || list[0])

	const index = computed({
		get() {
			let index = options?.getIndexOf
				? options.getIndexOf(state.value, list)
				: list.indexOf(state.value)

			if (index < 0) index = options?.fallbackIndex ?? 0

			return index
		},
		set(v) {
			set(v)
		}
	})

	function set(i) {
		const length = list.length
		const index = ((i % length) + length) % length
		const value = list[index]
		state.value = value
		return value
	}

	function shift(delta = 1) {
		return set(index.value + delta)
	}

	function next(n = 1) {
		return shift(n)
	}

	function prev(n = 1) {
		return shift(-n)
	}

	return {
		state,
		index,
		next,
		prev
	}
}
