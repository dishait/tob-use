# useOffsetPagination

偏移分页

## Usage

### 基础

```js
import { useOffsetPagination } from '@/uni_modules/tob-use'

const result = useOffsetPagination({
  page: 1, // 初始当前第几页，默认为 1
  pageSize: 20, // 每页元素数量，默认为 10
  total: 100 // 总元素数量，默认为 Infinity 无限
})

result.pageCount.value // 总页数，计算属性

result.currentPage.value // 当前第几页，计算属性

result.isFirstPage.value // 是否是第一页，计算属性
result.isLastPage.value // 是否是最后一页，计算属性

result.currentPageSize.value // 当前每页元素数量，计算属性

result.prev() // 上一页，触发 result.currentPage.value++
result.next() // 下一页，触发 result.currentPage.value--
```

<br />

### 回调

```ts
import { useOffsetPagination } from '@/uni_modules/tob-use'

const result = useOffsetPagination({
    // 省略其他配置 ...
    // 总页数 result.pageCount 变化时触发
    onPageCountChange(result) {
        result // 上一次的结果，不过是一个 reactive
    },
    // 当前第几页 result.currentPage 变更时触发
    onPageChange(result) {
        result // 上一次的结果，不过是一个 reactive
    },
    // 当前每页元素数量 result.currentPageSize 变化时触发
    onPageSizeChange(result) {
         result // 上一次的结果，不过是一个 reactive
    }
})
```