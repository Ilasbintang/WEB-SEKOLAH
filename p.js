 // 1. DATABASE LOKAL
        const dataSiswa = {
            "0084155475": { nama: "Abdiman Pratama", nipd: "07-03-2008", status: "LULUS" },
            "0083447236": { nama: "Abdul Rahman", nipd: "20-12-2008", status: "LULUS" },
            "0062041852": { nama: "Ade Irma", nipd: "29-05-2006", status: "LULUS" },
            "0088167918": { nama: "ADRYANSYAH HALIQ", nipd: "13-06-2008", status: "LULUS" },
            "0083606455": { nama: "ANDINYAN HALIQ", nipd: "13-06-2008", status: "LULUS" },
            "0072331014": { nama: "ASIS", nipd: "04-05-2008", status: "LULUS" },
            "0075814533": { nama: "Asriyani", nipd: "07-07-2007", status: "LULUS" },
            "0087193884": { nama: "Azhar", nipd: "08-07-2008", status: "LULUS" },
            "0081725947": { nama: "CAHYA AZZAHRA SAFITRI", nipd: "07-03-2008", status: "LULUS" },
            "0089360881": { nama: "Elsa Wati", nipd: "18-06-2008", status: "LULUS" },
            "0082094237": { nama: "Erina Samsir", nipd: "02-07-2008", status: "LULUS" },
            "0078098703": { nama: "Farul Saputra", nipd: "22-12-2007", status: "LULUS" },
            "0071243440": { nama: "FIRMAN", nipd: "21-07-2008", status: "LULUS" },
            "0077250570": { nama: "Iin Kartika Mpangia", nipd: "08-04-2007", status: "LULUS" },
            "0082205519": { nama: "Indah Fitriyani", nipd: "14-07-2008", status: "LULUS" },
            "0087227110": { nama: "JIHAN IRMA SAKTI", nipd: "09-10-2008", status: "LULUS" },
            "0073205758": { nama: "KENDI", nipd: "03-06-2007", status: "LULUS" },
            "0079141143": { nama: "LA ODE DARMIN", nipd: "14-06-2007", status: "LULUS" },
            "0099276301": { nama: "LA ODE MUHAMMAD FUAD NAADHIR AMRULLA", nipd: "07-07-2009", status: "LULUS" },
            "0087674429": { nama: "MUHAMAD RIFALDY", nipd: "05-01-2008", status: "LULUS" },
            "0076195492": { nama: "NUNING", nipd: "07-02-2007", status: "LULUS" },
            "0074194828": { nama: "NUR RAHMADHANI", nipd: "23-12-2007", status: "LULUS" },
            "0085490344": { nama: "NURLAILA AFIT", nipd: "28-05-2008", status: "LULUS" },
            "0086709297": { nama: "RESTIKA SARI", nipd: "12-08-2008", status: "LULUS" },
            "0082085933": { nama: "RISKA", nipd: "14-08-2008", status: "LULUS" },
            "0079525081": { nama: "SARIL", nipd: "05-02-2007", status: "LULUS" },
            "0088669204": { nama: "Sarlina Putri", nipd: "03-03-2008", status: "LULUS" },
            "0082958526": { nama: "SITTI FAHMIDA", nipd: "04-01-2008", status: "LULUS" },
            "0071165148": { nama: "SITTI ARESTU", nipd: "12-12-2007", status: "LULUS" },
            "0087814933": { nama: "SRI WULAN", nipd: "10-10-2008", status: "LULUS" },
            "0087875890": { nama: "SYARIF RAMADHAN", nipd: "03-09-2008", status: "LULUS" },
            "0089762094": { nama: "Wa Nani", nipd: "19-01-2008", status: "LULUS" },
            "0089821807": { nama: "WA ODE NADIRA", nipd: "26-11-2008", status: "LULUS" },
            "0085848039": { nama: "Wa Ode Nurul Izzah", nipd: "25-04-2008", status: "LULUS" },
            "0071574134": { nama: "WILDA WIJAYA TALA", nipd: "03-05-2007", status: "LULUS" },
            "0081535644": { nama: "ABDUL NAHZRAN RAZAK", nipd: "15-02-2008", status: "LULUS" },
            "0081235767": { nama: "Alma Fira", nipd: "03-10-2008", status: "LULUS" },
            "0086599881": { nama: "ALWAN HAYAT", nipd: "01-04-2008", status: "LULUS" },
            "0095772055": { nama: "Anistia Nasir", nipd: "25-01-2009", status: "LULUS" },
            "0077273478": { nama: "ARIN MUSTIKA SARI", nipd: "01-12-2007", status: "LULUS" },
            "0084446291": { nama: "ARTIKA KUMALA DEWI", nipd: "20-11-2008", status: "LULUS" },
            "0065078259": { nama: "ARWIN", nipd: "05-03-2007", status: "LULUS" },
            "0077525688": { nama: "ASNI", nipd: "23-04-2007", status: "LULUS" },
            "0082985110": { nama: "ASYAFIRA MINANTI ASKA", nipd: "13-06-2008", status: "LULUS" },
            "0085985648": { nama: "DWIANA AMELIA", nipd: "23-05-2008", status: "LULUS" },
            "0088067018": { nama: "EYTRI NAILAH", nipd: "08-08-2008", status: "LULUS" },
            "0087636778": { nama: "FITRA", nipd: "22-09-2009", status: "LULUS" },
            "0087169031": { nama: "HARLINDAN BELA", nipd: "10-11-2008", status: "LULUS" },
            "0068151240": { nama: "FITRIANI", nipd: "26-05-2007", status: "LULUS" },
            "0086469681": { nama: "HIKMA", nipd: "11-06-2008", status: "LULUS" },
            "0085002494": { nama: "ISRA ARIYANTI SYAPUTRI", nipd: "29-07-2008", status: "LULUS" },
            "0073001323": { nama: "KAMARIA", nipd: "13-02-2008", status: "LULUS" },
            "0088295087": { nama: "LA ODE MUHAMAD HUSRIN TCUMADA", nipd: "17-01-2008", status: "LULUS" },
            "0091085447": { nama: "Muhamad Harpenas Sya Baidin", nipd: "02-05-2009", status: "LULUS" },
            "0087366815": { nama: "NUR HAKIKI SABAR HATI", nipd: "23-07-2008", status: "LULUS" },
            "0081366376": { nama: "NURUL RAHMADANI", nipd: "24-09-2008", status: "LULUS" },
            "0082941178": { nama: "RAHMAN", nipd: "17-04-2008", status: "LULUS" },
            "0078468233": { nama: "RANGGA SYAPUTRA", nipd: "19-09-2007", status: "LULUS" },
            "0082534700": { nama: "SALMAN ALFARISI", nipd: "10-01-2008", status: "LULUS" },
            "0065766379": { nama: "Saparuddin", nipd: "27-05-2005", status: "LULUS" },
            "0078257941": { nama: "SITI ANNISA FEBRIANTI", nipd: "10-02-2008", status: "LULUS" },
            "0075399674": { nama: "Sulaiman Sidik", nipd: "10-06-2007", status: "LULUS" },
            "0084392993": { nama: "Uci  Wulandari", nipd: "02-11-2008", status: "LULUS" },
            "0089955103": { nama: "WA ODE NURUL AZMHI RAMADHANI", nipd: "28-09-2008", status: "LULUS" },
            "0078664592": { nama: "Wa Opo", nipd: "05-01-2007", status: "LULUS" },
            "0081403772": { nama: "Winda Rahayu Pratiwi", nipd: "30-10-2008", status: "LULUS" },
            "0086882137": { nama: "YAPRIL RAFILUDIN", nipd: "30-04-2008", status: "LULUS" },
            "0085815762": { nama: "Yulianti Salsabila", nipd: "13-07-2008", status: "LULUS" },
            "0071615619": { nama: "AGUS", nipd: "15-08-2007", status: "LULUS" },
            "0084867712": { nama: "AHMAD HUSAINY AL MUHSINY", nipd: "29-03-2008", status: "LULUS" },
            "0085950825": { nama: "Alvin Dewantara", nipd: "02-05-2008", status: "LULUS" },
            "0089218327": { nama: "AQIL IHRAM ZAIN", nipd: "07-12-2008", status: "LULUS" },
            "0085759478": { nama: "BAIM", nipd: "27-01-2008", status: "LULUS" },
            "0081342332": { nama: "DEWI SHERLIANTI ILSA", nipd: "03-06-2008", status: "LULUS" },
            "0081898299": { nama: "ELSA APRILIYAH", nipd: "30-04-2008", status: "LULUS" },
            "0076539378": { nama: "Faril", nipd: "04-11-2007", status: "LULUS" },
            "3088158740": { nama: "FATIN", nipd: "10-10-2008", status: "LULUS" },
            "0077231759": { nama: "Fitri", nipd: "25-10-2007", status: "LULUS" },
            "0086769706": { nama: "ICIN PUTRI DEFI", nipd: "17-06-2008", status: "LULUS" },
            "0082339444": { nama: "Jaya Rahmawati", nipd: "16-08-2008", status: "LULUS" },
            "3073624883": { nama: "JULIANA", nipd: "18-08-2007", status: "LULUS" },
            "0087080084": { nama: "MUHAMAD ADITYA", nipd: "18-02-2008", status: "LULUS" },
            "0089663910": { nama: "MUHAMAD HABIB RAHMAN", nipd: "15-10-2008", status: "LULUS" },
            "0087986579": { nama: "MUHAMMAD AL YASIN", nipd: "12-02-2008", status: "LULUS" },
            "0089255288": { nama: "Muhammad Ikhsan Solywunto", nipd: "18-09-2008", status: "LULUS" },
            "0089606807": { nama: "Nita", nipd: "02-08-2008", status: "LULUS" },
            "0081293162": { nama: "NUR ANISA SAIDI", nipd: "31-08-2009", status: "LULUS" },
            "0072829406": { nama: "NURIANTI LAODE", nipd: "03-08-2007", status: "LULUS" },
            "0076266128": { nama: "Raya", nipd: "07-03-2007", status: "LULUS" },
            "0076015670": { nama: "SABRINA", nipd: "15-12-2007", status: "LULUS" },
            "0083365648": { nama: "SAFAR MAHARDIKA", nipd: "21-08-2008", status: "LULUS" },
            "0076337283": { nama: "Siti Salfiah", nipd: "18-03-2007", status: "LULUS" },
            "0073063825": { nama: "TRILSON KADRIN", nipd: "10-10-2007", status: "LULUS" },
            "0089185987": { nama: "UMMUL HAIRAH", nipd: "03-08-2008", status: "LULUS" },
            "0088086049": { nama: "WA NIAR", nipd: "25-05-2008", status: "LULUS" },
            "3071967781": { nama: "WA ODE HIKMAWATI", nipd: "15-07-2007", status: "LULUS" },
            "0077288403": { nama: "WA ODE LULUN PURNAMA", nipd: "24-11-2007", status: "LULUS" },
            "3071338656": { nama: "WA ODE NUR FADILAH AULIYAH", nipd: "04-12-2008", status: "LULUS" },
            "0086075515": { nama: "WINARNI THAMRIN", nipd: "22-02-2008", status: "LULUS" },
            "0072598551": { nama: "WYLDA ASFINA", nipd: "14-12-2007", status: "LULUS" },
            "0089079638": { nama: "YULGA NURDIZAKI ILSA", nipd: "12-10-2008", status: "LULUS" },
            "0082868115": { nama: "ZAINAL ALI AKBAR", nipd: "16-06-2009", status: "LULUS" },
            "0078813093": { nama: "ALIF", nipd: "23-06-2007", status: "LULUS" },
            "0088976568": { nama: "Alvin Tri Darma", nipd: "30-06-2008", status: "LULUS" },
            "0081368940": { nama: "BUNGA", nipd: "09-06-2008", status: "LULUS" },
            "0087570147": { nama: "Hendro Marfin", nipd: "05-12-2008", status: "LULUS" },
            "0081372958": { nama: "Irhan", nipd: "07-04-2008", status: "LULUS" },
            "0087020782": { nama: "KATARINA", nipd: "16-01-2008", status: "LULUS" },
            "0089236016": { nama: "La Jima", nipd: "28-01-2008", status: "LULUS" },
            "0087092352": { nama: "La Ode Muhamad Adan", nipd: "08-12-2009", status: "LULUS" },
            "0079128267": { nama: "La Ode Muhamad Ilham", nipd: "22-07-2007", status: "LULUS" },
            "0074337022": { nama: "LUSIANA DEWI", nipd: "29-03-2007", status: "LULUS" },
            "0084292643": { nama: "MUHAMAD AIS", nipd: "11-08-2008", status: "LULUS" },
            "0084678528": { nama: "Muhamad Iqram", nipd: "30-01-2008", status: "LULUS" },
            "0077356164": { nama: "Muhamad Wahid", nipd: "21-03-2007", status: "LULUS" },
            "0087180280": { nama: "Muhammad Faisal", nipd: "21-05-2008", status: "LULUS" },
            "0086695582": { nama: "NABIL", nipd: "19-09-2008", status: "LULUS" },
            "0089156142": { nama: "NUR ASWAD", nipd: "31-08-2008", status: "LULUS" },
            "0078441156": { nama: "RIDWALI SIDIQ", nipd: "06-10-2007", status: "LULUS" },
            "0082520442": { nama: "Rifky", nipd: "13-05-2008", status: "LULUS" },
            "0086247863": { nama: "Rijal", nipd: "11-11-2008", status: "LULUS" },
            "0083765328": { nama: "TRIVEN KATARINA", nipd: "25-11-2008", status: "LULUS" },
            "0075200191": { nama: "ALDIYANSHA", nipd: "06-12-2007", status: "LULUS" },
            "3031449944": { nama: "ASRABIUL SAPUTRA", nipd: "29-03-2008", status: "LULUS" },
            "0086077567": { nama: "DEWI HABSYAH AULIA", nipd: "14-12-2009", status: "LULUS" },
            "0083235417": { nama: "EMILIA SUSANA", nipd: "24-08-2008", status: "LULUS" },
            "0087224157": { nama: "FARID", nipd: "05-06-2008", status: "LULUS" },
            "0061358811": { nama: "FERA WATI", nipd: "28-09-2006", status: "LULUS" },
            "0089450873": { nama: "FERDINANDUS HESTU TIASNO", nipd: "23-05-2008", status: "LULUS" },
            "0079545771": { nama: "GETRUT YULAN", nipd: "27-07-2007", status: "LULUS" },
            "0081379927": { nama: "HAZMIN", nipd: "06-09-2008", status: "LULUS" },
            "0076537051": { nama: "La Ali", nipd: "30-06-2007", status: "LULUS" },
            "0087865541": { nama: "La Ode Akbar", nipd: "21-09-2008", status: "LULUS" },
            "0079401358": { nama: "La Ode Muhamad Alim", nipd: "12-02-2007", status: "LULUS" },
            "0088852479": { nama: "Shiren Dwianti", nipd: "10-10-2008", status: "LULUS" },
            "0088681752": { nama: "Sulfi", nipd: "11-07-2008", status: "LULUS" },
            "0078155927": { nama: "Wa Ode Asa", nipd: "02-06-2007", status: "LULUS" },
            "0085255898": { nama: "Wa Ode Bunga Aprilia", nipd: "03-04-2008", status: "LULUS" }
            
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
                alert("Password (TanggaL Lahir) Salah!");
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

        // 1. Tentukan waktu target dalam WITA (UTC+8)
// Format: Tahun, Bulan (0-11), Tanggal, Jam, Menit, Detik
const targetDate = new Date('2026-05-05T14:00:00+08:00'); 
const waktuTarget = targetDate.getTime();

function updateCountdown() {
    // 2. Ambil waktu sekarang (selalu dalam UTC secara internal)
    const sekarang = new Date().getTime();
    const selisih = waktuTarget - sekarang;

    const formLogin = document.getElementById('formLogin');
    const infoBox = document.querySelector('.info-box');
    const countdownContainer = document.getElementById('countdown-container');

    // 3. Logika Tampilan
    if (selisih > 0) {
        // BELUM WAKTUNYA: Sembunyikan form, tampilkan timer
        if (formLogin) formLogin.style.display = 'none';
        if (infoBox) infoBox.style.display = 'none';
        if (countdownContainer) countdownContainer.style.display = 'block';

        const d = Math.floor(selisih / (1000 * 60 * 60 * 24));
        const h = Math.floor((selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((selisih % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((selisih % (1000 * 60)) / 1000);

        // Update angka ke HTML
        document.getElementById('days').innerText = d.toString().padStart(2, '0');
        document.getElementById('hours').innerText = h.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = m.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = s.toString().padStart(2, '0');
    } else {
        // SUDAH WAKTUNYA: Tampilkan form login
        if (formLogin) formLogin.style.display = 'block';
        if (infoBox) infoBox.style.display = 'block';
        if (countdownContainer) countdownContainer.style.display = 'none';
    }
}

// Jalankan interval
setInterval(updateCountdown, 1000);
updateCountdown();
