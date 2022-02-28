import { unref, ref, watch } from 'vue'

/**
 * 防抖过滤器
 */
export const debounceFilter = (ms, options = {}) => {
	let timer
	let maxTimer

	const filter = invoke => {
		const duration = unref(ms)
		const maxDuration = unref(options.maxWait)

		if (timer) {
			clearTimeout(timer)
		}

		const immediately = duration <= 0
		const notWait =
			maxDuration !== undefined && maxDuration <= 0

		// 立即触发
		if (immediately || notWait) {
			if (maxTimer) {
				clearTimeout(maxTimer)
				maxTimer = null
			}
			return invoke()
		}

		// 最后期限
		if (maxDuration && !maxTimer) {
			maxTimer = setTimeout(() => {
				if (timer) {
					clearTimeout(timer)
				}
				maxTimer = null
				invoke()
			}, maxDuration)
		}
		// 正常防抖
		timer = setTimeout(() => {
			if (maxTimer) {
				clearTimeout(maxTimer)
			}
			maxTimer = null
			invoke()
		}, duration)
	}

	return filter
}

/**
 * 节流过滤器
 */
export const throttleFilter = (
	ms,
	trailing = true,
	leading = true
) => {
	let timer
	let lastExec = 0
	let preventLeading = !leading

	const clear = () => {
		if (timer) {
			clearTimeout(timer)
			timer = undefined
		}
	}

	const filter = invoke => {
		const duration = unref(ms)
		const elapsed = Date.now() - lastExec // 过去多少时间

		clear()

		// 立即触发
		if (duration <= 0) {
			lastExec = Date.now()
			return invoke()
		}

		// 到达时间后触发
		if (elapsed > duration) {
			lastExec = Date.now()
			// 阻止 leading 下的触发
			if (preventLeading) {
				preventLeading = false
			} else {
				invoke()
			}
		}

		// 拖尾，确保时间到达后再触发
		if (trailing) {
			timer = setTimeout(() => {
				lastExec = Date.now()
				if (!leading) {
					preventLeading = true
				}
				clear()
				invoke()
			}, duration)
		}

		// 非拖尾下，阻止 leading 下的触发
		if (!leading && !timer) {
			timer = setTimeout(() => {
				preventLeading = true
			}, duration)
		}
	}

	return filter
}

/**
 * 创建过滤器包装函数
 */
export const createFilterWrapper = (filter, fn) => {
	function wrapper(...args) {
		const cb = () => fn.apply(this, args)
		const options = {
			fn,
			args,
			thisArg: this
		}
		filter(cb, options)
	}
	return wrapper
}

/**
 * 旁路过滤器 (即立即回调过滤器)
 */
export const bypassFilter = invoke => invoke()

/**
 * 带过滤器的监听
 */
export const watchWithFilter = (
	source,
	cb,
	options = {}
) => {
	const { eventFilter = bypassFilter, ...watchOptions } =
		options

	return watch(
		source,
		createFilterWrapper(eventFilter, cb),
		watchOptions
	)
}

/**
 * 可暂停的过滤器
 */
export const pausableFilter = (
	extendFilter = bypassFilter
) => {
	// 激活状态
	const isActive = ref(true)

	// 暂停
	const pause = () => (isActive.value = false)
	// 触发
	const resume = () => (isActive.value = true)

	// 事件过滤
	const eventFilter = (...args) => {
		if (unref(isActive)) {
			extendFilter(...args)
		}
	}

	return { isActive, pause, resume, eventFilter }
}
