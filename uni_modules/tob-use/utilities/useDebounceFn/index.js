import {
	debounceFilter,
	createFilterWrapper
} from '../../shared/filters'

/**
 * 使用防抖函数
 */
export const useDebounceFn = (
	fn,
	ms = 200,
	options = {}
) => {
	return createFilterWrapper(
		debounceFilter(ms, options),
		fn
	)
}
