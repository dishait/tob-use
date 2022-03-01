# biSyncRef

双向同步

同步两个 `ref` 参数

## Usage

```js
import { ref } from 'vue'
import { biSyncRef } from '@/uni_modules/tob-use'

const a = ref('a')
const b = ref('b')

const stop = biSyncRef(a, b)

console.log(a.value) // a

b.value = 'foo'

console.log(a.value) // foo

a.value = 'bar'

console.log(b.value) // bar

stop() // 停止同步

a.value = 'foo'

console.log(b.value) // 仍然是 bar
```

