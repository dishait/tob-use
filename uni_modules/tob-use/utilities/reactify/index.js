import { computed, unref } from 'vue'

/**
 * 响应式转换
 */
export const reactify = () => {
	return function (...args) {
		return computed(() =>
			fn.apply(
				this,
				// 解除所有 ref 的参数
				args.map(v => unref(v))
			)
		)
	}
}
