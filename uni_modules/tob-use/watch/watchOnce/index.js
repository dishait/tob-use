import { nextTick, watch } from 'vue'

/**
 * 一次性监听
 */
export const watchOnce = (source, cb, options = {}) => {
	const stop = watch(
		source,
		(...args) => {
			nextTick(() => stop())
			return cb(...args)
		},
		options
	)
}
