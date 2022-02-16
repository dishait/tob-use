import { ref, unref } from 'vue'
import { tryOnScopeDispose } from '../../component/tryOnScopeDispose'

/**
 * 定时器方法
 */
export const useTimeoutFn = (
	cb,
	interval,
	options = {}
) => {
	const { immediate = true } = options

	const isPending = ref(false)

	let timer = null

	function clear() {
		if (timer) {
			clearTimeout(timer)
			timer = null
		}
	}

	function stop() {
		isPending.value = false
		clear()
	}

	function start(...args) {
		clear()
		isPending.value = true
		timer = setTimeout(() => {
			isPending.value = false
			timer = null
			// eslint-disable-next-line n/no-callback-literal
			cb(...args)
		}, unref(interval))
	}

	if (immediate) {
		isPending.value = true
		start()
	}

	tryOnScopeDispose(stop)

	return {
		isPending,
		start,
		stop
	}
}
