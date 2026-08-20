/**
 * 東合祭 -溶炉- (TOGOSAI -YORO-)
 * 大会基本データ管理モジュール
 */

export const tournament = {
    name: {
        ja: "東合祭 -溶炉-",
        en: "TOGOSAI -YORO-"
    },
    
    overview: {
        ja: "アークナイツ 統合戦略#5「サルカズの炉辺奇談」を舞台とした、<br>3人1組チーム対抗の非公式大会。",
        en: "An unofficial 3-player team tournament based on<br>Arknights Integrated Strategies #5: Sarkaz's Furnacaside Fables."
    },

    registration: {
        start: "2026-08-01",
        end: "2026-08-21",
        displayPeriod: "2026.08.01 — 2026.08.21",
        currentTeams: 1,
        maxTeams: 10,
        teamSize: "3人1組",
        location: "TOGOSEN Univ.",
        // PDF Ver1.2記載の実際の応募フォームURL
        formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSevq1Og17d1jrtjcmRhXGxcrlIAyD2bUdXja3CMw5iMP1VEFA/viewform?usp=dialog",
        notice: {
            ja: "※ 外部の Google Forms へ移動します",
            en: "※ Opens external Google Forms"
        }
    },

    rulesSummary: {
        format: {
            ja: "3人1組 チーム対抗戦（各走者の獲得スコア/TPの合計で順位を決定）",
            en: "3-Player Team Competition (Ranked by combined TP / scores of all 3 runners)"
        },
        specialRestriction: {
            ja: "【投資システム制限】チーム内で投資システムから引き出すことができる源石錐の数は、3名の走者の合計で累計200源石錐までとします。チーム内で調整・管理を行ってください。",
            en: "[Investment Restriction] The total Originium Ingot withdrawn from the investment system by all 3 team members combined must not exceed 200 Ingot cumulative."
        }
    },

    schedule: [
        {
            id: "recruitment",
            title: { ja: "募集", en: "Recruitment" },
            period: "2026.08.01 — 2026.08.21",
            status: "active"
        },
        {
            id: "recording",
            title: { ja: "事前収録", en: "Pre-recording" },
            period: "2026.08.22 — 2026.09.20",
            status: "upcoming"
        },
        {
            id: "mainEvent",
            title: { ja: "本戦", en: "Main Event" },
            period: "2026.09.21 — 2026.10.02（予定）",
            status: "upcoming"
        }
    ],

    streamConfig: {
        // 配信カードの準備中表示フラグ (true: 配信準備中を表示 / false: 準備中を解除して配信一覧・動画を表示)
        isPreparing: true
    },

    // DAY 1〜15 の配信データ
    // 配信URL (youtubeUrl) を入力すると、動画プレイヤーの埋め込みとYouTubeリンクボタンが自動生成されます。
    streams: [
        { day: 1, title: "DAY 1", date: "2026.09.21", youtubeUrl: "https://youtu.be/GUdFH_hzzq4" },
        { day: 2, title: "DAY 2", date: "2026.09.22", youtubeUrl: "" },
        { day: 3, title: "DAY 3", date: "2026.09.23", youtubeUrl: "" },
        { day: 4, title: "DAY 4", date: "2026.09.24", youtubeUrl: "" },
        { day: 5, title: "DAY 5", date: "2026.09.25", youtubeUrl: "" },
        { day: 6, title: "DAY 6", date: "2026.09.26", youtubeUrl: "" },
        { day: 7, title: "DAY 7", date: "2026.09.27", youtubeUrl: "" },
        { day: 8, title: "DAY 8", date: "2026.09.28", youtubeUrl: "" },
        { day: 9, title: "DAY 9", date: "2026.09.29", youtubeUrl: "" },
        { day: 10, title: "DAY 10", date: "2026.09.30", youtubeUrl: "" },
        { day: 11, title: "DAY 11", date: "2026.10.01", youtubeUrl: "" },
        { day: 12, title: "DAY 12", date: "2026.10.02", youtubeUrl: "" },
        { day: 13, title: "DAY 13", date: "2026.10.03", youtubeUrl: "" },
        { day: 14, title: "DAY 14", date: "2026.10.04", youtubeUrl: "" },
        { day: 15, title: "DAY 15", date: "2026.10.05", youtubeUrl: "" }
    ],

    assets: {
        logoHeader: "./assets/東合祭ロゴ横.png",
        logoHeaderWhite: "./assets/東合祭ロゴ横　白背景.png"
    },

    resources: {
        rulesPdf: {
            ja: "./assets/rulebook_ja_2.0.pdf",
            en: "./assets/rulebook_en_2.0.pdf"
        },
        rulesVideoUrl: ""
    },

    links: {
        googleForm: "https://forms.gle/7U7YNd1LU7jCA8Em9",
        youtube: "https://www.youtube.com/@LinGuFamily",
        x: "https://x.com/togosen"
    }
};

