# biSyncRef

双向同步

## Usage

```js
import { ref } from 'vue'
import { biSyncRef } from '@/uni_modules/tob-use/index.js'

const a = ref('a')
const b = ref('b')

const stop = biSyncRef(a, b)

console.log(a.value) // a

b.value = 'foo'

console.log(a.value) // foo

a.value = 'bar'

console.log(b.value) // bar
```

