# syncRef

保持目标 ref 跟源同步

## Usage

### 基础

```js
import { ref } from 'vue'
import { syncRef } from '@/uni_modules/tob-use'

const source = ref(1)
const target = ref(2)

// 保持目标 target 跟源 source 同步，并返回 stop 暂停同步函数
const stop = syncRef(source, target)

target.value // 1

source.value = 10

target.value // 10

stop() // 暂停同步

source.value = 100

target.value // 仍然是 10
```

### 多个

```ts
import { ref } from 'vue'
import { syncRef } from '@/uni_modules/tob-use'

const a = ref(1)
const b = ref(2)
const c = ref(2)

// 保持目标 b, c 跟源 a 同步，并返回 stop 暂停函数
const stop = syncRef(a, [b, c])

b.value // 1
c.value // 1

a.value = 2

b.value // 2
c.value // 2
```

### 配置

`syncRef` 第三个参数，支持 `watch` 配置

```ts
import { ref } from 'vue'
import { syncRef } from '@/uni_modules/tob-use'

const source = ref(1)
const target = ref(2)

const stop = syncRef(source, target, {
    deep: false, // 深度同步，默认为 false
    immediate: true, // 立即同步，默认为 true
    flush: 'sync', // 同步时机，支持 pre，post，sync，默认为 sync
})
```