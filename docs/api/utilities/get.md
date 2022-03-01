# get

获取

## Usage

```js
import { ref } from 'vue'
import { get } from '@/uni_modules/tob-use'

const a = ref(42)

console.log(get(a)) // 42
```

或者获取具体对象的 `key`


```js
import { ref } from 'vue'
import { get } from '@/uni_modules/tob-use'

const foo = ref({
    bar: 100
})

console.log(get(foo, 'bar')) // 100
```