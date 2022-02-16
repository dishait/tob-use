import {
	watchWithFilter,
	pausableFilter
} from '../../shared/filters'

/**
 * 可暂停的监听
 */
export const pausableWatch = (source, cb, options = {}) => {
	const { eventFilter: filter, ...watchOptions } = options

	const { eventFilter, pause, resume, isActive } =
		pausableFilter(filter)

	const stop = watchWithFilter(source, cb, {
		...watchOptions,
		eventFilter
	})

	return { stop, pause, resume, isActive }
}
