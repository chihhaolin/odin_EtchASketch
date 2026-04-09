# Etch-a-Sketch — Interaction Spec

## 1. 滑鼠塗鴉互動

| 項目 | 規格 |
|------|------|
| 觸發事件 | `mouseover`（滑鼠進入 cell）|
| 作用對象 | 每個 `.grid-cell` |
| 行為 | 改變該 cell 的背景色（基本 / 隨機 / 漸進變暗）|
| 事件委派 | 建議綁定在 `#grid-container` 上，用 event delegation 處理 |

### 事件監聽方式（推薦）
```js
gridContainer.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('grid-cell')) {
    paintCell(e.target);
  }
});
```

## 2. Reset 按鈕互動

| 項目 | 規格 |
|------|------|
| 觸發方式 | 點擊 `#reset-btn` |
| 彈出視窗 | `window.prompt('Enter grid size (max 100):')` |
| 輸入驗證 | 正整數、範圍 1–100，否則不執行 |
| 成功後行為 | 清空 container，重新產生新網格 |
| 取消行為 | 使用者按取消，保留現有網格 |

## 3. 輸入驗證流程
```
使用者點擊 Reset
  → prompt 彈出
  → 使用者輸入數字
    → 若取消 (null)：不做任何事
    → 若非數字或 <= 0：alert 錯誤訊息，不重設
    → 若 > 100：alert 超過上限，不重設
    → 若有效：呼叫 createGrid(size)
```

## 4. 頁面載入行為

- 頁面載入完成後（`DOMContentLoaded`），自動產生預設 16×16 網格
- 無需使用者任何操作即可開始塗鴉

## 5. 無拖曳需求

- 本專案僅需 `mouseover` 即可塗色，**不需要** mousedown/mouseup 拖曳邏輯
- 若未來想加入「按住才能畫」的功能，需額外追蹤 `isMouseDown` 狀態（非必要）