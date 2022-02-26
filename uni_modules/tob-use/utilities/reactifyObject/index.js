import { reactify } from '../reactify'
import { isFunction } from '../../shared/is'

/**
 * 对象的响应式转换
 */
export const reactifyObject = (obj, optionsOrKeys = {}) => {
	let keys = []
	if (Array.isArray(optionsOrKeys)) {
		keys = optionsOrKeys
	} else {
		const { includeOwnProperties = true } = optionsOrKeys

		keys.push(...Object.keys(obj))
		if (includeOwnProperties) {
			keys.push(...Object.getOwnPropertyNames(obj))
		}
	}

	return Object.fromEntries(
		keys.map(key => {
			const value = obj[key]
			return [
				key,
				// 将对象上所有的函数转换为解除 ref 参数的函数
				isFunction(value)
					? reactify(value.bind(obj))
					: value
			]
		})
	)
}
