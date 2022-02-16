import { getCurrentInstance, onBeforeUnmount } from 'vue'

/**
 * 在卸载前触发
 */
export const tryOnBeforeUnmount = fn => {
	if (getCurrentInstance()) {
		onBeforeUnmount(fn)
	}
}
