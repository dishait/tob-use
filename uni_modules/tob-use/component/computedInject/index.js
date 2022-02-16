import { computed, inject } from 'vue'
import { isFunction } from '../../shared/is'

/**
 * 计算属性型 inject
 */
export const computedInject = () => {
	let source = inject(key)

	if (defaultSource) source = inject(key, defaultSource)
	if (treatDefaultAsFactory)
		source = inject(
			key,
			defaultSource,
			treatDefaultAsFactory
		)

	if (isFunction(options)) {
		return computed(ctx => options(source, ctx))
	} else {
		return computed({
			get: ctx => options.get(source, ctx),
			set: options.set
		})
	}
}
