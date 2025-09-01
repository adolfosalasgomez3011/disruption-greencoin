<template>
  <div class="utec-embed" :title="title">
    <iframe
      v-if="embedSrc"
      class="embed-frame"
      :src="embedSrc"
      frameborder="0"
      allowfullscreen
      referrerpolicy="no-referrer"
    />
    <div v-else class="embed-error">
      <p>Missing src or file for iframe layout. Provide either `src` (absolute URL) or `file` (served from project public/).</p>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  /** Absolute URL to embed directly (e.g., OneDrive/SharePoint/Office viewer embed link) */
  src?: string
  /** Path relative to project public/ (e.g., mydeck.pdf). Will be served at /mydeck.pdf */
  file?: string
  /**
   * How to render the file when using `file`:
   * - 'office'  -> Office Online viewer (requires public URL)
   * - 'google'  -> Google Docs viewer (requires public URL)
   * - 'pdf'     -> direct PDF (uses browser viewer)
   * - 'raw'     -> direct link in iframe
   */
  type?: 'office' | 'google' | 'pdf' | 'raw'
  /** Optional title (sets title attr on container) */
  title?: string
}>()

function toAbsolutePublicPath(p?: string) {
  if (!p) return ''
  // If absolute URL, return as-is
  if (/^https?:\/\//i.test(p)) return p
  // Otherwise treat as project public/ root path
  return `/${p.replace(/^\/+/,'')}`
}

const origin = computed(() => {
  try {
    // window may be undefined during SSR, guard it
    return typeof window !== 'undefined' ? window.location.origin : ''
  } catch {
    return ''
  }
})

const embedSrc = computed(() => {
  // Highest priority: explicit absolute src
  if (props.src) return props.src

  const base = toAbsolutePublicPath(props.file)
  if (!base) return ''

  const t = props.type || (base.endsWith('.pdf') ? 'pdf' : 'raw')

  // If we only have a local path, some viewers need a full URL
  const absolute = base.startsWith('http') || !origin.value
    ? base
    : `${origin.value}${base}`

  if (t === 'office') {
    const encoded = encodeURIComponent(absolute)
    return `https://view.officeapps.live.com/op/embed.aspx?src=${encoded}`
  }
  if (t === 'google') {
    const encoded = encodeURIComponent(absolute)
    return `https://docs.google.com/gview?embedded=1&url=${encoded}`
  }
  if (t === 'pdf') {
    // Let the browser PDF viewer handle it
    return base
  }
  // raw
  return base
})
</script>

<style>
.utec-embed {
  position: absolute;
  inset: 0;
  display: grid;
  background: transparent;
}
.embed-frame {
  width: 100%;
  height: 100%;
  border: 0;
}
.embed-error {
  margin: 2rem;
  color: #111;
  background: rgba(255,255,255,0.8);
  border: 1px solid rgba(0,0,0,0.1);
  padding: 1rem 1.25rem;
  border-radius: 8px;
}
</style>
