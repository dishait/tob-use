import { getCurrentScope, onScopeDispose } from 'vue'

/**
 * 在副作用作用域被 stop 时，触发回调
 */
export const tryOnScopeDispose = fn => {
	if (getCurrentScope()) {
		onScopeDispose(fn)
		return true
	}
	return false
}
