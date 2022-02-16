import { useVModel } from '../useVModel'

/**
 * 使用多个的 v-model
 */
export const useVModels = (props, emit, options = {}) => {
	const ret = {}
	for (const key in props) {
		ret[key] = useVModel(props, key, emit, options)
	}
	return ret
}
