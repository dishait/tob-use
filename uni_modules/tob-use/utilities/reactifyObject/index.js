import { reactify } from '../reactify'

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
				typeof value === 'function'
					? reactify(value.bind(obj))
					: value
			]
		})
	)
}
