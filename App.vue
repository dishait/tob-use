<script setup>
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'  

onShow(() => console.log('App Show'))

onHide(() => console.log('App Hide'))

onLaunch(() => console.log('App Launch'))
</script>

<style lang="less">
@import url("@/uni_modules/tob-less/index.less");
</style>
