# toReactive

转化为 Reactive

## Usage

```js
import { ref } from 'vue'
import { toReactive } from '@/uni_modules/tob-use'

const origin = ref({ foo: 'bar' })

origin.value.foo // bar

const state = toReactive(origin)

state.foo // bar

origin.value = { bar: 'foo' }

state.foo // undefined
state.bar // foo
```

