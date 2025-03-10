# Laporan Tugas JavaScript Dasar

## 👨‍🏫 Deskripsi
Tugas ini bertujuan untuk melatih pemahaman dasar JavaScript melalui lima soal praktis. Materi yang diuji mencakup operasi matematika, manipulasi string, dan pengolahan tanggal menggunakan JavaScript murni.

---

## 📝 Soal dan Hasil Pengerjaan

### 1. Menghitung Luas Persegi Panjang
**Input**: panjang = 5, lebar = 3  
**Kode**:
```javascript
let length = 5;
let width = 3;
let areaRectangle = length * width;
Output: 15

### 2. Menghitung Diameter, Keliling, dan Luas Lingkaran
**Input**: jari-jari = 5
**Kode**:
let radius = 5;
let diameter = 2 * radius;
let circumference = 2 * Math.PI * radius;
let areaCircle = Math.PI * radius * radius;
Output:
Diameter = 10
Keliling = 31.4159
Luas = 78.5398

### 3. Menghitung Sudut Ketiga dari Segitiga
Input: sudut A = 80, sudut B = 65
Kode:
let a = 80;
let b = 65;
let c = 180 - a - b;
Output: sudut C = 35

### 4. Menghitung Selisih Hari antara Dua Tanggal
Input: 2024-03-19 dan 2024-03-21
Kode:
let date1 = new Date("2024-03-19");
let date2 = new Date("2024-03-21");
let diffInTime = date2 - date1;
let diffInDays = diffInTime / (1000 * 3600 * 24);
Output: 2 hari

### 5. Menampilkan Inisial Nama
Input: "John Doe"
Kode:
let fullName = "John Doe";
let initials = fullName.split(" ").map(n => n[0].toUpperCase()).join("");
Output: JD

### Cara Menjalankan Program
Buka file index.html di Visual Studio Code
Klik kanan lalu pilih "Open with Live Server"
Tekan F12 untuk membuka DevTools di browser
Lihat output pada tab Console

### Struktur Folder Proyek
tugas-javascript/
├── index.html
├── script.js
└── README.md

### Identitas
Nama: Ikin Solihin
GitHub: https://github.com/ikinsoli
