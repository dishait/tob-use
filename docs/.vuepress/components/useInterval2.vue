<script setup>
const {
    pause,  // 暂停
    resume, // 继续 
    counter, // 计数器
    isActive // 计数中
} = useInterval(200, {
    controls: true // 开启控制权
})

// 开启元素可见性
const el = ref(null)
const elVisible = useElementVisibility(el)
watch(elVisible, visible => {
    const shouldPause = !visible
    if (shouldPause) {
        pause()
    }
    const shouldResume = visible && active.value
    if (shouldResume) {
        resume()
    }
})

const tip = eagerComputed(() => isActive.value ? '暂停' : '继续')
const [active, toggleActive] = useToggle(isActive.value)

const toggle = () => {
    toggleActive()
    const handle = isActive.value ? pause : resume
    return handle()
}
</script>

<template>
    <div
        ref="el"
        @click="toggle"
        class="cursor-pointer mt-2 select-none"
    >👉 点击{{ tip }}: {{ counter }}</div>
</template>