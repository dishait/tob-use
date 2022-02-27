import { ref, watch } from 'vue'
import {
	bypassFilter,
	createFilterWrapper
} from '../../shared/filters'
import { noop } from '../../shared/base'

/**
 * 可忽略的监听
 */
export const ignorableWatch = (
	source,
	cb,
	options = {}
) => {
	const { eventFilter = bypassFilter, ...watchOptions } =
		options

	const filteredCb = createFilterWrapper(eventFilter, cb)

	let stop
	let ignoreUpdates
	let ignorePrevAsyncUpdates

	const syncFlush = watchOptions.flush === 'sync'
	if (syncFlush) {
		const ignore = ref(false)

		ignorePrevAsyncUpdates = noop

		// syncFlush 同步更新时，直接加锁进行更新
		ignoreUpdates = updater => {
			ignore.value = true
			updater()
			ignore.value = false
		}

		stop = watch(
			source,
			(...args) => {
				if (!ignore.value) filteredCb(...args)
			},
			watchOptions
		)
	} else {
		// 临时数组，用来存储 watch 之后的 stop
		const disposables = []

		const syncCounter = ref(0) // 同步计数器
		const ignoreCounter = ref(0) // 忽略计数器

		// 忽略上一次同步更新（使得忽略计数器与同步计数器相同）
		ignorePrevAsyncUpdates = () => {
			ignoreCounter.value = syncCounter.value
		}

		// 监听源更新，递增同步计数器，并收集其 stop
		disposables.push(
			watch(
				source,
				() => {
					syncCounter.value++
				},
				{ ...watchOptions, flush: 'sync' }
			)
		)

		// 忽略更新 (调用回调的同时更新忽略计数器)
		ignoreUpdates = updater => {
			const syncCounterPrev = syncCounter.value
			updater()
			ignoreCounter.value +=
				syncCounter.value - syncCounterPrev
		}

		// 重置所有计数器
		const resetAllCounter = () => {
			syncCounter.value = 0
			ignoreCounter.value = 0
		}

		// 监听监听源更新，判断是否忽略副作用，并收集其 stop
		disposables.push(
			watch(
				source,
				(...args) => {
					// 忽略计数器存在并与同步计数器相同时，需要忽略此次更新
					const ignore =
						ignoreCounter.value > 0 &&
						ignoreCounter.value === syncCounter.value
					// 重置所有计数器
					resetAllCounter()
					if (ignore) return

					filteredCb(...args)
				},
				watchOptions
			)
		)

		stop = () => {
			// stop 掉所有的副作用
			disposables.forEach(fn => fn())
		}
	}

	return { stop, ignoreUpdates, ignorePrevAsyncUpdates }
}
