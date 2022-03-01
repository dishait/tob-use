# useIntervalFn

使用间隔函数

## Usage

```js
import { ref } from 'vue'
import { useIntervalFn } from '@/uni_modules/tob-use'

// 第二个参数设置间隔，单位为毫秒，默认为 1000 毫秒
const { pause, resume, isActive } = useIntervalFn(() => {
    // 你希望执行的函数
}, 1000)

isActive.value // 是否在执行中

pause() // 暂停

resume() // 恢复
```

<br />

### Watch 选项

```js
import { useInterval } from '@/uni_modules/tob-use'

const { pause, resume, isActive } = useIntervalFn(200, { 
    immediate: false, // 立即开启，默认为 true
    immediateCallback: false // 立即触发，不需要等待第一个间隔，默认为 false
})
```