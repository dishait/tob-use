# extendRef

ref 扩展

## Usage

```js
import { ref } from 'vue'
import { extendRef } from '@/uni_modules/tob-use'

const myRef = ref('content')

const extended = extendRef(myRef, { foo: 'extra data' })

extended.value === 'content'
extended.foo === 'extra data'
```

`ref` 将被解包并且是响应式的

```ts
const myRef = ref('content')
const extraRef = ref('extra')

const extended = extendRef(myRef, { extra: extraRef })

extended.value === 'content'
extended.extra === 'extra'

extended.extra = 'new data' // 将触发源更新
extraRef.value === 'new data'
```