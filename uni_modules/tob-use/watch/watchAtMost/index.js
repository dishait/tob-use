import { nextTick, ref, unref } from 'vue'
import { watchWithFilter } from '../../shared/filters'

/**
 * 限制次数型监听
 */
export const watchAtMost = (source, cb, options = {}) => {
	const { count, ...watchOptions } = options

	const current = ref(0)

	const stop = watchWithFilter(
		source,
		(...args) => {
			current.value += 1
			if (current.value >= unref(count))
				nextTick(() => stop())
			// eslint-disable-next-line n/no-callback-literal
			cb(...args)
		},
		watchOptions
	)

	return { count: current, stop }
}
