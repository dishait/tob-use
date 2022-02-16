import { onBeforeUpdate, ref } from 'vue'

/**
 * 获取模板元素的列表
 */
export const useTemplateRefsList = () => {
	const refs = ref([])
	refs.value.set = el => {
		if (el) {
			refs.value.push(el)
		}
	}
	onBeforeUpdate(() => {
		refs.value.length = 0
	})
	return refs
}
