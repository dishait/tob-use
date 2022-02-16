/**
 * 空函数
 */
export const noop = () => {}

/**
 * 事件
 */
export const events = new Map()

/**
 * 获取时间戳
 */
export const timestamp = () => +Date.now()

/**
 * Promise 型 Timeout
 */
export function promiseTimeout(
	ms,
	throwOnTimeout = false,
	reason = 'Timeout'
) {
	return new Promise((resolve, reject) => {
		if (throwOnTimeout) setTimeout(() => reject(reason), ms)
		else setTimeout(resolve, ms)
	})
}
