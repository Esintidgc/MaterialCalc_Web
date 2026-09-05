/**
 * MaterialCalc - Main Application Logic (app.js) / Ana Uygulama Mantığı
 * Handles smooth scrolling (Lenis), animations (AOS), floating navbar,
 * calculators accordion, 3D interactive wallet, smart live search, and FAQ accordion.
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. SMOOTH SCROLL (LENIS) / PÜRÜZSÜZ KAYDIRMA SİSTEMİ
       ========================================================================== */
    let lenis = null;
    if (typeof Lenis !== 'undefined') {
        lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }

    /* ==========================================================================
       2. SCROLL ANIMATIONS (AOS) / KAYDIRMA ANİMASYONLARI
       ========================================================================== */
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
            delay: 100,
        });
    }

    /* ==========================================================================
       3. FLOATING NAVBAR & DOCK SCROLL LOGIC / YÜZEN ÜST MENÜ VE DOCK KAYDIRMA ETKİLERİ
       ========================================================================== */
    const header = document.querySelector('.floating-header');
    const floatingDock = document.querySelector('.floating-dock');
    const isHomePage = document.body.classList.contains('home-page');

    const handleNavbarScroll = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;

        if (isHomePage) {
            if (scrollY > 50) {
                if (header && !header.classList.contains('scrolled')) {
                    header.classList.add('scrolled');
                }
                if (floatingDock && !floatingDock.classList.contains('scrolled')) {
                    floatingDock.classList.add('scrolled');
                }
            } else {
                if (header && header.classList.contains('scrolled')) {
                    header.classList.remove('scrolled');
                }
                if (floatingDock && floatingDock.classList.contains('scrolled')) {
                    floatingDock.classList.remove('scrolled');
                }
            }
        } else {
            // İç sayfalarda (hesapla, usta-hesabi) navbar ve dock her zaman scrolled (beyaz) kalır
            if (header && !header.classList.contains('scrolled')) {
                header.classList.add('scrolled');
            }
            if (floatingDock && !floatingDock.classList.contains('scrolled')) {
                floatingDock.classList.add('scrolled');
            }
        }
    };

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    if (lenis) {
        lenis.on('scroll', handleNavbarScroll);
    }
    handleNavbarScroll(); // Sayfa açılışında ilk kontrol

    /* ==========================================================================
       4. MOBILE HAMBURGER MENU / MOBİL MENÜ AÇILMA & KAPANMA
       ========================================================================== */
    const mobileMenuToggle = document.getElementById('mobileMenuToggle') || document.querySelector('.mobile-menu-toggle');
    const mobileMenuOverlay = document.getElementById('mobileMenuDrawer') || document.querySelector('.mobile-menu-overlay');
    const mobileNavLinks = document.querySelectorAll('.overlay-link, .overlay-cta, .mobile-nav-link');

    if (mobileMenuToggle && mobileMenuOverlay) {
        const toggleMobileMenu = (forceState) => {
            const isOpen = typeof forceState === 'boolean'
                ? forceState
                : !mobileMenuOverlay.classList.contains('active');

            if (isOpen) {
                mobileMenuOverlay.classList.add('active');
                mobileMenuToggle.classList.add('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'true');
                document.body.style.overflow = 'hidden';
                if (lenis) lenis.stop();
            } else {
                mobileMenuOverlay.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
                if (lenis) lenis.start();
            }
        };

        mobileMenuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleMobileMenu();
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                toggleMobileMenu(false);
            });
        });
    }

    /* ==========================================================================
       5. SMOOTH SCROLL FOR ANCHOR LINKS / SAYFA İÇİ BAĞLANTILARA PÜRÜZSÜZ KAYIŞ
       ========================================================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#' || targetId === '') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                if (lenis) {
                    lenis.scrollTo(targetElement, { offset: -90 });
                } else {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    /* ==========================================================================
       6. ACCORDION CALCULATORS (INDEX.HTML) / HESAPLAYICILAR AKORDİYON SİSTEMİ
       ========================================================================== */
    const accordionCards = document.querySelectorAll('.calc-accordion-card, .accordion-card');
    const accordionContainer = document.querySelector('.calc-accordion-container');

    if (accordionCards.length > 0) {
        accordionCards.forEach(card => {
            // Masaüstü için fare ile üzerine gelme (hover)
            card.addEventListener('mouseenter', () => {
                if (window.innerWidth > 1200) {
                    accordionCards.forEach(c => c.classList.remove('active'));
                    card.classList.add('active');
                }
            });

            // Tablet ve dokunmatik cihazlar için dokunma / tıklama (tap/click)
            card.addEventListener('click', (e) => {
                // Eğer doğrudan "Hesapla" link/butonuna tıklandıysa sayfa geçişine izin ver
                if (e.target.closest('.btn-pill-primary') || e.target.closest('button')) {
                    return;
                }

                e.stopPropagation();
                const isActive = card.classList.contains('active');

                // Diğer tüm kartları kapat
                accordionCards.forEach(c => c.classList.remove('active'));

                // Tıklanan kart kapalıysa aç, zaten açıksa kapat (toggle)
                if (!isActive) {
                    card.classList.add('active');
                }
            });
        });

        // Sayfa dışına tıklandığında açık kartı kapatma (Tablet/Mobil için)
        document.addEventListener('click', (e) => {
            if (accordionContainer && !accordionContainer.contains(e.target)) {
                if (window.innerWidth <= 1200) {
                    accordionCards.forEach(c => c.classList.remove('active'));
                }
            }
        });
    }

    /* ==========================================================================
       7. 3D INTERACTIVE WALLET / NASIL ÇALIŞIR 3D İNTERAKTİF CÜZDAN SİMÜLASYONU
       ========================================================================== */
    const wallet = document.querySelector('.wallet');
    const walletCards = document.querySelectorAll('.wallet-card');
    const walletPocket = document.querySelector('.pocket');

    if (wallet) {
        // Tüm kartların odak durumunu temizle ve cüzdan durumunu sıfırla
        const clearCardFocus = () => {
            walletCards.forEach(c => c.classList.remove('card-focused'));
            wallet.classList.remove('has-card-focused');
        };

        // 1. Kartlara tıklama / dokunma (Yalnızca tıklanan kart tekil olarak öne çıkar)
        walletCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.stopPropagation(); // Cüzdan kapanma olayının kartı ezmesini engelle

                const isAlreadyFocused = card.classList.contains('card-focused');

                if (isAlreadyFocused) {
                    // Zaten açık olan karta tekrar basılırsa kartı cebine geri sok ve kapat
                    card.classList.remove('card-focused');
                    wallet.classList.remove('has-card-focused');
                    wallet.classList.remove('active');
                } else {
                    // Diğer kartların odağını kaldır, SADECE bu kartı öne çıkar
                    clearCardFocus();
                    card.classList.add('card-focused');
                    wallet.classList.add('active');
                    wallet.classList.add('has-card-focused');
                }
            });
        });

        // 2. Cebe tıklama (Pocket Tap / Click -> Cüzdanı Yelpaze Modunda Aç/Kapat)
        if (walletPocket) {
            walletPocket.addEventListener('click', (e) => {
                e.stopPropagation();
                const isCurrentlyActive = wallet.classList.contains('active');
                if (isCurrentlyActive) {
                    wallet.classList.remove('active');
                    clearCardFocus();
                } else {
                    clearCardFocus();
                    wallet.classList.add('active');
                }
            });
        }

        // 3. Cüzdan boşluğuna tıklama
        wallet.addEventListener('click', (e) => {
            if (!e.target.closest('.wallet-card') && !e.target.closest('.pocket')) {
                e.stopPropagation();
                const isCurrentlyActive = wallet.classList.contains('active');
                if (isCurrentlyActive) {
                    wallet.classList.remove('active');
                    clearCardFocus();
                } else {
                    clearCardFocus();
                    wallet.classList.add('active');
                }
            }
        });

        // 4. Sayfa dışına tıklandığında cüzdanı ve açık kartları kapat
        document.addEventListener('click', (e) => {
            if (!wallet.contains(e.target) && wallet.classList.contains('active')) {
                wallet.classList.remove('active');
                clearCardFocus();
            }
        });
    }

    /* ==========================================================================
       8. BACK TO TOP BUTTON / YUKARI ÇIK BUTONU
       ========================================================================== */
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            if (scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }, { passive: true });

        backToTopBtn.addEventListener('click', () => {
            if (lenis) {
                lenis.scrollTo(0, { duration: 1.5 });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    /* ==========================================================================
       9. SMART LIVE AUTOCOMPLETE SEARCH / AKILLI CANLI ARAMA VE VURGULAMA
       ========================================================================== */
    const heroSearchInput = document.getElementById('heroSearchInput');
    const heroSearchForm = document.querySelector('.hero-search-bar');
    const heroSearchDropdown = document.getElementById('heroSearchDropdown');

    if (heroSearchInput && heroSearchDropdown) {
        // Zengin Çok Dilli Arama Veritabanı (Diller Kesinlikle Ayrı) / Strict Multilingual Search Database
        const searchIndex = [
            {
                id: 'parquet',
                title: { tr: 'Parke Hesaplama', en: 'Parquet Calculation' },
                desc: { tr: 'Laminant ve lamine parke paket & fire hesabı', en: 'Laminate & engineered parquet package calculator' },
                categoryKey: 'search.badgeCalculator',
                category: { tr: 'Hesaplayıcı', en: 'Calculator' },
                keywords: {
                    tr: ['parke', 'laminant', 'lamine', 'zemin', 'ahsap', 'ahşap', 'paket', 'fire', 'derz', 'm2', 'metre'],
                    en: ['parquet', 'laminate', 'engineered', 'flooring', 'floor', 'wood', 'package', 'box', 'waste', 'sqm']
                },
                url: 'hesapla.html?type=parquet',
                icon: '<svg viewBox="0 0 24 24" stroke-width="2"><path d="M4 4h16v16H4zM4 12h16M12 4v16"/></svg>'
            },
            {
                id: 'paint',
                title: { tr: 'Boya Hesaplama', en: 'Paint Calculation' },
                desc: { tr: 'Duvar ve tavan için sarfiyat & litre hesabı', en: 'Wall & ceiling paint liter calculation' },
                categoryKey: 'search.badgeCalculator',
                category: { tr: 'Hesaplayıcı', en: 'Calculator' },
                keywords: {
                    tr: ['boya', 'tavan', 'astar', 'duvar boyası', 'sarfiyat', 'litre', 'kat', 'renk', 'badana', 'fırça', 'rulo'],
                    en: ['paint', 'painting', 'wall', 'ceiling', 'primer', 'coat', 'liter', 'liters', 'gallon', 'coverage', 'roller']
                },
                url: 'hesapla.html?type=paint',
                icon: '<svg viewBox="0 0 24 24" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>'
            },
            {
                id: 'ceramic',
                title: { tr: 'Seramik & Fayans Hesaplama', en: 'Ceramic & Tile Calculation' },
                desc: { tr: 'Zemin ve duvar seramik kutu & fire miktarı', en: 'Floor and wall tile box & waste estimation' },
                categoryKey: 'search.badgeCalculator',
                category: { tr: 'Hesaplayıcı', en: 'Calculator' },
                keywords: {
                    tr: ['seramik', 'fayans', 'kalebodur', 'derz', 'kutu', 'zemin', 'banyo', 'mutfak', 'fire', 'yapıştırıcı', 'harç'],
                    en: ['ceramic', 'tile', 'tiles', 'porcelain', 'grout', 'box', 'floor', 'bathroom', 'kitchen', 'waste', 'adhesive']
                },
                url: 'hesapla.html?type=ceramic',
                icon: '<svg viewBox="0 0 24 24" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 12h18M12 3v18"/></svg>'
            },
            {
                id: 'wallpaper',
                title: { tr: 'Duvar Kağıdı Hesaplama', en: 'Wallpaper Calculation' },
                desc: { tr: 'Duvar ölçüsüne göre rulo adedi hesabı', en: 'Rolls needed based on wall dimensions' },
                categoryKey: 'search.badgeCalculator',
                category: { tr: 'Hesaplayıcı', en: 'Calculator' },
                keywords: {
                    tr: ['duvar kağıdı', 'kagit', 'duvar kagidi', 'rulo', 'desen', 'duvar', 'tutkal', 'kaplama'],
                    en: ['wallpaper', 'wall', 'paper', 'roll', 'rolls', 'pattern', 'paste', 'glue', 'covering']
                },
                url: 'hesapla.html?type=wallpaper',
                icon: '<svg viewBox="0 0 24 24" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 12h16"/></svg>'
            },
            {
                id: 'baseboard',
                title: { tr: 'Süpürgelik Hesaplama', en: 'Baseboard Calculation' },
                desc: { tr: 'Oda çevresi ve kapı boşluklarına göre metraj', en: 'Perimeter length & door deduction calculation' },
                categoryKey: 'search.badgeCalculator',
                category: { tr: 'Hesaplayıcı', en: 'Calculator' },
                keywords: {
                    tr: ['süpürgelik', 'supurgelik', 'boy', 'metre', 'kose', 'köşe', 'kapı', 'pervaz', 'ahşap', 'pvc'],
                    en: ['baseboard', 'skirting', 'skirting board', 'plinth', 'moulding', 'perimeter', 'corner', 'door']
                },
                url: 'hesapla.html?type=baseboard',
                icon: '<svg viewBox="0 0 24 24" stroke-width="2"><path d="M4 20h16M4 20L4 20M20 20L20 4"/></svg>'
            },
            {
                id: 'drywall',
                title: { tr: 'Alçıpan & Bölme Duvar', en: 'Drywall & Partition' },
                desc: { tr: 'Alçıpan plaka ve profil hesabı', en: 'Drywall sheet & stud profile estimation' },
                categoryKey: 'search.badgeCalculator',
                category: { tr: 'Hesaplayıcı', en: 'Calculator' },
                keywords: {
                    tr: ['alçıpan', 'alcipan', 'bölme duvar', 'plaka', 'asma tavan', 'profil', 'vida', 'file'],
                    en: ['drywall', 'gypsum', 'plasterboard', 'board', 'partition', 'sheet', 'suspended ceiling', 'stud', 'profile']
                },
                url: 'hesapla.html?type=drywall',
                icon: '<svg viewBox="0 0 24 24" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 12 12 17 22 12"/><polyline points="2 17 12 22 22 17"/></svg>'
            },
            {
                id: 'usta',
                title: { tr: 'Usta Hesabı & Şantiye Formülleri', en: 'Pro Estimator & Jobsite Formulas' },
                desc: { tr: 'Şantiyede kullanılan pratik altın kurallar', en: 'Practical jobsite formulas and golden rules' },
                categoryKey: 'search.badgeGuide',
                category: { tr: 'Rehber', en: 'Guide' },
                keywords: {
                    tr: ['usta', 'usta hesabı', 'formül', 'formula', 'pratik', 'şantiye', 'santiye', 'maliyet', 'hesap'],
                    en: ['pro', 'master', 'estimator', 'jobsite', 'formula', 'formulas', 'rules', 'contractor', 'cost']
                },
                url: 'usta-hesabi.html',
                icon: '<svg viewBox="0 0 24 24" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>'
            },
            {
                id: 'hiw',
                title: { tr: 'Nasıl Çalışır? (3D Cüzdan)', en: 'How It Works? (3D Wallet)' },
                desc: { tr: '3 adımda hızlı malzeme hesaplama adımları', en: 'Quick calculation in 3 simple steps' },
                categoryKey: 'search.badgeGuide',
                category: { tr: 'Rehber', en: 'Guide' },
                keywords: {
                    tr: ['nasıl çalışır', 'nasil calisir', 'adım', 'adim', 'cüzdan', 'kullanım', 'rehber'],
                    en: ['how it works', 'how', 'steps', 'step', 'wallet', 'guide', 'tutorial', 'instructions']
                },
                url: '#howItWorks',
                icon: '<svg viewBox="0 0 24 24" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>'
            },
            {
                id: 'faq',
                title: { tr: 'Sıkça Sorulan Sorular (S.S.S)', en: 'Frequently Asked Questions (FAQ)' },
                desc: { tr: 'Doğruluk, fire oranı ve ücretsiz kullanım detayları', en: 'Accuracy, waste margins and free usage details' },
                categoryKey: 'search.badgeInfo',
                category: { tr: 'Bilgi', en: 'Info' },
                keywords: {
                    tr: ['sss', 'soru', 'cevap', 'ücretsiz', 'guvenilir', 'doğruluk', 'fire oranı', 'yardım'],
                    en: ['faq', 'questions', 'answers', 'free', 'accurate', 'accuracy', 'waste margin', 'help']
                },
                url: '#faq',
                icon: '<svg viewBox="0 0 24 24" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>'
            },
            {
                id: 'contact',
                title: { tr: 'İletişim & Destek', en: 'Contact & Support' },
                desc: { tr: 'Bize ulaşın ve geri bildirim gönderin', en: 'Get in touch and send feedback' },
                categoryKey: 'search.badgeSupport',
                category: { tr: 'Destek', en: 'Support' },
                keywords: {
                    tr: ['iletişim', 'iletisim', 'destek', 'mail', 'email', 'mesaj', 'telefon', 'ulaşın'],
                    en: ['contact', 'support', 'email', 'mail', 'message', 'help', 'feedback', 'touch']
                },
                url: '#contact',
                icon: '<svg viewBox="0 0 24 24" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>'
            }
        ];

        let selectedIndex = -1;

        // Karakterleri normalize etme / Normalize characters (TR & EN)
        const normalizeText = (text) => {
            return (text || '')
                .replace(/İ/g, 'i')
                .replace(/I/g, 'ı')
                .replace(/Ğ/g, 'g')
                .replace(/ğ/g, 'g')
                .replace(/Ü/g, 'u')
                .replace(/ü/g, 'u')
                .replace(/Ş/g, 's')
                .replace(/ş/g, 's')
                .replace(/Ö/g, 'o')
                .replace(/ö/g, 'o')
                .replace(/Ç/g, 'c')
                .replace(/ç/g, 'c')
                .toLowerCase()
                .trim();
        };

        // Eşleşen harfleri güvenli şekilde kalın ve belirgin vurgulama / Safe highlight matching query
        const highlightMatch = (text, query) => {
            if (!text) return '';
            // HTML Güvenlik Kaçışı / HTML entity escape
            const safeText = String(text)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#039;');
            if (!query) return safeText;
            const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`(${escapedQuery})`, 'gi');
            return safeText.replace(regex, '<span class="search-highlight">$1</span>');
        };

        // Sonuçları Açılır Menüde Listeleme / Render Search Results
        const renderResults = (query) => {
            const currentLang = localStorage.getItem('materialcalc_lang') || 'tr';
            const cleanQuery = normalizeText(query);

            if (!cleanQuery) {
                heroSearchDropdown.classList.remove('active');
                heroSearchDropdown.innerHTML = '';
                selectedIndex = -1;
                return;
            }

            // SIKI DİL AYRIMI: Sadece ve sadece seçili dilin başlık ve kelimelerinde arar / Strict Language Match
            const scoredMatches = searchIndex.map(item => {
                const title = item.title[currentLang] || item.title.tr;
                const normTitle = normalizeText(title);
                const titleWords = normTitle.split(/\s+/);

                const itemKeywords = item.keywords[currentLang] || [];
                const normKeywords = itemKeywords.map(k => normalizeText(k));
                const normDesc = normalizeText(item.desc[currentLang] || item.desc.tr);

                let score = 0;

                // 1 veya 2 harfli kısa aramalarda kelime başı eşleşmesi şartı
                if (cleanQuery.length <= 2) {
                    if (titleWords.some(w => w.startsWith(cleanQuery) && w !== 'hesaplama' && w !== 'calculation')) {
                        score += 100;
                    } else if (normKeywords.some(k => k.startsWith(cleanQuery))) {
                        score += 60;
                    }
                } else {
                    // 3+ harfli aramalarda relevancy puanlama
                    if (normTitle.startsWith(cleanQuery)) score += 120;
                    else if (titleWords.some(w => w.startsWith(cleanQuery))) score += 100;
                    else if (normKeywords.some(k => k.startsWith(cleanQuery))) score += 80;
                    else if (normKeywords.some(k => k.includes(cleanQuery))) score += 50;
                    else if (normTitle.includes(cleanQuery)) score += 40;
                    else if (normDesc.includes(cleanQuery)) score += 20;
                }

                return { item, score };
            })
            .filter(res => res.score > 0)
            .sort((a, b) => b.score - a.score)
            .map(res => res.item);

            const matches = scoredMatches;

            if (matches.length === 0) {
                const noResultsText = (typeof translations !== 'undefined' && translations[currentLang] && translations[currentLang]['search.noResults'])
                    ? translations[currentLang]['search.noResults']
                    : (currentLang === 'tr' ? 'Sonuç bulunamadı' : 'No results found');

                heroSearchDropdown.innerHTML = `
                    <div class="search-empty-state">
                        <div class="search-empty-title">${noResultsText}</div>
                    </div>
                `;
                heroSearchDropdown.classList.add('active');
                return;
            }

            selectedIndex = -1;
            let html = '';

            matches.forEach((item, index) => {
                const rawTitle = item.title[currentLang] || item.title.tr;
                const rawDesc = item.desc[currentLang] || item.desc.tr;
                
                // Kategori Rozeti / Category Badge
                let rawBadge = item.category[currentLang] || item.category.tr;
                if (typeof translations !== 'undefined' && translations[currentLang] && item.categoryKey && translations[currentLang][item.categoryKey]) {
                    rawBadge = translations[currentLang][item.categoryKey];
                }

                const highlightedTitle = highlightMatch(rawTitle, query);
                const highlightedDesc = highlightMatch(rawDesc, query);

                html += `
                    <a href="${item.url}" class="search-result-item" data-index="${index}" data-url="${item.url}">
                        <div class="search-item-left">
                            <div class="search-item-icon">${item.icon}</div>
                            <div class="search-item-info">
                                <span class="search-item-title">${highlightedTitle}</span>
                                <span class="search-item-desc">${highlightedDesc}</span>
                            </div>
                        </div>
                        <div class="search-item-right">
                            <span class="search-item-badge">${rawBadge}</span>
                            <svg class="search-item-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M9 18l6-6-6-6"></path>
                            </svg>
                        </div>
                    </a>
                `;
            });

            heroSearchDropdown.innerHTML = html;
            heroSearchDropdown.classList.add('active');

            // Sonuç bağlantılarına tıklama / Result link click handling
            heroSearchDropdown.querySelectorAll('.search-result-item').forEach(link => {
                link.addEventListener('click', (e) => {
                    const url = link.getAttribute('data-url');
                    if (url.startsWith('#')) {
                        e.preventDefault();
                        heroSearchDropdown.classList.remove('active');
                        const targetEl = document.querySelector(url);
                        if (targetEl) {
                            if (lenis) lenis.scrollTo(targetEl, { offset: -90 });
                            else targetEl.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                });
            });
        };

        // Girdi olayını dinleme / Listen to live typing
        heroSearchInput.addEventListener('input', (e) => {
            renderResults(e.target.value);
        });

        // Odaklanıldığında varsa sonuçları göster / Show results on focus
        heroSearchInput.addEventListener('focus', () => {
            if (heroSearchInput.value.trim()) {
                renderResults(heroSearchInput.value.trim());
            }
        });

        // Dil Değiştirildiğinde Arama Sonuçlarını Yenile / Refresh Search Results on Language Change
        document.addEventListener('languageChanged', () => {
            if (heroSearchInput && heroSearchDropdown && heroSearchDropdown.classList.contains('active')) {
                renderResults(heroSearchInput.value);
            }
        });

        // Klavye Yön Tuşları ile Gezinme / Keyboard Navigation (ArrowUp, ArrowDown, Enter, Escape)
        heroSearchInput.addEventListener('keydown', (e) => {
            const items = heroSearchDropdown.querySelectorAll('.search-result-item');
            if (!heroSearchDropdown.classList.contains('active') || items.length === 0) return;

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                selectedIndex = (selectedIndex + 1) % items.length;
                updateSelection(items);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                selectedIndex = (selectedIndex - 1 + items.length) % items.length;
                updateSelection(items);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (selectedIndex >= 0 && items[selectedIndex]) {
                    items[selectedIndex].click();
                } else if (items.length > 0) {
                    items[0].click();
                }
            } else if (e.key === 'Escape') {
                heroSearchDropdown.classList.remove('active');
            }
        });

        const updateSelection = (items) => {
            items.forEach((item, idx) => {
                if (idx === selectedIndex) {
                    item.classList.add('selected');
                    item.scrollIntoView({ block: 'nearest' });
                } else {
                    item.classList.remove('selected');
                }
            });
        };

        // Menü içinde kaydırma yaparken sayfanın kaymasını engelle / Prevent page scroll during dropdown scroll
        heroSearchDropdown.addEventListener('wheel', (e) => {
            e.stopPropagation();
        }, { passive: true });

        heroSearchDropdown.addEventListener('touchmove', (e) => {
            e.stopPropagation();
        }, { passive: true });

        // Dışarı tıklandığında açılır menüyü kapat / Close dropdown on click outside
        document.addEventListener('click', (e) => {
            if (!heroSearchInput.contains(e.target) && !heroSearchDropdown.contains(e.target)) {
                heroSearchDropdown.classList.remove('active');
            }
        });

        // Form submit engelleme / Prevent default form submission
        if (heroSearchForm) {
            heroSearchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const items = heroSearchDropdown.querySelectorAll('.search-result-item');
                if (items.length > 0) {
                    items[0].click();
                }
            });
        }
    }

    /* ==========================================================================
       10. FAQ ACCORDION LOGIC / S.S.S AKORDİYON AÇILMA VE KAPANMA MANTIĞI
       ========================================================================== */
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        if (question && answer) {
            question.addEventListener('click', (e) => {
                e.preventDefault();
                const isOpen = item.classList.contains('active');

                // Smoothly close other open FAQ items / Diğer açık soruları pürüzsüz kapat
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        if (otherAnswer) {
                            otherAnswer.style.maxHeight = '0px';
                        }
                    }
                });

                if (isOpen) {
                    item.classList.remove('active');
                    answer.style.maxHeight = '0px';
                } else {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        }
    });

    /* ==========================================================================
       11. TYPEWRITER EFFECT / KARŞILAMA ALANI DAKTİLO EFEKTİ
       ========================================================================== */
    const typewriterElement = document.getElementById('typewriter-text');
    if (typewriterElement) {
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingTimeout = null;

        const getWords = () => {
            const lang = localStorage.getItem('materialcalc_lang') || 'tr';
            if (typeof translations !== 'undefined' && translations[lang]) {
                return [
                    translations[lang]['typewriter.word1'] || 'Saniyeler içinde.',
                    translations[lang]['typewriter.word2'] || 'Tam ölçüsüyle.',
                    translations[lang]['typewriter.word3'] || 'Net verilerle.'
                ];
            }
            return ['Saniyeler içinde.', 'Tam ölçüsüyle.', 'Net verilerle.'];
        };

        const type = () => {
            const words = getWords();
            const currentWord = words[wordIndex % words.length];

            if (isDeleting) {
                typewriterElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typewriterElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }

            let typeSpeed = isDeleting ? 40 : 90;

            if (!isDeleting && charIndex === currentWord.length) {
                // Kelime bittiğinde bekle / Pause at the end of word
                typeSpeed = 2200;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                // Silme bittiğinde sonraki kelimeye geç / Move to next word after deleting
                isDeleting = false;
                wordIndex++;
                typeSpeed = 400;
            }

            typingTimeout = setTimeout(type, typeSpeed);
        };

        type(); // Başlat / Start

        // Dil değiştiğinde anında kelimeleri yenile / Update immediately on language switch
        document.addEventListener('languageChanged', () => {
            clearTimeout(typingTimeout);
            charIndex = 0;
            isDeleting = false;
            type();
        });
    }

    /* ==========================================================================
       12. FOOTER ACCORDION (MOBILE & TABLET) / ALT BİLGİ MENÜSÜ AKORDİYONU
       ========================================================================== */
    const footerColumns = document.querySelectorAll('.footer-col');
    footerColumns.forEach(col => {
        const title = col.querySelector('h4');
        const links = col.querySelector('.footer-col-links');
        if (title && links) {
            title.addEventListener('click', () => {
                if (window.innerWidth <= 1200) {
                    const isAlreadyActive = col.classList.contains('active');

                    // Diğer tüm açık footer sütunlarını pürüzsüz kapat
                    footerColumns.forEach(otherCol => {
                        if (otherCol !== col && otherCol.classList.contains('active')) {
                            otherCol.classList.remove('active');
                            const otherLinks = otherCol.querySelector('.footer-col-links');
                            if (otherLinks) {
                                otherLinks.style.maxHeight = '0px';
                            }
                        }
                    });

                    // Tıklanan sütun kapalıysa tam içerik boyuna göre pürüzsüz aç, açıksa kapat
                    if (isAlreadyActive) {
                        col.classList.remove('active');
                        links.style.maxHeight = '0px';
                    } else {
                        col.classList.add('active');
                        links.style.maxHeight = (links.scrollHeight + 40) + 'px';
                    }
                }
            });
        }
    });

    // Ekran genişliği masaüstüne döndüğünde footer stillerini sıfırla
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1200) {
            footerColumns.forEach(col => {
                col.classList.remove('active');
                const links = col.querySelector('.footer-col-links');
                if (links) links.style.maxHeight = '';
            });
        }
    }, { passive: true });

});



