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
        maxTeams: 8,
        teamSize: "3人1組",
        location: "TOGOSEN Univ.",
        // PDF Ver1.2記載の実際の応募フォームURL
        formUrl: "https://forms.gle/6nNYgSwiK1m1oQ9F8",
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

    streams: [],

    assets: {
        logoHeader: "./assets/東合祭ロゴ横.png",
        logoHeaderWhite: "./assets/東合祭ロゴ横　白背景.png"
    },

    resources: {
        rulesPdf: {
            ja: "./assets/rulebook_ja_1.2.pdf",
            en: "./assets/rulebook_en_1.2.pdf"
        },
        rulesVideoUrl: ""
    },

    links: {
        googleForm: "https://forms.gle/7U7YNd1LU7jCA8Em9",
        youtube: "https://www.youtube.com/@LinGuFamily",
        x: "https://x.com/togosen"
    }
};

