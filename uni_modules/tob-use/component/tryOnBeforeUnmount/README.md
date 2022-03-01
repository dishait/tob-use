# tryOnBeforeUnmount

在卸载前触发

比原生的 `onBeforeUnmount` 更安全
## Usage

```js
import { tryOnBeforeUnmount } from '@/uni_modules/tob-use'

// 不在组件内，将不会注册回调
tryOnBeforeUnmount(() => {
    console.log("这将不做任何事情")
})
```

```html
<script setup>
import { tryOnBeforeUnmount } from '@/uni_modules/tob-use'

// 在组件内，就像平常的 onBeforeUnmount
tryOnBeforeUnmount(() => {
    console.log("这将不做任何事情")
})
</script>
```

