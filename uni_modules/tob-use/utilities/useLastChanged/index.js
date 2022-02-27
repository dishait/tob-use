import { ref, watch } from 'vue'
import { timestamp } from '../../shared/base'

/**
 * 获取最后一次更新
 */
export const useLastChanged = (source, options = {}) => {
	const ms = ref(options.initialValue ?? null)

	watch(source, () => (ms.value = timestamp()), options)

	return ms
}
