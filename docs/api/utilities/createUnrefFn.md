# createUnrefFn

创建解 ref 函数

## Usage

```js
import { ref } from 'vue'
import { createUnrefFn } from '@/uni_modules/tob-use'

const a = ref(1)
const b = ref(2)

const sum = (a, b) => a + b

const unrefSum = createUnrefFn(sum)

sum(a, b)        /* ❌ 错误的 ref 参数相加 */
unrefSum(a, b)   /* ✔️ 将自动解 ref 后相加 */
```

