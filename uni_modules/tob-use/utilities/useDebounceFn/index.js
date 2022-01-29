import {
	debounceFilter,
	createFilterWrapper
} from '../../shared/filters'

/**
 * 使用防抖函数
 */
export const useDebounceFn = () => {
	return createFilterWrapper(
		debounceFilter(ms, options),
		fn
	)
}
