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
			// 到达指定次数后暂停副作用并触发回调
			if (current.value >= unref(count)) {
				nextTick(stop)
			}
			cb(...args)
		},
		watchOptions
	)

	return { count: current, stop }
}
