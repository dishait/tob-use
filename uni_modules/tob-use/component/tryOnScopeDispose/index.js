import { getCurrentScope, onScopeDispose } from 'vue'

/**
 * 尝试获取区域内副作用暂停
 */
export const tryOnScopeDispose = fn => {
	if (getCurrentScope()) {
		onScopeDispose(fn)
		return true
	}
	return false
}
