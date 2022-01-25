const {
	copy,
	fileWatch,
	createPath,
	terminalColor,
	createTerminalLoading
} = require('@markthree/node-shared')
const { useDebounce } = require('./shared/utils')

const p = createPath(__dirname)

let loading = null

const src = p('../README.md')
const dest = p('../uni_modules/tob-use/readme.md')
const copyWithDebounce = useDebounce(async () => {
	await copy(src, dest)
	loading.succeed('同步成功')
	loadingTip()
})

const watcher = fileWatch(src)

const loadingTip = () => {
	const msg = terminalColor.bgGreenBright('README 同步中')
	loading = createTerminalLoading().start(msg)
}

watcher.once('ready', loadingTip)
watcher.on('change', copyWithDebounce)
watcher.on('error', error => {
	const msg =
		terminalColor.bgYellowBright('README 同步出错')
	const errorMsg = terminalColor.bgRedBright(error.message)
	loading.fail(msg + errorMsg)
})
