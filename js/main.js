/**
 * 東合祭 -溶炉- (TOGOSAI -YORO-)
 * メインアプリケーションUI・描画ロジック (main.js)
 */

import { tournament } from './data.js';
import { results } from './results.js';
import { tpData } from './tp.js';
import { translations, terms, getStoredLanguage, setStoredLanguage } from './i18n.js';

let currentLang = getStoredLanguage();

document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initMobileMenu();
    setupPdfModalHandlers();
    initScrollActiveNav();
    initBackToTop();
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

function renderStream() {
    const container = document.getElementById('stream-container');
    if (!container) return;

    if (!tournament.streams || tournament.streams.length === 0) {
        container.innerHTML = `
            <div class="placeholder-box" style="text-align: center; padding: 36px 20px;">
                <p style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 0;">更新次第開放予定</p>
            </div>
        `;
        return;
    }
}

function renderResults() {
    const container = document.getElementById('results-container');
    if (!container) return;

    if (!results || results.length === 0) {
        container.innerHTML = `
            <div class="placeholder-box" style="text-align: center; padding: 36px 20px;">
                <p style="font-size: 1.25rem; font-weight: 700; color: var(--text-primary); margin: 0;">更新次第開放予定</p>
            </div>
        `;
        return;
    }
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
