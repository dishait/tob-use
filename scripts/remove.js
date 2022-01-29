const {
	noticeFail,
	noticeSuccess
} = require('./shared/log')
const { getModulesName } = require('./shared/modules')
const {
	useInquirerQuestion,
	useInquirerConfirm,
	useInquirerList
} = require('@markthree/ilazy')
const {
	remove,
	writeJson,
	createPath,
	pathExistsSync
} = require('@markthree/node-shared')
const pagesJson = require('../pages.json')

const p = createPath(__dirname)

const autoRemove = async () => {
	const type = await useInquirerList(
		'请选择需要删除的模块类型',
		{ choices: ['api', 'page'] }
	)

	const n = getModulesName(type)
	const sort = await useInquirerList(
		`请选择该${n}属于的种类`,
		{ choices: ['utilities'] }
	)

	const name = await useInquirerQuestion(
		`请输入该${n}的名字`
	)

	const isApi = type === 'api'
	if (isApi) {
		return await removeApi({ name, type, sort })
	}

	const isPage = type === 'page'
	if (isPage) {
		return await removePage({ name, type, sort })
	}
}

// 删除api
const removeApi = async (options = {}) => {
	const { name, sort } = options
	const src = p(`../uni_modules/tob-use/${sort}/${name}`)
	const shouldRemove = await isWillRemove(src, 'api')
	if (shouldRemove) {
		await remove(src)
		return noticeSuccess('删除')
	}
	noticeFail('删除')
}

// 删除页面
const removePage = async (options = {}) => {
	const { sort, name } = options
	const src = p(`../pages/${sort}/${name}`)
	const shouldRemove = await isWillRemove(src, '页面')
	if (shouldRemove) {
		const path = `pages/${sort}/${name}/${name}`
		pagesJson.pages = pagesJson.pages.filter(page => {
			return page.path !== path
		})
		await remove(src)
		await writeJson(p('../pages.json'), pagesJson, {
			spaces: '\t'
		})
		return noticeSuccess('删除')
	}
	noticeFail('删除')
}

// 判断是否要删除
const isWillRemove = async (src, type = '文件') => {
	if (pathExistsSync(src)) {
		const isRemove = await useInquirerConfirm(
			'再次确认是否删除'
		)
		return isRemove
	}
	console.log(`该${type}不存在`)
	return false
}

autoRemove()
