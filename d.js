document.addEventListener('DOMContentLoaded', function() {
    // 1. Ambil data yang disimpan di sessionStorage saat login tadi
    const nama = sessionStorage.getItem('nama');
    const nisn = sessionStorage.getItem('nisn');
    const status = sessionStorage.getItem('status');

    // 2. Keamanan: Jika data kosong (siswa belum login), tendang balik ke login
    if (!nama || !nisn || !status) {
        window.location.href = 'index.html';
        return;
    }

    // 3. Masukkan data ke elemen HTML
    // Pastikan ID ini (resNama, resNISN, resStatus) ada di file hasil.html Anda
    const elNama = document.getElementById('resNama');
    const elNISN = document.getElementById('resNISN');
    const elStatus = document.getElementById('resStatus');
    const statusBox = document.getElementById('resStatusBox');
    const pesan = document.getElementById('resPesan');

    if (elNama) elNama.innerText = nama;
    if (elNISN) elNISN.innerText = nisn;
    if (elStatus) elStatus.innerText = status;

    // 4. Logika Tampilan Berdasarkan Status Kelulusan
    if (status === "LULUS") {
        // Gunakan class 'lulus' dari CSS yang sudah kita buat sebelumnya
        if (statusBox) statusBox.className = "status-box lulus";
        if (pesan) pesan.innerText = "Selamat atas keberhasilan Anda! Pertahankan prestasi Anda di jenjang berikutnya.";
    } else {
        // Gunakan class 'tidak-lulus'
        if (statusBox) statusBox.className = "status-box tidak-lulus";
        if (pesan) pesan.innerText = "Jangan berkecil hati. Kegagalan adalah awal dari keberhasilan yang tertunda. Tetap semangat!";
    }
});

// Fungsi tambahan untuk tombol Cetak
function cetakHasil() {
    window.print();
}