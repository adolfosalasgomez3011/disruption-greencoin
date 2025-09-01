<template>
  <!-- Closing slide: image only, no content overlay -->
  <div class="utec-closing" :style="bgStyle" aria-hidden="true"></div>
</template>

<script setup lang="ts">
const props = defineProps<{ backgroundImage?: string }>()
// Resolve asset through Vite so it works in dev & production builds
const closingUrl = new URL('../assets/closing.png', import.meta.url).href
const bg = props.backgroundImage || closingUrl
const bgStyle = { backgroundImage: `url('${bg}')` }
</script>

<style>
.utec-closing {
  width: 100%;
  height: 100%;
  /* fallback color if image missing */
  background-color: #0b0f2b;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
}
</style>
