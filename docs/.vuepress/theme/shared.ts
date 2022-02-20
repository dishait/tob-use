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

export const showName = (path: string) => {
	return basename(dirname(path))
}

export const showType = (path: string) => {
	return basename(dirname(dirname(path)))
}

export const useDest = (path: string) => {
	const name = showName(path)
	// 跳过根目录下的文件
	const skip = name === 'tob-use'
	if (skip) {
		return { skip: true }
	}
	const type = showType(path)
	const dest = `./docs/api/${type}/${name}.md`

	return { dest, type, name }
}

interface Routes {
	[k: string]: string[]
}

// 生成 api 的路由表
export const generateApiRoutes = (): Routes => {
	const srcPaths = sync(`./uni_modules/tob-use/**/*.md`)
	const routes: Routes = {}
	srcPaths.forEach(src => {
		const { dest, type, skip, name } = useDest(src)

		if (skip) {
			return
		}

		// 补充硬链接的更新
		ensureLinkSync(src, dest)

		let sidebar = routes[type]
		if (!sidebar) {
			sidebar = routes[type] = []
		}
		sidebar.push(`/api/${type}/${name}.md`)
	})
	return routes
}
