# 東合祭 -溶炉- (TOGOSAI -YORO-) 公式Webサイト 運営マニュアル

「東合祭 -溶炉-」公式Webサイトのリポジトリです。  
GitHub Pagesにて静的Webサイトとして動作しています。

---

## 💡 はじめに（AIツール・Antigravity不要の簡単編集）

本Webサイトは、プログラミング知識や特別なツール（AIエディタ等）を使わずに、**GitHubの画面上または普通のテキストエディタで `js/` フォルダ内のファイルを書き換えるだけ**で、すべての配信URL・大会結果表・準備中表示の切替を行えるように設計されています。

---

## 🛠️ GitHubの画面上で直接編集・更新する手順（ノーコード手順）

1. GitHubのリポジトリ画面（このページ）を開きます。
2. 編集したいファイル（例: `js/data.js` または `js/results.js`）をクリックして開きます。
3. 画面右手にある **鉛筆マーク（Edit this file）** をクリックします。
4. ファイル内の該当部分の文字や数字を書き換えます。
5. 編集が終わったら、右上の緑のボタン **「Commit changes...」** をクリックし、そのまま **「Commit changes」** を押して保存します。
6. 約1〜3分後、自動的にWebサイト（GitHub Pages）に最新情報が反映されます！

---

## 📹 1. 配信URL・配信準備中表示の編集 (`js/data.js`)

`js/data.js` ファイルを開いて編集します。

### 1-1. 「配信準備中」表示の取り消し・切り替え
`streamConfig` の `isPreparing` の値を変更します。

- **配信準備中を表示したい場合（初期状態）**:
  ```javascript
  streamConfig: {
      isPreparing: true
  },
  ```
- **準備中表示を消して配信動画・URLを公開したい場合**:
  ```javascript
  streamConfig: {
      isPreparing: false
  },
  ```

### 1-2. 配信URL（YouTube等）の追加・更新
`streams` 配列内の各DAYの `youtubeUrl` にYouTubeの動画/配信枠URLを入力します。  
（※URLを入力すると、Webサイト上に自動的にYouTube動画プレイヤーが埋め込まれ、視聴ボタンも生成されます）

```javascript
streams: [
    { day: 1, title: "DAY 1", date: "2026.09.21", youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_1" },
    { day: 2, title: "DAY 2", date: "2026.09.22", youtubeUrl: "https://www.youtube.com/watch?v=VIDEO_ID_2" },
    { day: 3, title: "DAY 3", date: "2026.09.23", youtubeUrl: "" }, // URLが空の場合は「配信枠準備中」が表示されます
    ...
]
```

---

## 🏆 2. 配信結果・大会結果表の編集 (`js/results.js`)

`js/results.js` ファイルを開いて編集します。

### 2-1. 「結果準備中」表示の取り消し・公開切り替え
`published` の値を変更します。

- **結果準備中を表示したい場合（大会前）**:
  ```javascript
  published: false,
  ```
- **準備中表示を消して結果表を公開したい場合（大会開始後）**:
  ```javascript
  published: true,
  ```

### 2-2. 順位・チーム名・スコア・個人成績の編集
`teams` 配列の中身を編集します。

```javascript
teams: [
    {
        id: "team1",
        rank: 1,                 // 順位
        name: "MMJ",             // チーム名
        totalTP: 320,            // 合計TP (数値または "—")
        players: [               // メンバー3名の個別成績
            { name: "mindh4cker", day: "DAY 1", squad: "突撃分隊", ending: "裏ボス撃破", tp: 120 },
            { name: "Minku",      day: "DAY 2", squad: "医術分隊", ending: "ノーマル", tp: 100 },
            { name: "JohnnyAK47", day: "DAY 3", squad: "破壊分隊", ending: "表ボス撃破", tp: 100 }
        ]
    },
    {
        id: "team2",
        rank: 2,
        name: "Ragequit team",
        totalTP: 280,
        players: [
            { name: "WingsVN",          day: "DAY 1", squad: "指揮分隊", ending: "表ボス撃破", tp: 100 },
            { name: "Halca",            day: "DAY 2", squad: "支援分隊", ending: "ノーマル", tp: 90 },
            { name: "I Love Priestess", day: "DAY 3", squad: "補助分隊", ending: "ノーマル", tp: 90 }
        ]
    }
    // 以下、チーム3〜チーム8まで同様に編集可能です
]
```

---

## 📁 ディレクトリ構造

```text
TOGOSAI/
├── index.html               # メインHTML
├── css/
│   ├── variables.css        # カラー・フォント・共通変数
│   ├── base.css             # リセット・ベースCSS
│   ├── components.css       # ヘッダー・ボタン・カード等コンポーネントCSS
│   └── responsive.css       # スマホ・タブレット用レスポンシブスタイル
├── component/
│   ├── stream-card.css      # 配信カード・準備中オーバーレイ表示用CSS
│   └── results-card.css     # 大会結果カード用CSS
├── js/
│   ├── data.js              # 大会基本データ・【配信URL・配信準備中設定】
│   ├── results.js           # 【大会結果データ・チーム順位・成績・結果準備中設定】
│   ├── tp.js                # Tournament Points (TP) データ
│   ├── i18n.js              # 日本語 / 英語 辞書
│   ├── tabs.js              # タブ切り替え制御
│   └── main.js              # UIレンダリング・言語切り替え・メニュー制御
└── README.md                # 運営者マニュアル（本書）
```

---

## 🚀 ローカルでの確認方法

プロジェクトディレクトリ内で静的HTTPサーバー（例: Live Server, Vite, `serve` 等）を起動して確認できます。

```bash
# npx serve を使用する場合
npx serve .
```

---

## 🌐 GitHub Pagesへの公開手順

1. リポジトリに変更を push（またはGitHub画面上でCommit）します。
2. GitHubのリポジトリ設定 (Settings) ＞ **Pages** を開きます。
3. Source を **Deploy from a branch** に指定し、`main` (または `master`) ブランチの `/ (root)` を選択して Save します。
4. 数分後に割り当てられた URL（`https://<user>.github.io/<repo>/`）で自動公開・更新されます。
