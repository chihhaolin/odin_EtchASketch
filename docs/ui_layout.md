# Etch-a-Sketch — UI Layout Spec

## 整體頁面結構
```
<body>
  <header>
    <h1>Etch-a-Sketch</h1>
    <button id="reset-btn">Reset Grid</button>
  </header>
  <main>
    <div id="grid-container"></div>
  </main>
</body>
```

## 各區塊規格

### Header
- 位置：頁面頂部
- 排列：水平排列，標題與按鈕並排（Flexbox）
- 對齊：垂直置中
- 內距：`padding: 16px 24px`
- 底部邊框：`1px solid #cccccc`（視覺分隔）

### Reset 按鈕
- 位置：header 右側（或標題旁）
- 大小：`padding: 8px 16px`
- 圓角：`border-radius: 6px`
- 字體大小：`14px`
- cursor：`pointer`

### Grid Container (`#grid-container`)
- 寬度：固定 `960px`
- 高度：固定 `960px`
- 置中於頁面：`margin: 32px auto`
- display：`flex`
- flex-wrap：`wrap`
- 邊框：`1px solid #cccccc`（可選）
- box-sizing：`border-box`

### Grid Cell (`.grid-cell`)
- 寬高：`960px / size`（由 JS 動態設定）
- box-sizing：`border-box`
- 預設背景：`#ffffff`
- 邊框（可選）：`1px solid #e0e0e0`

## RWD / 響應式
- 本專案為桌面版為主，不強制要求 RWD
- 若畫面寬度小於 960px，可讓 container 縮小至 `90vw`（選配）

## 字型
- 全站使用系統預設 sans-serif：`font-family: system-ui, sans-serif`