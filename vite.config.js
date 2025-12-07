import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/fair-split/',  // 👈 加入這一行！注意前後都要有斜線
})
```

---

### 第三步：安裝發布工具

我們要安裝一個小工具幫你把網頁推上去。請在終端機（黑色視窗，需先按 Ctrl+C 停止運作）輸入：

```bash
npm install gh-pages --save-dev