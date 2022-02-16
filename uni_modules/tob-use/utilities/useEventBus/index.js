import { getCurrentScope } from 'vue'
import { events } from '../../shared/base'

/**
 * 使用事件 bus
 */
export const useEventBus = key => {
	const scope = getCurrentScope()

	// 注册
	const on = listener => {
		const listeners = events.get(key) || []
		listeners.push(listener)
		events.set(key, listeners)

		const _off = () => off(listener)
		// auto unsubscribe when scope get disposed
		scope?.cleanups.push(_off)
		return _off
	}

	// 注册一次
	const once = listener => {
		function _listener(...args) {
			off(_listener)
			listener(...args)
		}
		return on(_listener)
	}

	// 卸载
	const off = listener => {
		const listeners = events.get(key)
		if (!listeners) return

		const index = listeners.indexOf(listener)
		if (index > -1) listeners.splice(index, 1)
		if (!listeners.length) events.delete(key)
	}

	// 重置
	const reset = () => events.delete(key)

	// 触发
	const emit = event => {
		return events.get(key)?.forEach(v => v(event))
	}

	return { on, once, off, emit, reset }
}
