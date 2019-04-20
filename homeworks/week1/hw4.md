## 跟你朋友介紹 Git

### 蔡哥我跟你說喔，所謂的 Ｇｉｔ 阿，就是版本控制的武器喔，你想想　如果你要講一個笑話 Ａ 然後覺得有些笑點還要再加強，所以出現 Ａ2.0
### 然後又出現A3.0 - A4.0 - A5.0 這樣不是很難整理嗎，現在出現了一個 GIT 的這個好東西，你就想像你開一個新的資料夾然後把所有A初版到最新版都放在裡面
### 而且阿還有很一個跟平行世界一樣神的 Branch 功能，你就想像我們的世界是 branch-1 有一個平行世界 branch-2 ，在同一個時間，兩個世界的你想到
### 了兩個不同的笑話，branch-1 很烙賽，branch-2 的你有一群團隊在幫你寫笑話，很神，那難道我們就這樣讓 branch-1 世界的你烙賽嗎?
### 不，我們在 branch-1 可以把branch-2世界的笑話 merge進到　branch-1，這樣就不會烙賽啦！
### 至於要怎麼做呢?
1. 首先你要先 找到一個乾淨的環境建立資料夾 Git init
>
2. 創建一個資料  git add tsaibrother.txt 
> 想像成把 tsaibrother.txt 放入temp資料夾,或是也可以直接用 git add . 會把選單內所以資料都放進去,就不用再選了
3. 建造版本名稱 git commit -m"first commit"
> 想像把temp資料夾複製改名為版本名稱
4. 可以使用git log來看歷史紀錄，git status 來看狀態
>
5. 接下來創造多重宇宙 git branch jokeking
> jokeking是我對你的期許,也是branch的名稱喔
6. 你可以用 git branch -v 來確認branch裡面有沒有成功創立
>
7. 再來使用git checkout jokeking 來轉移到 jokeking 這個 branch
>
8. 接下來就可以 jokeking 這個 branch ,修改檔案拉
>
9. 記得修完之後要按git add .
>
10. git commit -am" "
>然後git status 查看狀況喔

### 那如果我們要將code上傳到github 或是想下載其他人的code要怎麼做呢
## push 我們自己的檔案
1. 先開一個 repository  假設取名tsiabrother
2. 先切換成 git check master 接下來在cmd上執行
git remote add origin https://github.com/HOWARD1021/tsiabrother.git
git push -u origin master
3. 然後 git push origin  將 檔案傳上去
## 如果是要下載複製
1. 一樣在 github 上有個 clone or download
2. git clone 貼上(複製的網址) enter
3. 然後 ls 新的檔案
4. cd 到新的檔案 就可以了
