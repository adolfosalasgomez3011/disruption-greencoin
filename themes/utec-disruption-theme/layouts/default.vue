<template>
  <div class="utec-default" :style="bgStyle">
    <div class="utec-safe">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// Resolve asset through Vite so it works in dev & production builds
const bodyUrl = new URL('../assets/body.png', import.meta.url).href
const bgStyle = { backgroundImage: `url('${bodyUrl}')` }
</script>

<style>
:root {
  /* Safe region boundaries */
  --utec-safe-left: 12%;
  --utec-safe-right: 12%;
}

.utec-default {
  position: relative;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #0a0a0a;
}

/* Subtle overlay so content slides look distinct vs. the cover */
.utec-default::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.22);
  pointer-events: none;
}

/* Safe content area: avoid decorations at the sides */
.utec-safe {
  position: relative;
  box-sizing: border-box;
  width: calc(100% - var(--utec-safe-left) - var(--utec-safe-right));
  height: 100%;
  margin-left: var(--utec-safe-left);
  margin-right: var(--utec-safe-right);
  padding: 2.5rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Improve readability on light backgrounds */
.utec-safe h1, .utec-safe h2, .utec-safe h3, .utec-safe h4, .utec-safe h5 {
  color: #0a0a0a;
  text-shadow: 0 1px 0 rgba(255,255,255,0.6);
}
.utec-safe p, .utec-safe li, .utec-safe blockquote, .utec-safe code {
  color: #111;
}

.utec-safe li { text-shadow: 0 1px 0 rgba(255,255,255,0.35); }

@media (max-width: 1024px) {
  :root {
    --utec-safe-left: 12%;
    --utec-safe-right: 12%;
  }
}
</style>
