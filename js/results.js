/**
 * 東合祭 -溶炉- (TOGOSAI -YORO-)
 * 大会結果データ管理モジュール
 * 
 * 指示書指示:
 * 大会開始前は published: false。
 * 大会開始後は published: true に変更し、順位・チーム得点・個人得点を手動更新可能にします。
 */

export const results = {
    // 大会結果の公開状態（大会開始前は false）
    published: false,

    // 公開前の案内メッセージ
    unpublishedMessage: {
        ja: "大会開始後に公開されます。",
        en: "Will be published after the tournament starts."
    },

    // チーム別スコア一覧（大会開始後に運用者が編集）
    /*
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
    */
    teams: []
};
