/**
 * 设置
 */
export const set = (...args) => {
	if (args.length === 2) {
		const [ref, value] = args
		ref.value = value
	}
	if (args.length === 3) {
		const [target, key, value] = args
		target[key] = value
	}
}
