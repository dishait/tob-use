import { reactive, ref } from 'vue'
import { noop } from '../../shared/base'

/**
 * 使用异步队列
 */
export const useAsyncQueue = (tasks, options = {}) => {
	const {
		interrupt = true,
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

	const activeIndex = ref < number > -1

	if (!tasks || tasks.length === 0) {
		onFinished()
		return {
			activeIndex,
			result
		}
	}

	function updateResult(state, res) {
		activeIndex.value++
		result[activeIndex.value].data = res
		result[activeIndex.value].state = state
	}

	tasks.reduce((prev, curr) => {
		return prev
			.then(prevRes => {
				if (
					result[activeIndex.value]?.state ===
						promiseState.rejected &&
					interrupt
				) {
					onFinished()
					return
				}

				return curr(prevRes).then(currentRes => {
					updateResult(promiseState.fulfilled, currentRes)
					activeIndex.value === tasks.length - 1 &&
						onFinished()
					return currentRes
				})
			})
			.catch(e => {
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
