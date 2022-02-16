import { isUndefined } from '../../shared/is'

/**
 * 使得更好分解
 */
export const makeDestructurable = (obj, arr) => {
	if (!isUndefined(Symbol)) {
		const clone = { ...obj }

		Object.defineProperty(clone, Symbol.iterator, {
			enumerable: false,
			value() {
				let index = 0
				return {
					next: () => ({
						value: arr[index++],
						done: index > arr.length
					})
				}
			}
		})

		return clone
	} else {
		return Object.assign([...arr], obj)
	}
}
