/**
 * 東合祭 -溶炉- (TOGOSAI -YORO-)
 * メインアプリケーションUI・描画ロジック (main.js)
 */

import { tournament } from './data.js';
import { results } from './results.js';
import { tpData } from './tp.js';
import { translations, terms, getStoredLanguage, setStoredLanguage } from './i18n.js';
import { initTabs } from './tabs.js';

let currentLang = getStoredLanguage();

document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initMobileMenu();
    setupPdfModalHandlers();
    initScrollActiveNav();
    initBackToTop();
    initCountdownBanner();
    renderAll();
});


function initScrollActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-img-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('is-visible');
        } else {
            backToTopBtn.classList.remove('is-visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


function renderAll() {
    renderI18nTexts();
    renderHero();
    renderAbout();
    renderRegistration();
    renderRules();
    renderTP();
    renderSchedule();
    renderStream();
    renderResults();
    renderFooter();
    
    // 動的コンテンツ生成後にタブイベントを再登録
    initTabs();
}

function renderI18nTexts() {
    const t = translations[currentLang];
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const keyPath = el.getAttribute('data-i18n').split('.');
        let val = t;
        for (const k of keyPath) {
            val = val ? val[k] : null;
        }
        if (val) el.textContent = val;
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function initLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang !== currentLang) {
                currentLang = lang;
                setStoredLanguage(lang);
                renderAll();
            }
        });
    });
}

function initMobileMenu() {
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.site-nav');
    if (toggleBtn && nav) {
        toggleBtn.addEventListener('click', () => {
            nav.classList.toggle('is-open');
        });
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('is-open');
            });
        });
    }
}

function renderHero() {
}

function renderAbout() {
    const descEl = document.getElementById('about-desc');
    if (descEl) descEl.innerHTML = tournament.overview[currentLang];
}

function renderRegistration() {
    const formBtn = document.getElementById('reg-form-btn');
    if (formBtn && tournament.formUrl) {
        formBtn.href = tournament.formUrl;
        formBtn.target = "_blank";
        formBtn.rel = "noopener noreferrer";
    }
}

function renderRules() {
    const t = translations[currentLang];
    const restEl = document.getElementById('rules-restriction-content');
    if (restEl) restEl.textContent = t.rules.restrictionContent;

    // PDFダウンロードボタンの言語連動 (リンクURLのみ連動し、画像タグは保持)
    const downloadBtn = document.getElementById('rules-pdf-download-btn');
    if (downloadBtn) {
        const pdfFile = currentLang === 'en' ? tournament.resources.rulesPdf.en : tournament.resources.rulesPdf.ja;
        downloadBtn.href = pdfFile;
    }
}

function setupPdfModalHandlers() {
    const btnOpenPdf = document.getElementById('btn-open-pdf-modal');
    const btnClosePdf = document.getElementById('btn-close-pdf-modal');
    const modalOverlay = document.getElementById('pdf-modal-overlay');
    const iframe = document.getElementById('pdf-modal-iframe');
    const modalTitle = document.getElementById('pdf-modal-title');

    if (btnOpenPdf && modalOverlay && iframe) {
        btnOpenPdf.addEventListener('click', () => {
            const pdfFile = currentLang === 'en' ? tournament.resources.rulesPdf.en : tournament.resources.rulesPdf.ja;
            const pdfTitle = currentLang === 'en' ? '📄 Official Rules PDF' : '📄 詳細ルールPDF';
            
            iframe.src = pdfFile;
            if (modalTitle) modalTitle.textContent = pdfTitle;
            modalOverlay.classList.add('is-active');
            document.body.style.overflow = 'hidden';
        });
    }

    const closeModal = () => {
        if (modalOverlay) {
            modalOverlay.classList.remove('is-active');
            if (iframe) iframe.src = '';
            document.body.style.overflow = '';
        }
    };

    if (btnClosePdf) {
        btnClosePdf.addEventListener('click', closeModal);
    }

    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }
}

function renderTP() {
    const container = document.getElementById('tp-container');
    if (!container) return;

    if (!tpData || tpData.length === 0) {
        container.innerHTML = `<p class="placeholder-text">${translations[currentLang].tp.noDataYet}</p>`;
        return;
    }
}

function renderSchedule() {
    const container = document.getElementById('schedule-container');
    if (!container) return;

    const t = translations[currentLang];
    const items = tournament.schedule;

    if (!items || items.length === 0) return;

    let html = '<div class="timeline">';
    items.forEach(item => {
        const title = item.title[currentLang] || item.title.ja;
        const period = typeof item.period === 'object' ? (item.period[currentLang] || item.period.ja) : item.period;
        let badgeClass = 'status-badge';
        let statusText = t.schedule.statusUpcoming;

        if (item.status === 'active') {
            badgeClass += ' active';
            statusText = t.schedule.statusActive;
        } else if (item.status === 'completed') {
            statusText = t.schedule.statusCompleted;
        }

        html += `
            <div class="timeline-item ${item.status === 'active' ? 'active' : ''}">
                <div class="timeline-title">${title}</div>
                <div class="timeline-period">${period}</div>
                <div><span class="${badgeClass}">${statusText}</span></div>
            </div>
        `;
    });
    html += '</div>';

    container.innerHTML = html;
}

/**
 * YouTube URLから埋め込み用URLを自動抽出
 */
function extractYoutubeEmbedUrl(url) {
    if (!url || typeof url !== 'string') return null;
    const trimmed = url.trim();
    if (!trimmed) return null;
    if (trimmed.includes('youtube.com/embed/')) return trimmed;

    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|live\/)([^#\&\?]*).*/;
    const match = trimmed.match(regExp);
    if (match && match[2] && match[2].length === 11) {
        return `https://www.youtube.com/embed/${match[2]}`;
    }
    return null;
}

/**
 * 配信カード (DAY1〜DAY12) の動的レンダリング
 */
function renderStream() {
    const card = document.getElementById('stream-card');
    if (!card) return;

    const isPreparing = tournament.streamConfig ? tournament.streamConfig.isPreparing : true;

    // 準備中クラスのトグル
    if (isPreparing) {
        card.classList.add('is-preparing');
    } else {
        card.classList.remove('is-preparing');
    }

    const panelsContainer = card.querySelector('.ht-tab-panels');
    if (!panelsContainer) return;

    const streams = tournament.streams || [];
    if (streams.length === 0) return;

    let panelsHtml = '';
    streams.forEach((item, index) => {
        const dayNum = item.day || (index + 1);
        const isActive = index === 0 ? 'active' : '';
        const embedUrl = extractYoutubeEmbedUrl(item.youtubeUrl);

        panelsHtml += `<div class="ht-tab-panel ${isActive}" id="stream-panel-${dayNum}" role="tabpanel">`;
        
        if (embedUrl) {
            panelsHtml += `
                <div class="stream-content-box" style="padding: 20px 16px; text-align: center;">
                    <div style="position: relative; width: 100%; aspect-ratio: 16/9; margin-bottom: 16px; border-radius: 12px; overflow: hidden; background: #000; box-shadow: 0 4px 16px rgba(0,0,0,0.3);">
                        <iframe src="${embedUrl}" title="${item.title || 'DAY ' + dayNum}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position: absolute; top:0; left:0; width: 100%; height: 100%;"></iframe>
                    </div>
                    <a href="${item.youtubeUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 24px; background-color: #ff0000; color: #ffffff; text-decoration: none; border-radius: 30px; font-weight: 700; font-size: 0.95rem; box-shadow: 0 4px 12px rgba(255,0,0,0.3); transition: transform 0.2s;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        YouTubeで視聴する
                    </a>
                </div>
            `;
        } else {
            panelsHtml += `
                <div class="stream-placeholder-box" style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px 20px;">
                    <p style="font-size: 1.3rem; font-weight: 800; color: #ffffff; margin: 0 0 8px 0;">📹 配信枠準備中 (${item.title || 'DAY ' + dayNum})</p>
                    <p style="font-size: 0.95rem; color: #cccccc; margin: 0;">配信URLが登録されると、ここに動画プレイヤーが表示されます。</p>
                </div>
            `;
        }
        panelsHtml += `</div>`;
    });

    panelsContainer.innerHTML = panelsHtml;
}

/**
 * 大会結果カード (全チーム ＋ チーム詳細) の動的レンダリング
 */
function renderResults() {
    const card = document.getElementById('results-card');
    if (!card) return;

    const published = results ? results.published : false;

    // 非公開（準備中）の場合のクラス切替
    if (!published) {
        card.classList.add('is-preparing');
    } else {
        card.classList.remove('is-preparing');
    }

    const navContainer = card.querySelector('.ht-tab-nav');
    const panelsContainer = card.querySelector('.ht-tab-panels');
    if (!navContainer || !panelsContainer) return;

    const teams = (results && results.teams) ? results.teams : [];

    // 1. タブナビゲーションの動的生成
    let navHtml = `<button class="ht-tab-btn active" role="tab" data-tab="results" data-team="all" aria-selected="true">全チーム</button>`;
    teams.forEach((t, i) => {
        const teamKey = t.id || `team${i + 1}`;
        navHtml += `<button class="ht-tab-btn" role="tab" data-tab="results" data-team="${teamKey}" aria-selected="false">${t.name || '未登録'}</button>`;
    });
    navContainer.innerHTML = navHtml;

    // 2. パネル群の動的生成
    let panelsHtml = '';

    // (A) 全チーム順位表パネル
    panelsHtml += `
        <div class="ht-tab-panel active" id="results-panel-all" role="tabpanel">
            <div class="ht-table-wrapper">
                <table class="ht-table">
                    <thead>
                        <tr>
                            <th>順位</th>
                            <th>チーム名</th>
                            <th>合計TP</th>
                        </tr>
                    </thead>
                    <tbody>
    `;
    teams.forEach((t, i) => {
        panelsHtml += `
            <tr>
                <td>${t.rank ? t.rank : (i + 1)}</td>
                <td><strong>${t.name || '未登録'}</strong></td>
                <td>${t.totalTP !== undefined ? t.totalTP : '—'}</td>
            </tr>
        `;
    });
    panelsHtml += `
                    </tbody>
                </table>
            </div>
        </div>
    `;

    // (B) 各チーム詳細パネル
    teams.forEach((t, i) => {
        const teamKey = t.id || `team${i + 1}`;
        const players = t.players || [
            { name: "—", day: "—", squad: "—", ending: "—", tp: "—" },
            { name: "—", day: "—", squad: "—", ending: "—", tp: "—" },
            { name: "—", day: "—", squad: "—", ending: "—", tp: "—" }
        ];

        panelsHtml += `
            <div class="ht-tab-panel" id="results-panel-${teamKey}" role="tabpanel">
                <div class="ht-team-header">
                    <span class="ht-team-total-tp">合計TP：<strong>${t.totalTP !== undefined ? t.totalTP : '—'}</strong></span>
                    <h3 class="ht-team-title">${t.name || '未登録'}</h3>
                </div>
                <div class="ht-table-wrapper">
                    <table class="ht-table ht-team-table">
                        <thead>
                            <tr>
                                <th>プレイヤー名</th>
                                <th>DAY</th>
                                <th>使用分隊</th>
                                <th>エンディング</th>
                                <th>TP</th>
                            </tr>
                        </thead>
                        <tbody>
        `;

        players.forEach(p => {
            panelsHtml += `
                <tr>
                    <td><strong>${p.name || '—'}</strong></td>
                    <td>${p.day || '—'}</td>
                    <td>${p.squad || '—'}</td>
                    <td>${p.ending || '—'}</td>
                    <td>${p.tp !== undefined ? p.tp : '—'}</td>
                </tr>
            `;
        });

        panelsHtml += `
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    });

    panelsContainer.innerHTML = panelsHtml;
}

function renderFooter() {
    const linkX = document.getElementById('footer-link-x');
    const linkYoutube = document.getElementById('footer-link-youtube');

    if (linkX && tournament.links.x) {
        linkX.href = tournament.links.x;
    }
    if (linkYoutube && tournament.links.youtube) {
        linkYoutube.href = tournament.links.youtube;
    }
}

/**
 * カウントダウンバナー動的切り替え
 * (8/22: 30.png 〜 9/20: 01.png, 9/21以降: 配信結果はこちら.png & スムーズスクロール)
 */
function initCountdownBanner() {
    const bannerImg = document.getElementById('hero-recruiting-img');
    const bannerLink = document.getElementById('hero-banner-link');
    if (!bannerImg || !bannerLink) return;

    function updateBanner() {
        const now = new Date();
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const date = now.getDate();

        // URLパラメータ ?testDate=2026-09-21 によるテスト切替対応
        const urlParams = new URLSearchParams(window.location.search);
        let currentMonth = month;
        let currentDate = date;
        if (urlParams.has('testDate')) {
            const tDate = new Date(urlParams.get('testDate'));
            if (!isNaN(tDate.getTime())) {
                currentMonth = tDate.getMonth() + 1;
                currentDate = tDate.getDate();
            }
        }

        // 9月21日 以降
        if (currentMonth > 9 || (currentMonth === 9 && currentDate >= 21)) {
            bannerImg.src = './assets/配信結果はこちら.png';
            bannerImg.alt = '配信結果はこちら';
            bannerLink.href = '#stream';
            bannerLink.classList.remove('disabled-link');
            bannerLink.classList.add('active-link');
            bannerLink.onclick = (e) => {
                e.preventDefault();
                const targetSection = document.querySelector('.results-divider-wrapper') || document.querySelector('#stream') || document.querySelector('#results');
                if (targetSection) {
                    const headerOffset = 70;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            };
            return;
        }

        // 8/22 〜 9/20 カウントダウン (基準日 2026-09-21 00:00:00)
        const targetDate = new Date(year, 8, 21, 0, 0, 0);
        const checkDate = new Date(year, currentMonth - 1, currentDate, 0, 0, 0);

        const diffTime = targetDate - checkDate;
        const daysLeft = Math.round(diffTime / (1000 * 60 * 60 * 24));

        if (daysLeft >= 1 && daysLeft <= 30) {
            const formattedDays = String(daysLeft).padStart(2, '0');
            bannerImg.src = `./assets/countdown/${formattedDays}.png`;
            bannerImg.alt = `本戦まであと${daysLeft}日！`;
            bannerLink.removeAttribute('href');
            bannerLink.onclick = (e) => e.preventDefault();
            bannerLink.classList.remove('active-link');
            bannerLink.classList.add('disabled-link');
        } else if (daysLeft > 30) {
            // 8/21 以前
            bannerImg.src = './assets/参加者募集中.png';
            bannerImg.alt = '参加者募集中';
            bannerLink.removeAttribute('href');
            bannerLink.onclick = (e) => e.preventDefault();
            bannerLink.classList.remove('active-link');
            bannerLink.classList.add('disabled-link');
        }
    }

    updateBanner();

    // 深夜0時の自動更新タイマー
    const now = new Date();
    const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 5);
    const msUntilTomorrow = tomorrow - now;
    setTimeout(() => {
        updateBanner();
        setInterval(updateBanner, 86400000);
    }, msUntilTomorrow);
}

