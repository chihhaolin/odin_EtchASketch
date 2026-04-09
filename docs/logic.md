# Etch-a-Sketch — Logic Spec

## 1. 網格產生邏輯

- 預設網格大小：16×16
- 函式 `createGrid(size)` 接受一個整數 `size`，產生 size × size 個 div
- 每個 div 加上 class `grid-cell`
- 所有 cell 附加至 `#grid-container`
- 呼叫前先清空現有 container 內容（`innerHTML = ''`）

## 2. 重設網格邏輯

- 按下 Reset 按鈕後，呼叫 `window.prompt()` 取得使用者輸入
- 驗證輸入：
  - 必須為正整數
  - 最大值為 100
  - 若輸入無效或取消，保留現有網格不變
- 驗證通過後呼叫 `createGrid(newSize)`

## 3. 塗色邏輯（基本）

- 監聽每個 `.grid-cell` 的 `mouseover` 事件
- 觸發時，將該 cell 的 `background-color` 設為預設塗色顏色（預設深色，例如 #333）

## 4. 塗色邏輯（進階 Extra Credit）

### 4a. 隨機 RGB 顏色
- 每次 `mouseover` 時，產生隨機 RGB 值：
```js
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
```

### 4b. 漸進變暗（Progressive Darkening）
- 每個 cell 記錄互動次數（可用 `dataset.count`）
- 每次 `mouseover`，count + 1
- opacity = count × 0.1（最大為 1.0）
- 可與隨機 RGB 搭配使用

## 5. 網格尺寸固定邏輯

- container 固定為 960px × 960px
- 每個 cell 的寬高 = `960 / size` px
- 透過 JavaScript 動態設定每個 cell 的 `width` 與 `height`