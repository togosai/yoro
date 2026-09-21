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
                { name: "mindh4cker", day: "1", squad: "破棘成金", ending: "—", tp: "-40" },
                { name: "Minku",      day: "6", squad: "—", ending: "—", tp: "—" },
                { name: "JohnnyAK47", day: "8", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team2",
            rank: 1,
            name: "Ragequit team",
            totalTP: "—",
            players: [
                { name: "WingsVN",          day: "4", squad: "—", ending: "—", tp: "—" },
                { name: "Halca",            day: "2", squad: "—", ending: "—", tp: "—" },
                { name: "I Love Priestess", day: "11", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team3",
            rank: 1,
            name: "temp name",
            totalTP: "—",
            players: [
                { name: "Azen", day: "14", squad: "—", ending: "—", tp: "—" },
                { name: "Larfa", day: "13", squad: "—", ending: "—", tp: "—" },
                { name: "Kevthink", day: "12", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team4",
            rank: 1,
            name: "箱庭には0匹のコーラスがいます",
            totalTP: "—",
            players: [
                { name: "ゆゆれみ", day: "11", squad: "—", ending: "—", tp: "—" },
                { name: "rate-dat", day: "10", squad: "—", ending: "—", tp: "—" },
                { name: "チューバイのはや", day: "13", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team5",
            rank: 1,
            name: "team INTernational",
            totalTP: "—",
            players: [
                { name: "Die Alive", day: "6", squad: "—", ending: "—", tp: "—" },
                { name: "CelerYi", day: "9", squad: "—", ending: "—", tp: "—" },
                { name: "空気", day: "12", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team6",
            rank: 1,
            name: "sakichan sakichan sakichan",
            totalTP: "—",
            players: [
                { name: "Jarvis", day: "10", squad: "—", ending: "—", tp: "—" },
                { name: "Grubbie", day: "14", squad: "—", ending: "—", tp: "—" },
                { name: "d1sgraceee", day: "7", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team7",
            rank: 1,
            name: "マジカルドスワンコ",
            totalTP: "—",
            players: [
                { name: "ナツホ", day: "3", squad: "—", ending: "—", tp: "—" },
                { name: "わっしょイ", day: "2", squad: "—", ending: "—", tp: "—" },
                { name: "しばケット", day: "9", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team8",
            rank: 1,
            name: "終結の肉体に救済を",
            totalTP: "—",
            players: [
                { name: "黒", day: "3", squad: "—", ending: "—", tp: "—" },
                { name: "ひなぶ", day: "1", squad: "破棘成金", ending: "245★", tp: "550" },
                { name: "すごい🕊", day: "5", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team9",
            rank: 1,
            name: "天啓得たり得なかったり",
            totalTP: "—",
            players: [
                { name: "花嶺かざり", day: "4", squad: "—", ending: "—", tp: "—" },
                { name: "heria", day: "5", squad: "—", ending: "—", tp: "—" },
                { name: "Rindo3373", day: "8", squad: "—", ending: "—", tp: "—" }
            ]
        }
    ]
};
