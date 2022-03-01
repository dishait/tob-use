# tryOnUnmounted

卸载时触发

比原生的 `onUnmounted` 更安全

## Usage

```js
import { tryOnUnmounted } from '@/uni_modules/tob-use'

// 不在组件内，将不会注册回调
tryOnUnmounted(() => {
    console.log("这将不做任何事情")
})
```

```html
<script setup>
import { tryOnUnmounted } from '@/uni_modules/tob-use'

// 在组件内，就像平常的 onUnmount
tryOnUnmounted(() => {
    console.log("这将不做任何事情")
})
</script>
```

