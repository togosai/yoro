/**
 * 東合祭 -溶炉- (TOGOSAI -YORO-)
 * 大会結果データ管理モジュール
 * 
 * 指示書指示:
 * 大会開始前は published: false。
 * 大会開始後は published: true に変更し、順位・チーム得点・個人得点を手動更新可能にします。
 */

export const results = {
    // 【大会結果の公開状態】
    // false: 「結果準備中」としてロック表示
    // true : 結果表とチーム別詳細タブを公開
    published: true,

    // 【チーム・個人スコアデータ一覧】
    // 順位・チーム名・合計TP・メンバー3名の詳細データを登録・編集できます。
    teams: [
        {
            id: "team1",
            rank: 1,
            name: "MMJ",
            totalTP: "—", // 例: 320 または "—"
            players: [
                { name: "mindh4cker", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "Minku",      day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "JohnnyAK47", day: "—", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team2",
            rank: 1,
            name: "Ragequit team",
            totalTP: "—",
            players: [
                { name: "WingsVN",          day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "Halca",            day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "I Love Priestess", day: "—", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team3",
            rank: 1,
            name: "temp name",
            totalTP: "—",
            players: [
                { name: "Azen", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "Larfa", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "Kevthink", day: "—", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team4",
            rank: 1,
            name: "箱庭には0匹のコーラスがいます",
            totalTP: "—",
            players: [
                { name: "ゆゆれみ", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "rate-dat", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "チューバイのはや", day: "—", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team5",
            rank: 1,
            name: "team INTernational",
            totalTP: "—",
            players: [
                { name: "Die Alive", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "CelerYi", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "空気", day: "—", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team6",
            rank: 1,
            name: "sakichan sakichan sakichan",
            totalTP: "—",
            players: [
                { name: "Jarvis", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "Grubbie", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "d1sgraceee", day: "—", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team7",
            rank: 1,
            name: "マジカルドスワンコ",
            totalTP: "—",
            players: [
                { name: "ナツホ", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "わっしょイ", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "しばケット", day: "—", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team8",
            rank: 1,
            name: "終結の肉体に救済を",
            totalTP: "—",
            players: [
                { name: "黒", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "ひなぶ", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "すごい🕊", day: "—", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team9",
            rank: 9,
            name: "未登録",
            totalTP: "—",
            players: [
                { name: "—", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "—", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "—", day: "—", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team10",
            rank: 10,
            name: "未登録",
            totalTP: "—",
            players: [
                { name: "—", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "—", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "—", day: "—", squad: "—", ending: "—", tp: "—" }
            ]
        }
    ]
};
