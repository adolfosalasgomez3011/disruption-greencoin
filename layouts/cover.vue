<template>
  <div class="utec-cover" :style="bgStyle" aria-hidden="true"></div>
</template>

<script setup lang="ts">
const props = defineProps<{ backgroundImage?: string }>()
const bg = props.backgroundImage || ''
const bgStyle = bg ? { backgroundImage: `url('${bg}')` } : {}
</script>

<style>
.utec-cover {
  width: 100%;
  height: 100%;
  background-color: #0b0f2b; /* fallback */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
