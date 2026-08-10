/**
 * tabs.js
 * 配信カード (DAY1〜DAY12) / 結果カード (全チーム + チームA〜H) の
 * タブ切り替えを担当するモジュール
 */

/**
 * 指定した tabGroup 内のタブを初期化する
 * @param {HTMLElement} card - .ht-card 要素
 */
function initTabCard(card) {
  const nav    = card.querySelector('.ht-tab-nav');
  const panels = card.querySelectorAll('.ht-tab-panel');

  if (!nav) return;

  nav.addEventListener('click', (e) => {
    const btn = e.target.closest('.ht-tab-btn');
    if (!btn) return;

    // アクティブタブの切り替え
    nav.querySelectorAll('.ht-tab-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');

    // パネルの切り替え
    // data-day → stream-panel-{n}
    // data-team → results-panel-{team}
    const day  = btn.dataset.day;
    const team = btn.dataset.team;
    const targetId = day
      ? `stream-panel-${day}`
      : `results-panel-${team}`;

    panels.forEach(panel => {
      if (panel.id === targetId) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
  });
}

export function initTabs() {
  document.querySelectorAll('.ht-card').forEach(card => initTabCard(card));
}

// DOM 準備後に全カードを初期化
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTabs);
} else {
  initTabs();
}
