import { unref, ref } from "vue"

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

export const throttleFilter = (ms, trailing = true, leading = true) => {
    let timer
    let lastExec = 0
    let preventLeading = !leading
  
    const clear = () => {
      if (timer) {
        clearTimeout(timer)
        timer = undefined
      }
    }
  
    const filter = (invoke) => {
      const duration = unref(ms)
      const elapsed = Date.now() - lastExec
  
      clear()
  
      if (duration <= 0) {
        lastExec = Date.now()
        return invoke()
      }
  
      if (elapsed > duration) {
        lastExec = Date.now()
        if (preventLeading) preventLeading = false
        else invoke()
      }
      if (trailing) {
        timer = setTimeout(() => {
          lastExec = Date.now()
          if (!leading) preventLeading = true
          clear()
          invoke()
        }, duration)
      }
  
      if (!leading && !timer) timer = setTimeout(() => preventLeading = true, duration)
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


export const bypassFilter = (invoke) => {
  return invoke()
}

export const watchWithFilter = (
  source,
  cb,
  options = {}
) => {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options

  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb,
    ),
    watchOptions,
  )
}

export function pausableFilter(extendFilter = bypassFilter) {
  const isActive = ref(true)

  function pause() {
    isActive.value = false
  }
  function resume() {
    isActive.value = true
  }

  const eventFilter = (...args) => {
    if (isActive.value)
      extendFilter(...args)
  }

  return { isActive, pause, resume, eventFilter }
}
