import { watch } from 'vue'

/**
 * 双向同步
 */
export const biSyncRef = (l, r) => {
	const watchOptions = {
		flush: 'sync',
		immediate: true
	}

	const sync1 = newValue => (r.value = newValue)
	const stop1 = watch(l, sync1, watchOptions)

	const sync2 = newValue => (l.value = newValue)
	const stop2 = watch(r, sync2, watchOptions)

	return () => {
		stop1()
		stop2()
	}
}
