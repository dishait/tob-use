import { getCurrentScope, onScopeDispose } from 'vue'

/**
 * 尝试获取区域内的副作用
 */
export const tryOnScopeDispose = () => {
	if (getCurrentScope()) {
		onScopeDispose(fn)
		return true
	}
	return false
}
