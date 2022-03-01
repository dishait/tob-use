# debouncedWatch

防抖监听

## Usage

### 基础

```js
import { ref } from 'vue'
import { debouncedWatch } from '@/uni_modules/tob-use'

const source = ref('old')

const watchOptions = { 
    debounce: 500 // 防抖间隔，单位为毫秒，默认为 0
}

const watchChanged = (newValue, oldValue) => console.log(oldValue, '->', newValue)

const stop = debouncedWatch(source, watchChanged, watchOptions)

source.value = 'new' // 500 毫秒后输出 old -> new 
```

<br />

### Watch 选项

```ts
import { ref } from 'vue'
import { debouncedWatch } from '@/uni_modules/tob-use'

const source = ref('old')

const watchChanged = (newValue, oldValue) => console.log(oldValue, '->', newValue)

debouncedWatch(source, watchChanged, {
    deep: true, // 深度同步
    immediate: true, // 立即同步，默认为 false
    flush: 'sync', // 同步时机，支持 pre，post，sync，默认为 pre
})
```