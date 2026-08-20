/**
 * 東合祭 -溶炉- (TOGOSAI -YORO-)
 * Single-Page Tournament Website Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. PDF Modal Toggle
  const openPdfBtn = document.getElementById('sp-btn-open-pdf');
  const closePdfBtn = document.getElementById('sp-btn-close-pdf');
  const pdfModal = document.getElementById('sp-pdf-modal');
  const pdfIframe = document.getElementById('sp-pdf-iframe');

  if (openPdfBtn && pdfModal && pdfIframe) {
    openPdfBtn.addEventListener('click', (e) => {
      e.preventDefault();
      pdfIframe.src = './assets/rulebook_ja_2.0.pdf';
      pdfModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closePdfBtn && pdfModal) {
    const closeModal = () => {
      pdfModal.classList.remove('active');
      if (pdfIframe) pdfIframe.src = '';
      document.body.style.overflow = '';
    };

    closePdfBtn.addEventListener('click', closeModal);
    pdfModal.addEventListener('click', (e) => {
      if (e.target === pdfModal) closeModal();
    });
  }

  // 2. Active Navigation Highlight on Scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.sp-nav-link');

  const onScroll = () => {
    const scrollPos = window.scrollY + 200;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', onScroll);
});
