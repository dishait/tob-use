# tryOnScopeDispose

尝试获取 `effect` 区域内的副作用

这是一个较为底层的 `api`，需要你对 `effect` 作用域有非常好的理解。

大多数情况下，它相当于 [tryOnUnmounted](/api/component/tryOnUnmounted)

## Usage

```js
import { tryOnScopeDispose } from '@/uni_modules/tob-use'

// 不在组件内，将不会注册回调，并返回 false
const result = tryOnScopeDispose(() => {
    console.log("这将不做任何事情")
})

result // false
```

```html
<script setup>
import { tryOnScopeDispose } from '@/uni_modules/tob-use'

const timer = setTimeout(() => {
    console.log("我可能不会触发")
}, 1000000)

// 在组件内，当组件去卸载时
// 因为 setup 也算 effect 一个作用域，所以将执行回调
const result = tryOnScopeDispose(() => {
    clearTimeout(timer)
})

result // true
</script>
```

