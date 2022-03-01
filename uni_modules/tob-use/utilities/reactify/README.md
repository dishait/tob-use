# reactify

将普通函数转换为响应式函数

大白话就是对函数参数去 `ref` 化 👇

## Usage

### 基础

```ts
import { ref } from 'vue'
import { reactify } from '@/uni_modules/tob-use'

const count = ref(1)

// reactify 注册一个回调，返回一个工厂函数
const createDouble = reactify(v => {
    return v * 2 // 这里的 v 就是后边 count.value
})

// 返回一个计算属性
const double = createDouble(count)

console.log(double.value) // 2

count.value = 2

console.log(double.value) // 4
```

<br />

### 对比

对比原生计算属性 👇

```ts
import { ref, computed } from 'vue'

const a = ref(1)
const b = 2
const c = ref(3)

const sum = computed(() => {
    // 需要考虑 .value 
    return a.value + b + c.value
})

console.log(sum.value) // 6
```

用 `reactify` 👇

```ts
import { ref } from 'vue'
import { reactify } from '@/uni_modules/tob-use'

const createSum = reactify((a, b, c) => {
    // 不需要考虑 .value
    return a + b + c 
})

const a = ref(1)
const b = 2
const c = ref(3)

const sum = createSum(a, b, c)

console.log(sum.value)
```