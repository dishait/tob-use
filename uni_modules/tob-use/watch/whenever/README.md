# whenever

仅当为真时触发

## Usage

### 基础

```js
import { ref } from 'vue'
import { whenever } from '@/uni_modules/tob-use'

const source = ref(false)

const changed = () => console.log("触发了")

const stop = whenever(source, changed)

source.value = true // 输出 '触发了'
```

<br />

<br />

### Watch 选项

```js
import { ref } from 'vue'
import { whenever } from '@/uni_modules/tob-use'

const source = ref('old')

const changed = () => console.log('trigger!') 

whenever(source, changed, {
    deep: true, // 深度同步
    immediate: true, // 立即同步，默认为 false
    flush: 'sync', // 同步时机，支持 pre，post，sync，默认为 pre
})
```