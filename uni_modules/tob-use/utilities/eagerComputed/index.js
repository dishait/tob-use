import { shallowRef, watchSyncEffect, readonly } from 'vue'

/**
 * 及时的计算属性
 */
export const eagerComputed = fn => {
	const result = shallowRef()

	watchSyncEffect(() => {
		result.value = fn()
	})

	return readonly(result)
}
