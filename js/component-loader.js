/**
 * component-loader.js
 * 東合祭 -溶炉- コンポーネント動的マウントスクリプト
 */

import { initTabs } from './tabs.js';

export async function loadComponents() {
  const components = [
    { rootId: 'stream-card-root', path: './component/stream-card.html' },
    { rootId: 'results-card-root', path: './component/results-card.html' }
  ];

  try {
    await Promise.all(
      components.map(async ({ rootId, path }) => {
        const rootElem = document.getElementById(rootId);
        if (!rootElem) return;

        const response = await fetch(path);
        if (!response.ok) {
          throw new Error(`Failed to load component from ${path}: ${response.statusText}`);
        }
        const html = await response.text();
        rootElem.outerHTML = html;
      })
    );

    // 全コンポーネント挿入後にタブイベントを初期化
    initTabs();
  } catch (err) {
    console.error('Error loading components:', err);
  }
}

// DOM構築完了後に実行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadComponents);
} else {
  loadComponents();
}
