document.addEventListener('DOMContentLoaded', () => {
    // Current language from local storage, default to 'tr'
    let currentLang = localStorage.getItem('materialcalc_lang') || 'tr';
    
    // Set initial language
    setLanguage(currentLang);

    // Setup language toggle checkbox
    const langCheckbox = document.getElementById('langToggleCheckbox');
    if (langCheckbox) {
        langCheckbox.checked = currentLang === 'en';
        langCheckbox.addEventListener('change', (e) => {
            const selectedLang = e.target.checked ? 'en' : 'tr';
            setLanguage(selectedLang);
        });
    }
});

function setLanguage(lang) {
    if (!translations || !translations[lang]) return;

    // Save to local storage
    localStorage.setItem('materialcalc_lang', lang);

    // Update DOM elements
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Check if element has HTML inside (like <br> in calc header)
            if (translations[lang][key].includes('<')) {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // Update Tooltips and Placeholders specifically
    const elementsWithPlaceholder = document.querySelectorAll('[data-i18n-placeholder]');
    elementsWithPlaceholder.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    const elementsWithTooltip = document.querySelectorAll('[data-i18n-tooltip]');
    elementsWithTooltip.forEach(el => {
        const key = el.getAttribute('data-i18n-tooltip');
        if (translations[lang][key]) {
            el.setAttribute('data-tooltip', translations[lang][key]);
            el.setAttribute('aria-label', translations[lang][key] + ' Hesaplama');
        }
    });

    // Ensure checkbox is synced if setLanguage is called programmatically
    const langCheckbox = document.getElementById('langToggleCheckbox');
    if (langCheckbox) {
        langCheckbox.checked = lang === 'en';
    }

    // Dispatch event for other scripts (like app.js typewriter) to know
    const event = new CustomEvent('languageChanged', { detail: { lang: lang } });
    document.dispatchEvent(event);
}
