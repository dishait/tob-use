// 空函数
const noop = () => {}

// 创建一个防抖函数
const useDebounce = (fn = noop, delay = 1000) => {
	let timeout = null
	return () => {
		clearTimeout(timeout)
		timeout = setTimeout(fn, delay)
	}
}

module.exports = {
	useDebounce
}
