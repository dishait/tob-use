import { customRef, unref } from 'vue'

/**
 * 自动重置ref
 */
export const autoResetRef = (
	defaultValue,
	afterMs = 10000
) => {
	return customRef((track, trigger) => {
		let value
		let timer
		const resetAfter = () => {
			setTimeout(() => {
				value = defaultValue
				trigger()
			}, unref(afterMs))
		}

		return {
			get() {
				track()
				return value
			},
			set(newValue) {
				value = newValue
				trigger()
				clearTimeout(timer)
				timer = resetAfter()
			}
		}
	})
}
