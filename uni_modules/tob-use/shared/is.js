/**
 * 范围限定
 */
export const clamp = (n, min, max) => {
	return Math.min(max, Math.max(min, n))
}

/**
 * 是否是布尔类型
 */
export const isBoolean = v => typeof v === 'boolean'

/**
 * 是否是函数类型
 */
export const isFunction = v => typeof v === 'function'

/**
 * 是否是字符串类型
 */
export const isString = v => typeof v === 'string'

/**
 * 是否是数字类型
 */
export const isNumber = v => typeof v === 'number'

/**
 * 是否未定义
 */
export const isUndefined = v => typeof v === 'undefined'
