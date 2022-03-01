# and

AND 判断

当所有参数都为 [Truthy](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy) 时，才为 [Truthy](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy)。

## Usage

```js
import { ref, watch } from 'vue'
import { and } from '@/uni_modules/tob-use'

// 支持 ref 包裹的参数
const foo = ref(false)
const bar = ref(true)

const result = and(foo, bar) // 返回一个计算属性结果

watch(result, (v) => {
    // 只有当 foo 和 bar 的 value 都为 true 时，才输出 true
    console.log(v)
})
```

