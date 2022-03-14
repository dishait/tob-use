import { defineClientAppEnhance } from '@vuepress/client'

// 你自定义的 css
import './index.scss'

const noop = () => {}

export default defineClientAppEnhance(noop)
