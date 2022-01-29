import { unref } from "vue"

export const debounceFilter = (ms, options = {}) => {
    let timer
    let maxTimer

    const filter = (invoke) => {
        const duration = unref(ms)
        const maxDuration = unref(options.maxWait)

        if (timer) {
            clearTimeout(timer)
        }

        if (duration <= 0 || (maxDuration !== undefined && maxDuration <= 0)) {
            if (maxTimer) {
                clearTimeout(maxTimer)
                maxTimer = null
            }
            return invoke()
        }

        if (maxDuration && !maxTimer) {
            maxTimer = setTimeout(() => {
                if (timer) {
                    clearTimeout(timer)
                }
                maxTimer = null
                invoke()
            }, maxDuration)
        }
        timer = setTimeout(() => {
            if (maxTimer) {
                clearTimeout(maxTimer)
            }
            maxTimer = null
            invoke()
        }, duration)
    }

    return filter
}

export const createFilterWrapper = (filter, fn) => {
    function wrapper(this, ...args) {
        filter(() => fn.apply(this, args), {
            fn,
            thisArg: this,
            args
        })
    }
    return wrapper
}
