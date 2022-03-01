# useEventBus

使用事件 bus

## Usage

```js
import { ref } from 'vue'
import { useEventBus } from '@/uni_modules/tob-use'

const bus = useEventBus('news')

const listener = (event) => {
  console.log(`事件: ${event}`)
}

// 监听，返回取消订阅函数
const unsubscribe = bus.on(listener)

// 触发
bus.emit('触发') // 输出 '事件: 触发'

// 卸载之前注册的事件回调
unsubscribe()
// 或者用 bus.off
bus.off(listener)

bus.once(() => console.log('一次性事件'))

bus.emit() // 输出: 一次性事件

bus.emit() // 啥都不做

// 清理所有的事件回调
bus.reset()
```

