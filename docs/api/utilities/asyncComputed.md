# asyncComputed

异步的计算属性

## Usage

### 基础

```js
import { asyncComputed } from '@/uni_modules/tob-use'

// 模拟异步请求
const mock = (payload) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(payload)
        }, delay, 1000)
    }) 
}


// 返回一个异步的计算属性
// 第二个参数为初始化状态
const result = asyncComputed(
    async () => {
        const response = await mock('模拟请求数据')
        return response
    }, 
    '初始状态'
)
```

<br />

### 评估状态

即当前的异步是否处于运行中状态

```ts
import { ref } from 'vue'
import { asyncComputed } from '@/uni_modules/tob-use'

const evaluating = ref(false)

const userInfo = asyncComputed(
  async() => { /* 省略逻辑 */ },
  null,
  evaluating,
)
```

<br />

### 取消


有时候我们可能会在这次异步仍在进行期间重新触发异步更新，此时可以用 `onCancel` 注册回调来终止仍未完成的异步。  

`onCancel` 注册的回调将在这次异步未完成时，下次异步开始前触发。


```ts{22-23}
import { ref } from 'vue'
import { asyncComputed } from '@/uni_modules/tob-use'

// 模拟的带终止的异步请求
const mock = payload => {
    let stop
    const request = new Promise(resolve => {
        timeout = setTimeout(() => {
           resolve(payload)
        }, 1000)
        stop = () => clearTimeout(timeout)
    }) 
    return [request, stop]
}

// 模拟依赖
const dep = ref(1)

const result = asyncComputed(async (onCancel) => {
   const [request, stop] = mock(dep.value)

   // 下次更新前终止这次未完成的异步
   onCancel(() => stop()) 

   const response = await request
   return response
}, 0)

 // 修改了，重新触发计算属性更新
delay.value = 2
// 上一次异步未完成期间再次触发计算属性更新
// 将终止上一次请求，改用当前请求
delay.value = 3  
```

<br />

### 懒惰的

开启 `lazy` 之后，只有在结果第一次被访问时才触发异步

```ts
import { ref } from 'vue'
import { asyncComputed } from '@/uni_modules/tob-use'

const evaluating = ref(false)

// 这里不会触发异步
const userInfo = asyncComputed(
  async() => { /* 省略逻辑 */ },
  null,
  { lazy: true, evaluating },
)

// 进行第一次访问，即 getter 时才触发
userInfo.value
```

<br />

### 错误处理

`onError` 可以捕获到异步进行过程中的错误

```ts
import { asyncComputed } from '@/uni_modules/tob-use'

const userInfo = asyncComputed(
  async() => { /* 省略逻辑 */ },
  null,
  { onError: e => console.log(e.message) }
)
```

<br />
<br />

## 注意事项

- 异步访问的依赖项不会触发对异步的重新计算
- 即使异步计算属性未被 `getter` 访问，也会执行异步。除非设置 `lazy` 为 `true`

普通的计算属性

```ts
import { computed, ref } from "vue"

const count = ref(1)

const double = computed(() => {
    console.log('我被 getter 泛问了')
    return count.value * 2
})

// double 计算属性里的回调将不会触发
// 除非你进行 getter 访问，尝试取消下边的注释 👇

// double.value
```

异步计算属性

```ts
import { ref } from "vue"
import { asyncComputed } from '@/uni_modules/tob-use'

const count = ref(1)

const double = asyncComputed(() => {
    console.log('即使不 getter 访问我也会执行')
    return count.value * 2
})

const triple = asyncComputed(() => {
    console.log('被设置了 lazy，那我只能在 getter 访问时执行了')
    return count.value * 3
}, { lazy: true })

// 尝试解开下边的注释 👇

// triple.value
```