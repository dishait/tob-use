# useClamp

在两个值范围之间取一个值

## Usage

```js
import { ref } from 'vue'
import { useClamp } from '@/uni_modules/tob-use'

const min = ref(0)
const max = ref(10)

// 限定范围 0 - 10
const result = useClamp(0, min, max)

result.value = 20 

result.value // 超出最大，仍然是 10

result.value = -1

result.value // 超出最小，仍然是 0

max.value = 20 // 调整最大值为 20

result.value = 20

result.value // 20
```

