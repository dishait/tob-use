import { computed, ref } from 'vue'
import { noop } from '../../shared/base'
import { createEventHook } from '../createEventHook'

/**
 * 确认对话框
 */
export const useConfirmDialog = (revealed = ref(false)) => {
	const confirmHook = createEventHook()
	const cancelHook = createEventHook()
	const revealHook = createEventHook()

	let _resolve = noop

	// 显示
	const reveal = data => {
		revealed.value = true
		revealHook.trigger(data)

		return new Promise(resolve => {
			_resolve = resolve
		})
	}

	// 确认
	const confirm = data => {
		revealed.value = false
		confirmHook.trigger(data)

		_resolve({ data, isCanceled: false })
	}

	// 取消
	const cancel = data => {
		revealed.value = false
		cancelHook.trigger(data)

		_resolve({ data, isCanceled: true })
	}

	return {
		reveal,
		cancel,
		confirm,
		onReveal: revealHook.on,
		onCancel: cancelHook.on,
		onConfirm: confirmHook.on,
		isRevealed: computed(() => revealed.value) // 是否显示
	}
}
