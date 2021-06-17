# Project name：Todo-list

- 使用 Express 搭配 mySql 資料庫製作的備忘錄

- 測試帳號：root@example.com 測試密碼：12345678

# Features：功能列表

- 使用者可以記錄不同的 todo-list

- 登入後網頁名字會變換成使用者的名稱

- 可以快速透過 email 或是ＦＢ註冊，讓使用者們的私房錢不會混再一起

- 可以新增任何一筆 todo

- 可以編輯 todo 的所有屬性（一次一個）

# Environment Setup：環境安裝

[Node.js](https://nodejs.org/en/)
[Express](https://expressjs.com/)
[MySQL](https://www.mysql.com/)
[Heroku](https://dashboard.heroku.com/)

# Installing Procedure：專案安裝

1.開啟終端機，新建資料夾後，並 cd 到預計要儲存的專案位置，執行：

```
mkdir todo-sequelize //建立專案資料夾
```

```
cd todo-sequelize //切換到專案資料夾
```

```
git clone https://github.com/DennisWei9898/todo-sequelize

```

2.安裝套件和種子資料：

```
npm install //安裝 npm 套件
```

```
npm run seed //安裝種子資料
```

3.啟動伺服器，執行 app.js 檔案

```
npm run dev //成功啟動後，終端機會顯示：This server is running on http://localhost:3000
            //mongodb connected!
```

4.打開網址，體驗專屬的 todo-list

> 進入下列本地網址來體驗 todo-list 的功能： [http://localhost:3000/](https://)

# 作業過程

- 從 mongodb 切換到 mysql 還需要習慣，下次再加上線上版本
