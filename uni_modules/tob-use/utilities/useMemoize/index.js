import { reactive } from 'vue'

/**
 * 使用备份
 */
export const useMemoize = (resolver, options) => {
	const initCache = () => {
		if (options?.cache) {
			return reactive(options.cache)
		}

		return reactive(new Map())
	}
	const cache = initCache()

	/**
	 * Generate key from args
	 */
	const generateKey = (...args) =>
		options?.getKey
			? options.getKey(...args)
			: JSON.stringify(args)

	const _loadData = (key, ...args) => {
		cache.set(key, resolver(...args))
		return cache.get(key)
	}
	const loadData = (...args) =>
		_loadData(generateKey(...args), ...args)

	const deleteData = (...args) => {
		cache.delete(generateKey(...args))
	}

	const clearData = () => {
		cache.clear()
	}

	const memoized = (...args) => {
		const key = generateKey(...args)
		if (cache.has(key)) return cache.get(key)
		return _loadData(key, ...args)
	}
	memoized.load = loadData
	memoized.delete = deleteData
	memoized.clear = clearData
	memoized.generateKey = generateKey
	memoized.cache = cache

	return memoized
}
