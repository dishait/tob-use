# useTemplateRefsList

获取模板元素的列表

## Usage

```html
<template>
  <view v-for="i of 5" :key="i" :ref="refs.set"></view>
</template>

<script setup lang="ts">
import { onUpdated } from 'vue'
import { useTemplateRefsList } from '@/uni_modules/tob-use'

const refs = useTemplateRefsList()

onUpdated(() => {
  console.log(refs) // 所有的元素
})
</script>
```

