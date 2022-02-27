# ignorableWatch

忽略型监听

## Usage

### 基础

```js
import { ref } from 'vue'
import { ignorableWatch } from '@/uni_modules/tob-use/index.js'

const source = ref('foo')

const { stop, ignoreUpdates, ignorePrevAsyncUpdates } = ignorableWatch(
  source,
  (v) => console.log(`更新 ${v}!`),
)

source.value = 'bar' // 输出 '更新 bar'

ignoreUpdates(() => {
  source.value = 'foobar' // 忽略了此处更新，不会触发回调
})

source.value = 'good'
source.value = 'bad'
ignorePrevAsyncUpdates() // 忽略上一次仍未处理的的更新，所以不会触发回调

stop() // 暂停监听

source.value = 'jack' // 不会触发回调，因为已经暂停了
```

<br />

### Watch 选项

```ts
import { ref } from 'vue'
import { ignorableWatch } from '@/uni_modules/tob-use/index.js'

const source = ref('foo')
const callback = (v) => console.log(`更新 ${v}!`) 

ignorableWatch(
  source,
  callback,
  {
    deep: true, // 深度同步
    immediate: true, // 立即同步，默认为 false
    flush: 'sync', // 同步时机，支持 pre，post，sync，默认为 pre
  }
)
```