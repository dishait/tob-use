# and

AND 判断

## Usage

```js
import { ref, watch } from 'vue'
import { and } from '@/uni_modules/tob-use/index.js'

const foo = ref(false)
const bar = ref(true)

watch(and(foo, bar), (v) => {
    console.log('只有当foo和bar的value都为true时才为true', v)
})
```

