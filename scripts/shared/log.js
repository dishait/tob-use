const { terminalColor } = require('@markthree/node-shared')

const noticeSuccess = (type = '创建') => {
	const msg = terminalColor.green(type + '成功')
	console.log(msg)
}

const noticeFail = (type = '创建') => {
	const msg = terminalColor.green(type + '失败')
	console.log(msg)
}

module.exports = {
	noticeFail,
	noticeSuccess
}
