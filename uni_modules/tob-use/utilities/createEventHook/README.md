# createEventHook

创建事件 hook

## Usage

### 基础

```ts
import { createEventHook } from '@/uni_modules/tob-use'

const event = createEventHook()

// on 可以注册回调
event.on(v => {
    console.log(v) 
})

event.trigger(0) // 触发 on 注册的回调，打印 0

// 再注册一个
event.on(v => {
    console.log(v + 1) 
})

event.trigger(1) // 触发所有 on 注册的回调，打印 1，2

// 可解构获取卸载函数
const { off } = event.on(v => {
    console.log('触发了')
})

off() // 卸载刚注册的回调

event.trigger(1) // 打印 1，2，但不会打印 '触发了'，因为刚刚被卸载了
```

<br />

### 封装请求

```js
import { createEventHook } from '@/uni_modules/tob-use'

/**
 * 封装请求
*/
const useUserInfo = () => {
    const failEvent = createEventHook()
    const successEvent = createEventHook()
    uni.request({
        url: 'https://www.example.com/request', // 虚拟请求地址
        fail(err) {
            failEvent.trigger(err) // 失败时触发
        },
        success(res) {
            successEvent.trigger(res) // 成功时触发
        },
    })

    return {
        onFail: failEvent.on, // 失败监听
        onSuccess: successEvent.on // 成功监听
    }
}

/**
 * 使用时
*/
const { onFail, onSuccess } = useUserInfo()

// 注册失败回调，失败时将被触发
onFail(err => {
    console.log(err)
})

// 注册成功回调，成功时将被触发
onSuccess(res => {
    console.log(res)
})
```


