<script setup>
import { computed, ref } from "vue"

const count = ref(1)

const list = reactive([1, 2, 3, 4, 5])

const complexUpdatedCount = ref(0)

// 需要反转标识
const shouldReverse = computed(() => {
    return count.value > 10
})

// 列表，依赖另一个计算属性 shouldAppend 来更新
const sortedList = computed(() => {
    complexUpdatedCount.value++
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