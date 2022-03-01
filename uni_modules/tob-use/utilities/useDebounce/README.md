# useDebounce

使用防抖 ref

## Usage

### 基础

```js
import { ref } from 'vue'
import { useDebounce } from '@/uni_modules/tob-use'

const input = ref('foo')

// 第二个参数设置防抖间隔，单位为毫秒，默认为 200 毫秒
const debounced = useDebounce(input, 1000)

// 频繁的更新
input.value = 'jack'
input.value = 'tom'
input.value = 'bar'

// 仍然是 foo
console.log(debounced.value)

setTimeout(() => {
    // 只有最有一个生效，bar
    console.log(debounced.value) 
}, 2000)
```

<br />

### 最后期限

```ts
import { ref } from 'vue'
import { useDebounce } from '@/uni_modules/tob-use'

const input = ref('foo')

// 第三个参数可接受配置
const debounced = useDebounce(input, 1000, {
    maxWait: 3000 // 最后期限，不管是否在防抖中，一律触发
})
```