/**
 * MaterialCalc - Language Management (lang.js) / Dil Yönetim Sistemi
 * Handles multi-language switching (TR/EN) / Çoklu Dil Değiştirme ve Yerelleştirme
 */

document.addEventListener('DOMContentLoaded', () => {
    // Current language from local storage, default to 'tr' / Varsayılan dil (tr)
    let currentLang = localStorage.getItem('materialcalc_lang') || 'tr';
    
    // Set initial language / Başlangıç dilini ayarla
    setLanguage(currentLang);

    // Setup all language toggle checkboxes / Tüm dil anahtar kutularını bağla
    const langCheckboxes = document.querySelectorAll('.lang-checkbox');
    langCheckboxes.forEach(checkbox => {
        checkbox.checked = currentLang === 'en';
        checkbox.addEventListener('change', (e) => {
            const selectedLang = e.target.checked ? 'en' : 'tr';
            setLanguage(selectedLang);
        });
    });
});

/**
 * Apply selected language translations across the DOM / Seçilen dili tüm sayfaya uygula
 * @param {string} lang - 'tr' or 'en'
 */
function setLanguage(lang) {
    if (!translations || !translations[lang]) return;

    // Save to local storage / Tercihi tarayıcı hafızasına kaydet
    localStorage.setItem('materialcalc_lang', lang);
    document.documentElement.lang = lang;

    // Update document title dynamically / Sayfa sekme başlığını güncelle
    if (document.body.classList.contains('home-page') && translations[lang]['page.title.home']) {
        document.title = translations[lang]['page.title.home'];
    } else if (document.body.classList.contains('calc-page') && translations[lang]['page.title.calc']) {
        document.title = translations[lang]['page.title.calc'];
    } else if (document.body.classList.contains('usta-page') && translations[lang]['page.title.usta']) {
        document.title = translations[lang]['page.title.usta'];
    } else if (document.body.classList.contains('error-page') && translations[lang]['page.title.404']) {
        document.title = translations[lang]['page.title.404'];
    }

    // Update text elements / Metin elemanlarını güncelle
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (translations[lang][key].includes('<')) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Update input placeholders / Girdi yer tutucularını güncelle
    const elementsWithPlaceholder = document.querySelectorAll('[data-i18n-placeholder]');
    elementsWithPlaceholder.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Update tooltips / İpucu yazılarını güncelle
    const elementsWithTooltip = document.querySelectorAll('[data-i18n-tooltip]');
    elementsWithTooltip.forEach(el => {
        const key = el.getAttribute('data-i18n-tooltip');
        if (translations[lang][key]) {
            el.setAttribute('data-tooltip', translations[lang][key]);
            if (!el.hasAttribute('data-i18n-aria')) {
                el.setAttribute('aria-label', translations[lang][key] + (lang === 'en' ? ' Calculator' : ' Hesaplama'));
            }
        }
    });

    // Update aria labels / Erişilebilirlik etiketlerini güncelle
    const elementsWithAria = document.querySelectorAll('[data-i18n-aria]');
    elementsWithAria.forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        if (translations[lang][key]) {
            el.setAttribute('aria-label', translations[lang][key]);
        }
    });

    // Sync all toggle switch states / Tüm anahtar kutularını senkronize et
    const langCheckboxes = document.querySelectorAll('.lang-checkbox');
    langCheckboxes.forEach(checkbox => {
        checkbox.checked = lang === 'en';
    });

    // Dispatch custom event for dynamic components / Dinamik bileşenler için dil değişti bildirimi
    const event = new CustomEvent('languageChanged', { detail: { lang: lang } });
    document.dispatchEvent(event);
}
