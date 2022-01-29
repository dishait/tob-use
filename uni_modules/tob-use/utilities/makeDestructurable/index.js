/**
 * 使得更好分解
 */
export const makeDestructurable = (obj, arr) => {
	if (typeof Symbol !== 'undefined') {
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
