// 引入 vite 是为了打包后发布 npm
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        lib: {
            name: 'index',
            fileName: format => `index.${format}.js`,
            entry: path.resolve(__dirname, './index.js')
        },
        rollupOptions: {
            external: ['vue']
        }
    }
})