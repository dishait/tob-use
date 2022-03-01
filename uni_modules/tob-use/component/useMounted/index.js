import { ref } from 'vue'

/**
 * 使用被挂载状态
 */
export const useMounted = () => {
	const isMounted = ref(false)

	onMounted(() => {
		isMounted.value = true
	})

	return isMounted
}
