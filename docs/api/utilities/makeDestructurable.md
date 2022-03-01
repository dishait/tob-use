# makeDestructurable

使得更好分解

即让结果可以使用对象解构或数组解构两种方式

## Usage

```js
import { ref } from 'vue'
import { makeDestructurable } from '@/uni_modules/tob-use'

const bar = 1024
const foo = { name: 'foo' }

const obj = makeDestructurable(
  { foo, bar },
  [ foo, bar ]
)
```

使用时就可以用数组解构或对象解构了 👇

```ts
// 对象解构
let { foo, bar } = obj
```

或者

```ts
// 数组解构
let [ foo, bar ] = obj
```