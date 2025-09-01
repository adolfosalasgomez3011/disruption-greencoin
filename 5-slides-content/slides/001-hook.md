---
layout: default
---

<script setup>
import { ref } from 'vue'
// Show text immediately so this slide doesn't look like a second cover
const revealText = ref(true)
</script>

<h1 class="text-4xl font-800 leading-tight" style="font-size:2.25rem; font-weight:800; line-height:1.2; margin: 0 0 0.5rem 0;">
	What’s more valuable: a clover or a gold bar?
</h1>

<div class="hook-row" style="display:flex; gap:30px; align-items:center; width:100%; margin-top:0rem; padding-bottom:25px;">
	<!-- Left: Video (50%) -->
		<div class="hook-col-video" style="flex:1 1 30%; max-width:35%; display:flex; justify-content:center;">
		<video src="../../6-assets/6.1-multimedia-assets/20250831_1443_Balancing Wealth and Luck_simple_compose_01k40tgfxafrmayh4nxf57mt3f.mp4" playsinline autoplay muted loop style="width:100%; height:auto; border-radius:8px;">
			Sorry, your browser doesn’t support embedded videos.
		</video>
	</div>
	<!-- Right: Text box (50%) reveals after 5s) -->
			<div class="hook-col-text" style="flex:1 1 30%; max-width:50%; display:flex; justify-content:center; align-items:center;">
				<div :style="{ opacity: revealText ? 1 : 0 }" style="transition: opacity .6s ease; width:100%; color:#fff; padding:16px 18px; border-radius:12px; text-align:center; background: rgba(0, 0, 0, 0.77); backdrop-filter: blur(12px) saturate(140%); -webkit-backdrop-filter: blur(12px) saturate(140%); box-shadow: 0 10px 24px rgba(0,0,0,0.35); border: 1px solid rgba(255,255,255,0.06);">
					<h3 style="margin:0; font-size:1.0rem; line-height:1.6; font-weight:700; color:#fff !important; -webkit-text-fill-color:#fff !important; -webkit-text-stroke:0 !important; text-shadow:none !important; mix-blend-mode:normal;">
				The answer seems obvious—the gold bar. You can’t just get one tomorrow. A clover? Pick one in any park. Now, let’s talk about something rarer than clover and more precious than gold: natural heritage. In Peru it’s abundant; in the world, it’s scarce. We just need a better way to approach—and protect—it.
			</h3>
		</div>
	</div>
</div>

<!-- Image generation prompt (from storyboard Slide 1):
Generate with HF MCP using this prompt:
"A classic balance scale where the left pan holds a gold bar and the right pan holds a clover; the scale is in perfect equilibrium. Clean, minimal, presentation-friendly composition."
-->