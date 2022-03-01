# useTimeoutFn

定时器方法

## Usage

### 基础

```js
import { useTimeoutFn } from '@/uni_modules/tob-use'

const { 
    stop, 
    start, 
    isPending,
} = useTimeoutFn(() => {
  // 你希望执行的函数
}, 3000)
```

<br />

### 立即开始

```js
import { useTimeoutFn } from '@/uni_modules/tob-use'

const instance = useTimeoutFn(() => {
  // 你希望执行的函数
}, 3000, {
    immediate: false // 立即开始，默认为 true
})
```