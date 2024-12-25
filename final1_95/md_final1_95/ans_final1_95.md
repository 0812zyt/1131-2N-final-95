# (60%) Web 程式設計一 期末考 1 -- 斷網考試

##### 2024-12-25, at E201, 18:20~18:50

#### Note:

1. 請不要發揮同學愛，作弊雙方除了本次考試 0 分外，平常分數另扣 20 分，情節嚴重者會送校。
2. iClass 上請繳交 ans_final1_95.pdf，還有 md_final1_95.zip, src.zip 三個壓縮檔，壓縮前請將 node_modules 全部砍掉
3. 請直接將答案寫在 md_final1_95/ans_final1_95.md 上，老師出題及圖片放在 ans_final1_htc.pdf 上，請依照老師所給的圖片來實作並標註
4. 跟小考相關的檔案及目錄名稱有 95 時，必須要改成學號後 2 碼，沒有修改時，會視違犯情況扣分。
5. 每一張圖片要有機房左側背景，圖片上要有你的學號(或後兩碼)，圖片標註要跟老師所標註的類似。違者會依情節扣分。
6. 請自評分數，將每一題的 ? 填入分數，沒有填者，不會批改，以 0 分計算。

##### Your (Name, ID): (鍾依庭, 212410095)

- P1 (15%): 15 分
- P2 (14%): 14 分
- P3 (14%): ? 分
- P4 (18%): ? 分

##### 總分: 29 分

---

#### (15%) P1: 由選單 Final_95，選擇 S1_95，透過路由 /final/s1_95，顯示上課 menu demo 所用到的 9 張圖片，如下圖

請自行從 pages/mid_95 目錄下之檔案擷取本題所需要的 code，放入 final/s1_95 目錄下，主要有兩個檔案 S1Page_95.jsx 及 MenuItem1_95.jsx。

9 筆資料放在 menu_data.jsx，所用到的圖片放在 public/mid_95 下，可能需要編輯以便能取得圖片。

##### => Chrome 顯示，請點選 Final_95 下之 S1_95

![p1_1_95.png](p1_1_95.png)

#### Your Answer

##### => Chrome 顯示，點選 S1Page_95，可以看到

![p1_2_95.png](p1_2_95.png)

##### => 顯示 App_95.jsx 中的 /final/s1_95 路由設定 code 重點顯示

![p1_3_95.png](p1_3_95.png)

##### => 顯示 S1Page_95.jsx code 重點顯示

![p1_4_95.png](p1_4_95.png)

---

#### (14%) P2: 將 P1 複製一份到 P2，由選單 Final_95，選擇 S2_95，透過路由 /final/s2_95，可以顯示 S2Page2_95.jsx 頁面，並且可以完成 filter 按鈕功能 (本題不需要存取 local storage)

##### => 將 s1_95 目錄內之檔案，複製一份到 s2_95，並改名如下圖 (基本上將數字 1 改成 2)，

![p2_1_95.png](p2_1_95.png)

##### => Chrome 顯示，請點選 Final_95 下之 S2_95，再點選 Breakfast

![p2_2_95.png](p2_2_95.png)

##### => 點選 Lunch 之 Chrome 顯示

![p2_3_95.png](p2_3_95.png)

##### => 點選 All 之 Chrome 顯示

![p2_4_95.png](p2_4_95.png)

#### Your Answer

##### => 點選 Breakfast 之 Chrome 顯示

![p2_5_95.png](p2_5_95.png)

##### => 點選 Lunch 之 Chrome 顯示

![p2_6_95.png](p2_6_95.png)

##### => 點選 All 之 Chrome 顯示

![p2_7_95.png](p2_7_95.png)

##### => 顯示 S2Page_95.jsx code 重點顯示

![p2_8_95.png](p2_8_95.png)

---

#### (14%) P3: 延續 P2，將 S2Page_95.js 之顯示拆成 S3Page_95.jsx, FilterButtons3_95.jsx, MenuList3_95.jsx, MenuItem3_95.jsx，由選單 Final_95，選擇 S3_95，透過路由 /final/s3_95，可以顯示 S3Page_95.jsx

本題不需要存取 local storage

##### => 請複製 P2 檔案到 P3 目錄，並且改名，目錄檔案結構如下圖

![p3_1_95.png](p3_1_95.png)

##### => Chrome 顯示，請點選 Final_95 下之 S3_95，再點選 Dessert 只有一筆，截圖要能顯示細緻化的 components，如下說明

全部按鈕請放入 FilterButtons3_95.jsx 中
全部 menu 先放入 MenuList3_95.jsx，再透過 MenuItem3_95.jsx 顯示單一 menu。

![p3_2_95.png](p3_2_95.png)

#### Your Answer

##### => Chrome 顯示 Dessert 只有一筆，截圖要能顯示細緻化的 components

![p3_3_95.png](p3_3_95.png)

##### => 顯示 S3Page_95.jsx, FilterButtons3_95.jsx code 重點顯示

![p3_4_95.png](p3_4_95.png)

##### => 顯示 S3MenuList3_95.jsx, MenuItem3_95.jsx code 重點顯示

![p3_5_95.png](p3_5_95.png)

---

#### (18%) P4: 將 P3 改成以 context api 來實作，由選單 Final_95，選擇 S4_95，透過路由 /final/s4_95，可以顯示 S4Page_95.jsx

本題需要存取 local storage。

##### => 請從 P3 將檔案複製到 P4 目錄，並改名，目錄檔案結構如下圖，

![p4_1_95.png](p4_1_95.png)

##### => Chrome 顯示，請點選 Final_95 下之 S4_95， 點選 Shakes，透過 Chrome DevTools 之 components 顯示 3 筆 shakes 資料，

![p4_2_95.png](p4_2_95.png)

##### =>=> 點選 Shakes，透過 Chrome DevTools 之 Application 顯示 3 筆 shakes 資料於 local storage 之 menu-list 中

![p4_3_95.png](p4_3_95.png)

#### Your Answer

##### => 點選 Shakes，透過 Chrome DevTools 之 components 顯示 3 筆 shakes 資料，

![p4_4_95.png](p4_4_95.png)

##### =>=> 點選 Shakes，透過 Chrome DevTools 之 Application 顯示 3 筆 shakes 資料於 local storage 之 menu-list 中

![p4_5_95.png](p4_5_95.png)

##### => 顯示 contextMenu_95.jsx 之 code 重點

![p4_6_95.png](p4_6_95.png)

##### => 顯示 S4Page_95.jsx 之 code 重點

![p4_7_95.png](p4_7_95.png)

##### => 顯示 FilterButtons4_95.jsx 之 code 重點

![p4_8_95.png](p4_8_95.png)

##### => 顯示 MenuList4_95.jsx 之 code 重點

![p4_9_95.png](p4_9_95.png)
