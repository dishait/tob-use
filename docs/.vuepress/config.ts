import { resolve } from 'path'
import { defineUserConfig } from 'vuepress'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
	NaiveUiResolver,
	VueUseComponentsResolver
} from 'unplugin-vue-components/resolvers'
import WindiCSS from 'vite-plugin-windicss'
import Inspect from 'vite-plugin-inspect'
import { generateApiRoutes } from './theme/shared'

const { watch, animation, component, utilities } =
	generateApiRoutes()

export default defineUserConfig({
	lang: 'zh-CN',
	title: 'tob-use',
	base: '/tob-use/',
	head: [
		[
			'link',
			{ rel: 'icon', href: '/tob-use/images/logo.svg' }
		]
	],
	description: '基于 vuepress 的文档模板',
	themeConfig: {
		logo: '/images/logo.svg',
		navbar: [
			{
				text: '指南',
				link: '/guide/'
			},
			{
				text: 'API 参考',
				link: utilities[0]
			},
			{
				text: '关于',
				link: '/about/'
			},
			{
				text: 'Gitee',
				link: 'https://gitee.com/dishait/tob-use'
			},
			{
				text: 'GitHub',
				link: 'https://github.com/dishait/tob-use'
			}
		],
		sidebar: {
			'/guide/': [
				{
					text: '指南',
					children: ['/guide/index.md', '/guide/start.md']
				}
			],
			'/about/': [
				{
					children: ['/about/index.md']
				}
			],
			'/api/': [
				{
					text: 'API 参考',
					children: [
						{
							text: '工具',
							children: utilities
						},
						{
							text: '监听',
							children: watch
						},
						{
							text: '组件',
							children: component
						},
						{
							text: '动画',
							children: animation
						}
					]
				}
			]
		}
	},
	theme: resolve(__dirname, './theme/index.ts'),
	alias: {
		'~': resolve(__dirname, '../'),
		'~u': resolve(__dirname, './composables'),
		'~m': resolve(__dirname, '../../uni_modules/tob-use')
	},
	plugins: [
		[
			'@vuepress/register-components',
			{
				componentsDir: resolve(__dirname, './components')
			}
		],
		[
			'@vuepress/plugin-search',
			{
				locales: {
					'/': {
						placeholder: 'Search'
					}
				}
			}
		]
	],
	bundlerConfig: {
		viteOptions: {
			plugins: [
				Inspect({
					enabled: false
				}),
				WindiCSS({
					scan: {
						dirs: [
							'../',
							resolve(__dirname, './components'),
							resolve(__dirname, './theme/layouts')
						]
					}
				}),
				Components({
					dirs: '',
					dts: resolve(
						__dirname,
						'./types/components.d.ts'
					),
					extensions: ['vue', 'md'],
					include: [/\.md$/, /\.vue$/],
					resolvers: [
						NaiveUiResolver(),
						VueUseComponentsResolver()
					]
				}),
				AutoImport({
					dts: resolve(
						__dirname,
						'./types/auto-imports.d.ts'
					),
					imports: ['vue', 'vue-router', '@vueuse/core']
				})
			]
		}
	}
})
