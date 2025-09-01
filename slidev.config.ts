// Allow Node env access in TS without adding @types/node
declare const process: any
import { defineConfig } from 'slidev'

export default defineConfig({
  // Use env override for local absolute theme if provided; otherwise fallback to bundled theme for deploy
  theme: process.env.SLIDEV_THEME || './themes/utec-disruption-theme',
})
