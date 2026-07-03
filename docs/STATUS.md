# Project Status — Arrbey

## Selesai

- Design spec MVP homepage disetujui.
- Implementation plan detail dibuat dan disetujui.
- **Fase 1: Scaffold project** — Laravel 12 + Inertia React + shadcn/ui terinstall, build berhasil.
- **Fase 2: Database** — Semua migration, model, dan seeder selesai, `migrate:fresh --seed` berhasil.
- **Fase 3: Homepage publik** — Route, controller, service, layout, dan semua section components selesai. Build diverifikasi.
- **Fase 4: Auth admin & dashboard** — Login admin, route admin, layout dashboard, dan statistik dasar selesai.
- **Fase 5: CRUD Hero Section** — Backend service/controller/request dan halaman edit selesai.
- **Fase 6: CRUD Service Units** — Backend service/controller/request dan halaman index/create/edit selesai.
- **Fase 7: CRUD Programs** — Backend service/controller/request dan halaman index/create/edit selesai.
- Route admin diverifikasi dengan `php artisan route:list --path=admin`.
- Build frontend diverifikasi dengan `npm run build`.

## Sedang Dikerjakan

- Persiapan Fase 8: Site Settings & Footer admin.

## Belum Dikerjakan

- CRUD Site Settings & Footer.
- Pengujian manual alur login dan form admin di browser.
- Testing final sebelum deployment.

## Berikutnya

- Fase 8: Admin Site Settings & Footer.
- Fase 9: polish konten, QA responsive, dan dokumentasi deploy.

## Catatan Teknis

- Target stack: Laravel 12, PHP 8.2, MySQL, Inertia React, Tailwind, shadcn/ui.
- Target deployment: shared hosting/cPanel tanpa Node.js runtime di server.
- Hindari `Button asChild`; komponen `Button` lokal tidak mendukung prop tersebut. Gunakan `buttonVariants` + `cn` pada `Link`.
- Dokumentasi: `docs/superpowers/specs/2026-07-02-arrbey-homepage-mvp-design.md` dan `2026-07-02-arrbey-homepage-mvp-plan.md`.
