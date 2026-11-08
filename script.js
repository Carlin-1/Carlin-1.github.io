(() => {
  const body = document.body;
  const switcher = document.querySelector('.lang-switch');
  const savedLanguage = localStorage.getItem('preferred-language');
  const initialLanguage = savedLanguage || (navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en');

  function setLanguage(language) {
    const isEnglish = language === 'en';
    body.dataset.lang = language;
    document.documentElement.lang = isEnglish ? 'en' : 'zh-CN';
    document.title = isEnglish ? 'Kailin Pang · Personal Homepage' : '庞凯琳 · 个人主页';
    switcher.textContent = isEnglish ? '中文' : 'EN';
    switcher.setAttribute('aria-label', isEnglish ? '切换至中文' : 'Switch to English');
    switcher.setAttribute('aria-pressed', String(isEnglish));
    localStorage.setItem('preferred-language', language);
  }

  setLanguage(initialLanguage);
  switcher.addEventListener('click', () => setLanguage(body.dataset.lang === 'zh' ? 'en' : 'zh'));
  document.querySelector('#year').textContent = new Date().getFullYear();
})();
