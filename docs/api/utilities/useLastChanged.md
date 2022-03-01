# useLastChanged

获取最后一次更新

## Usage

### 基础

```js
import { ref } from 'vue'
import { useLastChanged } from '@/uni_modules/tob-use'

const a = ref(0)

const lastChanged = useLastChanged(a)

a.value = 1

lastChanged.value // 最后一次更新的时间
```

### 初始值

大多数情况下你并不需要设置该项 👇

```js
import { ref } from 'vue'
import { useLastChanged } from '@/uni_modules/tob-use'

const a = ref(0)

const lastChanged = useLastChanged(a, {
    initialValue: +Date.now()
})

lastChanged.value // 初始化时间

a.value = 1

lastChanged.value // 最后一次更新的时间
```

<br />

### Watch 选项

```ts
import { ref } from 'vue'
import { useLastChanged } from '@/uni_modules/tob-use'

const a = ref(0)

const lastChanged = useLastChanged(a, {
    deep: true, // 深度同步
    immediate: true, // 立即同步，默认为 false
    flush: 'sync', // 同步时机，支持 pre，post，sync，默认为 pre
})

```