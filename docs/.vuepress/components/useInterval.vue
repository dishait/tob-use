<script setup>
const { counter, resume, pause } = useInterval(200, {
    controls: true // 开启控制权
})

// 开启元素可见性
const el = ref(null)
const elVisible = useElementVisibility(el)
watch(elVisible, visible => {
    visible ? resume() : pause()
})
</script>

<template>
    <div class="mt-2" ref="el">每 200 毫秒更新: {{ counter }}</div>
</template>