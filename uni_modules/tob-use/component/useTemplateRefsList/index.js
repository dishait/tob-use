import { onBeforeUpdate, ref } from 'vue'

/**
 * 获取模板元素的列表
 */
export const useTemplateRefsList = () => {
	const refs = ref([])

	// 获取 ref 元素
	refs.value.set = el => {
		if (el) {
			refs.value.push(el)
		}
	}

	// 更新前重置列表
	const reset = () => (refs.value.length = 0)
	onBeforeUpdate(reset)
	return refs
}
