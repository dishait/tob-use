# refDefault

ref 的默认值

## Usage

```js
import { ref } from 'vue'
import { refDefault } from '@/uni_modules/tob-use'

// 未定义的 ref
const raw = ref()

// 返回一个计算属性
const state = refDefault(raw, 0)

state.value // 0

raw.value = 1 
state.value // 1

state.value = 2
raw.value // 2
```

