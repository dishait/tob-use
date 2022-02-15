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
export const useOffsetPagination = options => {
	const {
		total = Infinity,
		pageSize = 10,
		page = 1,
		onPageChange = noop,
		onPageSizeChange = noop,
		onPageCountChange = noop
	} = options

	const currentPageSize = useClamp(pageSize, 1, Infinity)

	const pageCount = computed(() =>
		Math.ceil(unref(total) / unref(currentPageSize))
	)

	const currentPage = useClamp(page, 1, pageCount)

	const isFirstPage = computed(
		() => currentPage.value === 1
	)
	const isLastPage = computed(
		() => currentPage.value === pageCount.value
	)

	if (isRef(page)) biSyncRef(page, currentPage)

	if (isRef(pageSize)) biSyncRef(pageSize, currentPageSize)

	function prev() {
		currentPage.value--
	}

	function next() {
		currentPage.value++
	}

	const returnValue = {
		currentPage,
		currentPageSize,
		pageCount,
		isFirstPage,
		isLastPage,
		prev,
		next
	}

	watch(currentPage, () => {
		onPageChange(reactive(returnValue))
	})

	watch(currentPageSize, () => {
		onPageSizeChange(reactive(returnValue))
	})

	watch(pageCount, () => {
		onPageCountChange(reactive(returnValue))
	})

	return returnValue
}
