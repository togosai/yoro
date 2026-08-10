/**
 * 東合祭 -溶炉- (TOGOSAI -YORO-)
 * 多言語 (JP/EN) および固有名詞辞書モジュール
 */

export const terms = {
    tournamentName: {
        ja: "東合祭 -溶炉-",
        en: "TOGOSAI -YORO-"
    },
    gameTitle: {
        ja: "統合戦略#5「サルカズの炉辺奇談」",
        en: "Integrated Strategies #5: Sarkaz's Furnacaside Fables"
    }
};

export const translations = {
    ja: {
        nav: {
            about: "大会について",
            registration: "参加について",
            rules: "ルール",
            tp: "TP",
            schedule: "日程",
            stream: "配信",
            results: "結果",
            links: "リンク"
        },
        hero: {
            subtitle: "アークナイツ 統合戦略#5「サルカズの炉辺奇談」を舞台とした3人1組対抗の非公式大会",
            recruitmentPeriod: "募集期間",
            teamsCount: "参加チーム",
            btnAbout: "大会について",
            btnRegister: "参加について"
        },
        about: {
            titleHtml: "東合祭 -溶炉-<span class=\"title-small\">とは</span>",
            heading: "東合祭 -溶炉- 概要",
            description: "アークナイツ 統合戦略#5「サルカズの炉辺奇談」を舞台とした、3人1組チーム対抗の非公式大会です。参加チームが限られた条件の中で知恵と戦術を競い合います。",
            teamFormat: "競技形式",
            teamFormatValue: "3人1組 チーム対抗戦"
        },
        registration: {
            title: "参加について",
            periodTitle: "募集期間",
            capacityTitle: "募集チーム数",
            capacityValue: "最大8チーム (3人1組)",
            conditionsTitle: "参加条件・必要事項",
            conditionsList: [
                "3人1組のチームで応募すること",
                "大会ルール・注意事項を遵守できること",
                "指定の収録・配信スケジュールに対応可能であること"
            ],
            flowTitle: "参加までの流れ",
            flowSteps: [
                "1. 募集要項・ルールPDFの確認",
                "2. 代表者によるエントリーフォーム入力",
                "3. 運営からの確定連絡受領"
            ],
            btnForm: "応募はこちら",
            formNotice: "※ 外部の Google Forms へ移動します"
        },
        rules: {
            title: "大会ルール",
            summaryTitle: "基本ルール概要",
            summaryContent: "本大会は3人1組のチームが指定された条件のもとでスコア（TP）を獲得し、その合計点を競う形式です。",
            restrictionTitle: "特殊ルール・制限",
            restrictionContent: "【投資システム制限】チーム内で投資システムから引き出すことができる源石錐の数は、3名の走者の合計で累計200源石錐までとします。チーム内で調整・管理を行ってください。",
            pdfTitle: "詳細ルールPDF",
            btnPdfOpen: "📄 詳細ルールPDFを表示",
            pdfDownloadBtn: "⬇ ルールPDFをダウンロード",
            videoTitle: "ルール説明動画",
            noVideoYet: "ルール動画は準備中です。"
        },
        tp: {
            title: "Tournament Points",
            noDataYet: "TP一覧データは準備中です。詳細はルールPDFをご確認ください。"
        },
        schedule: {
            title: "日程",
            statusActive: "現在進行中",
            statusUpcoming: "予定",
            statusCompleted: "終了"
        },
        stream: {
            title: "配信",
            noStreamYet: "現在配信予定はありません。"
        },
        results: {
            title: "結果",
            unpublished: "大会開始後に公開されます。",
            rank: "順位",
            teamName: "チーム名",
            totalScore: "合計TP",
            playerScore: "個人得点"
        },
        links: {
            title: "リンク",
            entryForm: "参加応募フォーム (Google Forms)",
            youtube: "公式YouTubeチャンネル",
            x: "公式X (旧Twitter)"
        },
        footer: {
            disclaimer: "本大会は非公式のコミュニティイベントであり、ゲーム公式・権利元とは直接の関係はありません。"
        }
    },

    en: {
        nav: {
            about: "About",
            registration: "Registration",
            rules: "Rules",
            tp: "TP",
            schedule: "Schedule",
            stream: "Streams",
            results: "Results",
            links: "Links"
        },
        hero: {
            subtitle: "Unofficial 3-player team tournament based on Integrated Strategies #5: Sarkaz's Furnacaside Fables",
            recruitmentPeriod: "Registration Period",
            teamsCount: "Participating Teams",
            btnAbout: "About Tournament",
            btnRegister: "Registration Info"
        },
        about: {
            titleHtml: "What is <span style=\"font-size:0.85em\">TOGOSAI -YORO-</span>",
            heading: "TOGOSAI -YORO- Overview",
            description: "An unofficial 3-player team tournament set in Integrated Strategies #5. Teams will compete in tactics and skills under specific rules.",
            teamFormat: "Format",
            teamFormatValue: "3-Player Team Competition"
        },
        registration: {
            title: "Registration",
            periodTitle: "Registration Period",
            capacityTitle: "Capacity",
            capacityValue: "Max 8 Teams (3 players / team)",
            conditionsTitle: "Requirements",
            conditionsList: [
                "Must apply as a 3-player team",
                "Must agree to tournament rules and guidelines",
                "Must be available during recording & streaming schedules"
            ],
            flowTitle: "Application Steps",
            flowSteps: [
                "1. Check guidelines & rules PDF",
                "2. Submit entry form by team representative",
                "3. Receive confirmation from tournament staff"
            ],
            btnForm: "Apply Now",
            formNotice: "* Opens external Google Forms"
        },
        rules: {
            title: "Rules",
            summaryTitle: "Rule Overview",
            summaryContent: "Teams of 3 compete for total Tournament Points (TP) earned under specific conditions.",
            restrictionTitle: "Special Restrictions",
            restrictionContent: "[Investment Restriction] The total Originium Ingot withdrawn from the investment system by all 3 team members combined must not exceed 200 Ingot cumulative.",
            pdfTitle: "Official Rules PDF",
            btnPdfOpen: "📄 View Official Rules PDF",
            pdfDownloadBtn: "⬇ Download Rules PDF",
            videoTitle: "Rule Explanation Video",
            noVideoYet: "Rule video is currently in preparation."
        },
        tp: {
            title: "Tournament Points",
            noDataYet: "TP data is currently being prepared. Please check the Rules PDF for details."
        },
        schedule: {
            title: "Schedule",
            statusActive: "Active",
            statusUpcoming: "Upcoming",
            statusCompleted: "Completed"
        },
        stream: {
            title: "Streams",
            noStreamYet: "No scheduled streams at the moment."
        },
        results: {
            title: "Results",
            unpublished: "Will be published after the tournament starts.",
            rank: "Rank",
            teamName: "Team",
            totalScore: "Total TP",
            playerScore: "Player Points"
        },
        links: {
            title: "Links",
            entryForm: "Registration Form (Google Forms)",
            youtube: "Official YouTube Channel",
            x: "Official X (Twitter)"
        },
        footer: {
            disclaimer: "This is an unofficial community event and is not directly affiliated with the official game publishers or rights holders."
        }
    }
};

export function getStoredLanguage() {
    const saved = localStorage.getItem("togosai_lang");
    return saved === "en" ? "en" : "ja";
}

export function setStoredLanguage(lang) {
    localStorage.setItem("togosai_lang", lang === "en" ? "en" : "ja");
}
