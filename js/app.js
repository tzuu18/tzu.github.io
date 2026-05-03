/**
 * js/app.js
 */
document.addEventListener('DOMContentLoaded', () => {
    // Memulai aplikasi di halaman beranda
    if (typeof Router !== 'undefined') {
        Router.push('home');
    } else {
        console.error("Router belum termuat. Periksa urutan script di index.html");
    }
});