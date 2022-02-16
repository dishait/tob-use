import { unref, watch } from 'vue-demi'
import { promiseTimeout } from '../../shared/base'

/**
 * 直到
 */
export const until = r => {
	let isNot = false

	function toMatch(
		condition,
		{
			flush = 'sync',
			deep = false,
			timeout,
			throwOnTimeout
		} = {}
	) {
		let stop = null
		const watcher = new Promise(resolve => {
			stop = watch(
				r,
				v => {
					if (condition(v) === !isNot) {
						stop?.()
						resolve()
					}
				},
				{
					flush,
					deep,
					immediate: true
				}
			)
		})

		const promises = [watcher]
		if (timeout) {
			promises.push(
				promiseTimeout(timeout, throwOnTimeout).finally(
					() => {
						stop?.()
					}
				)
			)
		}

		return Promise.race(promises)
	}

	function toBe(value, options) {
		return toMatch(v => v === unref(value), options)
	}

	function toBeTruthy(options) {
		return toMatch(v => Boolean(v), options)
	}

	function toBeNull(options) {
		return toBe(null, options)
	}

	function toBeUndefined(options) {
		return toBe(undefined, options)
	}

	function toBeNaN(options) {
		return toMatch(Number.isNaN, options)
	}

	function toContains(value, options) {
		return toMatch(v => {
			const array = Array.from(v)
			return (
				array.includes(value) ||
				array.includes(unref(value))
			)
		}, options)
	}

	function changed(options) {
		return changedTimes(1, options)
	}

	function changedTimes(n = 1, options) {
		let count = -1 // skip the immediate check
		return toMatch(() => {
			count += 1
			return count >= n
		}, options)
	}

	if (Array.isArray(unref(r))) {
		const instance = {
			toMatch,
			toContains,
			changed,
			changedTimes,
			get not() {
				isNot = !isNot
				return this
			}
		}
		return instance
	} else {
		const instance = {
			toMatch,
			toBe,
			toBeTruthy,
			toBeNull,
			toBeNaN,
			toBeUndefined,
			changed,
			changedTimes,
			get not() {
				isNot = !isNot
				return this
			}
		}

		return instance
	}
}
