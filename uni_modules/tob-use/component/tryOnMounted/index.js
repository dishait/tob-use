import {
	getCurrentInstance,
	nextTick,
	onMounted
} from 'vue'

/**
 * 在挂载后触发
 */
export const tryOnMounted = (fn, sync = true) => {
	if (getCurrentInstance()) {
		onMounted(fn)
	} else if (sync) {
		fn()
	} else {
		nextTick(fn)
	}
}
