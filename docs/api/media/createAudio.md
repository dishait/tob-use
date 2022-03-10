# createAudio

:::warning
暂时不支持小程序端
:::

创建音频

## Usage

### 基础

```ts
import { createAudio } from '@/uni_modules/tob-use'

// createAudio 可接受所有的原生配置，例如 src, autoplay, loop 等
const { toggle } = createAudio({
    src: 'your src'
})

toggle() // 播放，开
toggle() // 暂停，关
toggle() // 播放，开
// ... 不断对当前状态取反

toggle(false) // 暂停
toggle(true) // 播放

toggle(true, 'new src') // 播放新的音频
```

<br />

### 其他

```js
import { createAudio } from '@/uni_modules/tob-use'

const {
    play,
    stop,
    seek,
    reset,
    audio,
    pause,
    replay,
    destroy,
    buffered,
    isActive,
    duration,
    isWaiting,
    currentTime,
} = createAudio()

play('your src') // 播放

pause() // 暂停

seek(20) // 跳转到对应位置

reset() // 重置

replay() // 重播

stop() // 停止

destroy() // 销毁

isActive.value // 是否播放中

isWaiting.value // 是否加载数据中

duration.value // 总时长

currentTime.value // 当前进度

buffered.value // 当前缓冲点

audio // 原生 audio 对象
```

<br />
<br />

## 注意事项

### changing

结合原生的 `slider` 组件的 `changing` 时，为了更好的性能，你需要注意 `seek` 的使用

```html
<script setup>
import { createAudio } from "@/uni_modules/tob-use"

const {
    // ...
    seek
} = createAudio()

const onSliderChange = e => seek(e.detail.value)
// seek 的第二个参数必须设置为 true，标识被用于 changing 事件
const onSliderChanging = e => seek(e.deatil.value, true)
</script>

<template>
    <view>
        <slider @change="onSliderChange" @changing="onSliderChanging" /> 
    </view>
</template>
```