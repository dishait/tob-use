import { ref, watch } from 'vue'
import {
	bypassFilter,
	createFilterWrapper
} from '../../shared/filters'

/**
 * 忽略型监听
 */
export const ignorableWatch = () => {
	const { eventFilter = bypassFilter, ...watchOptions } =
		options

	const filteredCb = createFilterWrapper(eventFilter, cb)

	let ignoreUpdates
	let ignorePrevAsyncUpdates
	let stop

	if (watchOptions.flush === 'sync') {
		const ignore = ref(false)

		// no op for flush: sync
		ignorePrevAsyncUpdates = () => {}

		ignoreUpdates = updater => {
			// Call the updater function and count how many sync updates are performed,
			// then add them to the ignore count
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
		const disposables = []

		const ignoreCounter = ref(0)
		const syncCounter = ref(0)

		ignorePrevAsyncUpdates = () => {
			ignoreCounter.value = syncCounter.value
		}

		// Sync watch to count modifications to the source
		disposables.push(
			watch(
				source,
				() => {
					syncCounter.value++
				},
				{ ...watchOptions, flush: 'sync' }
			)
		)

		ignoreUpdates = updater => {
			// Call the updater function and count how many sync updates are performed,
			// then add them to the ignore count
			const syncCounterPrev = syncCounter.value
			updater()
			ignoreCounter.value +=
				syncCounter.value - syncCounterPrev
		}

		disposables.push(
			watch(
				source,
				(...args) => {
					// If a history operation was performed (ignoreCounter > 0) and there are
					// no other changes to the source ref value afterwards, then ignore this commit
					const ignore =
						ignoreCounter.value > 0 &&
						ignoreCounter.value === syncCounter.value
					ignoreCounter.value = 0
					syncCounter.value = 0
					if (ignore) return

					filteredCb(...args)
				},
				watchOptions
			)
		)

		stop = () => {
			disposables.forEach(fn => fn())
		}
	}

	return { stop, ignoreUpdates, ignorePrevAsyncUpdates }
}
