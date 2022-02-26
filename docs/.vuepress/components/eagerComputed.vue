<script setup>
import { computed, ref } from "vue"

const count = ref(1)

// 两倍
const double = computed(() => {
    return count.value * 2
})

// 六倍
const sixfold = computed(() => {
    return double.value * 3
})
</script>

<template>
    <view>
        点击 👉
        <button @click="count++">{{ sixfold }}</button>
    </view>
</template>