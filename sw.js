self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});
self.addEventListener('fetch', (e) => {
    // 오프라인 캐싱 등은 생략하고 기본 통과
});