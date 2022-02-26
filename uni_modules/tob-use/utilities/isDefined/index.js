import { unref } from 'vue'

/**
 * 是否定义判断
 */
export const isDefined = v => unref(v) != null
