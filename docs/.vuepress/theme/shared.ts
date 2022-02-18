import { dirname, basename } from 'path'
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
