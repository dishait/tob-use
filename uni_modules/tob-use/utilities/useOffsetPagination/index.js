import { noop } from '../../shared/base'
import { biSyncRef } from '../biSyncRef'
import { useClamp } from '../useClamp'
import {
	isRef,
	computed,
	reactive,
	unref,
	watch
} from 'vue'

/**
 * 偏移分页
 */
export const useOffsetPagination = (options = {}) => {
	const {
		page = 1,
		pageSize = 10,
		total = Infinity,
		onPageChange = noop,
		onPageSizeChange = noop,
		onPageCountChange = noop
	} = options

	// 当前每页元素数量
	const currentPageSize = useClamp(pageSize, 1, Infinity)

	// 总页数
	const pageCount = computed(() =>
		Math.ceil(unref(total) / unref(currentPageSize))
	)

	// 当前第几页
	const currentPage = useClamp(page, 1, pageCount)

	// 是否是第一页
	const isFirstPage = computed(
		() => currentPage.value === 1
	)

	// 是否是最后一页
	const isLastPage = computed(
		() => currentPage.value === pageCount.value
	)

	// 同步 第几页
	if (isRef(page)) {
		biSyncRef(page, currentPage)
	}

	// 同步 每页元素数量
	if (isRef(pageSize)) {
		biSyncRef(pageSize, currentPageSize)
	}

	// 上一页
	const prev = () => currentPage.value--

	// 下一页
	const next = () => currentPage.value++

	const returnValue = {
		currentPage,
		currentPageSize,
		pageCount,
		isFirstPage,
		isLastPage,
		prev,
		next
	}

	// 当前第几页变化时，触发 onPageChange
	watch(currentPage, () => {
		onPageChange(reactive(returnValue))
	})

	// 当前每页元素数量变化时，触发 onPageSizeChange
	watch(currentPageSize, () => {
		onPageSizeChange(reactive(returnValue))
	})

	// 总页数变化时，触发 onPageCountChange
	watch(pageCount, () => {
		onPageCountChange(reactive(returnValue))
	})

	return returnValue
}
