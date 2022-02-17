import { ref } from 'vue'

/**
 * 使用被挂载后状态
 */
export const useMounted = () => {
	const isMounted = ref(false)

	onMounted(() => {
		isMounted.value = true
	})

	return isMounted
}
