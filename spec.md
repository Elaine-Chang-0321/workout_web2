# 健身網站與API專案規格 (Workout Web Application & API Specification)

## 1. 專案簡介
本專案包含一個健身網站前端介面 (Workout_Web2) 及一個後端API服務 (Workout_API)，旨在提供使用者健身相關資訊與功能。

## 2. 前端介面 (Workout_Web2)

### 2.1 描述
Workout_Web2 是一個基於HTML、CSS 和 JavaScript 的靜態網站，利用 Tailwind CSS 框架構建，用於展示健身相關的內容，如身體部位鍛鍊、最佳訓練等。它包含多個頁面和圖像資源，提供使用者友善且響應式的瀏覽體驗。

### 2.2 主要檔案與導航關係

*   [`index.html`](index.html): **首頁**
    *   **內容與功能**: 網站的入口點，提供健身網站的概述。包含一個視覺搶眼的 Hero 區塊 ("Let's workout")，一個 "Start Now" 按鈕（連結到 YouTube 健身影片）。下方有三個圓形功能按鈕，分別連結到 "Workout Log" (`workout.html`), "Personal Bests" (`best.html`), 和 "Body Metrics" (`body.html`)。頁面還包含三個介紹段落，分別介紹 Cardio Exercise, Strength Training, 和 Body Metrics Tracking，為使用者提供網站主要功能的概覽。
    *   **預期用途**: 作為使用者進入網站的導航中心，快速了解網站提供的主要功能並引導至各子頁面。
    *   **導航關係**:
        *   點擊圓形按鈕導航至 [`workout.html`](workout.html) (Workout Log)。
        *   點擊圓形按鈕導航至 [`best.html`](best.html) (Personal Bests)。
        *   點擊圓形按鈕導航至 [`body.html`](body.html) (Body Metrics)。
        *   "Start Now" 按鈕連結至外部 YouTube 健身影片。

*   [`workout.html`](workout.html): **運動記錄頁面**
    *   **內容與功能**: 此頁面允許使用者記錄詳細的健身數據，包括日期、運動名稱、重量 (公斤)、次數和備註。頁面包含一個表單用於輸入數據，一個響應式表格用於顯示所有已記錄的運動項目。此外，還提供「清空所有記錄」、「匯出 JSON」和「匯入 JSON」的功能。使用者可以對表格中的每個項目進行「編輯」或「刪除」操作。此頁面透過 JavaScript 與後端 API 進行數據交互。
    *   **預期用途**: 追蹤、管理和分析使用者的運動記錄，支援數據的增刪改查及備份。
    *   **導航關係**:
        *   頁面頂部導航欄中的 "Home" 按鈕導航回 [`index.html`](index.html)。

*   [`body.html`](body.html): **身體指標頁面**
    *   **內容與功能**: 此頁面專為使用者記錄和追蹤身體指標而設計，包括日期、體重 (公斤)、體脂百分比和內臟脂肪水平。頁面左側為背景圖片，右側為輸入表單，底部為一個響應式表格，用於展示所有歷史身體指標記錄。使用者可以對表格中的每個項目進行「編輯」或「刪除」操作。此頁面的數據儲存在瀏覽器的 `localStorage` 中，不與後端 API 交互。
    *   **預期用途**: 追蹤和管理使用者的身體健康指標變化，幫助使用者了解身體組成趨勢。
    *   **導航關係**:
        *   頁面頂部導航欄中的 "Home" 按鈕導航回 [`index.html`](index.html)。

*   [`best.html`](best.html): **個人最佳頁面**
    *   **內容與功能**: 此頁面用於展示使用者的個人最佳運動記錄。頁面頂部包含一個搜尋輸入框，允許使用者按運動名稱過濾記錄，以及一個排序選擇器，提供多種排序方式（按重量、字母順序、日期）。運動記錄以具有翻轉效果的卡片形式展示，每張卡片正面顯示運動名稱、最佳重量、日期和次數，背面顯示一張隨機圖片 (`picX.png` 和 `card.png`)。點擊卡片上的 "View details" 會彈出該運動的所有歷史記錄。此頁面透過 JavaScript 與後端 API 進行數據交互。
    *   **預期用途**: 激勵使用者挑戰自我，展示運動成就，並提供歷史記錄的快速查詢。
    *   **導航關係**:
        *   頁面頂部導航欄中的 "Home" 按鈕導航回 [`index.html`](index.html)。
        *   卡片中的 "Log more" 按鈕導航至 [`workout.html`](workout.html)。

*   [`card.png`](card.png), [`pic1.png`](pic1.png) - [`pic10.png`](pic1.png), [`workout.png`](workout.png): 網站中使用的圖像資源，提供視覺豐富度。
*   [`task.md`](task.md): 專案相關任務或待辦事項文件 (目前可能為空或包含開發備註)。

### 2.3 網頁的配置呈現

*   **整體佈局**: 網站採用現代化的單頁面應用 (SPA) 風格導航。所有頁面均具有統一的頂部導航欄 (Header)，包含網站標題 "Let's workout!" 和一個回到首頁的連結。頁面內容通常在寬螢幕上居中顯示並限制最大寬度，以提供良好的閱讀體驗。
*   **響應式設計考量**: 網站利用 Tailwind CSS 的響應式功能，並在內嵌 CSS 中包含媒體查詢 (例如 `@media (max-width: 768px)`)，確保在不同螢幕尺寸（特別是行動裝置）上都能良好顯示。例如，`workout.html` 和 `body.html` 中的數據表格在小螢幕上會自動轉換為卡片式佈局，提高可讀性和操作性。
*   **主要區塊**:
    *   **導航欄 (Header)**: 網站所有頁面頂部均設有導航欄，包含品牌標識 (網站標題) 和快速返回首頁的按鈕。
    *   **內容區**: 每個頁面都有其獨特的內容區。`index.html` 包含 Hero 區塊、功能導航按鈕和介紹性卡片。`workout.html` 和 `body.html` 則分別側重於數據輸入表單和記錄展示表格。`best.html` 則以搜尋、排序工具欄和運動記錄卡片網格為核心。
    *   **頁腳 (Footer)**: `index.html` 包含一個簡潔的版權信息頁腳。
*   **視覺設計元素**:
    *   **字體**: 網站使用 Google Fonts 引入 'Inter' (作為主要內容字體) 和 'Baloo 2' (用於標題和強調文字，增添趣味性)。
    *   **背景**: `index.html` 和 `workout.html` 利用 [`workout.png`](workout.png) 作為背景圖片，並透過 CSS `background-blend-mode: overlay` 和半透明顏色遮罩來確保文字的可讀性。`body.html` 則採用柔和的線性漸變背景。
    *   **按鈕與卡片**: 廣泛採用圓角、陰影和過渡動畫效果的按鈕和卡片設計，提供現代且互動性強的視覺體驗。`best.html` 中的運動記錄卡片具備獨特的翻轉效果，增加使用者互動的樂趣。
    *   **表單元素**: 輸入框和文本區域設計簡潔，具有內陰影和聚焦時的環形高亮效果，提升使用者體驗。在無效輸入時，會顯示紅色的邊框和陰影，並有錯誤提示文字 (`<p class="text-xs text-[#DC2626] mt-1"></p>`)。
    *   **圖像**: [`card.png`](card.png) 和一系列 [`pic1.png`](pic1.png) 到 [`pic10.png`](pic1.png) 的圖片用於 `best.html` 的卡片背面及其他頁面的視覺裝飾。

### 2.4 使用技術
*   **前端**:
    *   **HTML5**: 負責網頁的結構和內容。
    *   **CSS3**: 負責網頁的樣式和佈局。
    *   **Tailwind CSS**: 一個實用優先的 CSS 框架，用於快速構建響應式和現代化的使用者介面。
    *   **JavaScript (Vanilla JS)**: 實現所有前端交互邏輯、表單驗證、DOM 操作、與後端 API 的數據交互（`workout.html` 和 `best.html`）。`body.html` 則利用 `localStorage` 進行本地數據存儲。
    *   **Google Fonts**: 'Inter' 和 'Baloo 2' 字體，提升視覺美感。

## 3. 後端API服務 (Workout_API)

### 3.1 描述
Workout_API 是一個基於 Node.js 的後端服務，提供前端介面所需的資料和業務邏輯。此服務透過標準 HTTP/HTTPS 協定進行通訊，為前端提供運動記錄和個人最佳記錄的數據。

### 3.2 主要檔案
*   [`index.js`](../Workout_API/index.js): API 服務的入口點檔案，包含主要的路由定義和業務邏輯處理。
*   [`package.json`](../Workout_API/package.json): 定義專案的元數據和所有 Node.js 依賴項。
*   [`package-lock.json`](../Workout_API/package-lock.json): 記錄了安裝依賴項時的精確版本，確保團隊成員之間的一致性。
*   [`Procfile`](../Workout_API/Procfile): (如果存在) 用於 Heroku 等 PaaS 平台部署時指定應用程式啟動命令。

### 3.3 API 功能與端點

**基礎 URL**: `https://workout-api.zeabur.app`

#### 3.3.1 運動記錄 (Workouts)

*   **`POST /api/workouts`**
    *   **功能**: 建立一筆新的運動記錄。
    *   **輸入 (請求體 - `application/json`)**:
        *   `date` (string, 必需): 運動日期，格式為 "YYYY-MM-DD"。
        *   `exercise` (string, 必需): 運動項目名稱。
        *   `weight_kg` (number, 可選): 運動重量 (公斤)。如果為空，則為 `null`。
        *   `reps` (number, 可選): 運動次數。如果為空，則為 `null`。
        *   `note` (string, 可選): 運動備註。如果為空，則為 `null`。
    *   **輸出 (響應數據 - `application/json`)**:
        *   成功: 返回包含新創建記錄的 JSON 對象，例如 `{ "id": "uuid", "date": "...", "exercise": "...", ... }`。
        *   失敗: 返回錯誤信息。

*   **`GET /api/workouts`**
    *   **功能**: 取得所有運動記錄。
    *   **輸入**: 無。
    *   **輸出 (響應數據 - `application/json`)**:
        *   成功: 返回運動記錄對象的陣列，例如 `[ { "id": "uuid", "date": "...", "exercise": "...", ... }, ... ]`。
        *   失敗: 返回錯誤信息。

*   **`PUT /api/workouts/:id`**
    *   **功能**: 更新指定 ID 的運動記錄。
    *   **輸入 (URL 參數)**: `id` (string, 必需): 待更新運動記錄的唯一識別符。
    *   **輸入 (請求體 - `application/json`)**:
        *   `date` (string, 必需): 更新後的運動日期。
        *   `exercise` (string, 必需): 更新後的運動項目名稱。
        *   `weight_kg` (number, 可選): 更新後的運動重量 (公斤)。
        *   `reps` (number, 可選): 更新後的運動次數。
        *   `note` (string, 可選): 更新後的運動備註。
    *   **輸出 (響應數據 - `application/json`)**:
        *   成功: 返回更新後的運動記錄對象。
        *   失敗: 返回錯誤信息。

*   **`DELETE /api/workouts/:id`**
    *   **功能**: 刪除指定 ID 的運動記錄。
    *   **輸入 (URL 參數)**: `id` (string, 必需): 待刪除運動記錄的唯一識別符。
    *   **輸出 (響應數據 - `application/json`)**:
        *   成功: 返回成功刪除的確認信息，例如 `{ "message": "Workout deleted successfully" }`。
        *   失敗: 返回錯誤信息。

#### 3.3.2 個人最佳 (Bests)

*   **`GET /api/bests`**
    *   **功能**: 取得所有運動項目的個人最佳記錄 (通常指最高重量)。
    *   **輸入**: 無。
    *   **輸出 (響應數據 - `application/json`)**:
        *   成功: 返回包含各運動最佳記錄的陣列，例如 `[ { "exercise": "臥推", "weight_kg": 100, "date": "...", "reps": 5 }, ... ]`。
        *   失敗: 返回錯誤信息。

*   **`GET /api/bests/:exerciseName`**
    *   **功能**: 取得特定運動項目的所有歷史記錄。
    *   **輸入 (URL 參數)**: `exerciseName` (string, 必需): 運動項目名稱 (需進行 URL 編碼)。
    *   **輸出 (響應數據 - `application/json`)**:
        *   成功: 返回該運動項目的所有記錄陣列，例如 `[ { "date": "...", "weight_kg": 90, "reps": 8 }, ... ]`。
        *   失敗: 返回錯誤信息。

#### 3.3.3 認證機制
根據前端程式碼分析，目前沒有明確的 API 認證機制（如 JWT Token、OAuth 或 Session-based 認證）被實作。API 預設為公開存取。

### 3.4 使用技術
*   **後端**:
    *   **Node.js**: 運行時環境，用於執行伺服器端 JavaScript 程式碼。
    *   **JavaScript**: 後端邏輯的開發語言。
    *   **Express.js (推測)**: 輕量級且靈活的 Node.js Web 應用程式框架，用於構建 API。
    *   **npm**: Node.js 的套件管理器，用於管理專案依賴。
*   **資料庫**:
    *   **未指定具體類型**: 根據 API 功能推斷，後端需要一個持久化儲存的資料庫來儲存運動記錄。常見的選擇包括關聯式資料庫 (如 PostgreSQL, MySQL) 或 NoSQL 資料庫 (如 MongoDB)。

## 4. 部署與運行
*   **前端網站 (Workout_Web2)**: 作為靜態網站，可透過任何靜態網頁伺服器託管 (例如 Nginx, Apache, GitHub Pages, Netlify, Vercel 等)。
*   **後端API服務 (Workout_API)**: 需要 Node.js 環境運行。可部署於各種雲平台 (如 Zeabur, Heroku, AWS EC2, Google Cloud Run 等)。若存在 `Procfile`，則可依據其中指定的命令啟動應用程式。

## 5. 其他
*   **圖像資源**: `card.png`, `pic1.png` - `pic10.png`, `workout.png` 等圖像文件。
*   **任務文件**: `task.md` (專案相關的任務或待辦事項)。