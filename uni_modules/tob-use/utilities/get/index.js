import { unref } from 'vue'

/**
 * 获取
 */
export const get = (obj, key) => {
	if (key == null) {
		return unref(obj)
	}
	return unref(obj)[key]
}
