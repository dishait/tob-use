# watchOnce

一次性监听

## Usage

### 基础

```js
import { ref } from 'vue'
import { watchOnce } from '@/uni_modules/tob-use'

const source = ref('foo')

const stop = watchOnce(source, () => {
  // 只会触发一次
  console.log('source changed!') 
})
```

<br />

### Watch 选项

```js
import { ref } from 'vue'
import { watchOnce } from '@/uni_modules/tob-use'

const source = ref('old')

const changed = () => console.log('trigger!') 

watchOnce(source, changed, {
    deep: true, // 深度同步
    immediate: true, // 立即同步，默认为 false
    flush: 'sync', // 同步时机，支持 pre，post，sync，默认为 pre
})
```