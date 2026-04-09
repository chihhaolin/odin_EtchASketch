# Etch-a-Sketch — UI Color Spec

## 整體色調
- 風格：簡潔、低干擾，讓畫布成為視覺主角
- 主色系：中性灰白背景 + 深色文字

## 色彩定義

| 元素 | 顏色 | 色碼 |
|------|------|------|
| 頁面背景 | 淺灰白 | `#f5f5f5` |
| Grid Container 背景 | 白色 | `#ffffff` |
| Grid Container 邊框 | 中灰 | `#cccccc` |
| Grid Cell 預設背景 | 白色 | `#ffffff` |
| Grid Cell 邊框 | 極淺灰（可選） | `#e0e0e0` |
| Grid Cell hover / 塗色後 | 深灰 | `#333333` |
| 按鈕背景 | 深灰藍 | `#4a5568` |
| 按鈕文字 | 白色 | `#ffffff` |
| 按鈕 hover 狀態 | 較深 | `#2d3748` |
| 頁面標題文字 | 深灰 | `#1a1a1a` |

## 進階 Extra Credit 色彩行為

- **隨機 RGB 模式**：每次互動產生完全隨機的 `rgb(r, g, b)` 值，無固定色碼
- **漸進變暗模式**：
  - 初始透明（opacity: 0）
  - 每次互動 opacity += 0.1
  - 第 10 次互動後 opacity = 1.0（完全不透明）
  - 底色建議為黑色 `#000000`，透過 opacity 控制顯示深度

## 注意事項
- Grid cell 的 border 會影響實際顯示大小，需使用 `box-sizing: border-box`
- 若使用 border 分隔 cell，建議使用極淺色避免干擾畫圖視覺