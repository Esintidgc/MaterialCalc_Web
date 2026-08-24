document.addEventListener('DOMContentLoaded', () => {
    
    // TAB SWITCHING LOGIC
    const navBtns = document.querySelectorAll('.calc-nav-btn');
    const panels = document.querySelectorAll('.calc-panel');

    // Function to switch tabs
    function switchTab(targetId) {
        // Update nav buttons
        navBtns.forEach(btn => {
            if(btn.getAttribute('data-target') === targetId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update panels
        panels.forEach(panel => {
            if(panel.id === `panel-${targetId}`) {
                panel.classList.add('active');
                
                // Re-trigger animation
                panel.style.animation = 'none';
                panel.offsetHeight; /* trigger reflow */
                panel.style.animation = null;
            } else {
                panel.classList.remove('active');
            }
        });

        // Update URL parameter without reloading
        const url = new URL(window.location);
        url.searchParams.set('type', targetId);
        window.history.pushState({}, '', url);
    }

    // Attach click events
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-target');
            switchTab(target);
        });
    });

    // Check URL for initial tab
    const urlParams = new URLSearchParams(window.location.search);
    const typeParam = urlParams.get('type');
    if (typeParam) {
        const btnExists = document.querySelector(`.calc-nav-btn[data-target="${typeParam}"]`);
        if (btnExists) {
            switchTab(typeParam);
        }
    }

    // CERAMIC CALCULATOR LOGIC
    const cerWidthInput = document.getElementById('cer-width');
    const cerLengthInput = document.getElementById('cer-length');
    const cerTotalAreaInput = document.getElementById('cer-total-area');
    const cerBoxAreaInput = document.getElementById('cer-box-area');
    const cerWasteInput = document.getElementById('cer-waste');
    const cerWasteVal = document.getElementById('cer-waste-val');

    const cerResArea = document.getElementById('cer-res-area');
    const cerResGross = document.getElementById('cer-res-gross');
    const cerResBoxes = document.getElementById('cer-res-boxes');

    // Toggle logic for Ceramic
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
        if(!cerWidthInput) return; // Guard if not found

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

        // Update waste label
        if(cerWasteVal) cerWasteVal.textContent = `%${wastePercent}`;
        
        // Gross Area (with waste)
        const grossArea = netArea + (netArea * (wastePercent / 100));

        // Required Boxes (rounded up)
        let boxes = 0;
        if (boxArea > 0 && grossArea > 0) {
            boxes = Math.ceil(grossArea / boxArea);
        }

        // Display results
        if(cerResArea) cerResArea.innerHTML = `${netArea.toFixed(2)} <small>m²</small>`;
        if(cerResGross) cerResGross.innerHTML = `${grossArea.toFixed(2)} <small>m²</small>`;
        
        // Use i18n label for box (default to Kutu if not available yet)
        const currentLang = localStorage.getItem('materialcalc_lang') || 'tr';
        let boxLabel = "Kutu";
        if(window.translations && window.translations[currentLang] && window.translations[currentLang]['calc.result.boxLabel']) {
            boxLabel = window.translations[currentLang]['calc.result.boxLabel'];
        } else {
            boxLabel = currentLang === 'en' ? 'Boxes' : 'Kutu';
        }

        if(cerResBoxes) cerResBoxes.innerHTML = `${boxes} <small data-i18n="calc.result.boxLabel">${boxLabel}</small>`;
    }

    // Attach input listeners
    if (cerWidthInput) {
        [cerWidthInput, cerLengthInput, cerTotalAreaInput, cerBoxAreaInput, cerWasteInput].forEach(input => {
            if(input) input.addEventListener('input', calculateCeramic);
        });
    }

    // PARQUET CALCULATOR LOGIC
    const parqWidthInput = document.getElementById('parq-width');
    const parqLengthInput = document.getElementById('parq-length');
    const parqTotalAreaInput = document.getElementById('parq-total-area');
    const parqBoxAreaInput = document.getElementById('parq-box-area');
    const parqWasteInput = document.getElementById('parq-waste');
    const parqWasteVal = document.getElementById('parq-waste-val');
    
    const parqResArea = document.getElementById('parq-res-area');
    const parqResGross = document.getElementById('parq-res-gross');
    const parqResBoxes = document.getElementById('parq-res-boxes');
    
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
        if(!parqWidthInput) return;
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
        
        if(parqWasteVal) parqWasteVal.textContent = `%${wastePercent}`;
        
        const grossArea = netArea + (netArea * (wastePercent / 100));
        let boxes = 0;
        if (boxArea > 0 && grossArea > 0) {
            boxes = Math.ceil(grossArea / boxArea);
        }
        
        if(parqResArea) parqResArea.innerHTML = `${netArea.toFixed(2)} <small>m²</small>`;
        if(parqResGross) parqResGross.innerHTML = `${grossArea.toFixed(2)} <small>m²</small>`;
        
        const currentLang = localStorage.getItem('materialcalc_lang') || 'tr';
        let packageLabel = "Paket";
        if(window.translations && window.translations[currentLang] && window.translations[currentLang]['calc.result.packageLabel']) {
            packageLabel = window.translations[currentLang]['calc.result.packageLabel'];
        } else {
            packageLabel = currentLang === 'en' ? 'Pack' : 'Paket';
        }
        if(parqResBoxes) parqResBoxes.innerHTML = `${boxes} <small data-i18n="calc.result.packageLabel">${packageLabel}</small>`;
    }
    
    if (parqWidthInput) {
        [parqWidthInput, parqLengthInput, parqTotalAreaInput, parqBoxAreaInput, parqWasteInput].forEach(input => {
            if(input) input.addEventListener('input', calculateParquet);
        });
        calculateParquet();
    }

    // PAINT CALCULATOR LOGIC
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
        if(!paintWidthInput) return;
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
        
        if(paintWasteVal) paintWasteVal.textContent = `%${wastePercent}`;
        
        const grossArea = netArea + (netArea * (wastePercent / 100));
        let liters = 0;
        if (coverage > 0 && grossArea > 0) {
            liters = (grossArea * coats) / coverage;
        }
        
        if(paintResArea) paintResArea.innerHTML = `${netArea.toFixed(2)} <small>m²</small>`;
        if(paintResGross) paintResGross.innerHTML = `${grossArea.toFixed(2)} <small>m²</small>`;
        
        const currentLang = localStorage.getItem('materialcalc_lang') || 'tr';
        let literLabel = "Litre";
        if(window.translations && window.translations[currentLang] && window.translations[currentLang]['calc.result.literLabel']) {
            literLabel = window.translations[currentLang]['calc.result.literLabel'];
        } else {
            literLabel = currentLang === 'en' ? 'Liters' : 'Litre';
        }
        if(paintResLiters) paintResLiters.innerHTML = `${liters.toFixed(2)} <small data-i18n="calc.result.literLabel">${literLabel}</small>`;
    }
    
    if (paintWidthInput) {
        [paintWidthInput, paintLengthInput, paintTotalAreaInput, paintCoverageInput, paintCoatsInput, paintWasteInput].forEach(input => {
            if(input) input.addEventListener('input', calculatePaint);
        });
        calculatePaint();
    }

    // WALLPAPER CALCULATOR LOGIC
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
        if(!wallWidthInput) return;
        const width = parseFloat(wallWidthInput.value) || 0;
        const height = parseFloat(wallHeightInput.value) || 0;
        const netArea = width * height;
        
        const rollW = parseFloat(rollWidthInput.value) || 0.53;
        const rollL = parseFloat(rollLengthInput.value) || 10;
        const rollArea = rollW * rollL;
        
        const wastePercent = parseFloat(wallWasteInput.value) || 0;
        if(wallWasteVal) wallWasteVal.textContent = `%${wastePercent}`;
        
        const grossArea = netArea + (netArea * (wastePercent / 100));
        let rolls = 0;
        if (rollArea > 0 && grossArea > 0) {
            rolls = Math.ceil(grossArea / rollArea);
        }
        
        if(wallResArea) wallResArea.innerHTML = `${netArea.toFixed(2)} <small>m²</small>`;
        if(wallResGross) wallResGross.innerHTML = `${grossArea.toFixed(2)} <small>m²</small>`;
        
        const currentLang = localStorage.getItem('materialcalc_lang') || 'tr';
        let rollLabel = "Rulo";
        if(window.translations && window.translations[currentLang] && window.translations[currentLang]['calc.result.rollLabel']) {
            rollLabel = window.translations[currentLang]['calc.result.rollLabel'];
        } else {
            rollLabel = currentLang === 'en' ? 'Rolls' : 'Rulo';
        }
        if(wallResRolls) wallResRolls.innerHTML = `${rolls} <small data-i18n="calc.result.rollLabel">${rollLabel}</small>`;
    }
    
    if (wallWidthInput) {
        [wallWidthInput, wallHeightInput, rollWidthInput, rollLengthInput, wallWasteInput].forEach(input => {
            if(input) input.addEventListener('input', calculateWallpaper);
        });
        calculateWallpaper();
    }

    // BASEBOARD CALCULATOR LOGIC
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
        if(!baseWidthInput) return;
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
        
        if(baseWasteVal) baseWasteVal.textContent = `%${wastePercent}`;
        
        // Usta hesabı: Fire payı toplam oda çevresine (kesimler için) eklenir, ardından kapı boşlukları net olarak düşülür.
        let grossPerim = (perim * (1 + (wastePercent / 100))) - doorDeduction;
        if(grossPerim < 0) grossPerim = 0;
        
        let pieces = 0;
        if (baseLengthItem > 0 && grossPerim > 0) {
            pieces = Math.ceil(grossPerim / baseLengthItem);
        }
        
        if(baseResNet) baseResNet.innerHTML = `${netPerim.toFixed(2)} <small>m</small>`;
        if(baseResGross) baseResGross.innerHTML = `${grossPerim.toFixed(2)} <small>m</small>`;
        
        const currentLang = localStorage.getItem('materialcalc_lang') || 'tr';
        let pieceLabel = "Adet";
        if(window.translations && window.translations[currentLang] && window.translations[currentLang]['calc.result.pieceLabel']) {
            pieceLabel = window.translations[currentLang]['calc.result.pieceLabel'];
        } else {
            pieceLabel = currentLang === 'en' ? 'Pcs' : 'Adet';
        }
        if(baseResPieces) baseResPieces.innerHTML = `${pieces} <small data-i18n="calc.result.pieceLabel">${pieceLabel}</small>`;
    }
    
    if (baseWidthInput) {
        [baseWidthInput, baseLengthInput, baseTotalPerimInput, baseDoorsInput, baseLengthItemInput, baseWasteInput].forEach(input => {
            if(input) input.addEventListener('input', calculateBaseboard);
        });
        calculateBaseboard();
    }

});
