<script setup>
import { computed, ref, shallowRef, watchSyncEffect, readonly } from "vue"

const eagerComputed = fn => {
    const result = shallowRef()

    watchSyncEffect(() => {
        result.value = fn()
    })

    return readonly(result)
}


const count = ref(1)

const list = reactive([1, 2, 3, 4, 5])

// 复杂计算属性的更新次数
const complexUpdatedCount = ref(0)

// 当 count 更新时，会立即执行得到结果
const shouldReverse = eagerComputed(() => {
    return count.value > 10
})

// 当 shouldReverse 结果变化时才会重新执行
const sortedList = computed(() => {
    complexUpdatedCount.value++ // 每次更新都记录
    return shouldReverse.value ? [...list].reverse() : list
})
</script>

<template>
    <div>
        点击 👉
        <button @click="count++">{{ count }}</button>
        <div v-for="v of sortedList" :key="v">
            <div>{{ v }}</div>
        </div>
        <div>复杂计算属性更新次数: {{ complexUpdatedCount }}</div>
    </div>
</template>