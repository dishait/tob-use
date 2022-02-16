/**
 * 创建事件 hook
 */
export const createEventHook = () => {
	const fns = []

	// 卸载
	const off = fn => {
		const index = fns.indexOf(fn)
		if (index !== -1) fns.splice(index, 1)
	}

	// 注册
	const on = fn => {
		fns.push(fn)
		return {
			off: () => off(fn)
		}
	}

	// 触发
	const trigger = param => {
		fns.forEach(fn => fn(param))
	}

	return {
		on,
		off,
		trigger
	}
}
