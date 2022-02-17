import { path } from '@vuepress/utils'
import { ThemeObject } from 'vuepress'

const theme: ThemeObject = {
	name: 'docs',
	extends: '@vuepress/theme-default',
	layouts: {
		'404': path.resolve(__dirname, './layouts/404.vue')
	}
}

export default theme
