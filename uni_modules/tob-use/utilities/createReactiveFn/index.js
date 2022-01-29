import { computed, unref } from 'vue'

/**
 * 创建响应式函数
 */
export const createReactiveFn = () => {
	return function (this, ...args) {
		return computed(() =>
			fn.apply(
				this,
				args.map(v => unref(v))
			)
		)
	}
}
