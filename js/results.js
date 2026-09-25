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
            rank: 9,
            name: "MMJ",
            totalTP: "-40", // 例: 320 または "—"
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
            totalTP: "690",
            players: [
                { name: "WingsVN",          day: "4", squad: "突撃戦術", ending: "2★45★", tp: "890" },
                { name: "Halca",            day: "2", squad: "擬態学者", ending: "245★", tp: "690" },
                { name: "I Love Priestess", day: "11", squad: "－", ending: "－", tp: "－" }
            ]
        },
        {
            id: "team3",
            rank: 5,
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
            rank: 5,
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
            rank: 5,
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
            rank: 5,
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
            rank: 4,
            name: "マジカルドスワンコ",
            totalTP: "150",
            players: [
                { name: "ナツホ", day: "3", squad: "位置測定", ending: "—", tp: "40" },
                { name: "わっしょイ", day: "2", squad: "霊魂護送", ending: "2", tp: "110" },
                { name: "しばケット", day: "9", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team8",
            rank: 2,
            name: "終結の肉体に救済を",
            totalTP: "1210",
            players: [
                { name: "黒", day: "3", squad: "高規格", ending: "2", tp: "80" },
                { name: "ひなぶ", day: "1", squad: "破棘成金", ending: "245★", tp: "550" },
                { name: "すごい🕊", day: "5", squad: "霊魂護送", ending: "245★", tp: "580" }
            ]
        },
        {
            id: "team9",
            rank: 3,
            name: "天啓得たり得なかったり",
            totalTP: "1090",
            players: [
                { name: "花嶺かざり", day: "4", squad: "援護戦術", ending: "145", tp: "580" },
                { name: "heria", day: "5", squad: "擬態学者", ending: "245", tp: "510" },
                { name: "Rindo3373", day: "8", squad: "—", ending: "—", tp: "—" }
            ]
        }
    ]
};
