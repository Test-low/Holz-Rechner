/* HolzOptiX Mobil 2.5: Netzwerk hat Vorrang; Offline-Fallback. */
const CACHE_NAME = 'holzoptix-m3-schnellerfassung-v250-20261022';
const ASSETS = ['./index.html', './manifest.webmanifest', './aktualisieren.html', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).then(() => self.skipWaiting())));
self.addEventListener('activate', event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => (k.startsWith('holzoptix-m3-') || k.startsWith('holzwerk-m3-')) && k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim())));
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if(event.request.method !== 'GET' || url.origin !== self.location.origin || !url.pathname.startsWith(new URL('./',self.location.href).pathname))return;
  if(event.request.mode==='navigate'){
    event.respondWith(fetch(event.request,{cache:'no-store'}).then(res=>{if(res.ok && (url.pathname.endsWith('/')||url.pathname.endsWith('/index.html'))){const copy=res.clone();caches.open(CACHE_NAME).then(c=>c.put('./index.html',copy)).catch(()=>{});}return res}).catch(()=>caches.match(url.pathname.endsWith('aktualisieren.html')?'./aktualisieren.html':'./index.html')));return;
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request)));
});
