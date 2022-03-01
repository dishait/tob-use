# useCycleList

环表

## Usage

### 基础

```js
import { useCycleList } from '@/uni_modules/tob-use'

const { state, next, prev, index } = useCycleList([
  'Dog',
  'Cat',
  'Lizard',
])

state.value // 'Dog'
index.value // 0

prev() // 上一个
state.value // 'Lizard'
index.value // 2

next() // 下一个
state.value // 'Dog'
index.value // 0

next(2) // 下两个
state.value // 'Lizard'

prev(2) // 上两个
state.value // 'Dog'
```

<br />

### 初始值

```ts
import { useCycleList } from '@/uni_modules/tob-use'

const { state, next, prev } = useCycleList([
  'Dog',
  'Cat',
  'Lizard',
], { initialValue: 'init' })

state.value // 'init'

next() // 下一个

state.value // 'Dog'
```
