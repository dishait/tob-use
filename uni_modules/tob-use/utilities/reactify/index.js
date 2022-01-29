import { computed, unref } from 'vue'

/**
 * 响应式转换
 */
export const reactify = () => {
    return function(this, ...args) {
        return computed(() => fn.apply(this, args.map(i => unref(i))))
    }
}
