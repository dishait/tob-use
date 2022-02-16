import { ref } from 'vue'

/**
 * 计数器
 */
export const useCounter = (initialValue = 0) => {
	const count = ref(initialValue)

	// 递增
	const inc = (delta = 1) => (count.value += delta)
	// 递减
	const dec = (delta = 1) => (count.value -= delta)
	// 获取
	const get = () => count.value
	// 设置
	const set = val => (count.value = val)
	// 重置
	const reset = (val = initialValue) => {
		initialValue = val
		return set(val)
	}

	return { count, inc, dec, get, set, reset }
}
