import { noop } from '../base'
import { ref, computed, isRef } from 'vue'

/**
 * 异步的计算属性
 */
export const asyncComputed = (
	evaluationCallback,
	initialState,
	optionsOrRef
) => {
	const options = formatOptions(optionsOrRef)
	const {
		lazy = false,
		onError = noop,
		evaluating = undefined
	} = options

	const started = ref(!lazy)
	const current = ref(initialState)
	let counter = 0

	watchEffect(async onInvalidate => {
		if (!started.value) return

		counter++

		const counterAtBeginning = counter

		let hasFinished = false

		if (evaluating) {
			Promise.resolve().then(() => {
				evaluating.value = true
			})
		}

		try {
			const result = await evaluationCallback(
				cancelCallback => {
					onInvalidate(() => {
						if (evaluating) {
							evaluating.value = false
						}
						if (!hasFinished) {
							cancelCallback()
						}
					})
				}
			)

			const shouldUpdate = counterAtBeginning === counter
			if (shouldUpdate) {
				current.value = result
			}
		} catch (e) {
			onError(e)
		} finally {
			if (evaluating) {
				evaluating.value = false
			}
			hasFinished = true
		}
	})

	if (lazy) {
		return computed(() => {
			started.value = true
			return current.value
		})
	}

	return current
}

const formatOptions = optionsOrRef => {
	let options
	if (isRef(optionsOrRef)) {
		options = { evaluating: optionsOrRef }
	} else {
		options = optionsOrRef || {}
	}
	return options
}
