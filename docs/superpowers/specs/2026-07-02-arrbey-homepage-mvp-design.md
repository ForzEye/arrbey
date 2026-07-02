# Design Spec — Arrbey Homepage MVP

Tanggal: 2026-07-02

## Ringkasan

Proyek membangun fase pertama website company profile Arrbey. Fokus fase ini adalah homepage publik yang modern dan mirip referensi visual, data berasal dari database/seeder, serta admin CMS minimal untuk mengelola konten paling penting.

Stack mengikuti PRD: Laravel 12, PHP 8.2, MySQL, Inertia.js, React, Tailwind CSS, shadcn/ui. Target deployment tetap shared hosting/cPanel, sehingga asset frontend dibuild lokal/CI dan server production tidak butuh Node.js runtime.

## Keputusan Scope MVP

### Dikerjakan pada fase ini

1. Homepage publik lengkap secara visual:
   - Navbar
   - Hero section
   - Service highlight bar
   - Our 7 Service Units
   - We Help Businesses Grow list
   - Statistik counter
   - For Whom We Serve
   - Featured Programs
   - CTA banner
   - Footer

2. Data homepage berasal dari database:
   - Migration tabel utama disiapkan.
   - Seeder mengisi konten awal sesuai PRD dan referensi visual.
   - Section non-CRUD tetap tampil dari data seeded.

3. Admin CRUD minimal:
   - Login admin.
   - CRUD Hero Section.
   - CRUD Service Units.
   - CRUD Programs.
   - Upload gambar untuk hero, service unit logo, dan program image.

4. Dokumentasi progress:
   - File `docs/STATUS.md` dibuat.
   - Diupdate setiap milestone.
   - Berisi fitur selesai, sedang dikerjakan, belum dikerjakan, rencana berikutnya, dan catatan teknis.

### Tidak dikerjakan pada fase ini

- CMS lengkap untuk semua section homepage.
- Page builder untuk About, Contact, Insights, Partners.
- Multi-role admin.
- Drag-and-drop reorder visual.
- Sitemap/robots otomatis lengkap.
- Integrasi analytics/CRM.

## Pendekatan Terpilih

Pendekatan A: homepage publik + database/seeder + admin CRUD minimal.

Alasan:

- Memberi hasil visual cepat.
- Fondasi CMS tetap benar.
- Risiko scope tetap terkendali.
- Mudah dilanjutkan ke CMS lengkap setelah homepage stabil.

## Arsitektur Teknis

### Backend Laravel

Komponen utama:

- `HomeController`
  - Render homepage publik lewat Inertia.
  - Memanggil `HomepageService`.

- `HomepageService`
  - Mengambil seluruh data aktif untuk homepage.
  - Menyusun props Inertia.
  - Menggunakan cache file/database bila memungkinkan.

- `Admin\HeroSectionController`
  - CRUD hero section.

- `Admin\ServiceUnitController`
  - CRUD service units.

- `Admin\ProgramController`
  - CRUD featured programs.

- Service classes:
  - `HeroSectionService`
  - `ServiceUnitService`
  - `ProgramService`

- Form Requests:
  - `StoreHeroSectionRequest`
  - `UpdateHeroSectionRequest`
  - `StoreServiceUnitRequest`
  - `UpdateServiceUnitRequest`
  - `StoreProgramRequest`
  - `UpdateProgramRequest`

Repository pattern opsional. Untuk CRUD sederhana, Eloquent langsung dari service cukup. Query yang kompleks dapat dipindah ke repository saat dibutuhkan.

### Frontend Inertia React

Halaman utama:

- `resources/js/Pages/Public/Home.tsx`

Admin pages:

- `resources/js/Pages/Admin/Dashboard.tsx`
- `resources/js/Pages/Admin/Hero/Edit.tsx`
- `resources/js/Pages/Admin/ServiceUnits/Index.tsx`
- `resources/js/Pages/Admin/ServiceUnits/Form.tsx`
- `resources/js/Pages/Admin/Programs/Index.tsx`
- `resources/js/Pages/Admin/Programs/Form.tsx`

Komponen section publik:

- `HeroSection`
- `ServiceHighlightBar`
- `ServiceUnitsGrid`
- `GrowthPoints`
- `StatsPanel`
- `AudiencePanel`
- `FeaturedPrograms`
- `CtaBanner`
- `SiteFooter`

Komponen UI reusable:

- shadcn/ui untuk button, card, input, textarea, table, dialog, badge, switch.
- Komponen custom untuk layout admin, form image upload, status badge, dan section wrapper.

## Data Model

Migration mengikuti tabel dari PRD:

- `users`
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

CRUD admin fase ini hanya memodifikasi:

- `hero_sections`
- `service_units`
- `programs`

Section lain diisi lewat seeder dan dibaca oleh homepage.

## Data Flow Homepage

1. Visitor membuka `/`.
2. Route memanggil `HomeController@index`.
3. Controller memanggil `HomepageService::getHomepageData()`.
4. Service cek cache homepage.
5. Jika cache ada, data dikembalikan.
6. Jika cache kosong, service mengambil data aktif dari database:
   - menus
   - hero
   - service bar items
   - service units
   - growth points
   - stats
   - audience categories
   - programs
   - CTA banner
   - footer columns/links
   - settings
7. Data disusun sebagai props Inertia.
8. `Home.tsx` render seluruh section.

## Data Flow Admin

1. Admin login.
2. Admin masuk dashboard.
3. Admin membuka menu Hero, Service Units, atau Programs.
4. Admin membuat/mengubah/menghapus data.
5. Form Request memvalidasi input.
6. Service menyimpan data ke database.
7. Upload gambar disimpan ke `storage/app/public`.
8. Cache homepage dihapus.
9. Admin mendapat flash message sukses/error.
10. Homepage publik langsung memakai data baru.

## Visual Direction

Visual mengikuti referensi tapi dibuat lebih modern.

Prinsip:

- Brand utama dark teal.
- Layout homepage tetap sesuai urutan PRD.
- Hero besar dengan visual ekspor/global/logistik.
- Card service unit lebih bersih, konsisten, dan responsif.
- Featured programs memakai gambar bebas lisensi sementara.
- Spacing, tipografi, dan hierarchy dibuat lebih premium daripada referensi.
- Mobile layout tidak dipaksakan sama seperti desktop; prioritas keterbacaan.

Asset sementara:

- Gambar bebas lisensi/generic dipakai dulu.
- Logo/gambar asli bisa diganti nanti lewat admin/upload.

## Error Handling

Homepage:

- Jika data section kosong, section disembunyikan atau tampil fallback aman.
- Jika gambar hilang, gunakan placeholder.
- Jika link kosong, tombol disembunyikan atau diarahkan ke `#` sesuai konteks.

Admin:

- Error validasi tampil per field.
- Upload gagal menampilkan pesan jelas.
- Delete memakai konfirmasi.
- Operasi gagal menampilkan flash error.

## Validasi

Hero:

- `title` wajib.
- `description` wajib.
- Gambar opsional saat update.
- URL tombol nullable dan valid.

Service Units:

- `name` wajib.
- `subtitle` nullable.
- `description` wajib.
- `accent_color` wajib dan valid hex.
- `order` integer.
- `is_active` boolean.

Programs:

- `title` wajib.
- `description` wajib.
- Gambar opsional saat update.
- `order` integer.
- `is_active` boolean.
- URL nullable dan valid.

## Testing

Automated feature tests:

- Homepage dapat diakses.
- Homepage menampilkan data seeded.
- Admin route butuh login.
- Admin dapat create/update/delete service unit.
- Admin dapat create/update/delete program.
- Admin dapat update hero.

Manual smoke tests:

- `php artisan test` berhasil.
- `npm run build` berhasil.
- Homepage desktop/tablet/mobile responsif.
- Upload gambar berhasil.
- Cache homepage berubah setelah update admin.
- Link CTA tidak rusak.

## Dokumentasi Progress

`docs/STATUS.md` wajib dibuat dan diupdate per milestone.

Struktur awal:

```md
# Project Status — Arrbey

## Selesai

- Design spec MVP homepage disetujui.

## Sedang Dikerjakan

- Implementation plan belum dibuat.

## Belum Dikerjakan

- Scaffold Laravel + Inertia React + shadcn/ui.
- Migration, model, dan seeder.
- Homepage publik.
- Auth admin.
- CRUD hero, service units, dan programs.
- Testing dan build.

## Berikutnya

- Buat implementation plan detail.
- Mulai scaffold project setelah plan disetujui.

## Catatan Teknis

- Target stack: Laravel 12, PHP 8.2, MySQL, Inertia React, Tailwind, shadcn/ui.
- Target deployment: shared hosting/cPanel tanpa Node.js runtime di server.
```

Milestone awal:

1. Scaffold Laravel + Inertia React + shadcn/ui.
2. Migration/model/seeder.
3. Homepage publik.
4. Auth admin.
5. CRUD hero.
6. CRUD service units.
7. CRUD programs.
8. Testing dan build.
9. Update deployment notes.

## Acceptance Criteria

Fase MVP dianggap selesai jika:

- Homepage publik tampil lengkap sesuai section PRD.
- Visual mirip referensi tapi lebih modern.
- Data homepage berasal dari database/seeder.
- Admin bisa login.
- Admin bisa CRUD hero, service units, programs.
- Upload gambar berjalan.
- Cache homepage dibersihkan setelah update admin.
- `docs/STATUS.md` menunjukkan status fitur lengkap.
- `php artisan test` lulus.
- `npm run build` lulus.
- Aplikasi siap dijalankan lokal di XAMPP/MySQL dan siap diarahkan ke deployment cPanel.
