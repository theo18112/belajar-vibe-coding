# belajar-vibe-coding

API backend minimal: **Bun**, **Elysia**, **Drizzle**, **MySQL**. Perencanaan tingkat tinggi ada di [`issue.md`](./issue.md) dan [GitHub issue #2](https://github.com/theo18112/belajar-vibe-coding/issues/2).

## Prasyarat

- [Bun](https://bun.sh) terpasang
- MySQL berjalan dan database (mis. `app`) sudah dibuat

## Setup

```bash
bun install
cp .env.example .env
# Edit .env — isi kredensial MySQL yang benar
```

Jalankan migrasi ke database kosong:

```bash
bun run db:migrate
```

## Menjalankan

```bash
bun run dev
```

Server default: `http://127.0.0.1:3000`.

## Endpoint (MVP)

| Method | Path        | Keterangan                          |
|--------|-------------|-------------------------------------|
| GET    | `/health`   | Status app + cek koneksi MySQL      |
| GET    | `/items`    | Daftar baris tabel `items`          |
| GET    | `/items/:id`| Satu item                           |
| POST   | `/items`    | Body JSON `{ "name": "..." }`       |

## Skrip

| Skrip            | Fungsi                              |
|------------------|-------------------------------------|
| `bun run dev`    | Server dengan watch                 |
| `bun run start`  | Server tanpa watch                  |
| `bun run db:generate` | Generate migrasi dari schema (`src/db/schema.ts`) |
| `bun run db:migrate`  | Terapkan migrasi ke database      |
