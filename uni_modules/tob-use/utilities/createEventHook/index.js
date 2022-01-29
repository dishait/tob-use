/**
 * 创建事件hook
 */
export const createEventHook = () => {
	const fns = []

	const off = fn => {
		const index = fns.indexOf(fn)
		if (index !== -1) fns.splice(index, 1)
	}

	const on = fn => {
		fns.push(fn)
		return {
			off: () => off(fn)
		}
	}

	const trigger = param => {
		fns.forEach(fn => fn(param))
	}

	return {
		on,
		off,
		trigger
	}
}
