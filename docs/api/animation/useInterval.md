# useInterval

间隔

## Usage

<useInterval />

```html
<script setup>
import { useInterval } from '@/uni_modules/tob-use'

// 设置间隔，单位为毫秒，默认为 1000 毫秒
const counter = useInterval(200) 
</script>

<template>
    <view>每 200 毫秒更新: {{ counter }}</view>
</template>
```

### 可控制

<useInterval2 />

```html
<script setup>
import { useInterval } from '@/uni_modules/tob-use'

const { 
    pause,  // 暂停
    resume, // 继续 
    counter, // 计数器
    isActive // 计数中
} = useInterval(200, { 
    controls: true // 开启控制权
})

const tip = computed(() => isActive.value ? '暂停' : '继续')

const toggle = computed(() => isActive.value ? pause : resume)
</script>

<template>
    <view @click="toggle">👉 点击{{ tip }}: {{ counter }}</view>
</template>
```

<br />

### 立即执行

```js
import { useInterval } from '@/uni_modules/tob-use'

const counter = useInterval(200, { 
    immediate: false // 立即开启，默认为 true
})
```