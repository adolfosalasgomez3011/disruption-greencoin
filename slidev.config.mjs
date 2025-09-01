// Robust theme selection that prefers a valid env override, otherwise bundled theme
import fs from 'node:fs'

const envTheme = process.env.SLIDEV_THEME
const theme = envTheme && fs.existsSync(envTheme)
  ? envTheme
  : './themes/utec-disruption-theme'

export default {
  theme,
}
