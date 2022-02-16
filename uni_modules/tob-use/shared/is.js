/**
 * 范围限定
 */
export const clamp = (n, min, max) => {
	return Math.min(max, Math.max(min, n))
}
