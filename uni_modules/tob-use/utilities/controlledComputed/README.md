# controlledComputed

受控型计算属性

只有源更新了，才会触发更新，适合频繁更新的场景。

## Usage

```js
import { ref } from 'vue'
import { controlledComputed } from '@/uni_modules/tob-use'

let source = ref('foo')
let counter = ref(0)

const computedRef = controlledComputed(
  source, // 监听源，有点像 watch，支持原生 watch 的各种形式
  () => counter.value // 返回值函数，有点像 computed
)

console.log(computedRef.value) // 0

counter.value += 1

console.log(computedRef.value) // 仍然是 0

source.value = 'bar' // 更新源，才会同步最新的返回值函数

console.log(computedRef.value) // 1
```

