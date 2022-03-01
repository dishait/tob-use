# reactifyObject

对象的响应式转换

大白话就是将对象上的方法参数去 `ref` 化 👇

## Usage

### 基础

```js
import { ref } from 'vue'
import { reactifyObject } from '@/uni_modules/tob-use'

const a = ref(1)

console.log(a.value) // 需要 .value

const reactifiedConsole = reactifyObject(console)

reactifiedConsole.log(a) // 不需要 .value
```

<br />

### 包含自身属性

包含自身属性，包括不可枚举属性但不包括 `Symbol` 值作为名称的属性

```ts
import { reactifyObject } from '@/uni_modules/tob-use'

const reactifiedConsole = reactifyObject(console, {
    includeOwnProperties: true // 默认为 true
})
```

<br />

### 限定范围

只允许限定范围内的方法被处理

```ts
import { ref } from 'vue'
import { reactifyObject } from '@/uni_modules/tob-use'

// 只允许 log 被处理
const reactifiedConsole = reactifyObject(console, ['log'])

const a = ref(1)

reactifiedConsole.log(a) // 不需要 .value

reactifiedConsole.warn(a.value) // 需要 .value
```