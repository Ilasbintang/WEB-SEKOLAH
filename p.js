 // 1. DATABASE LOKAL
        const dataSiswa = {
            "01001001": { nama: "Budi Santoso", nipd: "12345", status: "LULUS" },
            "01001002": { nama: "Siti Aminah", nipd: "67890", status: "LULUS" },
            "01001003": { nama: "Andi Wijaya", nipd: "11223", status: "TIDAK LULUS" },
            "01001004": { nama: "Akmal", nipd: "12344", status: "TIDAK LULUS" }
        };

        // 2. FUNGSI LIHAT PASSWORD
       function toggleView() {
            const passwordInput = document.getElementById('inputNIPD');
            const toggleIcon = document.getElementById('togglePassword');
            
            // Cek tipe input saat ini
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                // Ganti ikon mata menjadi mata tercoret
                toggleIcon.classList.remove('fa-eye');
                toggleIcon.classList.add('fa-eye-slash');   
            } else {
                passwordInput.type = 'password';
                // Kembalikan ikon menjadi mata terbuka
                toggleIcon.classList.remove('fa-eye-slash');
                toggleIcon.classList.add('fa-eye');
            }
        }
        // 3. LOGIKA LOGIN UTAMA
        document.getElementById('formLogin').addEventListener('submit', function(e) {
            e.preventDefault(); // Supaya halaman tidak refresh

            const userVal = document.getElementById('inputNISN').value;
            const passVal = document.getElementById('inputNIPD').value;

            // Cek apakah NISN ada di database
// ... kode database dataSiswa dan event listener ...

        if (dataSiswa[userVal]) {
            const siswa = dataSiswa[userVal];

            // Periksa apakah NIPD (password) sesuai
            if (siswa.nipd === passVal) {
                
                // 1. Simpan data siswa ke memori browser agar bisa dibaca di halaman tujuan
                sessionStorage.setItem('nama', siswa.nama);
                sessionStorage.setItem('nisn', userVal);
                sessionStorage.setItem('status', siswa.status);

                // 2. PINDAH KE HALAMAN SELANJUTNYA
                window.location.href = 'hasil.html'; 

            } else {
                alert("Password (NIPD) Salah!");
            }
        } else {
            alert("NISN Tidak Terdaftar!");
        }

        // Mengambil data dari memori browser (Session Storage)
        const nama = sessionStorage.getItem('nama');
        const nisn = sessionStorage.getItem('nisn');
        const status = sessionStorage.getItem('status');

        // Jika data tidak ada (siswa akses langsung tanpa login), lempar balik ke login
        if (!nama) {
            window.location.href = 'index.html';
        }

        // Isi data ke halaman
        document.getElementById('resNama').innerText = nama;
        document.getElementById('resNISN').innerText = nisn;
        document.getElementById('resStatus').innerText = status;

        const statusBox = document.getElementById('resStatusBox');
        const pesan = document.getElementById('resPesan');

        if (status === "LULUS") {
            statusBox.className = "status-box lulus";
            pesan.innerText = "Selamat atas keberhasilan Anda! Pertahankan prestasi Anda di jenjang berikutnya.";
        } else {
            statusBox.className = "status-box tidak-lulus";
            pesan.innerText = "Jangan berkecil hati. Kegagalan adalah awal dari keberhasilan yang tertunda. Tetap semangat!";
        }

        });

