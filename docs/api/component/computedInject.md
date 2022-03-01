# computedInject

计算属性型 inject

## Usage

上层组件提供 `provide`

```html
<script setup>
import { ref, provide } from 'vue'
import { computedInject } from '@/uni_modules/tob-use'

const key = 'foo'

const source = ref(1)

provide(key, source)
</script>
```

下层组件注入 `injcet`

```html
<script setup>
import { computedInject } from '@vueuse/core'

const key = 'foo'

// 计算属性，当上层组件的源变化时，也跟着重新计算
const double = computedInject(key, source => {
  return source * 2
})

double.value // 2
</script>
```

<br />

### 默认值

当不确定上层组件是否提供 `provide` 时，可以设置第三个参数作为默认值

```html
<script setup>
import { computedInject } from '@vueuse/core'

const key = 'foo'

const effect = source => {
  return source * 2
}

// 设置默认值为 1
const double = computedInject(key, effect, 1)

double.value // 2
</script>
```

工厂函数型默认值

```html
<script setup>
import { computedInject } from '@vueuse/core'

const key = 'foo'

const effect = source => {
  return source * 2
}

// 默认值工厂函数
const defaultFactory = () => 100

// 当第四个参数为 true 时，将调用 defaultFactory 来生成默认值
const double = computedInject(key, effect, defaultFactory, true)

double.value // 200
</script>
```

<br />

### setter

```html
<script setup>
import { computedInject } from '@vueuse/core'

const key = 'foo'

const double = computedInject(key, {
    get(source) {
        return source * 2
    },
    set(v) {
        conosle.log('赋值 double 时', v)
    }
})
</script>
```