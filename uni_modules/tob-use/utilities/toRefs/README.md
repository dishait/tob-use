# toRefs

扩展之后的 toRefs，允许接受对象型的 ref

## Usage

```js
import { ref } from 'vue'
import { toRefs } from '@/uni_modules/tob-use'

const obj = reactive({ a: 'a', b: 0 })
const arr = reactive(['c', 0])

const { a, b } = toRefs(obj)
const [ c, d ] = toRefs(arr)
```

`ref` 类型的也支持

```ts
import { ref } from 'vue'
import { toRefs } from '@/uni_modules/tob-use'

const objRef = ref({ a: 'a', b: 0 })
const arrRef = ref(['c', 0])

const { a, b } = toRefs(objRef)
const [ c, d ] = toRefs(arrRef)
```