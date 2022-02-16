import { ref } from 'vue'

/**
 * 挂载后
 */
export const useMounted = () => {
	const isMounted = ref(false)

	onMounted(() => {
		isMounted.value = true
	})

	return isMounted
}
