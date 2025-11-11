/**
 * SECURE SCRIPT LOADER
 * Token-based Script Protection
 * Anti-Extraction System
 */

class SecureScriptLoader {
    constructor() {
        this.encryptionKey = "SCR1PT-3NCrypt-K3Y-2024";
        this.loadedScripts = new Set();
        this.init();
    }

    init() {
        this.protectExistingScripts();
        this.interceptScriptLoading();
        this.obfuscateScriptContent();
    }

    protectExistingScripts() {
        // Protect all existing scripts
        document.querySelectorAll('script').forEach(script => {
            this.secureScriptElement(script);
        });
    }

    interceptScriptLoading() {
        // Intercept dynamic script loading
        const originalAppend = Element.prototype.appendChild;
        Element.prototype.appendChild = function(element) {
            if (element.tagName === 'SCRIPT') {
                window.securitySystem.secureScriptElement(element);
            }
            return originalAppend.call(this, element);
        };
    }

    secureScriptElement(script) {
        if (script.src && !this.loadedScripts.has(script.src)) {
            script.setAttribute('data-secure-loaded', 'true');
            script.setAttribute('data-token-verified', window.securitySystem.ownerToken);
            script.setAttribute('data-encrypted', 'true');
            
            this.loadedScripts.add(script.src);
            
            // Add corruption protection
            script.onerror = function() {
                window.securitySystem.selfDestruct();
            };
        }
    }

    obfuscateScriptContent() {
        // Obfuscate inline scripts
        document.querySelectorAll('script:not([src])').forEach(script => {
            if (script.innerHTML && !script.getAttribute('data-obfuscated')) {
                const originalContent = script.innerHTML;
                script.setAttribute('data-obfuscated', 'true');
                script.innerHTML = this.obfuscateCode(originalContent);
            }
        });
    }

    obfuscateCode(code) {
        // Simple obfuscation
        return code.split('').map(char => {
            return String.fromCharCode(char.charCodeAt(0) ^ 0x55);
        }).join('');
    }

    loadSecureScript(url, callback) {
        // Secure script loading with token
        const script = document.createElement('script');
        script.src = url;
        script.setAttribute('data-token', window.securitySystem.ownerToken);
        
        script.onload = callback;
        script.onerror = () => window.securitySystem.selfDestruct();
        
        document.head.appendChild(script);
    }
}

// Initialize secure script loader
window.scriptLoader = new SecureScriptLoader();