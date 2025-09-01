<template>
  <div class="utec-default">
    <div class="utec-safe">
      <slot />
    </div>
  </div>
  
</template>

<style>
:root {
  /* Safe region boundaries – tweak these to match the red margin you drew */
  --utec-safe-left: 12%;  /* space to avoid left logo/decor */
  --utec-safe-right: 12%; /* space to avoid right decoration/logo */
}

.utec-default {
  width: 100%;
  height: 100%;
  /* Resolved via Vite below to ensure correct asset path */
  background-image: var(--utec-body-bg-url);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #0a0a0a;
}

/* Safe content area: avoid left 22% where logo/decor lives in assets */
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

/* Optional: slightly stronger contrast for lists on light backgrounds */
.utec-safe li { text-shadow: 0 1px 0 rgba(255,255,255,0.35); }

/* Responsive adjustment: reduce margins on narrow screens */
@media (max-width: 1024px) {
  :root {
  --utec-safe-left: 12%;
  --utec-safe-right: 12%;
  }
}
</style>

<script>
// Inject a CSS variable with the resolved URL so styles can reference it
const bodyUrl = new URL('../assets/body.png', import.meta.url).href
const style = document.createElement('style')
style.innerHTML = `:root { --utec-body-bg-url: url('${bodyUrl}'); }`
document.head.appendChild(style)
export default {}
</script>
