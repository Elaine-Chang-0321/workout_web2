# 網頁規格說明書 (index.html)

## 1. 檔案名稱
`index.html`

## 2. 頁面標題
網頁標題應為 "My Workout Webpage"

## 3. 基本結構
網頁應包含基本的 HTML5 結構，包括 `<!DOCTYPE html>`、`<html>`、`<head>` 和 `<body>` 標籤。

## 4. 字元編碼
應設定為 UTF-8。

## 5. 響應式設計
網頁應具備響應式設計，以適應不同裝置的螢幕大小。應在 `<head>` 中加入適當的 viewport meta 標籤。

## 6. 樣式
### 6.1 外部樣式表
應連結一個外部 CSS 檔案，例如 `style.css`。

### 6.2 內聯樣式
避免使用內聯樣式。

## 7. JavaScript
### 7.1 外部 JavaScript 檔案
應連結一個外部 JavaScript 檔案，例如 `script.js`。
JavaScript 檔案應在 `<body>` 結束標籤前載入，並使用 `defer` 屬性。

## 8. 內容區塊
### 8.1 導覽列 (Navigation Bar)
- 應包含一個 `<nav>` 標籤。
- 導覽列中應有至少三個連結，例如 "Workout log"、"Personal Bests"、"Inbody"。

### 8.2 頁首 (Header)
- 應包含一個 `<header>` 標籤。
- 頁首中應包含一個主要標題 `<h1>`，例如 "Welcome to My Workout Webpage"。

### 8.3 主要內容區 (Main Content Area)
- 應包含一個 `<main>` 標籤。
- 主要內容區應包含至少兩個區塊 `<div>`，用於展示不同的運動內容或資訊。
- 每個區塊應包含一個次要標題 `<h2>` 和一些段落文字 `<p>`。

### 8.4 頁尾 (Footer)
- 應包含一個 `<footer>` 標籤。
- 頁尾中應包含版權資訊，例如 "© 2023 My Workout Webpage"。

## 9. 語義化 HTML
應盡可能使用語義化 HTML5 標籤 (例如 `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) 以提高可讀性和 SEO。

## 10. 可訪問性 (Accessibility)
- 圖片應包含 `alt` 屬性。
- 連結應有明確的文字描述。