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
    published: false,

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
            rank: 2,
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
            rank: 3,
            name: "未登録",
            totalTP: "—",
            players: [
                { name: "—", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "—", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "—", day: "—", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team4",
            rank: 4,
            name: "未登録",
            totalTP: "—",
            players: [
                { name: "—", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "—", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "—", day: "—", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team5",
            rank: 5,
            name: "未登録",
            totalTP: "—",
            players: [
                { name: "—", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "—", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "—", day: "—", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team6",
            rank: 6,
            name: "未登録",
            totalTP: "—",
            players: [
                { name: "—", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "—", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "—", day: "—", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team7",
            rank: 7,
            name: "未登録",
            totalTP: "—",
            players: [
                { name: "—", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "—", day: "—", squad: "—", ending: "—", tp: "—" },
                { name: "—", day: "—", squad: "—", ending: "—", tp: "—" }
            ]
        },
        {
            id: "team8",
            rank: 8,
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
