const {
	useInquirerList,
	useInquirerConfirm,
	useInquirerQuestion
} = require('@markthree/ilazy')
const {
	templatePaths,
	baseDestPaths
} = require('./shared/paths')
const {
	writeJson,
	createPath,
	createFile,
	readFileSync,
	pathExistsSync,
	templateCompile
} = require('@markthree/node-shared')
const {
	noticeFail,
	noticeSuccess
} = require('./shared/log')
const { getModulesName } = require('./shared/modules')
const pagesJson = require('../pages.json')

const p = createPath(__dirname)

const autoCreate = async () => {
	const type = await useInquirerList(
		'请问您需要新建以下什么类型的模块?',
		{
			default: 'api',
			choices: ['api', 'page']
		}
	)

	const n = getModulesName(type)

	const sort = await useInquirerList(
		`请问该${n}属于以下哪个分类?`,
		{
			default: 'utilities',
			choices: [
				'utilities',
				'watch',
				'misc',
				'media',
				'animation',
				'component'
			]
		}
	)

	const name = await useInquirerQuestion(
		`请您输入${n}的名称`
	)

	const isPage = type === 'page'
	if (isPage) {
		return createPage({ name, sort })
	}

	const isApi = type === 'api'
	if (isApi) {
		const desc = await useInquirerQuestion('请输入描述')
		return createApi({ name, sort, desc })
	}
}

autoCreate()

// 创建页面
const createPage = async (options = {}) => {
	const { name, sort } = options
	const baseDestPath = baseDestPaths['page']
	const dp = createPath(baseDestPath)
	const src = templatePaths['page']
	const dest = dp(`./${sort}/${name}/${name}.vue`)
	const shouldCreate = await isWillCreate(dest, '页面')
	if (shouldCreate) {
		pagesJson.pages.push({
			path: `pages/${sort}/${name}/${name}`
		})
		await gen(src, dest, { name, sort })
		await writeJson(p('../pages.json'), pagesJson, {
			spaces: '\t'
		})
		return noticeSuccess()
	}
	noticeFail()
}

// 创建api
const createApi = async (options = {}) => {
	const { name, sort, desc } = options
	const baseDestPath = baseDestPaths['api']
	const jsDp = createPath(baseDestPath)
	const mdDp = createPath(baseDestPath)
	const jsSrc = templatePaths['apiJs']
	const mdSrc = templatePaths['apiMd']

	const jsDest = jsDp(`./${sort}/${name}/index.js`)
	const mdDest = mdDp(`./${sort}/${name}/README.md`)

	const shouldCreate = await isWillCreate(jsDest, 'api')
	if (shouldCreate) {
		await gen(jsSrc, jsDest, { name, sort, desc })
		await gen(mdSrc, mdDest, { name, sort, desc })
		return noticeSuccess()
	}
	noticeFail()
}

// 生成代码
const gen = async (src, dest, payload) => {
	let template = readFileSync(src).toString()
	template = templateCompile(template)(payload)
	await createFile(dest, template)
}

// 是否将创建
const isWillCreate = async (dest, type = '文件') => {
	if (pathExistsSync(dest)) {
		return await useInquirerConfirm(
			type + '已存在，是否覆盖?',
			false
		)
	}
	return true
}
