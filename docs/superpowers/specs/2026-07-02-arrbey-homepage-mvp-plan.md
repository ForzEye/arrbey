# Implementation Plan — Arrbey Homepage MVP

Tanggal: 2026-07-02
Spec: `docs/superpowers/specs/2026-07-02-arrbey-homepage-mvp-design.md`

## Fase 1 — Scaffold Project

### 1.1 Inisialisasi Laravel 12

- `composer create-project laravel/laravel .` (atau install di folder arrbey).
- Pastikan PHP 8.2+.
- Konfigurasi `.env` untuk MySQL XAMPP (`DB_DATABASE=arrbey`, `DB_USERNAME=root`, `DB_PASSWORD=`).

### 1.2 Install Inertia.js + React

- `composer require inertiajs/inertia-laravel`.
- `npm install @inertiajs/react react react-dom`.
- Setup Inertia middleware.
- Setup `app.blade.php` root template dengan `@inertia`.
- Setup `app.tsx` entry point.

### 1.3 Install Tailwind CSS + shadcn/ui

- `npm install -D tailwindcss @tailwindcss/vite`.
- Konfigurasi `tailwind.config.js` dan `postcss.config.js`.
- Install shadcn/ui: `npx shadcn@latest init`.
- Install komponen awal: button, card, input, textarea, table, dialog, badge, switch, label, separator.

### 1.4 Install Laravel Breeze (Inertia React)

- `composer require laravel/breeze --dev`.
- `php artisan breeze:install react --typescript`.
- Sesuaikan auth views ke shadcn/ui nanti.

### 1.5 Folder structure

```
app/
  Http/
    Controllers/
      HomeController.php
      Admin/
        DashboardController.php
        HeroSectionController.php
        ServiceUnitController.php
        ProgramController.php
    Requests/
      Admin/
        StoreHeroSectionRequest.php
        UpdateHeroSectionRequest.php
        StoreServiceUnitRequest.php
        UpdateServiceUnitRequest.php
        StoreProgramRequest.php
        UpdateProgramRequest.php
  Models/
    HeroSection.php
    ServiceBarItem.php
    ServiceUnit.php
    GrowthPoint.php
    Stat.php
    AudienceCategory.php
    Program.php
    CtaBanner.php
    FooterColumn.php
    FooterLink.php
    Menu.php
    SiteSetting.php
    Media.php
    Page.php
  Services/
    HomepageService.php
    HeroSectionService.php
    ServiceUnitService.php
    ProgramService.php
resources/
  js/
    Pages/
      Public/
        Home.tsx
      Admin/
        Dashboard.tsx
        Hero/
          Edit.tsx
        ServiceUnits/
          Index.tsx
          Form.tsx
        Programs/
          Index.tsx
          Form.tsx
    Components/
      Public/
        Navbar.tsx
        HeroSection.tsx
        ServiceHighlightBar.tsx
        ServiceUnitsGrid.tsx
        GrowthPoints.tsx
        StatsPanel.tsx
        AudiencePanel.tsx
        FeaturedPrograms.tsx
        CtaBanner.tsx
        SiteFooter.tsx
      Admin/
        AdminLayout.tsx
        AdminSidebar.tsx
        ImageUpload.tsx
        StatusBadge.tsx
      ui/
        (shadcn/ui components)
    Layouts/
      PublicLayout.tsx
      AdminLayout.tsx
docs/
  STATUS.md
```

### 1.6 Verifikasi scaffold

- `npm run dev` berjalan.
- `php artisan serve` berjalan.
- Halaman default Inertia tampil.
- Commit: "feat: scaffold laravel + inertia react + shadcn/ui".

---

## Fase 2 — Database: Migration, Model, Seeder

### 2.1 Migration

Buat migration untuk semua tabel PRD:

- `users` (sudah ada dari Laravel).
- `site_settings`
- `menus`
- `hero_sections`
- `service_bar_items`
- `service_units`
- `growth_points`
- `stats`
- `audience_categories`
- `programs`
- `cta_banners`
- `footer_columns`
- `footer_links`
- `media`
- `pages`

### 2.2 Model

Buat Eloquent model untuk setiap tabel. Definisikan:

- `$fillable`
- `$casts` (boolean untuk `is_active`)
- Relasi (`FooterColumn hasMany FooterLink`)
- Scope `active()` untuk filter `is_active = true`
- Scope `ordered()` untuk `orderBy('order')`

### 2.3 Seeder

Buat `DatabaseSeeder` yang memanggil:

- `AdminUserSeeder` — 1 admin default.
- `SiteSettingSeeder` — logo, favicon, kontak, meta SEO.
- `MenuSeeder` — navbar + footer menus.
- `HeroSectionSeeder` — konten hero sesuai PRD.
- `ServiceBarItemSeeder` — 4 item.
- `ServiceUnitSeeder` — 7 unit.
- `GrowthPointSeeder` — 8 poin.
- `StatSeeder` — 4 statistik.
- `AudienceCategorySeeder` — 7 kategori.
- `ProgramSeeder` — 6 program.
- `CtaBannerSeeder` — 1 CTA.
- `FooterSeeder` — 4 kolom + links.

### 2.4 Verifikasi

- `php artisan migrate:fresh --seed` berhasil.
- Data terisi di database.
- Commit: "feat: migration, model, seeder semua tabel homepage".

---

## Fase 3 — Homepage Publik

### 3.1 Route & Controller

- `GET /` → `HomeController@index`.
- `HomepageService::getHomepageData()` ambil semua data aktif.
- Return Inertia render `Public/Home` dengan props.

### 3.2 Layout publik

- `PublicLayout.tsx` — wrapper dengan Navbar + Footer.
- Navbar: logo, menu dari props, tombol "Let's Talk".
- Footer: logo, deskripsi, social icons, 4 kolom link, copyright.

### 3.3 Section components (urutan render)

Bangun satu per satu, test visual setiap selesai:

1. **Navbar** — sticky, responsive, mobile hamburger.
2. **HeroSection** — judul besar, tagline, 2 CTA, background image.
3. **ServiceHighlightBar** — 4 ikon + judul + deskripsi, horizontal bar.
4. **ServiceUnitsGrid** — 7 card, accent color per unit, "Learn More".
5. **GrowthPoints** — judul + 8 checklist items.
6. **StatsPanel** — 4 angka besar + label, animated counter opsional.
7. **AudiencePanel** — panel gelap, 7 kategori ikon + label.
8. **FeaturedPrograms** — grid 6 card, gambar + judul + deskripsi.
9. **CtaBanner** — background gelap, judul, 2 tombol CTA.
10. **SiteFooter** — sudah di layout, finalisasi styling.

### 3.4 Responsive

- Desktop first.
- Breakpoint tablet (md) dan mobile (sm).
- Navbar collapse ke hamburger di mobile.
- Grid card menyesuaikan kolom.

### 3.5 Verifikasi

- Homepage tampil lengkap semua section.
- Data dari database/seeder.
- Responsive desktop/tablet/mobile.
- Commit: "feat: homepage publik lengkap semua section".

---

## Fase 4 — Auth Admin

### 4.1 Login

- Route `/admin/login`.
- Gunakan Breeze auth yang sudah terinstall.
- Sesuaikan tampilan login ke shadcn/ui.
- Middleware `auth` untuk semua route `/admin/*`.

### 4.2 Dashboard

- Route `GET /admin` → `Admin\DashboardController@index`.
- Tampilkan ringkasan: jumlah service units, programs aktif, hero status.
- Layout admin: sidebar + content area.

### 4.3 Verifikasi

- Login berhasil.
- Redirect ke dashboard.
- Route admin terlindungi middleware.
- Commit: "feat: auth admin + dashboard".

---

## Fase 5 — CRUD Hero Section

### 5.1 Routes

- `GET /admin/hero` → edit form (hero biasanya 1 record aktif).
- `PUT /admin/hero` → update.

### 5.2 Controller & Service

- `HeroSectionController@edit` — ambil hero aktif.
- `HeroSectionController@update` — validasi, update, clear cache.
- `HeroSectionService` — logic update + upload gambar.

### 5.3 Form Request

- `UpdateHeroSectionRequest` — validasi title, description, image, URLs.

### 5.4 Frontend

- `Admin/Hero/Edit.tsx` — form edit dengan image preview/upload.

### 5.5 Verifikasi

- Edit hero → homepage berubah.
- Upload gambar berhasil.
- Validasi error tampil.
- Commit: "feat: CRUD hero section admin".

---

## Fase 6 — CRUD Service Units

### 6.1 Routes

- `GET /admin/service-units` → index (list).
- `GET /admin/service-units/create` → form create.
- `POST /admin/service-units` → store.
- `GET /admin/service-units/{id}/edit` → form edit.
- `PUT /admin/service-units/{id}` → update.
- `DELETE /admin/service-units/{id}` → destroy.

### 6.2 Controller & Service

- Resource controller standar.
- `ServiceUnitService` — CRUD + upload logo + clear cache.

### 6.3 Form Requests

- `StoreServiceUnitRequest`
- `UpdateServiceUnitRequest`

### 6.4 Frontend

- `Admin/ServiceUnits/Index.tsx` — tabel list, toggle active, delete.
- `Admin/ServiceUnits/Form.tsx` — form create/edit, color picker, image upload.

### 6.5 Verifikasi

- CRUD lengkap berfungsi.
- Homepage menampilkan perubahan.
- Commit: "feat: CRUD service units admin".

---

## Fase 7 — CRUD Programs

### 7.1 Routes

- Resource routes sama seperti service units.

### 7.2 Controller & Service

- Resource controller standar.
- `ProgramService` — CRUD + upload image + clear cache.

### 7.3 Form Requests

- `StoreProgramRequest`
- `UpdateProgramRequest`

### 7.4 Frontend

- `Admin/Programs/Index.tsx` — tabel list, toggle active, delete.
- `Admin/Programs/Form.tsx` — form create/edit, image upload.

### 7.5 Verifikasi

- CRUD lengkap berfungsi.
- Homepage menampilkan perubahan.
- Commit: "feat: CRUD programs admin".

---

## Fase 8 — Testing & Polish

### 8.1 Feature tests

- `HomePageTest` — homepage accessible, data rendered.
- `AuthTest` — login, redirect, middleware.
- `HeroSectionTest` — update hero.
- `ServiceUnitTest` — CRUD service unit.
- `ProgramTest` — CRUD program.

### 8.2 Visual polish

- Review spacing, warna, tipografi.
- Pastikan konsisten desktop/tablet/mobile.
- Fallback gambar placeholder.
- Error state graceful.

### 8.3 Build & docs

- `npm run build` sukses.
- `php artisan test` sukses.
- Update `docs/STATUS.md`.
- Commit: "feat: tests + polish + status docs".

---

## Fase 9 — Deployment Notes

### 9.1 Catatan deployment cPanel

- Build asset lokal: `npm run build`.
- Upload seluruh project ke hosting.
- Set `public/` sebagai document root.
- Konfigurasi `.env` production.
- `php artisan migrate --seed`.
- `php artisan storage:link`.
- Pastikan PHP 8.2+ aktif di cPanel.

### 9.2 Update STATUS.md final

- Tandai semua fitur MVP selesai.
- List fitur fase berikutnya.
- Commit: "docs: final status update fase 1".

---

## Urutan Eksekusi

| #   | Fase                     | Estimasi              |
| --- | ------------------------ | --------------------- |
| 1   | Scaffold project         | Langkah pertama       |
| 2   | Migration, model, seeder | Setelah scaffold      |
| 3   | Homepage publik          | Setelah data siap     |
| 4   | Auth admin               | Setelah homepage      |
| 5   | CRUD hero                | Setelah auth          |
| 6   | CRUD service units       | Setelah hero          |
| 7   | CRUD programs            | Setelah service units |
| 8   | Testing & polish         | Setelah semua CRUD    |
| 9   | Deployment notes         | Terakhir              |

Setiap fase diakhiri commit dan update `docs/STATUS.md`.
