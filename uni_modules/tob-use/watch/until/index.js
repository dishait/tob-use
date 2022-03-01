import { unref, watch } from 'vue'
import { promiseTimeout } from '../../shared/base'

/**
 * 直到
 */
export const until = r => {
	let isNot = false

	// 匹配，接收回调 condition，返回 false 即不匹配
	const toMatch = (condition, options = {}) => {
		let {
			timeout,
			deep = false,
			flush = 'sync',
			throwOnTimeout
		} = options
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
					() => stop?.()
				)
			)
		}

		return Promise.race(promises)
	}

	// 是否为 第一参数 value
	const toBe = (value, options) =>
		toMatch(v => v === unref(value), options)

	// 是否为 truthy
	const toBeTruthy = options =>
		toMatch(v => Boolean(v), options)

	// 是否为 null
	const toBeNull = options => toBe(null, options)

	// 是否未定义
	const toBeUndefined = options => toBe(undefined, options)

	// 是否为 NaN
	const toBeNaN = options => toMatch(Number.isNaN, options)

	// 是否为指定类数组内的值
	const toContains = (value, options) => {
		return toMatch(v => {
			const array = Array.from(v)
			return (
				array.includes(value) ||
				array.includes(unref(value))
			)
		}, options)
	}

	// 是否变更了
	const changed = options => changedTimes(1, options)

	// 是否变更了 n 次
	const changedTimes = (n = 1, options) => {
		let count = -1
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
