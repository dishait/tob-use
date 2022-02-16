import {
	watchWithFilter,
	throttleFilter
} from '../../shared/filters'

/**
 * 节流型监听
 */
export const throttledWatch = (
	source,
	cb,
	options = {}
) => {
	const {
		throttle = 0,
		trailing = true,
		leading = true,
		...watchOptions
	} = options

	return watchWithFilter(source, cb, {
		...watchOptions,
		eventFilter: throttleFilter(throttle, trailing, leading)
	})
}
