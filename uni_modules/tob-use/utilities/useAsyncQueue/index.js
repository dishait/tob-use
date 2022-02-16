import { reactive, ref } from 'vue'
import { noop } from '../../shared/base'

/**
 * 使用异步队列
 */
export const useAsyncQueue = (tasks, options = {}) => {
	const {
		interrupt = true, // 允许失败时打断
		onError = noop,
		onFinished = noop
	} = options

	const promiseState = {
		pending: 'pending',
		rejected: 'rejected',
		fulfilled: 'fulfilled'
	}
	const initialResult = Array.from(
		new Array(tasks.length),
		() => ({ state: promiseState.pending, data: null })
	)
	const result = reactive(initialResult)

	const activeIndex = ref(-1)

	// 无任务时，直接返回
	const isEmptyTasks = !tasks || tasks.length === 0
	if (isEmptyTasks) {
		onFinished()
		return {
			activeIndex,
			result
		}
	}

	// 更新结果
	const updateResult = (state, res) => {
		activeIndex.value++
		result[activeIndex.value].data = res
		result[activeIndex.value].state = state
	}

	tasks.reduce((prev, curr) => {
		return prev
			.then(prevRes => {
				// 上一个失败时打断并调用完成回调
				const isRejected =
					result[activeIndex.value]?.state ===
					promiseState.rejected
				if (isRejected && interrupt) {
					onFinished()
					return
				}

				return curr(prevRes).then(currentRes => {
					updateResult(promiseState.fulfilled, currentRes)
					// 结束时调用完成 hook
					const isFinished =
						activeIndex.value === tasks.length - 1
					if (isFinished) {
						onFinished()
					}

					return currentRes
				})
			})
			.catch(e => {
				// 错误处理，调用失败回调
				updateResult(promiseState.rejected, e)
				onError()
				return e
			})
	}, Promise.resolve())

	return {
		activeIndex,
		result
	}
}
