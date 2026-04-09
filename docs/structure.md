# Etch-a-Sketch — Structure Spec

## 檔案結構
```
odin_EtchASketch/
├── index.html
├── style.css
├── script.js
└── docs/
    ├── target.md
    ├── logic.md
    ├── ui_color.md
    ├── ui_layout.md
    ├── interaction.md
    └── structure.md
```

## HTML 結構規範 (`index.html`)

- 使用語意化標籤：`<header>`, `<main>`
- `<link>` 連結 `style.css`（放在 `<head>` 內）
- `<script src="script.js">` 放在 `</body>` 前，或使用 `defer`
- Grid container：`<div id="grid-container"></div>`（空白，由 JS 填入）

## CSS 規範 (`style.css`)

- 使用 class 選擇器為主（`.grid-cell`）
- ID 選擇器用於唯一元素（`#grid-container`, `#reset-btn`）
- 避免使用 inline style（由 JS 動態設定 cell 寬高除外）
- 禁止使用 CSS Grid（本專案練習 Flexbox）
- 使用 `box-sizing: border-box` 全域套用

## JavaScript 規範 (`script.js`)

### 函式職責分離

| 函式名稱 | 職責 |
|----------|------|
| `createGrid(size)` | 清空 container，產生 size×size 個 cell |
| `paintCell(cell)` | 處理單一 cell 的塗色邏輯 |
| `getRandomColor()` | 回傳隨機 RGB 字串（Extra Credit）|
| `handleReset()` | 處理 reset 按鈕點擊，含 prompt 與驗證 |

### 初始化
```js
document.addEventListener('DOMContentLoaded', () => {
  createGrid(16);
});
```

### 命名規範
- 變數：camelCase（例：`gridContainer`, `cellSize`）
- 常數：camelCase 或 UPPER_SNAKE_CASE（例：`DEFAULT_SIZE = 16`）
- 函式：動詞開頭 camelCase（例：`createGrid`, `paintCell`）

## Git 規範

- 每完成一個功能即 commit（early & often）
- commit message 格式建議：
  - `feat: add grid generation`
  - `feat: add hover paint effect`
  - `feat: add reset button with prompt`
  - `feat: add random color mode`
  - `feat: add progressive darkening`
- 推送至 GitHub public repository