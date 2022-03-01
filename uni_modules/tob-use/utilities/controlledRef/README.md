# controlledRef

受控型 ref

## Usage

### 基础

```js
import { computed } from 'vue'
import { controlledRef } from '@/uni_modules/tob-use'

let num = controlledRef(0)
const doubled = computed(() => num.value * 2)

// 原生行为
num.value = 42
console.log(num.value) // 42
console.log(doubled.value) // 84

// 设置值，但是不触发更新 (第二参数设置为 false 时)
num.set(30, false)
console.log(num.value) // 30
console.log(doubled.value) // 84 (仍然是 84，不会更新)

// 偷窥，获取值，但不 track 收集副作用
watchEffect(() => {
  console.log(num.peek()) // 30
}) 

// 即使更新了依赖
// 也不会 trigger 触发上边的 watchEffect 注册的副作用回调
num.value = 50
console.log(doubled.value) // 100
```

<br />

### 静默

有时候我们不希望 `getter` 访问时 `track` 收集副作用，或 `setter` 设置时 `trigger` 触发副作用。

```ts
import { controlledRef } from '@/uni_modules/tob-use'

const foo = controlledRef('foo')
```

```ts
// 静默访问，以下 api 等效，选择其一即可
foo.get(false)
foo.untrackedGet()
foo.peek()
```

```ts
// 静默设置，以下 api 等效，选择其一即可
foo.set('bar', false)
foo.silentSet('bar')
foo.lay('bar')
```

<br />

### 配置

#### onBeforeChange

配置 `onBeforeChange` 可以判断是否接受新值

```ts
import { controlledRef } from '@/uni_modules/tob-use'

const num = controlledRef(0, {
  onBeforeChange(value, oldValue) {
    if (Math.abs(value - oldValue) > 5) {
       return false // 返回 false 时，该值被忽略
    }
  }
})

num.value = 1
console.log(num.value) // 1

num.value = 7
console.log(num.value) // 1 (新值被忽略了)
```

#### onChanged

类似原生的 `watch`，可以监听值的变更。

```ts
import { controlledRef } from '@/uni_modules/tob-use'

const num = controlledRef(0, {
  onChanged(value, oldValue) {
    console.log(value)
  }
})


num.value = 1 // 打印 1

num.value = 2 // 打印 2
```

