<script setup>
import { useInterval } from '@/uni_modules/tob-use'

const { counter, pause, resume, isActive } = useInterval(200, {
	controls: true
})

const toggle = () => isActive.value ? pause() : resume()
</script>
	
<template>
	<view class="w-screen h-screen flex items-center justify-center cursor-pointer" @tap="toggle">
		TODO {{counter}}
	</view>
</template>
