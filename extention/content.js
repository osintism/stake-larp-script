(function () {
    'use strict';

    const u = `<svg fill="none" viewBox="0 0 96 96" class="svg-icon"><title></title><path fill="#6CDE07" d="M48 96c26.51 0 48-21.49 48-48S74.51 0 48 0 0 21.49 0 48s21.49 48 48 48"></path><path fill="#1B3802" d="M51.517 73.319v6.56h-5.8v-6.48c-7.56-.6-13.08-3.56-16.92-7.64l4.72-6.56c2.84 3 6.96 5.68 12.2 6.48v-14.04c-7.48-1.88-15.4-4.64-15.4-14.12 0-7.4 6.04-13.32 15.4-14.12v-6.68h5.8v6.84c5.96.6 10.84 2.92 14.6 6.56l-4.88 6.32c-2.68-2.68-6.12-4.36-9.76-5.08v12.52c7.56 2.04 15.72 4.88 15.72 14.6 0 7.4-4.8 13.8-15.72 14.84zm-5.8-30.96v-11.32c-4.16.44-6.68 2.68-6.68 5.96 0 2.84 2.84 4.28 6.68 5.36m12.88 16.92c0-3.36-3-4.88-7.04-6.12v12.52c5-.72 7.04-3.64 7.04-6.4"></path></svg>`;

    const f = `<svg data-ds-icon="UnitedStatesOfAmerica" width="20" height="20" viewBox="0 0 24 19" xmlns="http://www.w3.org/2000/svg" fill="none" class="inline-block shrink-0"><metadata data-ds-license="true">Derived from flag-icons by Panayiotis Lipiridis (MIT). See https://github.com/lipis/flag-icons</metadata><rect width="24" height="18.333" fill="#F7FAFC" rx=".2"></rect><path fill="#B31942" d="M1 1h22v16.5H1"></path><path fill="#000" d="M1 2.904h22zm22 2.538H1zM1 7.981h22zm22 2.538H1zM1 13.058h22zm22 2.538H1z"></path><path fill="#fff" d="M23 14.962v1.269H1v-1.27zm0-2.539v1.27H1v-1.27zm0-2.538v1.269H1v-1.27zm0-2.539v1.27H1v-1.27zm0-2.538v1.269H1v-1.27zm0-2.539v1.27H1v-1.27z"></path><path fill="#0A3161" d="M1 1h12.54v8.885H1"></path><path fill="#fff" d="m2.045 1.38.298.92-.78-.568h.965l-.781.567zm0 1.778.298.918-.78-.567h.965l-.781.567zm0 1.777.298.918-.78-.568h.965l-.781.568zm0 1.777.298.918-.78-.568h.965l-.781.568zm0 1.776.298.919-.78-.568h.965l-.781.568zM3.09 2.27l.298.918-.78-.568h.965l-.781.568zm0 1.776.298.919-.78-.568h.965l-.781.568zm0 1.777.298.918-.78-.567h.965l-.781.567zm0 1.777.298.918-.78-.567h.965l-.781.567zm1.045-6.22.298.92-.78-.568h.965l-.781.567zm0 1.778.298.918-.78-.567h.965l-.781.567zm0 1.777.298.918-.78-.568h.965l-.781.568zm0 1.777.298.918-.78-.568h.965l-.781.568zm0 1.776.298.919-.78-.568h.965l-.781.568zM5.18 2.27l.298.918-.78-.568h.965l-.781.568zm0 1.776.298.919-.78-.568h.965l-.781.568zm0 1.777.298.918-.78-.567h.965l-.781.567zm0 1.777.298.918-.78-.567h.965l-.781.567zm1.045-6.22.298.92-.78-.568h.965l-.781.567zm0 1.778.298.918-.78-.567h.965l-.781.567zm0 1.777.298.918-.78-.568h.965l-.781.568zm0 1.777.298.918-.78-.568h.965l-.781.568zm0 1.776.298.919-.78-.568h.965l-.781.568zM7.27 2.27l.298.918-.78-.568h.965l-.781.568zm0 1.776.298.919-.78-.568h.965l-.781.568zm0 1.777.298.918-.78-.567h.965l-.781.567zm0 1.777.298.918-.78-.567h.965l-.781.567zm1.045-6.22.298.92-.78-.568h.965l-.781.567zm0 1.778.298.918-.78-.567h.965l-.781.567zm0 1.777.298.918-.78-.568h.965l-.781.568zm0 1.777.298.918-.78-.568h.965l-.781.568zm0 1.776.298.919-.78-.568h.965l-.781.568zM9.36 2.27l.298.918-.78-.568h.965l-.781.568zm0 1.776.298.919-.78-.568h.965l-.781.568zm0 1.777.298.918-.78-.567h.965l-.781.567zm0 1.777.298.918-.78-.567h.965l-.781.567zm1.045-6.22.298.92-.78-.568h.965l-.781.567zm0 1.778.298.918-.78-.567h.965l-.781.567zm0 1.777.298.918-.78-.568h.965l-.781.568zm0 1.777.298.918-.78-.568h.965l-.781.568zm0 1.776.298.919-.78-.568h.965l-.781.568zM11.45 2.27l.298.918-.78-.568h.965l-.781.568zm0 1.776.298.919-.78-.568h.965l-.781.568zm0 1.777.298.918-.78-.567h.965l-.781.567zm0 1.777.298.918-.78-.567h.965l-.781.567zm1.045-6.22.298.92-.78-.568h.965l-.781.567zm0 1.778.298.918-.78-.567h.965l-.781.567zm0 1.777.298.918-.78-.568h.965l-.781.568zm0 1.777.298.918-.78-.568h.965l-.781.568zm0 1.776.298.919-.78-.568h.965l-.781.568z"></path></svg>`;

    let mo = null;

    function a(s) {
        const h = s.outerHTML;

        if (/ARS/i.test(h)) {
            return true;
        }

        if (h.includes('m27.8 62.4-1.24-5.08H16.52l-1.24 5.08H7.16l9.64-32.6h9.52l9.64 32.6')) {
            return true;
        }

        if (h.includes('M53.36 62.4l-4.32-11.24h-2.92V62.4H38.2V29.8h13.28c6.36 0 10.4 4.6 10.4 10.6')) {
            return true;
        }

        if (h.includes('#FFC800') && h.includes('#276304')) {
            return true;
        }

        if (h.includes('data-ds-icon="Argentina"')) {
            return 'flag';
        }

        if (h.includes('#74ACDF') && h.includes('#F6B40E')) {
            return 'flag';
        }

        const p = s.querySelectorAll('path');
        for (const x of p) {
            const d = x.getAttribute('d') || '';
            if (d.includes('27.8 62.4') || d.includes('53.36 62.4')) {
                return true;
            }
        }

        return false;
    }

    function b() {
        document.querySelectorAll('*:not(script):not(style)').forEach(el => {
            el.childNodes.forEach(n => {
                if (n.nodeType === 3 && n.nodeValue.includes('ARS')) {
                    n.nodeValue = n.nodeValue.replace(/ARS/g, 'USD');
                }
            });
        });

        document.querySelectorAll('img').forEach(i => {
            if (!i.dataset.larped && /ARS/i.test(i.alt + i.title + i.src)) {
                i.dataset.larped = '1';
                const w = document.createElement('div');
                w.innerHTML = u;
                i.replaceWith(w.firstChild);
            }
        });

        document.querySelectorAll('svg').forEach(s => {
            const m = a(s);

            if (!s.dataset.larped && m) {
                s.dataset.larped = '1';
                const w = document.createElement('div');
                w.innerHTML = m === 'flag' ? f : u;
                const ns = w.firstChild;
                ns.dataset.larped = '1';

                try {
                    if (s.getAttribute('class')) {
                        ns.setAttribute('class', s.getAttribute('class'));
                    }
                    if (s.style.cssText) {
                        ns.style.cssText = s.style.cssText;
                    }
                    if (s.getAttribute('width')) {
                        ns.setAttribute('width', s.getAttribute('width'));
                    }
                    if (s.getAttribute('height')) {
                        ns.setAttribute('height', s.getAttribute('height'));
                    }
                } catch (e) {
                }

                s.replaceWith(ns);
            }
        });
    }

function e(scope) {
    const root = scope && scope.querySelectorAll ? scope : document;

    // Exact small LTC balance button
    root.querySelectorAll('button[data-testid="coin-toggle-currency-ltc"]').forEach(btn => {
        btn.querySelectorAll('span[data-ds-text="true"]').forEach(el => {
            let t = el.textContent || '';
            t = t.replace(/\u00A0/g, ' ').trim();

            if (/^(USD|ARS)\s*[\d,.]+$/i.test(t)) {
                el.textContent = t.replace(/^(USD|ARS)\s+/i, '$');
            }
        });
    });

    // Any topbar balance-like wrapper that contains the LTC icon
    root.querySelectorAll('div[role="presentation"]').forEach(wrap => {
        const hasLtc = !!wrap.querySelector('svg[data-ds-icon="LTC"]');
        if (!hasLtc) return;

        wrap.querySelectorAll('span[data-ds-text="true"]').forEach(el => {
            let t = el.textContent || '';
            t = t.replace(/\u00A0/g, ' ').trim();

            // balance amount only, not the coin label "LTC"
            if (/^(USD|ARS)\s*[\d,.]+$/i.test(t)) {
                el.textContent = t.replace(/^(USD|ARS)\s+/i, '$');
            }
        });
    });
}

function d() {
    e(document);

    if (mo) return;

    mo = new MutationObserver(mutations => {
        for (const mutation of mutations) {
            if (mutation.type === 'characterData') {
                const parent = mutation.target && mutation.target.parentElement;
                if (!parent) continue;

                const btn = parent.closest && parent.closest('button[data-testid="coin-toggle-currency-ltc"]');
                if (btn) e(btn);

                const wrap = parent.closest && parent.closest('div[role="presentation"]');
                if (wrap && wrap.querySelector('svg[data-ds-icon="LTC"]')) {
                    e(wrap);
                }
            }

            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(node => {
                    if (!(node instanceof Element)) return;

                    if (node.matches && node.matches('button[data-testid="coin-toggle-currency-ltc"]')) {
                        e(node);
                    } else if (node.querySelector) {
                        const btn = node.querySelector('button[data-testid="coin-toggle-currency-ltc"]');
                        if (btn) e(btn);
                    }

                    if (node.matches && node.matches('div[role="presentation"]')) {
                        if (node.querySelector('svg[data-ds-icon="LTC"]')) e(node);
                    } else if (node.querySelector) {
                        node.querySelectorAll('div[role="presentation"]').forEach(wrap => {
                            if (wrap.querySelector('svg[data-ds-icon="LTC"]')) e(wrap);
                        });
                    }
                });
            }
        }
    });

    mo.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true
    });
}

    function c() {
        try {
            b();
            d();
            e(document);
        } catch (e) {
            console.error('LARP fail:', e);
        }
        requestAnimationFrame(c);
    }

    requestAnimationFrame(c);
})();
