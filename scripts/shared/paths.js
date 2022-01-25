const { createPath } = require('@markthree/node-shared')

// 辅助路径工具
const p = createPath(__dirname)

// 模板路径
const templatePaths = {
	apiJs: p('../templates/api.js'),
	apiMd: p('../templates/api.md'),
	page: p('../templates/page.vue')
}

// 基础目标路径
const baseDestPaths = {
	api: p('../../uni_modules/tob-use'),
	page: p('../../pages')
}

module.exports = {
	p,
	templatePaths,
	baseDestPaths
}
