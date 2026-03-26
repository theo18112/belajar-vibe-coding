# Planning: API backend (Bun + Elysia + Drizzle + MySQL)

Dokumen ini ringkasan tingkat tinggi untuk implementasi nanti. Tidak perlu detail arsitektur atau kode.

## Tujuan

- Satu project baru di folder repo ini.
- Runtime: **Bun**.
- Stack: **Elysia** (HTTP API), **Drizzle** (ORM/query builder), **MySQL** (database).

## Fase 1 — Inisialisasi project

- Inisialisasi project Bun di root folder (atau subfolder `server` jika ingin pisah; default: sesuai struktur yang dipilih).
- Pasang dependency: `elysia`, `drizzle-orm`, driver MySQL yang kompatibel dengan Drizzle + Bun (cek dokumentasi resmi Drizzle untuk MySQL).
- Skrip dasar: dev (watch), start, dan (opsional) migrasi DB.

## Fase 2 — Database & Drizzle

- Konfigurasi koneksi MySQL lewat environment variable (host, user, password, database, port).
- Definisikan schema tabel di kode (Drizzle schema) sesuai kebutuhan fitur pertama.
- Setup migrasi Drizzle (generate + apply) agar schema bisa direproduksi di lingkungan lain.

## Fase 3 — API dengan Elysia

- Mount app Elysia di entrypoint Bun.
- Struktur folder sederhana: misalnya `routes` atau modul per domain; hindari over-engineering di awal.
- Health check endpoint (mis. `GET /health`) untuk verifikasi server + (opsional) koneksi DB.
- Endpoint CRUD atau use case pertama mengikuti schema yang sudah ada.

## Fase 4 — Operasional minimal

- `.env.example` dengan nama variabel yang dipakai (tanpa secret asli).
- README singkat: cara install, set env, jalankan migrasi, dan `bun run dev`.

## Batasan (sengaja tidak di-detailkan di sini)

- Skema tabel konkret, nama endpoint, dan business rules — ditentukan saat implementasi atau issue turunan.
- Auth, rate limit, dan deployment — tambahkan hanya jika sudah jadi requirement eksplisit.

## Kriteria selesai (MVP)

- `bun` bisa menjalankan server, Elysia merespons, Drizzle bisa baca/tulis ke MySQL sesuai minimal satu alur data.
- Migrasi bisa dijalankan ke database kosong hingga siap dipakai.
