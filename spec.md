# 健身網站與API專案規格 (Workout Web Application & API Specification)

## 1. 專案簡介
本專案包含一個健身網站前端介面 (Workout_Web2) 及一個後端API服務 (Workout_API)，旨在提供使用者健身相關資訊與功能。

## 2. 前端介面 (Workout_Web2)

### 2.1 描述
Workout_Web2 是一個基於HTML的靜態網站，用於展示健身相關的內容，如身體部位鍛鍊、最佳訓練等。它包含多個頁面和圖像資源，提供使用者友善的瀏覽體驗。

### 2.2 主要檔案
*   [`index.html`](index.html): 網站的首頁。
*   [`workout.html`](workout.html): 展示特定健身計畫或鍛鍊的頁面。
*   [`body.html`](body.html): 可能用於展示身體部位相關資訊的頁面。
*   [`best.html`](best.html): 可能用於展示最佳訓練或推薦內容的頁面。
*   [`card.png`](card.png), [`pic1.png`](pic1.png) - [`pic10.png`](pic1.png), [`workout.png`](workout.png): 網站中使用的圖像資源。
*   [`task.md`](task.md): 專案相關任務或待辦事項文件。

### 2.3 使用技術
*   HTML
*   CSS

## 3. 後端API服務 (Workout_API)

### 3.1 描述
Workout_API 是一個基於Node.js的後端服務，提供前端介面所需的資料和業務邏輯。此服務透過標準HTTP協定進行通訊。

### 3.2 主要檔案
*   [`index.js`](../Workout_API/index.js): API服務的入口點檔案，包含主要的路由和邏輯。
*   [`package.json`](../Workout_API/package.json): 定義專案的元數據和所有Node.js依賴項。
*   [`package-lock.json`](../Workout_API/package-lock.json): 記錄了安裝依賴項時的精確版本，確保團隊成員之間的一致性。
*   [`Procfile`](../Workout_API/Procfile): (如果存在) 用於Heroku等平台部署時指定應用程式啟動命令。

### 3.3 使用技術
*   Node.js
*   JavaScript
*   npm (用於套件管理)

## 4. 部署與運行
*   前端與後端應獨立部署。
*   前端網站可透過任何靜態網頁伺服器託管。
*   後端API服務需要Node.js環境運行，並可能透過 `Procfile` 指定的命令啟動。