import { unref, computed } from 'vue'

/**
 * 或运算
 */
export const or = (...args) => {
	return computed(() => args.some(v => unref(v)))
}
