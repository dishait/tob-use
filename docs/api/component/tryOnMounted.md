# tryOnMounted

在挂载后触发

比原生的 `onMount` 更安全

## Usage

```js
import { tryOnMounted } from '@/uni_modules/tob-use'

// 不在组件内，将直接调用
tryOnMounted(() => {
    console.log("这将不做任何事情")
})
```

```html
<script setup>
import { tryOnMounted } from '@/uni_modules/tob-use'

// 在组件内，就像平常的 onMount
tryOnMounted(() => {
    console.log("这将不做任何事情")
})
</script>
```

<br />

### 非同步

```js
import { tryOnMounted } from '@/uni_modules/tob-use'

// 不在组件内，设置第二参数，将在 nextTick 调用
tryOnMounted(() => {
    console.log("这将不做任何事情")
}, false)
```