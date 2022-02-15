import { ref } from 'vue'

/**
 * 计数器
 */
export const useCounter = () => {
	const count = ref(initialValue)

	const inc = (delta = 1) => (count.value += delta)
	const dec = (delta = 1) => (count.value -= delta)
	const get = () => count.value
	const set = val => (count.value = val)
	const reset = (val = initialValue) => {
		initialValue = val
		return set(val)
	}

	return { count, inc, dec, get, set, reset }
}
