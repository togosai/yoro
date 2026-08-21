const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function writePdfForce(page, targetPath) {
  const tempPath = targetPath + '.new.pdf';
  await page.pdf({
    path: tempPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '0px', right: '0px', bottom: '0px', left: '0px' }
  });

  try {
    if (fs.existsSync(targetPath)) {
      fs.unlinkSync(targetPath);
    }
    fs.renameSync(tempPath, targetPath);
    console.log('Successfully wrote:', targetPath);
  } catch (err) {
    console.warn('Could not directly replace target file, copying over:', err.message);
    try {
      fs.copyFileSync(tempPath, targetPath);
      fs.unlinkSync(tempPath);
      console.log('Successfully copied to target:', targetPath);
    } catch (err2) {
      console.error('Failed to update file:', targetPath, err2.message);
    }
  }
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const baseDir = 'C:/Users/umi3l/.gemini/antigravity-ide/scratch/TOGOSAI';
  const targetDirs = [
    path.join(baseDir, '資料'),
    path.join(baseDir, 'assets')
  ];

  for (const dir of targetDirs) {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }

  // 日本語版 PDF 生成
  const jaHtmlPath = 'file:///' + path.join(baseDir, 'rulebook_ja_v2.html').replace(/\\/g, '/');
  console.log('Loading Japanese HTML:', jaHtmlPath);
  await page.goto(jaHtmlPath, { waitUntil: 'networkidle' });
  await page.evaluateHandle('document.fonts.ready');
  
  for (const dir of targetDirs) {
    const pdfPath = path.join(dir, 'rulebook_ja_2.0.pdf');
    await writePdfForce(page, pdfPath);
  }

  // 英語版 PDF 生成
  const enHtmlPath = 'file:///' + path.join(baseDir, 'rulebook_en_v2.html').replace(/\\/g, '/');
  console.log('Loading English HTML:', enHtmlPath);
  await page.goto(enHtmlPath, { waitUntil: 'networkidle' });
  await page.evaluateHandle('document.fonts.ready');

  for (const dir of targetDirs) {
    const pdfPath = path.join(dir, 'rulebook_en_2.0.pdf');
    await writePdfForce(page, pdfPath);
  }

  await browser.close();
  console.log('All PDFs re-generated successfully!');
})();
