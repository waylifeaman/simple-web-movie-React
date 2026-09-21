# Simple Web Movie

Aplikasi web sederhana untuk **mencari film** dan melihat **detail film**, dibuat dengan React dan memanfaatkan API publik [OMDb API](https://www.omdbapi.com/).

🔗 **Demo:** https://simplewebfilm.netlify.app/

---

## Fitur

- Mencari film berdasarkan judul.
- Menampilkan hasil pencarian dalam bentuk kartu (poster, judul, tahun rilis).
- Halaman detail film (judul, poster, sinopsis, rating) yang dibuka dengan mengklik kartu film.
- URL halaman detail bisa dibagikan, misalnya `/movie/tt0111161`.
- Penanganan state *loading* dan *error*, sehingga aplikasi tidak crash saat data gagal diambil.

## Teknologi

| Kategori | Teknologi |
|---|---|
| Library UI | [React](https://react.dev/) |
| Build tool | [Vite](https://vite.dev/) |
| Routing | [React Router](https://reactrouter.com/) |
| Styling | Tailwind CSS dan [Flowbite React](https://flowbite-react.com/) |
| Data | [OMDb API](https://www.omdbapi.com/) (via `fetch`) |
| Deploy | [Netlify](https://www.netlify.com/) |

## Struktur Halaman

| Route | Halaman | Keterangan |
|---|---|---|
| `/` | `DashboardPage` | Form pencarian dan daftar film |
| `/movie/:id` | `DetailFilmPage` | Detail film berdasarkan `imdbID` |

## Cara Kerja Singkat

1. User mengetik judul film, lalu `SearchMoviesApi` memanggil OMDb dengan parameter `s` (search).
2. Hasilnya ditampilkan sebagai kartu oleh komponen `Content`. Setiap kartu adalah `<Link>` ke `/movie/{imdbID}`.
3. Di halaman detail, `useParams()` membaca `id` dari URL, lalu `getDataById` memanggil OMDb dengan parameter `i` (ID) untuk mengambil data lengkap film.

## Menjalankan di Komputer Lokal

### Prasyarat

- [Node.js](https://nodejs.org/) versi 18 atau lebih baru
- API key gratis dari [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)

### Langkah

```bash
# 1. Clone repository
git clone https://github.com/waylifeaman/simple-web-movie-React.git
cd simple-web-movie-React

# 2. Install dependensi
npm install

# 3. Buat file .env di root project
#    lalu isi dengan API key kamu (lihat bagian di bawah)

# 4. Jalankan development server
npm run dev
```

Buka alamat yang muncul di terminal (biasanya `http://localhost:5173`).

### Environment Variable

Buat file `.env` di root project:

```env
VITE_API_KEY=isi_api_key_omdb_kamu
```

> File `.env` sudah diabaikan oleh Git dan **tidak boleh di-commit**.

## Script yang Tersedia

| Perintah | Fungsi |
|---|---|
| `npm run dev` | Menjalankan development server |
| `npm run build` | Membuat versi production di folder `dist` |
| `npm run preview` | Melihat hasil build secara lokal |
| `npm run lint` | Memeriksa kode dengan ESLint |

## Deploy ke Netlify

1. Push project ke GitHub.
2. Di Netlify, pilih **Add new site → Import an existing project**, lalu pilih repository ini.
3. Atur build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Tambahkan environment variable `VITE_API_KEY` di **Site configuration → Environment variables**.
5. Tambahkan file `public/_redirects` dengan isi berikut agar halaman detail tidak 404 saat di-refresh:

   ```
   /*    /index.html   200
   ```

## Catatan

- OMDb API versi gratis dibatasi **1.000 request per hari**.
- Beberapa film tidak memiliki poster (`"N/A"`) atau URL posternya sudah tidak aktif, sehingga poster bisa tidak tampil.
- Karena ini aplikasi frontend, API key dapat dilihat lewat DevTools browser. Untuk key yang sensitif atau berbayar, panggilan API sebaiknya dilakukan lewat backend.

## Lisensi

Project ini dibuat untuk keperluan belajar.

ini link demoo nya
https://simplewebfilm.netlify.app
