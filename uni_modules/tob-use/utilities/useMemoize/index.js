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

	const generateKey = (...args) =>
		options?.getKey
			? options.getKey(...args)
			: JSON.stringify(args)

	// 加载数据(私有)
	const _loadData = (key, ...args) => {
		cache.set(key, resolver(...args))
		return cache.get(key)
	}
	// 加载数据
	const loadData = (...args) =>
		_loadData(generateKey(...args), ...args)

	// 删除数据
	const deleteData = (...args) => {
		cache.delete(generateKey(...args))
	}

	// 清空数据
	const clearData = () => cache.clear()

	// 记忆函数 (有缓存时走缓存)
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
