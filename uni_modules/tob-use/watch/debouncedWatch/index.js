import {
	debounceFilter,
	watchWithFilter
} from '../../shared/filters'

/**
 * 防抖监听
 */
export const debouncedWatch = (
	source,
	cb,
	options = {}
) => {
	const { debounce = 0, ...watchOptions } = options

	return watchWithFilter(source, cb, {
		...watchOptions,
		eventFilter: debounceFilter(debounce)
	})
}
