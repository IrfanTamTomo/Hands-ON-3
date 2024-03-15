import React from 'react';

const showNotification = () => {
    alert('Coming Soon!');
}

export default function Notification() {
    showNotification(); // Panggil fungsi showNotification langsung saat komponen dirender
    return null; // Komponen tidak mengembalikan elemen apapun, hanya menampilkan pemberitahuan
}
