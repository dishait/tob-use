import { sync } from 'fast-glob'
import { dirname, basename } from 'path'
import { ensureLinkSync } from 'fs-extra'
import { utimesSync, openSync, closeSync } from 'fs'

export const touch = (path: string) => {
	const time = new Date()
	try {
		utimesSync(path, time, time)
	} catch (error) {
		closeSync(openSync(path, 'w'))
	}
}

export const isAdd = (event: string) => event === 'add'

export const isChange = (event: string) =>
	event === 'change'

export const isUnlink = (event: string) =>
	event === 'unlink'

export const showName = (path: string) => {
	return basename(dirname(path))
}

export const showType = (path: string) => {
	return basename(dirname(dirname(path)))
}

export const shouldSkip = (
	codition: string,
	name: string
) => {
	return name === codition
}

interface Routes {
	[k: string]: string[]
}

// 生成 api 的路由表
export const generateApiRoutes = (): Routes => {
	const srcPaths = sync(`./uni_modules/tob-use/**/*.md`)
	const routes: Routes = {}
	srcPaths.forEach(srcPath => {
		const name = showName(srcPath)
		if (shouldSkip('tob-use', name)) {
			return
		}
		const type = showType(srcPath)
		const targetPath = `./docs/api/${type}/${name}.md`

		// 补充硬链接的更新
		ensureLinkSync(srcPath, targetPath)

		let sidebar = routes[type]
		if (!sidebar) {
			sidebar = routes[type] = []
		}
		sidebar.push(`/api/${type}/${name}.md`)
	})
	return routes
}
