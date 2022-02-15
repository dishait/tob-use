import { getCurrentScope } from 'vue'
import { events } from '../../shared/base'

/**
 *
 */
export const useEventBus = () => {
	const scope = getCurrentScope()

	function on(listener) {
		const listeners = events.get(key) || []
		listeners.push(listener)
		events.set(key, listeners)

		const _off = () => off(listener)
		// auto unsubscribe when scope get disposed
		scope?.cleanups.push(_off)
		return _off
	}

	function once(listener) {
		function _listener(...args) {
			off(_listener)
			// @ts-expect-error cast
			listener(...args)
		}
		return on(_listener)
	}

	function off(listener) {
		const listeners = events.get(key)
		if (!listeners) return

		const index = listeners.indexOf(listener)
		if (index > -1) listeners.splice(index, 1)
		if (!listeners.length) events.delete(key)
	}

	function reset() {
		events.delete(key)
	}

	function emit(event) {
		events.get(key)?.forEach(v => v(event))
	}

	return { on, once, off, emit, reset }
}
