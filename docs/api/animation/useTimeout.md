# useTimeout

定时器

## Usage

### 基础

```js
import { useTimeout } from '@/uni_modules/tob-use'

// 设置间隔，单位为毫秒，默认为 1000 毫秒
const ready = useTimeout(1000) // 1 秒后，ready.value 将变成 true

ready.value // 一个布尔类型的计算属性
```

<br />

#### 可控制

```js
import { useTimeout } from '@/uni_modules/tob-use'

const { 
    stop, // 停止，函数
    start, // 开启，函数
    ready,  // 完成，布尔类型的计算属性
} = useTimeout(1000, { 
    controls: true // 开启控制权
})

start() // 需要手动开启

setTimeout(() => {
    ready.value // true
}, 2000)
```