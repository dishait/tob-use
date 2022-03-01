# useMemoize

使用备份

即输入相同参数的情况下，直接走缓存。

## Usage

### 基础

```js
import { useMemoize } from '@/uni_modules/tob-use'

// 生成数组
const generateArray = length => {
    return Array.from({ length }, (_, i) => i)
}

const useArray = useMemoize(
   length => {
       return Array.from({ length }, (_, i) => i)
   }
)

const a1 = useArray(1) // 使用长度为 1 的新数组
const a2 = useArray(2) // 使用长度为 2 的新数组

const a3 = useArray(1) // 从缓存里拿到之前长度为 1 的数组


const a4 = useArray.load(1) // 重新生成数组长度为 1 的新数组(即不用缓存里的)

useArray.cache // 当前缓存，一个 reactive 的 map 

useArray.delete(1) // 将数组长度为 1 的数组从缓存中删除
useArray.clear() // 清除所有缓存
```

<br />

### 缓存

大多数情况你不需要手动生成缓存，`useMemoize` 内部会自动生成 `reactive` 的 `map` 缓存。

当然有时候我们希望让两个 `useMemoize` 共用缓存。那么可以这样 👇

```ts
import { useMemoize } from '@/uni_modules/tob-use'

// 被共用的缓存
const cache = new Map()

const generateArray = length => {
    return Array.from({ length }, (_, i) => i)
}

const useArray1 = useMemoize(generateArray, { cache })
const useArray2 = useMemoize(generateArray, { cache })

const a1 = useArray1(1) // 使用长度为 1 的新数组

const a2 = useArray2(1) // 使用缓存里长度为 1 的数组
```

<br />

### 自定义 Key

默认情况下，`useMemoize` 会自动根据函数所有的参数作为缓存的 `key`

```ts
import { useMemoize } from '@/uni_modules/tob-use'

// 生成数组，但可以传入第二个参数递增倍数
const generateArray = (length, multiple = 1) => {
    return Array.from({ length }, (_, i) => i * multiple)
}
const useArray = useMemoize(generateArray, {
    getKey(length, multiple) {
        return length // 默认以所有参数为 key，但这里只让第一个参数为 key
    }
})

const a1 = useArray(10, 2) // 使用长度为 10，2 倍递增的新数组

// 即使设置了 3 倍递增，但是我们只以第一参数为 key，所以仍然复用缓存
const a2 = useArray(10, 3) 
```