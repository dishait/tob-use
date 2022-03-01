# useVModel

使用 v-model

## Usage

### 基础

子组件 👇

```html
<!-- foo 组件 -->
<script setup>
import { ref } from 'vue'
import { useVModel } from '@/uni_modules/tob-use'

const props = defineProps({
    modelValue: string
})

const emit = defineEmits(['update:modelValue'])

// 传入 props
const modelValue = useVModel(props, 'modelValue', emit)

modelValue.value // props.modelValue

modelValue.value = 'foo' // emit('update:modelValue', 'foo')
</script>
```

父组件 👇

```html
<script setup>
import { ref } from "vue"

const bar = ref('bar')
</script>

<template>
    <view>
        <foo v-model="bar" />
    </view>
</template>
```

<br />

### key

我们可以通过第二个参数设置 `key` 👇

```html
<!-- foo 组件 -->
<script setup>
import { ref } from 'vue'
import { useVModel } from '@/uni_modules/tob-use'

const props = defineProps({
    foo: string // 注意 props 也要有对应的设置
})

// emit 也要有对应的设置
const emit = defineEmits(['update:foo'])

// 第二个参数用于设置 key
const foo = useVModel(props, 'foo', emit)

foo.value // props.foo

foo.value = 'foo' // emit('update:foo', 'foo')
</script>
```

父组件 👇

```html
<!-- 省略代码 -->
<template>
    <view>
        <!-- 注意 v-model 后的 foo 就是 key，默认为 modelValue -->
        <foo v-model:foo="bar" />
    </view>
</template>
```


<br />

### 选项

第四个参数可以设置一些选项，不过大多数情况下，你并不需要关注

```html
<script>
import { ref } from 'vue'
import { useVModel } from '@/uni_modules/tob-use'

const props = defineProps({
    modelValue: string
})

const emit = defineEmits(['update:modelValue'])

const modelValue = useVModel(props, 'modelValue', emit, {
    eventName: 'update:modelValue', // 手动设置事件名
	passive: false, // 消极的，即如果新值和旧值相等时，不会出触发事件 emit，默认为 false
    deep: true, // 仅 passive 为 true 时有效，v-model 传入对象时，深层监听，默认为 false
})
</script>
```