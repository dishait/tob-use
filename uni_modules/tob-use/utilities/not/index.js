import { computed, unref } from 'vue'

/**
 * 取非
 */
export const not = () => computed(() => !unref(v))
