Nama Lengkap: Lodi Galang Putra Sugianto
Kategori Proyek yang Dipilih: HealthTech
Deskripsi Singkat Proyek:
Lodi Health's adalah aplikasi layanan kesehatan digital yang dirancang untuk mempermudah masyarakat dalam mengakses layanan medis secara online. Pengguna dapat membeli obat dan suplemen, membaca artikel kesehatan terbaru, melihat profil dokter, serta menghubungi layanan konsultasi langsung dari website. Tampilan sederhana dan intuitif memudahkan navigasi, terutama untuk pengguna awam yang baru pertama kali menggunakan layanan kesehatan digital.

# Integrasi API pada Proyek

Proyek Lodi Health's memanfaatkan beberapa sumber API untuk mendukung berbagai fitur layanan kesehatan digital, yaitu:

MockAPI
Digunakan sebagai backend sementara untuk menyimpan dan mengelola data seperti:
-Pengguna
-Pemesanan/booking tempat
-Produk obat dan suplemen
-Kontak

NewsAPI
Digunakan untuk menampilkan artikel kesehatan terbaru dari sumber terpercaya secara real-time.

GitHub Raw JSON
Beberapa data disimpan dalam format .json di GitHub dan diakses melalui URL raw.githubusercontent.com sebagai API statis, meliputi:
-Daftar dokter
-Data rumah sakit
-Data provinsi dan kota
Data ini berasal dari berbagai sumber, baik milik pengembang sendiri maupun publik (open data dari pihak lain).

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
