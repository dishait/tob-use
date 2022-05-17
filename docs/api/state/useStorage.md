# useStorage

使用存储

## Usage

### 基础

```js
import { ref } from 'vue'
import { useStorage } from '@/uni_modules/tob-use'

const state = useStorage('vue-use-local-storage', {
	name: 'Banana',
	color: 'Yellow',
	size: 'Medium',
})

// delete data from storage
state.value = null
```
