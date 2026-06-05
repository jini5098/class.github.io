self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install 완료');
});

// 경고를 없애기 위해 기본 네트워크 요청을 그대로 통과시키는 코드 추가
self.addEventListener('fetch', (e) => {
    e.respondWith(fetch(e.request));
});