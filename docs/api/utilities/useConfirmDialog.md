# useConfirmDialog

确认对话框

## Usage

### 基础

```html
<script setup>
import { useConfirmDialog } from '@/uni_modules/tob-use'

const {
  isRevealed, // 是否显示，是一个计算属性
  reveal, // 显示方法
  confirm, // 确认方法
  cancel, // 退出方法
  onReveal, // 显示监听
  onConfirm, // 确认监听
  onCancel, // 退出监听
} = useConfirmDialog()

// 显示监听，data 为 reveal 方法调用时传入
onReveal(data => {

})

// 确认监听，data 为 confirm 方法调用时传入
onConfirm(data => {

})

// 退出监听，data 为 cancel 方法调用时传入
onCancel(data => {

})
</script>

<template>
  <view @click="reveal">显示 Modal</view>

    <view v-if="isRevealed" class="modal-bg">
        <view class="modal">
            <text>确认吗?</text>
            <button @click="confirm">是的</button>
            <button @click="cancel">退出</button>
        </view>
    </view>
</template>
```

<br />

### Promise

```html
<script setup>
import { ref } from "vue"
import { useConfirmDialog } from '@/uni_modules/tob-use'

// 可以传入布尔类型的 ref 参数，作为显示状态
const show = ref(false)

const {
  reveal, // 显示方法
  confirm, // 确认方法
  cancel // 退出方法
} = useConfirmDialog(show)

const openDialog = async () => {
    // 调用 reveal 将返回一个 promise
    const { 
        data, // 数据
        isCanceled // 是否退出了
    } = await reveal() 
} 
</script>

<template>
  <view @click="openDialog">显示 Modal</view>

    <view v-if="show" class="modal-bg">
        <view class="modal">
            <text>确认吗?</text>
            <button @click="confirm('YES')">是的</button>
            <button @click="cancel('NO')">退出</button>
        </view>
    </view>
</template>
```
