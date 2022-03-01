import { resolve } from 'path'
import { watch } from 'chokidar'
import { remove } from 'fs-extra'
import { ThemeObject } from 'vuepress'
import { touch, useDest } from './shared'
import { _DEV_ } from './shared'

const theme: ThemeObject = {
	name: 'docs',
	extends: '@vuepress/theme-default',
	layouts: {
		'404': resolve(__dirname, './layouts/404.vue')
	},
	onInitialized(app) {
		// 修改 api 文档的侧边栏层级
		app.pages.forEach(page => {
			if (/^\/api\/.+\.html$/.test(page.pathInferred)) {
				page.frontmatter.sidebarDepth = 0
			}
		})
	},
	onWatched(app, watchers, restart) {
		if (_DEV_) {
			// 更新 api 监听器
			const flushApiWatcher = watch(
				'./uni_modules/tob-use/**/*.md',
				{
					ignoreInitial: true
				}
			)

			flushApiWatcher.on('change', src => {
				const { dest, skip } = useDest(src)
				if (skip) {
					return
				}
				touch(dest)
			})

			flushApiWatcher.once('add', src => {
				const { skip } = useDest(src)
				if (skip) {
					return
				}
				restart()
			})

			flushApiWatcher.once('unlink', src => {
				const { dest, skip } = useDest(src)

				if (skip) {
					return
				}

				remove(dest)
				restart()
			})

			// 主题监听器
			const themeWatcher = watch(
				resolve(__dirname, './index.ts'),
				{
					ignoreInitial: true
				}
			)

			// 变更时重启
			themeWatcher.on('change', restart)

			watchers.push(themeWatcher, flushApiWatcher)
		}
	}
}

export default theme
