# reactivePick

响应式的 pick

## Usage

```js
import { ref } from 'vue'
import { reactivePick } from '@/uni_modules/tob-use'

const obj = reactive({
  x: 0,
  y: 0,
  elementX: 0,
  elementY: 0,
})

const picked = reactivePick(obj, 'x', 'elementX') // { x: 0, elementX: 0 }
```

