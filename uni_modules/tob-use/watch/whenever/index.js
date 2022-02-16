import { watch } from 'vue'

/**
 * 仅当为真时触发
 */
export const whenever = (source, cb, options) => {
	return watch(
		source,
		(v, ov, onInvalidate) => {
			if (v) cb(v, ov, onInvalidate)
		},
		options
	)
}
