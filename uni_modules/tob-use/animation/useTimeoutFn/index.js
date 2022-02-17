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
	const {
		immediate = true // 立即开始
	} = options

	const isPending = ref(false)

	let timer = null

	// 清除定时器
	const clear = () => {
		if (timer) {
			clearTimeout(timer)
			timer = null
		}
	}

	// 暂停
	const stop = () => {
		isPending.value = false
		clear()
	}

	// 启动
	const start = (...args) => {
		clear()
		isPending.value = true
		timer = setTimeout(() => {
			isPending.value = false
			timer = null
			cb(...args)
		}, unref(interval))
	}

	// 立即开始
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
