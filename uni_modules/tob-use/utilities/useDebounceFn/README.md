# useDebounceFn

使用防抖函数

## Usage

```js
import { ref } from 'vue'
import { useDebounceFn } from '@/uni_modules/tob-use'

// 第二个参数设置防抖间隔，单位为毫秒，默认为 200 毫秒
const debouncedFn = useDebounceFn(() => {
  console.log('执行了')
}, 1000)

// 调用多次
debouncedFn()
debouncedFn()
debouncedFn()
debouncedFn()

setTimeout(() => {
    debouncedFn() // 最终只会执行一次，输出 '打印了'
}, 600)
```

<br />

### 最后期限

```ts
import { ref } from 'vue'
import { useDebounceFn } from '@/uni_modules/tob-use'

// 第三个参数可接受配置
const debouncedFn = useDebounceFn(() => {
  console.log('执行了')
}, 1000, {
     maxWait: 3000 // 最后期限，不管是否在防抖中，一律触发
})
```