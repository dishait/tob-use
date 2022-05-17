import { ref, shallowRef, unref } from 'vue'
import { pausableWatch } from '../../watch/pausableWatch'
import { guessSerializerType } from './guess'

export const StorageSerializers = {
	boolean: {
		read: (v) => v === 'true',
		write: (v) => String(v)
	},
	object: {
		read: (v) => JSON.parse(v),
		write: (v) => JSON.stringify(v)
	},
	number: {
		read: (v) => Number.parseFloat(v),
		write: (v) => String(v)
	},
	any: {
		read: (v) => v,
		write: (v) => String(v)
	},
	string: {
		read: (v) => v,
		write: (v) => String(v)
	},
	map: {
		read: (v) => new Map(JSON.parse(v)),
		write: (v) => JSON.stringify(Array.from(v.entries()))
	},
	set: {
		read: (v) => new Set(JSON.parse(v)),
		write: (v) => JSON.stringify(Array.from(v))
	},
	date: {
		read: (v) => new Date(v),
		write: (v) => v.toISOString()
	}
}

export function useStorage(key, initialValue, options = {}) {
	const {
		flush = 'pre',
		deep = true,
		writeDefaults = true,
		shallow,
		eventFilter,
		onError = (e) => {
			console.error(e)
		}
	} = options
	const data = (shallow ? shallowRef : ref)(initialValue)
	const rawInit = unref(initialValue)
	const type = guessSerializerType(rawInit)
	const serializer = StorageSerializers[type]

	const { pause, resume } = pausableWatch(data, () => write(data.value), {
		flush,
		deep,
		eventFilter
	})

	update()

	return data

	function write(v) {
		try {
			if (v == null) {
				uni.removeStorageSync(key)
			} else {
				uni.setStorageSync(key, serializer.write(v))
			}
		} catch (e) {
			onError(e)
		}
	}

	function read(event) {
		if (event && event.key !== key) {
			return
		}

		pause()

		try {
			const rawValue = event ? event.newValue : uni.getStorageSync(key)
			if (rawValue == null || rawValue == '') {
				if (writeDefaults && rawInit !== null) {
					uni.setStorageSync(key, serializer.write(rawInit))
				}
				return rawInit
			} else if (typeof rawValue !== 'string') {
				return rawValue
			} else {
				return serializer.read(rawValue)
			}
		} catch (e) {
			onError(e)
		} finally {
			resume()
		}
	}

	function update(event) {
		if (event && event.key !== key) {
			return
		}
		data.value = read(event)
	}
}
