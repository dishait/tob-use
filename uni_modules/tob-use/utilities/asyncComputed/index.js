import { noop } from '../../shared/base'
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
		lazy = false, // 懒处理
		onError = noop, // 错误处理
		evaluating = undefined // 异步是否在调用中
	} = options

	const started = ref(!lazy)
	const current = ref(initialState)
	let counter = 0 // 计数器，用来协调异步调用次数

	watchEffect(async onInvalidate => {
		if (!started.value) {
			return
		}

		counter++

		const counterAtBeginning = counter

		let hasFinished = false

		if (evaluating) {
			runNextMicroTask(() => {
				evaluating.value = true
			})
		}

		try {
			const result = await evaluationCallback(
				// 副作用清除函数
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

			// 当计算器与当前的调用相同时才允许更新
			// 防止多次调用异步触发重复的更新
			const shouldUpdate = counterAtBeginning === counter
			if (shouldUpdate) {
				current.value = result
			}
		} catch (e) {
			// 错误处理，默认为 noop 不处理
			onError(e)
		} finally {
			// 完成后
			if (evaluating) {
				evaluating.value = false
			}
			hasFinished = true
		}
	})

	// lazy 选项开启时，将在第一次 getter 访问时触发
	if (lazy) {
		return computed(() => {
			started.value = true
			return current.value
		})
	}

	return current
}

/**
 * 格式化选项
 */
const formatOptions = optionsOrRef => {
	let options
	if (isRef(optionsOrRef)) {
		options = { evaluating: optionsOrRef }
	} else {
		options = optionsOrRef || {}
	}
	return options
}

/**
 * 运行在下次微任务
 */
const runNextMicroTask = cb => Promise.resolve().then(cb)
