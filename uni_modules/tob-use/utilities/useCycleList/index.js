import { computed, shallowRef } from 'vue'

/**
 * 环表
 */
export const useCycleList = (list, options) => {
	// 有初始值则用初始值，无则使用第一个参数
	const state = shallowRef(options?.initialValue ?? list[0])

	// 标识
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

	// 设置
	function set(i) {
		const { length } = list
		const index = ((i % length) + length) % length
		const value = list[index]
		state.value = value
		return value
	}

	// 偏移
	function shift(delta = 1) {
		return set(index.value + delta)
	}

	// 下一个
	function next(n = 1) {
		return shift(n)
	}

	// 上一个
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
