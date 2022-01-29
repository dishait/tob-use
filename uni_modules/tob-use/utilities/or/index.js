import { unref, computed } from 'vue'

/**
 * 或运算
 */
export const or = () => {
	return computed(() => args.some(v => unref(v)))
}
