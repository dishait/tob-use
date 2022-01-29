import { unref } from 'vue'

/**
 * 创建unref函数
 */
export const createUnrefFn = (fn) => {
	return function (this, ...args) {
		return fn.apply(
			this,
			args.map(v => unref(v))
		)
	}
}
