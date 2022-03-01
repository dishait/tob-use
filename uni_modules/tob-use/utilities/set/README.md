# set

设置

## Usage

```js
import { ref } from 'vue'
import { set } from '@/uni_modules/tob-use'

const a = ref(0)

set(a, 1)

a.value // 1
```

或者对对象具体的 `key` 设置

```js
import { reactive } from 'vue'
import { set } from '@/uni_modules/tob-use'

const foo = reactive({
    bar: 0
})

set(foo, 'bar', 1)

foo.bar // 1
```

