/**
 * MaterialCalc - SPA Calculator Engine (calculator.js) / Hesaplayıcı Motoru ve SPA Mantığı
 * Handles tab navigation, iOS native bottom sheet gestures, 5 core calculation algorithms
 * (Ceramic, Parquet, Paint, Wallpaper, Baseboard), mouse wheel scroll controls, and live multi-language events.
 * 
 * Sekme navigasyonu, iOS alt menü hareketleri, 5 ana hesaplama algoritması (Seramik, Parke, Boya,
 * Duvar Kağıdı, Süpürgelik), fare tekerleği kaydırma kilitleri ve canlı çoklu dil olaylarını yönetir.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       PART 1: TAB SWITCHING & URL SYNCHRONIZATION / SEKME VE URL YÖNETİMİ
       ========================================================================== */
    const navBtns = document.querySelectorAll('.calc-nav-btn');
    const panels = document.querySelectorAll('.calc-panel');
    const calcMobileDropdownBtn = document.getElementById('calcMobileDropdownBtn');
    const calcMobileSelectedIcon = document.getElementById('calcMobileSelectedIcon');
    const calcMobileSelectedText = document.getElementById('calcMobileSelectedText');
    const calcNavList = document.getElementById('calcNavList');
    const calcSheetBackdrop = document.getElementById('calcSheetBackdrop');
    const calcSheetCloseBtn = document.getElementById('calcSheetCloseBtn');

    // Bottom Sheet Open / Close Helpers / Alttan Kayan Menü Açma & Kapatma Yardımcı Fonksiyonları
    function openBottomSheet() {
        if (!calcNavList) return;
        calcNavList.classList.add('open');
        if (calcSheetBackdrop) calcSheetBackdrop.classList.add('active');
        if (calcMobileDropdownBtn) {
            calcMobileDropdownBtn.classList.add('active');
            calcMobileDropdownBtn.setAttribute('aria-expanded', 'true');
        }
        document.body.classList.add('calc-sheet-open');
        if (window.innerWidth <= 767) {
            document.body.style.overflow = 'hidden';
        }
    }

    function closeBottomSheet() {
        if (!calcNavList) return;
        calcNavList.classList.remove('open');
        calcNavList.style.transform = '';
        if (calcSheetBackdrop) calcSheetBackdrop.classList.remove('active');
        if (calcMobileDropdownBtn) {
            calcMobileDropdownBtn.classList.remove('active');
            calcMobileDropdownBtn.setAttribute('aria-expanded', 'false');
        }
        document.body.classList.remove('calc-sheet-open');
        document.body.style.overflow = '';
    }

    // Function to switch tabs / Sekme Değiştirme Fonksiyonu
    function switchTab(targetId) {
        let activeBtn = null;

        // Update nav buttons / Gezinme butonlarını güncelle
        navBtns.forEach(btn => {
            if(btn.getAttribute('data-target') === targetId) {
                btn.classList.add('active');
                activeBtn = btn;
            } else {
                btn.classList.remove('active');
            }
        });

        // Update mobile trigger display (icon & title) / Mobil tetikleyici ikon ve başlığını güncelle
        if (activeBtn && calcMobileSelectedIcon && calcMobileSelectedText) {
            const svgEl = activeBtn.querySelector('.calc-btn-icon svg') || activeBtn.querySelector('svg');
            const spanEl = activeBtn.querySelector('span[data-i18n]') || activeBtn.querySelector('span');
            if (svgEl) calcMobileSelectedIcon.innerHTML = svgEl.outerHTML;
            if (spanEl) {
                calcMobileSelectedText.textContent = spanEl.textContent;
                const i18nKey = spanEl.getAttribute('data-i18n');
                if (i18nKey) calcMobileSelectedText.setAttribute('data-i18n', i18nKey);
            }
        }

        // Close mobile bottom sheet / Mobil açılır menüyü kapat
        closeBottomSheet();

        // Update panels / İlgili paneli aktif yap
        panels.forEach(panel => {
            if(panel.id === `panel-${targetId}`) {
                panel.classList.add('active');
                
                // Re-trigger animation / Giriş animasyonunu yeniden tetikle
                panel.style.animation = 'none';
                panel.offsetHeight; /* trigger reflow */
                panel.style.animation = null;
            } else {
                panel.classList.remove('active');
            }
        });

        // Update URL parameter without reloading / Sayfayı yenilemeden URL parametresini güncelle
        const url = new URL(window.location);
        url.searchParams.set('type', targetId);
        window.history.pushState({}, '', url);
    }

    // Attach mobile bottom sheet listeners / Mobil alt menü dinleyicilerini bağla
    if (calcMobileDropdownBtn) {
        calcMobileDropdownBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (calcNavList && calcNavList.classList.contains('open')) {
                closeBottomSheet();
            } else {
                openBottomSheet();
            }
        });
    }

    if (calcSheetBackdrop) {
        calcSheetBackdrop.addEventListener('click', closeBottomSheet);
    }

    if (calcSheetCloseBtn) {
        calcSheetCloseBtn.addEventListener('click', closeBottomSheet);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && calcNavList && calcNavList.classList.contains('open')) {
            closeBottomSheet();
        }
    });

    // Touch drag down gesture to dismiss iOS Bottom Sheet / iOS Alttan Kayan Menüyü Aşağı Çekerek Kapatma
    if (calcNavList) {
        let touchStartY = 0;
        let touchCurrentY = 0;

        calcNavList.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });

        calcNavList.addEventListener('touchmove', (e) => {
            touchCurrentY = e.touches[0].clientY;
            const diff = touchCurrentY - touchStartY;
            if (diff > 0 && calcNavList.scrollTop <= 0) {
                calcNavList.style.transform = `translateY(${diff}px)`;
            }
        }, { passive: true });

        calcNavList.addEventListener('touchend', () => {
            const diff = touchCurrentY - touchStartY;
            calcNavList.style.transform = '';
            if (diff > 80 && calcNavList.scrollTop <= 0) {
                closeBottomSheet();
            }
            touchStartY = 0;
            touchCurrentY = 0;
        });
    }

    // Attach click events to navigation buttons / Gezinme butonlarına tıklama olaylarını bağla
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            switchTab(target);
        });
    });

    // Check URL for initial tab with strict whitelist validation / URL'den Başlangıç Sekmesini Doğrula
    const urlParams = new URLSearchParams(window.location.search);
    const typeParam = urlParams.get('type');
    const validTypes = ['ceramic', 'parquet', 'paint', 'wallpaper', 'skirting', 'baseboard'];
    if (typeParam && validTypes.includes(typeParam)) {
        switchTab(typeParam === 'skirting' ? 'baseboard' : typeParam);
    } else {
        // Initialize mobile trigger display with default active tab (ceramic) / Varsayılan sekme (seramik) ile başlat
        switchTab('ceramic');
    }

    /* ==========================================================================
       PART 2: CERAMIC & TILE CALCULATOR / SERAMİK VE FAYANS HESAPLAMA MOTORU
       ========================================================================== */
    const cerWidthInput = document.getElementById('cer-width');
    const cerLengthInput = document.getElementById('cer-length');
    const cerTotalAreaInput = document.getElementById('cer-total-area');
    const cerBoxAreaInput = document.getElementById('cer-box-area');
    const cerWasteInput = document.getElementById('cer-waste');
    const cerWasteVal = document.getElementById('cer-waste-val');

    const cerResArea = document.getElementById('cer-res-area');
    const cerResGross = document.getElementById('cer-res-gross');
    const cerResBoxes = document.getElementById('cer-res-boxes');

    // Toggle logic for Ceramic / Seramik Mod Değiştirme (En-Boy veya Toplam Alan)
    const cerModeToggle = document.getElementById('cer-mode-toggle');
    const cerDimInputs = document.querySelectorAll('.dim-input');
    const cerAreaInput = document.querySelector('.area-input');

    let cerMode = 'dimensions';

    if (cerModeToggle) {
        cerModeToggle.addEventListener('change', (e) => {
            cerMode = e.target.checked ? 'area' : 'dimensions';
            if (cerMode === 'dimensions') {
                cerDimInputs.forEach(el => el.style.display = 'flex');
                if(cerAreaInput) cerAreaInput.style.display = 'none';
            } else {
                cerDimInputs.forEach(el => el.style.display = 'none');
                if(cerAreaInput) cerAreaInput.style.display = 'flex';
            }
            calculateCeramic();
        });
    }

    function calculateCeramic() {
        if(!cerWidthInput) return; // Eleman bulunamazsa işlemi durdur (Guard)

        let netArea = 0;

        if (cerMode === 'dimensions') {
            const width = parseFloat(cerWidthInput.value) || 0;
            const length = parseFloat(cerLengthInput.value) || 0;
            netArea = width * length;
        } else {
            netArea = parseFloat(cerTotalAreaInput.value) || 0;
        }

        const boxArea = parseFloat(cerBoxAreaInput.value) || 1.44;
        const wastePercent = parseFloat(cerWasteInput.value) || 0;

        // Fire payı etiketini güncelle
        if(cerWasteVal) cerWasteVal.textContent = `%${wastePercent}`;
        
        // Fireli Brüt Alan Hesabı
        const grossArea = netArea + (netArea * (wastePercent / 100));

        // Gerekli Kutu Sayısı (Yukarı Yuvarlama)
        let boxes = 0;
        if (boxArea > 0 && grossArea > 0) {
            boxes = Math.ceil(grossArea / boxArea);
        }

        // Sonuçları Ekrana Yazdır
        if(cerResArea) cerResArea.innerHTML = `${netArea.toFixed(2)} <small>m²</small>`;
        if(cerResGross) cerResGross.innerHTML = `${grossArea.toFixed(2)} <small>m²</small>`;
        
        // Çoklu Dil Kutu Etiketi (i18n)
        const currentLang = localStorage.getItem('materialcalc_lang') || 'tr';
        let boxLabel = "Kutu";
        if(window.translations && window.translations[currentLang] && window.translations[currentLang]['calc.result.boxLabel']) {
            boxLabel = window.translations[currentLang]['calc.result.boxLabel'];
        } else {
            boxLabel = currentLang === 'en' ? 'Boxes' : 'Kutu';
        }

        if(cerResBoxes) cerResBoxes.innerHTML = `${boxes} <small data-i18n="calc.result.boxLabel">${boxLabel}</small>`;
    }

    // Girdi Dinleyicilerini Bağla (Canlı Hesaplama)
    if (cerWidthInput) {
        [cerWidthInput, cerLengthInput, cerTotalAreaInput, cerBoxAreaInput, cerWasteInput].forEach(input => {
            if(input) input.addEventListener('input', calculateCeramic);
        });
        calculateCeramic();
    }

    /* ==========================================================================
       PART 3: PARQUET & LAMINATE CALCULATOR / PARKE HESAPLAMA MOTORU
       ========================================================================== */
    const parqWidthInput = document.getElementById('parq-width');
    const parqLengthInput = document.getElementById('parq-length');
    const parqTotalAreaInput = document.getElementById('parq-total-area');
    const parqBoxAreaInput = document.getElementById('parq-box-area');
    const parqWasteInput = document.getElementById('parq-waste');
    const parqWasteVal = document.getElementById('parq-waste-val');
    
    const parqResArea = document.getElementById('parq-res-area');
    const parqResGross = document.getElementById('parq-res-gross');
    const parqResBoxes = document.getElementById('parq-res-boxes');
    
    // Parke Mod Değiştirme Mantığı (En-Boy veya Toplam Alan)
    const parqModeToggle = document.getElementById('parq-mode-toggle');
    const parqDimInputs = document.querySelectorAll('.parq-dim-input');
    const parqAreaInput = document.querySelector('.parq-area-input');
    let parqMode = 'dimensions';

    if (parqModeToggle) {
        parqModeToggle.addEventListener('change', (e) => {
            parqMode = e.target.checked ? 'area' : 'dimensions';
            if (parqMode === 'dimensions') {
                parqDimInputs.forEach(el => el.style.display = 'flex');
                if(parqAreaInput) parqAreaInput.style.display = 'none';
            } else {
                parqDimInputs.forEach(el => el.style.display = 'none');
                if(parqAreaInput) parqAreaInput.style.display = 'flex';
            }
            calculateParquet();
        });
    }

    function calculateParquet() {
        if(!parqWidthInput) return; // Eleman bulunamazsa işlemi durdur (Guard)
        let netArea = 0;
        if (parqMode === 'dimensions') {
            const width = parseFloat(parqWidthInput.value) || 0;
            const length = parseFloat(parqLengthInput.value) || 0;
            netArea = width * length;
        } else {
            netArea = parseFloat(parqTotalAreaInput.value) || 0;
        }
        const boxArea = parseFloat(parqBoxAreaInput.value) || 1.84;
        const wastePercent = parseFloat(parqWasteInput.value) || 0;
        
        // Fire payı etiketini güncelle
        if(parqWasteVal) parqWasteVal.textContent = `%${wastePercent}`;
        
        // Fireli Brüt Alan Hesabı
        const grossArea = netArea + (netArea * (wastePercent / 100));
        let boxes = 0;
        if (boxArea > 0 && grossArea > 0) {
            boxes = Math.ceil(grossArea / boxArea);
        }
        
        // Sonuçları Ekrana Yazdır
        if(parqResArea) parqResArea.innerHTML = `${netArea.toFixed(2)} <small>m²</small>`;
        if(parqResGross) parqResGross.innerHTML = `${grossArea.toFixed(2)} <small>m²</small>`;
        
        // Çoklu Dil Paket Etiketi (i18n)
        const currentLang = localStorage.getItem('materialcalc_lang') || 'tr';
        let packageLabel = "Paket";
        if(window.translations && window.translations[currentLang] && window.translations[currentLang]['calc.result.packageLabel']) {
            packageLabel = window.translations[currentLang]['calc.result.packageLabel'];
        } else {
            packageLabel = currentLang === 'en' ? 'Pack' : 'Paket';
        }
        if(parqResBoxes) parqResBoxes.innerHTML = `${boxes} <small data-i18n="calc.result.packageLabel">${packageLabel}</small>`;
    }
    
    // Girdi Dinleyicilerini Bağla (Canlı Hesaplama)
    if (parqWidthInput) {
        [parqWidthInput, parqLengthInput, parqTotalAreaInput, parqBoxAreaInput, parqWasteInput].forEach(input => {
            if(input) input.addEventListener('input', calculateParquet);
        });
        calculateParquet();
    }

    /* ==========================================================================
       PART 4: PAINT & WALL COATING CALCULATOR / BOYA HESAPLAMA MOTORU
       ========================================================================== */
    const paintWidthInput = document.getElementById('paint-width');
    const paintLengthInput = document.getElementById('paint-length');
    const paintTotalAreaInput = document.getElementById('paint-total-area');
    const paintCoverageInput = document.getElementById('paint-coverage');
    const paintCoatsInput = document.getElementById('paint-coats');
    const paintWasteInput = document.getElementById('paint-waste');
    const paintWasteVal = document.getElementById('paint-waste-val');
    
    const paintResArea = document.getElementById('paint-res-area');
    const paintResGross = document.getElementById('paint-res-gross');
    const paintResLiters = document.getElementById('paint-res-liters');
    
    // Boya Mod Değiştirme Mantığı (En-Boy veya Toplam Duvar Alanı)
    const paintModeToggle = document.getElementById('paint-mode-toggle');
    const paintDimInputs = document.querySelectorAll('.paint-dim-input');
    const paintAreaInput = document.querySelector('.paint-area-input');
    let paintMode = 'dimensions';

    if (paintModeToggle) {
        paintModeToggle.addEventListener('change', (e) => {
            paintMode = e.target.checked ? 'area' : 'dimensions';
            if (paintMode === 'dimensions') {
                paintDimInputs.forEach(el => el.style.display = 'flex');
                if(paintAreaInput) paintAreaInput.style.display = 'none';
            } else {
                paintDimInputs.forEach(el => el.style.display = 'none');
                if(paintAreaInput) paintAreaInput.style.display = 'flex';
            }
            calculatePaint();
        });
    }

    function calculatePaint() {
        if(!paintWidthInput) return; // Eleman bulunamazsa işlemi durdur (Guard)
        let netArea = 0;
        if (paintMode === 'dimensions') {
            const width = parseFloat(paintWidthInput.value) || 0;
            const length = parseFloat(paintLengthInput.value) || 0;
            netArea = width * length;
        } else {
            netArea = parseFloat(paintTotalAreaInput.value) || 0;
        }
        
        const coverage = parseFloat(paintCoverageInput.value) || 10;
        const coats = parseFloat(paintCoatsInput.value) || 2;
        const wastePercent = parseFloat(paintWasteInput.value) || 0;
        
        // Fire payı etiketini güncelle
        if(paintWasteVal) paintWasteVal.textContent = `%${wastePercent}`;
        
        // Fireli / Emicilik Alanı Hesabı
        const grossArea = netArea + (netArea * (wastePercent / 100));
        let liters = 0;
        if (coverage > 0 && grossArea > 0) {
            liters = (grossArea * coats) / coverage;
        }
        
        // Sonuçları Ekrana Yazdır
        if(paintResArea) paintResArea.innerHTML = `${netArea.toFixed(2)} <small>m²</small>`;
        if(paintResGross) paintResGross.innerHTML = `${grossArea.toFixed(2)} <small>m²</small>`;
        
        // Çoklu Dil Litre Etiketi (i18n)
        const currentLang = localStorage.getItem('materialcalc_lang') || 'tr';
        let literLabel = "Litre";
        if(window.translations && window.translations[currentLang] && window.translations[currentLang]['calc.result.literLabel']) {
            literLabel = window.translations[currentLang]['calc.result.literLabel'];
        } else {
            literLabel = currentLang === 'en' ? 'Liters' : 'Litre';
        }
        if(paintResLiters) paintResLiters.innerHTML = `${liters.toFixed(2)} <small data-i18n="calc.result.literLabel">${literLabel}</small>`;
    }
    
    // Girdi Dinleyicilerini Bağla (Canlı Hesaplama)
    if (paintWidthInput) {
        [paintWidthInput, paintLengthInput, paintTotalAreaInput, paintCoverageInput, paintCoatsInput, paintWasteInput].forEach(input => {
            if(input) input.addEventListener('input', calculatePaint);
        });
        calculatePaint();
    }

    /* ==========================================================================
       PART 5: WALLPAPER CALCULATOR / DUVAR KAĞIDI HESAPLAMA MOTORU
       ========================================================================== */
    const wallWidthInput = document.getElementById('wall-width');
    const wallHeightInput = document.getElementById('wall-height');
    const rollWidthInput = document.getElementById('roll-width');
    const rollLengthInput = document.getElementById('roll-length');
    const wallWasteInput = document.getElementById('wall-waste');
    const wallWasteVal = document.getElementById('wall-waste-val');
    
    const wallResArea = document.getElementById('wall-res-area');
    const wallResGross = document.getElementById('wall-res-gross');
    const wallResRolls = document.getElementById('wall-res-rolls');

    function calculateWallpaper() {
        if(!wallWidthInput) return; // Eleman bulunamazsa işlemi durdur (Guard)
        const width = parseFloat(wallWidthInput.value) || 0;
        const height = parseFloat(wallHeightInput.value) || 0;
        const netArea = width * height;
        
        const rollW = parseFloat(rollWidthInput.value) || 0.53;
        const rollL = parseFloat(rollLengthInput.value) || 10;
        const rollArea = rollW * rollL;
        
        const wastePercent = parseFloat(wallWasteInput.value) || 0;
        // Fire payı etiketini güncelle
        if(wallWasteVal) wallWasteVal.textContent = `%${wastePercent}`;
        
        // Desen Eşleme ve Fireli Alan Hesabı
        const grossArea = netArea + (netArea * (wastePercent / 100));
        let rolls = 0;
        if (rollArea > 0 && grossArea > 0) {
            rolls = Math.ceil(grossArea / rollArea);
        }
        
        // Sonuçları Ekrana Yazdır
        if(wallResArea) wallResArea.innerHTML = `${netArea.toFixed(2)} <small>m²</small>`;
        if(wallResGross) wallResGross.innerHTML = `${grossArea.toFixed(2)} <small>m²</small>`;
        
        // Çoklu Dil Rulo Etiketi (i18n)
        const currentLang = localStorage.getItem('materialcalc_lang') || 'tr';
        let rollLabel = "Rulo";
        if(window.translations && window.translations[currentLang] && window.translations[currentLang]['calc.result.rollLabel']) {
            rollLabel = window.translations[currentLang]['calc.result.rollLabel'];
        } else {
            rollLabel = currentLang === 'en' ? 'Rolls' : 'Rulo';
        }
        if(wallResRolls) wallResRolls.innerHTML = `${rolls} <small data-i18n="calc.result.rollLabel">${rollLabel}</small>`;
    }
    
    // Girdi Dinleyicilerini Bağla (Canlı Hesaplama)
    if (wallWidthInput) {
        [wallWidthInput, wallHeightInput, rollWidthInput, rollLengthInput, wallWasteInput].forEach(input => {
            if(input) input.addEventListener('input', calculateWallpaper);
        });
        calculateWallpaper();
    }

    /* ==========================================================================
       PART 6: BASEBOARD & SKIRTING CALCULATOR / SÜPÜRGELİK HESAPLAMA MOTORU
       ========================================================================== */
    const baseWidthInput = document.getElementById('base-width');
    const baseLengthInput = document.getElementById('base-length');
    const baseTotalPerimInput = document.getElementById('base-total-perim');
    const baseDoorsInput = document.getElementById('base-doors');
    const baseLengthItemInput = document.getElementById('base-length-item');
    const baseWasteInput = document.getElementById('base-waste');
    const baseWasteVal = document.getElementById('base-waste-val');
    
    const baseResNet = document.getElementById('base-res-net');
    const baseResGross = document.getElementById('base-res-gross');
    const baseResPieces = document.getElementById('base-res-pieces');
    
    // Süpürgelik Mod Değiştirme Mantığı (Oda En-Boy veya Toplam Çevre)
    const baseModeToggle = document.getElementById('base-mode-toggle');
    const baseDimInputs = document.querySelectorAll('.base-dim-input');
    const baseAreaInput = document.querySelector('.base-area-input');
    let baseMode = 'dimensions';

    if (baseModeToggle) {
        baseModeToggle.addEventListener('change', (e) => {
            baseMode = e.target.checked ? 'area' : 'dimensions';
            if (baseMode === 'dimensions') {
                baseDimInputs.forEach(el => el.style.display = 'flex');
                if(baseAreaInput) baseAreaInput.style.display = 'none';
            } else {
                baseDimInputs.forEach(el => el.style.display = 'none');
                if(baseAreaInput) baseAreaInput.style.display = 'flex';
            }
            calculateBaseboard();
        });
    }

    function calculateBaseboard() {
        if(!baseWidthInput) return; // Eleman bulunamazsa işlemi durdur (Guard)
        let perim = 0;
        if (baseMode === 'dimensions') {
            const width = parseFloat(baseWidthInput.value) || 0;
            const length = parseFloat(baseLengthInput.value) || 0;
            perim = (width + length) * 2;
        } else {
            perim = parseFloat(baseTotalPerimInput.value) || 0;
        }
        
        const doors = parseFloat(baseDoorsInput.value) || 0;
        const doorDeduction = doors * 0.9;
        
        let netPerim = perim - doorDeduction;
        if(netPerim < 0) netPerim = 0;
        
        const baseLengthItem = parseFloat(baseLengthItemInput.value) || 2.4;
        const wastePercent = parseFloat(baseWasteInput.value) || 0;
        
        // Fire payı etiketini güncelle
        if(baseWasteVal) baseWasteVal.textContent = `%${wastePercent}`;
        
        // Usta hesabı: Fire payı toplam oda çevresine (kesimler için) eklenir, ardından kapı boşlukları net olarak düşülür.
        let grossPerim = (perim * (1 + (wastePercent / 100))) - doorDeduction;
        if(grossPerim < 0) grossPerim = 0;
        
        let pieces = 0;
        if (baseLengthItem > 0 && grossPerim > 0) {
            pieces = Math.ceil(grossPerim / baseLengthItem);
        }
        
        // Sonuçları Ekrana Yazdır
        if(baseResNet) baseResNet.innerHTML = `${netPerim.toFixed(2)} <small>m</small>`;
        if(baseResGross) baseResGross.innerHTML = `${grossPerim.toFixed(2)} <small>m</small>`;
        
        // Çoklu Dil Adet Etiketi (i18n)
        const currentLang = localStorage.getItem('materialcalc_lang') || 'tr';
        let pieceLabel = "Adet";
        if(window.translations && window.translations[currentLang] && window.translations[currentLang]['calc.result.pieceLabel']) {
            pieceLabel = window.translations[currentLang]['calc.result.pieceLabel'];
        } else {
            pieceLabel = currentLang === 'en' ? 'Pcs' : 'Adet';
        }
        if(baseResPieces) baseResPieces.innerHTML = `${pieces} <small data-i18n="calc.result.pieceLabel">${pieceLabel}</small>`;
    }
    
    // Girdi Dinleyicilerini Bağla (Canlı Hesaplama)
    if (baseWidthInput) {
        [baseWidthInput, baseLengthInput, baseTotalPerimInput, baseDoorsInput, baseLengthItemInput, baseWasteInput].forEach(input => {
            if(input) input.addEventListener('input', calculateBaseboard);
        });
        calculateBaseboard();
    }

    /* ==========================================================================
       PART 7: RANGE SLIDER MOUSE WHEEL & HOVER SCROLL LOCK / FARE TEKERLEĞİ & KİLİT
       ========================================================================== */
    function initRangeSliderWheelControls() {
        const wasteFormGroups = document.querySelectorAll('.min-form-group');

        wasteFormGroups.forEach(group => {
            const rangeInput = group.querySelector('.min-range-input');
            if (!rangeInput) return;

            const badge = group.querySelector('.min-waste-badge');
            const rangeContainer = group.querySelector('.min-range-container');
            const labelRow = group.querySelector('.min-label-row');
            let pulseTimeout = null;

            // Lenis kütüphanesinin bu alanı yakalamasını engelle
            if (rangeContainer) rangeContainer.setAttribute('data-lenis-prevent', 'true');
            if (labelRow) labelRow.setAttribute('data-lenis-prevent', 'true');
            group.setAttribute('data-lenis-prevent', 'true');

            // İmleç bu alana gelince sayfa kaydırmasını (Lenis) kilitle
            const lockPageScroll = () => {
                if (window.lenis && typeof window.lenis.stop === 'function') {
                    window.lenis.stop();
                }
            };

            // İmleç bu alandan çıkınca sayfa kaydırmasını (Lenis) serbest bırak
            const unlockPageScroll = () => {
                if (window.lenis && typeof window.lenis.start === 'function') {
                    window.lenis.start();
                }
            };

            group.addEventListener('mouseenter', lockPageScroll);
            group.addEventListener('mouseleave', unlockPageScroll);

            // Tekerlek olayını hem slider kutusuna hem de etiket/rozet satırına bağla
            const interactiveTargets = [rangeContainer, rangeInput, badge, labelRow, group].filter(Boolean);

            interactiveTargets.forEach(target => {
                target.addEventListener('wheel', (e) => {
                    // Sayfa kaydırmasını tamamen bloke et
                    e.preventDefault();
                    e.stopPropagation();
                    if (e.stopImmediatePropagation) e.stopImmediatePropagation();

                    const step = parseFloat(rangeInput.step) || 1;
                    const min = rangeInput.min !== '' ? parseFloat(rangeInput.min) : 0;
                    const max = rangeInput.max !== '' ? parseFloat(rangeInput.max) : 100;
                    let currentVal = parseFloat(rangeInput.value) || 0;

                    // Yukarı tekerlek: Artır (+step), Aşağı tekerlek: Azalt (-step)
                    if (e.deltaY < 0) {
                        currentVal = Math.min(max, currentVal + step);
                    } else if (e.deltaY > 0) {
                        currentVal = Math.max(min, currentVal - step);
                    }

                    if (parseFloat(rangeInput.value) !== currentVal) {
                        rangeInput.value = currentVal;
                        // Hesaplama fonksiyonlarını ve rozet metnini anında tetikle
                        rangeInput.dispatchEvent(new Event('input', { bubbles: true }));

                        // Hızlı görsel geri bildirim (Canlı nabız animasyonu)
                        if (badge) {
                            badge.classList.add('wheel-pulse');
                            clearTimeout(pulseTimeout);
                            pulseTimeout = setTimeout(() => {
                                badge.classList.remove('wheel-pulse');
                            }, 180);
                        }
                    }
                }, { passive: false });
            });
        });
    }

    initRangeSliderWheelControls();

    /* ==========================================================================
       PART 8: DYNAMIC MULTI-LANGUAGE EVENT LISTENER / CANLI DİL YENİLEME
       ========================================================================== */
    document.addEventListener('languageChanged', () => {
        // Mobil Kategori Tetikleyici Buton Yazısını Güncelle
        const activeNavBtn = document.querySelector('.calc-nav-btn.active');
        if (activeNavBtn && calcMobileSelectedText) {
            const spanEl = activeNavBtn.querySelector('span[data-i18n]') || activeNavBtn.querySelector('span');
            if (spanEl) {
                calcMobileSelectedText.textContent = spanEl.textContent;
            }
        }

        // Tüm 5 Hesaplama Sonucunu ve Birim Yazılarını Yeni Dilde Canlı Yenile
        calculateCeramic();
        calculateParquet();
        calculatePaint();
        calculateWallpaper();
        calculateBaseboard();
    });

});
