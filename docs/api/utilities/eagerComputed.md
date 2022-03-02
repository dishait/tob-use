# eagerComputed

及时的计算属性

作用可见该文章讨论 👉 [When a computed property can be the wrong tool](https://dev.to/linusborg/vue-when-a-computed-property-can-be-the-wrong-tool-195j)。

当然更简单的解释可见 👉 [Motation](/api/utilities/eagerComputed.html#Motation)

## Usage

```js
import { ref } from 'vue'
import { eagerComputed } from '@/uni_modules/tob-use'

const todos = ref([])
const hasOpenTodos = eagerComputed(() => !!todos.length)

console.log(hasOpenTodos.value) // false

toTodos.value.push({ title: 'Learn Vue' })

console.log(hasOpenTodos.value) // true
```

<br />
<br />

## Motation

有时候我们在开发过程中，习惯用计算属性去访问另外的计算属性 👇

<eagerComputed />

```html
<script setup>
import { computed, ref } from "vue"

const count = ref(1)

// 两倍
const double = computed(() => {
    return count.value * 2
})

// 六倍，依赖另一个计算属性 double 来更新
const sixfold = computed(() => {
    return double.value * 3
})
</script>

<template>
    <view>
       点击 👉 <button @click="count++">{{sixfold}}</button>
    </view>
</template>
```

但是当一个复杂的计算属性依赖一个简单的计算属性时，这可能会发生性能损耗 👇 

就像下边的例子，即使简单的计算属性 `shouldReverse` 返回相同的值，但复杂的计算属性 `sortedList` 仍然执行了多次。

<eagerComputed2 />

```html
<script setup>
import { computed, ref } from "vue"

const count = ref(1)

const list = reactive([1, 2, 3, 4, 5])

// 复杂计算属性的更新次数
const complexUpdatedCount = ref(0)

// 需要反转标识
const shouldReverse = computed(() => {
    return count.value > 10
})

// 列表，依赖另一个简单计算属性 shouldAppend 来更新
const sortedList = computed(() => {
    complexUpdatedCount.value++ // 每次更新都记录
    return shouldReverse.value ? [...list].reverse() : list
})
</script>

<template>
    <view>
        点击 👉 <button @click="count++">{{ count }}</button>
        <view v-for="v of sortedList" :key="v">
            <view>{{ v }}</view>
        </view>
        <view>复杂计算属性更新次数: {{ complexUpdatedCount }}</view>
    </vi>
</template>
```

这是因为 `vue` 中的计算属性是访问时才执行的，例如 👇

```html
<script setup>
import { computed, ref } from "vue"

const count = ref(1)

const double = computed(() => {
    console.log("计算属性将不会被执行")
    return count.value * 2
})
</script>

<template>
    <view @click="count++">{{count}}</view>
</template>
```

你会惊奇的发现，上边 `double` 计算属性里的回调将永远不会执行。  

因为 `vue` 的计算属性访问时才执行，而没有任何地方访问 `double` 这个计算属性，包括模板。

再看原来的例子

```html
<script setup>
import { computed, ref } from "vue"

const count = ref(1)

const list = reactive([1, 2, 3, 4, 5])

// 复杂计算属性的更新次数
const complexUpdatedCount = ref(0)

// 当 count 更新时，并不会立即执行，只有再次访问时才会执行得到结果
const shouldReverse = computed(() => {
    return count.value > 10
})

// 当 shouldReverse 更新时，并不知道其结果有没有变，只有重新执行时访问才会知道
const sortedList = computed(() => {
    complexUpdatedCount.value++ // 每次更新都记录
    return shouldReverse.value ? [...list].reverse() : list
})
</script>

<template>
    <view>
        点击 👉 <button @click="count++">{{ count }}</button>
        <view v-for="v of sortedList" :key="v">
            <view>{{ v }}</view>
        </view>
        <view>复杂计算属性更新次数: {{ complexUpdatedCount }}</view>
    </vi>
</template>
```

由于惰性访问，`sortedList` 并不清楚 `shouldReverse` 更新之后结果有没有变，所以会重新计算。

而使用 `eagerComputed`，依赖更新时会直接执行得到结果，而不会等到访问时才惰性执行。

也就是说，复杂的计算属性可以第一时间知道其依赖的简单计算属性结果有没有变化 👇

<eagerComputed3 />

```html
<script setup>
import { computed, ref } from "vue"
import { eagerComputed } from '@/uni_modules/tob-use'

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
    <view>
        点击 👉 <button @click="count++">{{ count }}</button>
        <view v-for="v of sortedList" :key="v">
            <view>{{ v }}</view>
        </view>
        <view>复杂计算属性更新次数: {{ complexUpdatedCount }}</view>
    </vi>
</template>
```