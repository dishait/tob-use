# useAsyncQueue

使用异步队列

## Usage

### 基础

```js
import { useAsyncQueue } from '@/uni_modules/tob-use'

const p1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1000)
    }, 10)
  })
}

// result 是上一个任务的结果
const p2 = result => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1000 + result)
    }, 20)
  })
}

const { activeIndex, result } = useAsyncQueue([p1, p2])


setTimeout(() => {
    result // 结果
    activeIndex.value // 当前执行到的任务 index
}, 1000)
```

<br />

### 打断

```ts
import { useAsyncQueue } from '@/uni_modules/tob-use'

const { activeIndex, result } = useAsyncQueue([
    // ... 省略异步任务
], { 
    interrupt: true // 允许失败时打断，默认为 true
})
```

<br />

### 回调

```ts
import { useAsyncQueue } from '@/uni_modules/tob-use'

const { activeIndex, result } = useAsyncQueue([
    // ... 省略异步任务
], { 
    // 出错时回调
    onError() {

    },
    // 成功时回调
    onFinished() {

    }
})
```