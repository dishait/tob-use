# useToggle

切换

## Usage

```js
import { useToggle } from '@/uni_modules/tob-use'

const [state, toggle] = useToggle()

state.value // false

toggle()

state.value // true

toggle(true)

state.value // true
```

当传入一个 `ref` 时，`useToggle` 将只返回 `toggle` 函数 👇

```ts
import { useToggle } from '@/uni_modules/tob-use'

const state = ref(false)

const toggle = useToggle()

state.value // false

toggle()

state.value // true

toggle(true)

state.value // true
```