import { isRef, ref, unref, watch } from 'vue'
import { tryOnScopeDispose } from '../../component/tryOnScopeDispose'

/**
 * 使用间隔函数
 */
export const useIntervalFn = (
	cb,
	interval = 1000,
	options = {}
) => {
	const { immediate = true, immediateCallback = false } =
		options

	let timer = null
	const isActive = ref(false)

	function clean() {
		if (timer) {
			clearInterval(timer)
			timer = null
		}
	}

	function pause() {
		isActive.value = false
		clean()
	}

	function resume() {
		if (interval <= 0) return
		isActive.value = true
		if (immediateCallback) cb()
		clean()
		timer = setInterval(cb, unref(interval))
	}

	if (immediate) resume()

	if (isRef(interval)) {
		const stopWatch = watch(interval, () => {
			if (immediate) resume()
		})
		tryOnScopeDispose(stopWatch)
	}

	tryOnScopeDispose(pause)

	return {
		isActive,
		pause,
		resume
	}
}
