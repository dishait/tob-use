# 开始

## IDE

### 1. 安装

如果你是直接使用 `HBuilderx` 这个 `IDE` 进行开发的，你可以通过 👉 [插件市场](https://ext.dcloud.net.cn/plugin?id=7308) 直接导入插件。

![install](/images/install.png)

<br />

### 2. 使用

直接从 `@/uni_modules/tob-use` 引入即可。

```html
<script setup>
import { ref } from "vue"
import { useCounter } from "@/uni_modules/tob-use"

const { count, inc } = useCounter()
</script>

<template>
    <view @click="inc">
        我是结果 {{count}} <!-- 计数器将随点击累加 -->
    </view> 
</template>
```

更多 `api` 可见 👉 [API 参考](/api/utilities/and)