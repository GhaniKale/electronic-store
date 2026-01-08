# Toko Elektronik Django
Project ini adalah website toko elektronik sederhana menggunakan Django.
Cocok untuk pemula yang ingin belajar backend web dengan Python.

## Fitur
- Admin panel Django
- Manajemen produk (nama, harga, stok, deskripsi, tanggal dibuat)
- Halaman publik daftar produk
- Halaman detail produk
- Struktur project rapi dan mudah dipahami

## Teknologi
- Python 3.10+
- Django (stable)
- SQLite (database default)

## Struktur Project (ringkas)
- config/ (project Django + manage.py)
- config/config/ (settings, urls, wsgi)
- config/products/ (app products)
- config/templates/ (base.html)
- config/static/ (CSS)

## Cara Menjalankan
1) Install dependency
```bash
pip install -r requirements.txt
```

2) Masuk ke folder project Django
```bash
cd config
```

3) Buat migrasi dan migrate database
```bash
python manage.py makemigrations products
python manage.py migrate
```

4) Buat superuser admin
```bash
python manage.py createsuperuser
```
Gunakan:
- username: ghani
- password: ghani123

5) Jalankan server
```bash
python manage.py runserver
```

## URL
- Halaman utama: http://127.0.0.1:8000/
- Detail produk: http://127.0.0.1:8000/product/<id>/
- Admin: http://127.0.0.1:8000/admin/
