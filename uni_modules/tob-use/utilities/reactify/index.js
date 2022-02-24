import { computed, unref } from 'vue'

/**
 * 将普通函数转换为响应式函数
 */
export const reactify = fn => {
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
