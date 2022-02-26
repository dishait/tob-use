import { computed, unref } from 'vue'

/**
 * 取非
 */
export const not = v => computed(() => !unref(v))
