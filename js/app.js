/**
 * MaterialCalc - Global JS Functions / Global JS İşlevleri
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize Lenis Ultra-Smooth Scrolling
    let lenis = null;
    if (typeof Lenis !== 'undefined') {
        lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential smooth easing
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            smoothTouch: false, // Keep native on mobile touch for optimal responsiveness
            wheelMultiplier: 1.0,
            touchMultiplier: 1.5,
            infinite: false,
        });

        // Request Animation Frame loop for Lenis
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    }

    // 2. Initialize AOS Animation Library
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50,
        });

        if (lenis) {
            lenis.on('scroll', () => {
                AOS.refresh();
            });
        }
    }

    // 3. Floating Header & Dock Scroll Effect
    const floatingHeader = document.querySelector('.floating-header');
    const floatingDock = document.querySelector('.floating-dock');
    const heroSection = document.querySelector('.hero-section');
    const backToTopBtn = document.getElementById('backToTop');
    
    const handleScroll = () => {
        const scrollY = window.scrollY;

        // Floating Header
        if (floatingHeader && heroSection) {
            const headerTriggerPoint = heroSection.offsetHeight - 80;
            if (scrollY > headerTriggerPoint) {
                floatingHeader.classList.add('scrolled');
            } else {
                floatingHeader.classList.remove('scrolled');
            }
        }

        // Floating Dock
        if (floatingDock && heroSection) {
            const dockTriggerPoint = heroSection.offsetHeight - (window.innerHeight / 2);
            if (scrollY > dockTriggerPoint) {
                floatingDock.classList.add('scrolled');
            } else {
                floatingDock.classList.remove('scrolled');
            }
        }

        // Back to Top Button
        if (backToTopBtn) {
            if (scrollY > 400) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        }
    };

    if (lenis) {
        lenis.on('scroll', handleScroll);
    } else {
        window.addEventListener('scroll', handleScroll, { passive: true });
    }

    // 4. Mobile Menu Overlay Toggle / Mobil Tam Ekran Menü Mantığı
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileMenuDrawer = document.getElementById('mobileMenuDrawer');

    if (mobileMenuToggle && mobileMenuDrawer) {
        const toggleMobileMenu = (open) => {
            const isOpen = typeof open === 'boolean' ? open : !mobileMenuDrawer.classList.contains('open');
            if (isOpen) {
                mobileMenuDrawer.classList.add('open');
                mobileMenuToggle.classList.add('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'true');
                document.documentElement.classList.add('menu-open');
                document.body.classList.add('menu-open');
                if (lenis) lenis.stop();
            } else {
                mobileMenuDrawer.classList.remove('open');
                mobileMenuToggle.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
                document.documentElement.classList.remove('menu-open');
                document.body.classList.remove('menu-open');
                if (lenis) lenis.start();
            }
        };

        mobileMenuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMobileMenu();
        });

        // Close when clicking overlay backdrop outside links
        mobileMenuDrawer.addEventListener('click', (e) => {
            if (e.target === mobileMenuDrawer) {
                toggleMobileMenu(false);
            }
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mobileMenuDrawer.classList.contains('open')) {
                toggleMobileMenu(false);
            }
        });

        // Auto close when any link inside drawer is clicked
        const mobileLinks = mobileMenuDrawer.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                toggleMobileMenu(false);
            });
        });
    }

    // 5. Smooth Anchor Link Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                if (lenis) {
                    lenis.scrollTo(targetElement, { offset: -90, duration: 1.2 });
                } else {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Back to Top Button Click Action
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (lenis) {
                lenis.scrollTo(0, { duration: 1.2 });
            } else {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Search Box Functionality (Old style) / Eski Arama Kutusu İşlevi
    const searchInput = document.getElementById('searchInput');
    const calcCards = document.querySelectorAll('.calc-card');

    if (searchInput && calcCards.length > 0) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();

            calcCards.forEach(card => {
                const titleEl = card.querySelector('.pill-title');
                const title = titleEl ? titleEl.textContent.toLowerCase() : '';
                const descriptionEl = card.querySelector('.calc-card-info p');
                const description = descriptionEl ? descriptionEl.textContent.toLowerCase() : '';

                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Hero Search Bar (Homepage) / Anasayfa Arama İşlevi
    const heroSearchInput = document.getElementById('heroSearchInput');
    const heroSearchForm = document.querySelector('.hero-search-bar');

    // Mobile Touch / Click Support for 3D Wallet (Nasıl Çalışır Cüzdanı)
    const walletElement = document.querySelector('.wallet');
    if (walletElement) {
        walletElement.addEventListener('click', (e) => {
            // Toggle active class on touch / click
            walletElement.classList.toggle('active');
        });
    }

    if (heroSearchInput && heroSearchForm) {
        
        // Tüm sitenin arama haritası (Sözlük)
        const searchIndex = [
            { keywords: ['seramik', 'fayans', 'ceramic', 'tile'], url: 'hesapla.html?type=ceramic' },
            { keywords: ['boya', 'paint', 'duvar boyası', 'tavan'], url: 'hesapla.html?type=paint' },
            { keywords: ['parke', 'laminant', 'parquet', 'zemin'], url: 'hesapla.html?type=parquet' },
            { keywords: ['duvar kağıdı', 'kagit', 'wallpaper', 'duvar kagidi'], url: 'hesapla.html?type=wallpaper' },
            { keywords: ['süpürgelik', 'baseboard', 'supurgelik'], url: 'hesapla.html?type=baseboard' },
            { keywords: ['usta', 'usta hesabı', 'master', 'formül', 'formula'], url: 'usta-hesabi.html' },
            { keywords: ['iletişim', 'contact', 'telefon', 'adres'], url: 'footer' }
        ];

        // Sadece Enter'a veya butona basılınca çalışır
        heroSearchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const searchTerm = heroSearchInput.value.toLowerCase().trim();
            
            if (!searchTerm) return;

            let foundUrl = null;

            // Sözlükte ara
            for (const item of searchIndex) {
                // Eğer kelimelerden herhangi biri yazılan kelimeyi içeriyorsa (veya tam tersi)
                if (item.keywords.some(kw => kw.includes(searchTerm) || searchTerm.includes(kw))) {
                    foundUrl = item.url;
                    break;
                }
            }

            if (foundUrl) {
                if (foundUrl === 'footer') {
                    // İletişim için sayfa sonuna kaydır
                    const footer = document.querySelector('.site-footer');
                    if (footer) footer.scrollIntoView({behavior: 'smooth'});
                } else {
                    // Sayfaya yönlendir
                    window.location.href = foundUrl;
                }
            } else {
                // Bulunamazsa kutuyu hafifçe salla (Hata efekti)
                heroSearchInput.style.animation = 'searchShake 0.4s ease-in-out';
                heroSearchInput.value = '';
                heroSearchInput.placeholder = 'Sonuç bulunamadı...';
                setTimeout(() => {
                    heroSearchInput.style.animation = '';
                    heroSearchInput.placeholder = 'Malzeme veya uygulama arayın...';
                }, 1500);
            }
        });
    }

    // Typewriter Effect / Daktilo Efekti
    const typeWriterElement = document.getElementById('typewriter-text');
    if (typeWriterElement) {
        let currentLang = localStorage.getItem('materialcalc_lang') || 'tr';
        let words = [];
        
        const updateWords = () => {
            if (typeof translations !== 'undefined') {
                words = [
                    translations[currentLang]["typewriter.word1"],
                    translations[currentLang]["typewriter.word2"],
                    translations[currentLang]["typewriter.word3"]
                ];
            } else {
                words = ["Saniyeler içinde.", "Tam ölçüsüyle.", "Net verilerle."];
            }
        };
        
        updateWords();

        document.addEventListener('languageChanged', (e) => {
            currentLang = e.detail.lang;
            updateWords();
        });

        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        
        function type() {
            // Check if words array is populated
            if (words.length === 0) return;
            
            // Current word
            const currentWord = words[wordIndex % words.length];
            
            if (isDeleting) {
                // Remove char
                typeWriterElement.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
            } else {
                // Add char
                typeWriterElement.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
            }
            
            // Typing speed (randomized for realism)
            let typeSpeed = isDeleting ? 30 : 60; // Faster erasing, slower typing
            
            // If word is complete
            if (!isDeleting && charIndex === currentWord.length) {
                // Pause at the end of word
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                // Move to next word
                wordIndex++;
                // Pause before typing next word
                typeSpeed = 500;
            }
            
            setTimeout(type, typeSpeed);
        }
        
        // Start typing effect after a small delay
        setTimeout(type, 1000);
    }

    // FAQ Accordion Logic / SSS Akordiyon Mantığı
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all active items / Tüm açık olanları kapat
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const otherAnswer = otherItem.querySelector('.faq-answer');
                if(otherAnswer) otherAnswer.style.maxHeight = null;
            });

            // Close if currently active, else open / Tıklanan zaten aktifse kapatıldı, değilse aç
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });

});
