import { computed, inject } from 'vue'

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

	if (typeof options === 'function') {
		return computed(ctx => options(source, ctx))
	} else {
		return computed({
			get: ctx => options.get(source, ctx),
			set: options.set
		})
	}
}
