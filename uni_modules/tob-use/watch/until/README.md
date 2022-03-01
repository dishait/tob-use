# until

直到

主要用于异步等待

## Usage

### 基础

```js
import { ref } from 'vue'
import { until } from '@/uni_modules/tob-use'

const source = ref(false)

const instance = until(source)

const runAsync = async () => {
    await instance.toBeTruthy() // 等到 source 为真时才接着往下执行

    console.log("source 为真了")
}

runAsync() // 跑一个异步

setTimeout(() => {
    source.value = true // 设置为 true 后，runAsync 才接着执行
}, 2000)
```

<br />

### 实例方法

除了上述的 `toBeTruthy` 之外，还有以下其他方法

```js
import { ref } from 'vue'
import { until } from '@/uni_modules/tob-use'

const source = ref(false)

const instance = until(source)

const runAsync = async () => {
    await instance.toBeTruthy() // 为真时
    await instance.toBeNaN() // 为 NaN 时
    await instance.toBeNull() // 为 null 时
    await instance.toBe(100) // 等于具体内容时
    await instance.toBeUndefined() // 为 undefined 时
    await instance.toContains([1, 2, 3]) // 为数组的其中之一时
    
    await instance.toMatch(v => v > 2) // 等于自定义规则

    await instance.changed() // 变化时
    await instance.changedTimes(3) // 变化 3 次时
}
```

注意如果是数组类型的源只包含 `toMatch`, `toContains`, `changed`, `changedTimes`


#### Not


```js
import { ref } from 'vue'
import { until } from '@/uni_modules/tob-use'

const source = ref(false)

const instance = until(source)

const runAsync = async () => {
    await instance.not.toBeTruthy() // 不为真时
    await instance.not.toBeNaN() // 不为 NaN 时
    await instance.not.toBeNull() // 不为 null 时
    await instance.not.toBe(100) // 不等于具体内容时
    await instance.not.toBeUndefined() // 不为 undefined 时
    await instance.not.toContains([1, 2, 3]) // 不为数组的其中之一时
    
    await instance.not.toMatch(v => v > 2) // 不等于自定义规则
}
```

#### 选项

```js
import { ref } from 'vue'
import { until } from '@/uni_modules/tob-use'

const source = ref(false)

const instance = until(source)

const options = {
	deep: false, // 深层监听，默认为 false
	throwOnTimeout: false, // 超时抛错，默认为 false
    timeout: 2000, // 最后期限，单位为毫秒，默认不定义
	flush: 'sync', // 同步时机，支持 pre，post，sync，默认为 pre
}

const runAsync = async () => {
    await instance.toBeTruthy(options) 
    await instance.toBeNaN(options) 
    await instance.toBeNull(options) 
    await instance.toBe(100, options) 
    await instance.toBeUndefined(options) 
    await instance.toContains([1, 2, 3], options)
    await instance.toMatch(v => v > 2, options) 
}
```