import { unref } from 'vue'

/**
 * 创建 unref 函数
 */
export const createUnrefFn = fn => {
	return function (...args) {
		return fn.apply(
			this,
			// 解除所有 ref 的参数
			args.map(v => unref(v))
		)
	}
}
