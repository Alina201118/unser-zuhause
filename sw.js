
self.addEventListener('push', event => {
  event.waitUntil(
    self.registration.showNotification('Unser Zuhause 🏡', {
      body: 'Denk an unsere Haushaltsaufgaben. Schau nach, was noch offen ist!'
    })
  );
});

self.addEventListener('notificationclick', event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(
      'https://alina201118.github.io/unser-zuhause/'
    )
  );
});
