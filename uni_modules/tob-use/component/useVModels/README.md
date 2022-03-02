# useVModels

使用多个的 v-model

大多数情况下，可能你只需要使用 [useVModel](/api/component/useVModel)

## Usage

### 基础

```html
<script setup>
import { useVModels } from '@/uni_modules/tob-use'

const props = defineProps({
    foo: String,
    bar: String
})

const emit = defineEmits([
    'update:foo',
    'update:bar'
])

const { foo, bar } = useVModels(props, emit)

foo.value // props.foo
foo.value = 'foo' // emit('update:foo', 'foo')

bar.value // props.bar
bar.value = 'bar' // emit('update:bar', 'bar')
</script>
```

<br />

### 选项

```html
<script setup>
import { useVModels } from '@/uni_modules/tob-use'

const props = defineProps({
    foo: String,
    bar: String
})

const emit = defineEmits([
    'update:foo',
    'update:bar'
])

const { foo, bar } = useVModels(props, emit, {
    eventName: 'update:modelValue', // 手动设置事件名
	passive: false, // 消极的，即如果新值和旧值相等时，不会出触发事件 emit，默认为 false
    deep: true, // 仅 passive 为 true 时有效，v-model 传入对象时，深层监听，默认为 false
})
</script>
```