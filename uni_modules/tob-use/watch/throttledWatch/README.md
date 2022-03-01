# throttledWatch

节流型监听

## Usage

```js
import { ref } from 'vue'
import { throttledWatch } from '@/uni_modules/tob-use'

const source = ref('old')

const watchOptions = { 
    throttle: 500 // 节流间隔，单位为毫秒，默认为 0
}

const watchChanged = (newValue, oldValue) => console.log(oldValue, '->', newValue)

const stop = throttledWatch(source, watchChanged, watchOptions)

source.value = 'new'
```

<br />

### Watch 选项

```ts
import { ref } from 'vue'
import { throttledWatch } from '@/uni_modules/tob-use'

const source = ref('old')

const watchChanged = (newValue, oldValue) => console.log(oldValue, '->', newValue)

throttledWatch(source, watchChanged, {
    deep: true, // 深度同步
    immediate: true, // 立即同步，默认为 false
    flush: 'sync', // 同步时机，支持 pre，post，sync，默认为 pre
})
```