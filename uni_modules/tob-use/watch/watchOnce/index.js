import { nextTick, watch } from 'vue'

/**
 * 一次性监听
 */
export const watchOnce = (source, cb, options = {}) => {
	const stop = watch(
		source,
		(...args) => {
			// 触发后直接 stop 掉监听
			nextTick(stop)
			return cb(...args)
		},
		options
	)
}
