# 東合祭 -溶炉- (TOGOSAI -YORO-) 公式Webサイト

「東合祭 -溶炉-」公式Webサイトのリポジトリです。  
GitHub Pagesにて静的Webサイトとして動作するよう構築されています。

---

## プロジェクト概要

- **大会名**: 東合祭 -溶炉- (TOGOSAI -YORO-)
- **舞台**: 統合戦略#5「サルカズの炉辺奇談」
- **形式**: 3人1組対抗の非公式大会
- **技術スタック**: HTML5, Vanilla CSS3 (Custom Variables), JavaScript (ES Modules)

---

## ディレクトリ構造

```text
TOGOSAI/
├── index.html               # メインHTML
├── css/
│   ├── variables.css        # カラー・フォント・共通変数
│   ├── base.css             # リセット・ベースCSS
│   ├── components.css       # ヘッダー・ボタン・カード等コンポーネントCSS
│   └── responsive.css       # スマホ・タブレット用レスポンシブスタイル
├── js/
│   ├── data.js              # 大会基本データ（募集期間、参加数、外部URL）
│   ├── results.js           # 大会結果データ（順位・チーム点・個人点）
│   ├── tp.js                # Tournament Points (TP) データ
│   ├── i18n.js              # 日本語 / 英語 辞書
│   └── main.js              # UIレンダリング・言語切り替え・メニュー制御
└── README.md                # 運営者マニュアル（本書）
```

---

## ローカルでの確認方法

プロジェクトディレクトリ内で静的HTTPサーバー（例: Vite, `serve`, VS Code Live Server 等）を起動して確認できます。

```bash
# npx serve を使用する場合
npx serve .
```

---

## 大会データの更新方法 (Data Updates)

コードやレイアウト（HTML/CSS）を変更することなく、`js/` フォルダ内の各データファイルを編集するだけで更新可能です。

### 1. 募集数・日程・外部URLの更新 (`js/data.js`)

- **参加チーム数の更新**:
  `tournament.registration.currentTeams = 2;` に数値を書き換えます。
- **応募フォーム (Google Forms) URL**:
  `tournament.registration.formUrl = "https://forms.gle/XXXXX";`
  `tournament.links.googleForm = "https://forms.gle/XXXXX";`
- **ルールPDF (Google Drive) の埋め込み・ダウンロード**:
  - プレビューURL: `tournament.resources.rulesPdfPreviewUrl = "https://drive.google.com/file/d/FILE_ID/preview";`
  - ダウンロードURL: `tournament.resources.rulesPdfDownloadUrl = "https://drive.google.com/uc?export=download&id=FILE_ID";`
- **公式SNS/配信リンク**:
  - `tournament.links.youtube = "https://youtube.com/...";`
  - `tournament.links.x = "https://x.com/...";`

### 2. TP（Tournament Points）の更新 (`js/tp.js`)

`tpData` 配列に項目を追加・編集します。

```javascript
export const tpData = [
  {
    id: "tp-01",
    category: { ja: "クリア条件", en: "Clear Condition" },
    name: { ja: "裏ボス撃破", en: "Defeat Hidden Boss" },
    condition: { ja: "条件を満たしてクリア", en: "Clear under specified conditions" },
    points: 30
  }
];
```

### 3. 大会結果の公開・更新 (`js/results.js`)

大会開始前は `published: false` です。大会開始後・結果確定後に以下のように変更します。

```javascript
export const results = {
    published: true, // 公開状態にする
    teams: [
        {
            rank: 1,
            name: "TEAM A",
            totalTP: 320,
            players: [
                { name: "Player A", tp: 120 },
                { name: "Player B", tp: 100 },
                { name: "Player C", tp: 100 }
            ]
        }
    ]
};
```

---

## GitHub Pagesへの公開手順

1. リポジトリをGitHubに push します。
2. GitHubのリポジトリ設定 (Settings) ＞ **Pages** を開きます。
3. Source を **Deploy from a branch** に指定し、`main` (または `master`) ブランチの `/ (root)` を選択して Save します。
4. 数分後に割り当てられた URL（`https://<user>.github.io/<repo>/`）で公開されます。
>>>>>>> 69adf71 (Deploy TOGOSAI -YORO- official website)
