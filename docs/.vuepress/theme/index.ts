import { resolve } from 'path'
import { watch } from 'chokidar'
import { ThemeObject } from 'vuepress'
import { ensureLinkSync, unlinkSync } from 'fs-extra'
import {
	touch,
	isAdd,
	isChange,
	isUnlink,
	showName,
	showType,
	shouldSkip
} from './shared'

const theme: ThemeObject = {
	name: 'docs',
	extends: '@vuepress/theme-default',
	layouts: {
		'404': resolve(__dirname, './layouts/404.vue')
	},
	onWatched(app, watchers) {
		const watcher = watch('./uni_modules/tob-use/**/*.md', {
			ignoreInitial: true
		})

		watcher.on('all', (event, srcPath) => {
			const name = showName(srcPath)
			// 跳过根目录下的文件
			if (shouldSkip('tob-use', name)) {
				return
			}
			const type = showType(srcPath)
			const targetPath = `./docs/api/${type}/${name}.md`
			// 新增时，补充硬链接
			if (isAdd(event)) {
				ensureLinkSync(srcPath, targetPath)
			}
			// 变更时，更新时触发硬链接 hmr
			if (isChange(event)) {
				touch(targetPath)
			}
			// 删除时，unlink 掉硬链接
			if (isUnlink(event)) {
				unlinkSync(targetPath)
			}
		})

		watchers.push(watcher)
	}
}

export default theme
