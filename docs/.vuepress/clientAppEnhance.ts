import { defineClientAppEnhance } from '@vuepress/client'
// import 'virtual:windi-base.css'
import 'virtual:windi-components.css'

// 你自定义的 css
import './index.scss'

import 'virtual:windi-utilities.css'
import 'virtual:windi-devtools'

const noop = () => {}

export default defineClientAppEnhance(noop)
