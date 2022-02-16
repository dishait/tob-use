import { watch } from 'vue'

/**
 * 保持目标 ref 跟源同步
 */
export const syncRef = (source, targets, options = {}) => {
	const {
		deep = false,
		flush = 'sync',
		immediate = true
	} = options

	if (!Array.isArray(targets)) {
		targets = [targets]
	}

	return watch(
		source,
		newValue =>
			targets.forEach(target => (target.value = newValue)),
		{ flush, deep, immediate }
	)
}
