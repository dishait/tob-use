# pausableWatch

可暂停的监听

## Usage

```js
import { ref } from 'vue'
import { pausableWatch } from '@/uni_modules/tob-use'

const source = ref('foo')

const { stop, pause, resume, isActive } = pausableWatch(
  source,
  (v) => console.log(v),
)

const run = async () => {
    isActive.value // 监听中，true
    source.value = 'bar'
    await nextTick() // 输出 bar

    pause() // 暂停
    isActive.value // 监听中，false
    source.value = 'foobar'
    await nextTick() // 啥事都不会发生

    resume() // 恢复
    isActive.value // 监听中，true
    source.value = 'hello'
    await nextTick() // 输出 hello

    stop() // 完全停止监听
}

run()
```

<br />

### Watch 选项

```ts
import { ref } from 'vue'
import { pausableWatch } from '@/uni_modules/tob-use'

const source = ref('foo')
const callback = (v) => console.log(`更新 ${v}!`) 

pausableWatch(
  source,
  callback,
   {
    deep: true, // 深度同步
    immediate: true, // 立即同步，默认为 false
    flush: 'sync', // 同步时机，支持 pre，post，sync，默认为 pre
  }
)
```