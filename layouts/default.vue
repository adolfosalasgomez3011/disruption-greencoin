<template>
  <div class="utec-default">
    <div class="utec-safe">
      <slot />
    </div>
  </div>
</template>

<style>
:root {
  --utec-safe-left: 12%;
  --utec-safe-right: 12%;
}

.utec-default {
  width: 100%;
  height: 100%;
  /* fallback color if background is not provided by theme */
  background-color: #f7f7f9;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #0a0a0a;
}

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

.utec-safe h1, .utec-safe h2, .utec-safe h3, .utec-safe h4, .utec-safe h5 {
  color: #0a0a0a;
  text-shadow: 0 1px 0 rgba(255,255,255,0.6);
}
.utec-safe p, .utec-safe li, .utec-safe blockquote, .utec-safe code {
  color: #111;
}

@media (max-width: 1024px) {
  :root {
    --utec-safe-left: 12%;
    --utec-safe-right: 12%;
  }
}
</style>
