# watchAtMost

限制次数型监听

## Usage

```js
import { ref } from 'vue'
import { watchAtMost } from '@/uni_modules/tob-use'

const source = ref(1)

const changed = () => console.log('trigger!') 

const stop = watchAtMost(
  source,
  changed,
  {
    count: 3, // 最多触发 3 次
  }
)
```

<br />

### Watch 选项

```js
import { ref } from 'vue'
import { watchAtMost } from '@/uni_modules/tob-use'

const source = ref('old')

const changed = () => console.log('trigger!') 

watchAtMost(source, changed, {
    deep: true, // 深度同步
    immediate: true, // 立即同步，默认为 false
    flush: 'sync', // 同步时机，支持 pre，post，sync，默认为 pre
})
```