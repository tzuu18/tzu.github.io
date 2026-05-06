// js/app.js
// File utama untuk menjalankan aplikasi TzuJapan

document.addEventListener('DOMContentLoaded', () => {
    // JALAN PINTAS NINJA: 
    // Mengaitkan Router dan Quiz ke sistem global (window)
    // agar semua tombol di layar (onclick) bisa langsung mendeteksinya!
    window.Router = Router;
    window.Quiz = Quiz;

    // Mulai navigasi awal saat web dibuka
    Router.push('home');
});