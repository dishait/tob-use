# isDefined

是否定义判断

## Usage

```js
import { ref } from 'vue'
import { isDefined } from '@/uni_modules/tob-use'

const example = ref(undefined)

if (isDefined(example)) {
    console.log("定义了")
} else {
    console.log("未定义") // 将输出 '未定义'
}
```

