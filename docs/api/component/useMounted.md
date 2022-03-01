# useMounted

使用被挂载状态

## Usage

```html
<script setup>
import { ref } from 'vue'
import { useMounted } from '@/uni_modules/tob-use/index.js'

const isMounted = useMounted()

isMounted.value // 未挂载前，false

setTimeout(() => {
    isMounted.value // 挂载后，true
})
</script>
```

