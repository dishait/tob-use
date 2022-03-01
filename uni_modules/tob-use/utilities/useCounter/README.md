# useCounter

计数器

## Usage

### 基础

```js
import { useCounter } from '@/uni_modules/tob-use'

const { count, inc, dec, set, reset } = useCounter()

count.value // 0

inc() // +1
count.value // 1

dec() // -1
count.value // 0

set(100) // 设置
count.value // 100

reset() // 重置为 0
count.value // 0

inc(100) // + 100
count.value // 100

dec(100) // - 100
count.value // 0

reset(200) // 重置为 200
count.value // 200
```

### 初始值

```ts
import { useCounter } from '@/uni_modules/tob-use'

const { count, inc, dec, set, reset } = useCounter(10)

count.value // 10

inc() // +1
count.value // 11

dec() // -1
count.value // 10

set(100) // 设置
count.value // 100

reset() // 重置为 10
count.value // 10

inc(100) // + 100
count.value // 110

dec(100) // - 100
count.value // 10

reset(200) // 重置为 200
count.value // 200
```