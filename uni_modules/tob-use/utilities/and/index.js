import { unref, computed } from 'vue'

/**
 * AND 判断
 */
export const and = (...args) => {
	return computed(() => args.every(v => unref(v)))
}
