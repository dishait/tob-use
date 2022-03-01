# useThrottleFn

使用节流函数

## Usage

```js
import { ref } from 'vue'
import { useThrottleFn } from '@/uni_modules/tob-use'

// 第二个参数设置节流间隔，单位为毫秒，默认为 200 毫秒
const throttledFn = useThrottleFn(() => {
    console.log('执行了')
}, 1000)

throttledFn() 
```

<br />

### Trailing

如果您不想让尾随更改，即确保时间到达后触发，可以设置第三个参数为 `false`，默认为 `true`

```ts
import { ref } from 'vue'
import { useThrottle } from '@/uni_modules/tob-use'

const throttledFn = useThrottleFn(() => {
    console.log('执行了')
}, 1000, false)
```

<br />

### Leading

如果你不想一上来就执行，可以设置第四个参数为 `false`，默认为 `true`

```ts
import { ref } from 'vue'
import { useThrottle } from '@/uni_modules/tob-use'

const throttledFn = useThrottleFn(() => {
    console.log('执行了')
}, 1000, true, false)
```
