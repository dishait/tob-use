import { unref } from 'vue'

/**
 * 是否定义
 */
export const isDefined = () => unref(v) != null
