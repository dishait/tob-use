/**
 * 设置
 */
export const set = (...args) => {
	// 双参数时，直接赋值
	if (args.length === 2) {
		const [ref, value] = args
		ref.value = value
	}

	// 三参数时，赋值到某个键
	if (args.length === 3) {
		const [target, key, value] = args
		target[key] = value
	}
}
