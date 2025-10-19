# 網頁規格說明書 (index.html)

## 1. 檔案名稱
`index.html`

## 2. 頁面標題
網頁標題應為 "Elaine's Workout"

## 3. 基本結構
網頁應包含基本的 HTML5 結構，包括 `<!DOCTYPE html>`、`<html>`、`<head>` 和 `<body>` 標籤。

## 4. 字元編碼
應設定為 UTF-8。

## 5. 響應式設計
網頁應具備響應式設計，以適應不同裝置的螢幕大小。應在 `<head>` 中加入適當的 viewport meta 標籤。

## 6. 樣式
### 6.1 CSS 框架
應使用 Tailwind CSS CDN。

### 6.2 背景樣式
背景圖為專案根目錄下的 `workout.png`。
背景需覆蓋整個畫面 (`background-size: cover; background-position: center; background-attachment: fixed;`)。
背景上應有白色半透明遮罩（透明度約 70%，例如 `rgba(255,255,255,0.7)`），並使用 `background-blend-mode: overlay;`。

## 7. 內容區塊
### 7.1 Hero 區塊
- 應包含一個主要標題 `<h1>`，例如 "Let's workout"，樣式為 `font-extrabold text-5xl md:text-7xl tracking-wide text-gray-900`。
- 應包含一句激勵性副標題，例如 "Track your workouts, beat your best, and know your body."。
- 應包含一個主行動按鈕 "Start now"，具有 `hover` 變深色效果。

### 7.2 功能按鈕區塊
- 應包含三個圓形功能按鈕，置中、等寬，`hover` 時有陰影和微放大 (`scale 105%`) 效果，過渡時間為 `200ms`。
- 按鈕文字應為 "Workout Log"、"Personal Bests"、"Body Metrics"。
- 按鈕應連結到 `#workout-log`、`#personal-bests`、`#body-metrics` 錨點。

### 7.3 介紹段落 (Card 風格)
- 應包含至少三個區塊 `<div>`，用於展示不同的運動內容或資訊，例如 "Cardio Exercise"、"Strength Training" 和 "Body Metrics Tracking"。
- 每個區塊應包含一個次要標題 `<h2>` 和一些段落文字 `<p>`。
- 這些區塊應具有卡片風格，例如背景色為白色半透明 (`bg-black bg-opacity-50`)、圓角和柔和陰影。

### 7.4 頁腳 (Footer)
- 應包含一個 `<footer>` 標籤。
- 頁腳中應包含版權資訊，例如 "© 2025 Elaine’s Workout"。

## 8. 語義化 HTML 與可訪問性
- 應使用語義化 HTML5 標籤 (例如 `<section>`, `<footer>`)。
- 圖片應包含 `alt` 屬性。
- 連結應有明確的文字描述。

## 9. 排版與響應式設計
- 所有內容（大標題、按鈕或連結）應置中顯示在畫面中央，容器樣式為 `flex flex-col items-center justify-center min-h-screen text-center`。
- 網頁應相容手機（375px 起）到桌機（1440px），並確保背景完整、文字不被截斷。
- 段落行高應為 1.7。