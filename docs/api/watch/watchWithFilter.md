# watchWithFilter

带过滤器的监听

这是一个较为底层的 `api`，大多数情况你不需要它，除非你要进行特别的自定义
## Usage

```js
import { ref } from 'vue'
import { watchWithFilter } from '@/uni_modules/tob-use'

const source = ref('foo')

const changed = () => console.log('changed!') 

watchWithFilter(
  source,
  changed,
  {
    eventFilter(changedHandle) {
        changedHandle() // 就是上边的 changed
    }
  }
)
```

<br />

### Watch 选项

```js
import { ref } from 'vue'
import { watchOnce } from '@/uni_modules/tob-use'

const source = ref('old')

const changed = () => console.log('trigger!') 

watchWithFilter(source, changed, {
    deep: true, // 深度同步
    immediate: true, // 立即同步，默认为 false
    flush: 'sync', // 同步时机，支持 pre，post，sync，默认为 pre
})
```