import { getCurrentInstance, onUnmounted } from 'vue'

/**
 * 卸载时触发
 */
export const tryOnUnmounted = fn => {
	if (getCurrentInstance()) {
		onUnmounted(fn)
	}
}
