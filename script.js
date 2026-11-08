(() => {
  const links = document.querySelectorAll('[data-language]');

  function updateLanguage() {
    const language = new URLSearchParams(location.search).get('lang') === 'zh' ? 'zh' : 'en';
    document.body.dataset.lang = language;
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = language === 'zh' ? '庞凯琳 · 学术主页' : 'Kailin Pang — Academic Homepage';
    for (const link of links) {
      if (link.dataset.language === language) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
      link.href = '?lang=' + link.dataset.language + location.hash;
    }
  }

  updateLanguage();
  window.addEventListener('hashchange', updateLanguage);
  document.querySelector('#year').textContent = new Date().getFullYear();
})();
