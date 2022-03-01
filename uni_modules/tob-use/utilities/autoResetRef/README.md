# autoResetRef

自动重置 ref


## Usage

```js
import { ref } from 'vue'
import { autoResetRef } from '@/uni_modules/tob-use'

// 返回一个 ref，第二个参数可设置延迟，默认为 10 秒
const message = autoResetRef('默认', 1000) 

message.value = '更新了'

console.log(message.value) // 输出 更新了

setTimeout(() => {
    console.log(message.value) // 输出 默认
}, 2000)
```

