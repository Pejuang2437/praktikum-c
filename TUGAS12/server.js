// server.js
const http = require('http');
const url = require('url');

// Data biodata untuk ditampilkan
const biodata = {
    nama: "Ahmad Ghazy Aulia",
    npm: "2025806047",
    jurusan: "Teknologi Informasi",
    fakultas: "Fakultas Ilmu Komputer",
    universitas: "Universitas Insan Pembangunan Indonesia",
    alamat: "Kp. Sempur, Desa Kadu,Kecamatan Curug, Tangerang",
    email: "ahmadghazzyy@gmail.com",
    noHP: "085174402437"
};

// Data mata kuliah
const mataKuliah = [
    { kode: "TI-101", nama: "Pemrograman Dasar", sks: 3, semester: 1 },
    { kode: "TI-102", nama: "Algoritma dan Struktur Data", sks: 3, semester: 1 },
    { kode: "TI-103", nama: "Basis Data", sks: 3, semester: 2 },
    { kode: "TI-104", nama: "Jaringan Komputer", sks: 3, semester: 2 },
    { kode: "TI-105", nama: "Pemrograman Web", sks: 3, semester: 3 },
    { kode: "TI-106", nama: "Sistem Operasi", sks: 3, semester: 3 }
];

// Fungsi untuk generate HTML
function generateHTML(title, content, additionalStyles = '') {
    return `
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 20px;
            }
            .container {
                background: white;
                border-radius: 20px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                padding: 40px;
                max-width: 800px;
                width: 100%;
                animation: slideIn 0.5s ease-out;
            }
            @keyframes slideIn {
                from {
                    opacity: 0;
                    transform: translateY(-30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            h1 {
                color: #333;
                margin-bottom: 20px;
                border-bottom: 3px solid #667eea;
                padding-bottom: 10px;
            }
            .menu {
                display: flex;
                gap: 15px;
                margin: 20px 0;
                flex-wrap: wrap;
            }
            .menu a {
                text-decoration: none;
                color: #667eea;
                font-weight: bold;
                padding: 8px 16px;
                border-radius: 8px;
                transition: all 0.3s;
                border: 2px solid #667eea;
            }
            .menu a:hover {
                background: #667eea;
                color: white;
                transform: translateY(-2px);
                box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
            }
            .menu a.active {
                background: #667eea;
                color: white;
            }
            .content {
                margin-top: 20px;
            }
            ${additionalStyles}
        </style>
    </head>
    <body>
        <div class="container">
            <h1>${title}</h1>
            <div class="menu">
                <a href="/" ${title === 'Selamat Datang' ? 'class="active"' : ''}>Home</a>
                <a href="/profil" ${title === 'Profil Mahasiswa' ? 'class="active"' : ''}>Profil</a>
                <a href="/mata-kuliah" ${title === 'Mata Kuliah' ? 'class="active"' : ''}>Mata Kuliah</a>
                <a href="/kontak" ${title === 'Kontak' ? 'class="active"' : ''}>Kontak</a>
            </div>
            <div class="content">
                ${content}
            </div>
        </div>
    </body>
    </html>
    `;
}

// Fungsi untuk generate konten halaman
function getPageContent(pathname) {
    switch(pathname) {
        case '/':
            return `
                <div style="text-align: center; padding: 20px 0;">
                    <h2 style="color: #667eea; font-size: 28px;">Selamat Datang di Praktikum Pemrograman Dasar</h2>
                    <p style="color: #666; font-size: 18px; margin-top: 15px;">
                        Ini adalah server HTTP sederhana yang menampilkan biodata mahasiswa.
                    </p>
                    <p style="color: #888; margin-top: 10px;">
                        Gunakan menu di atas untuk navigasi.
                    </p>
                    <div style="margin-top: 30px; padding: 20px; background: #f8f9fa; border-radius: 10px;">
                        <p style="color: #555;">📚 <strong>Praktikum Pemrograman Dasar</strong></p>
                        <p style="color: #777; font-size: 14px;">Semester Genap 2025/2026</p>
                    </div>
                </div>
            `;
            
        case '/profil':
            let profilHTML = `
                <div style="padding: 10px 0;">
                    <h2 style="color: #667eea; margin-bottom: 20px;">📋 Profil Mahasiswa</h2>
                    <table style="width: 100%; border-collapse: collapse;">
            `;
            for (const [key, value] of Object.entries(biodata)) {
                const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                profilHTML += `
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 12px 10px; font-weight: bold; color: #555; width: 40%;">${label}</td>
                        <td style="padding: 12px 10px; color: #333;">: ${value}</td>
                    </tr>
                `;
            }
            profilHTML += `
                    </table>
                </div>
            `;
            return profilHTML;
            
        case '/mata-kuliah':
            let mkHTML = `
                <div style="padding: 10px 0;">
                    <h2 style="color: #667eea; margin-bottom: 20px;">📚 Daftar Mata Kuliah</h2>
                    <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                        <thead>
                            <tr style="background: #667eea; color: white;">
                                <th style="padding: 12px; text-align: left;">Kode</th>
                                <th style="padding: 12px; text-align: left;">Nama Mata Kuliah</th>
                                <th style="padding: 12px; text-align: center;">SKS</th>
                                <th style="padding: 12px; text-align: center;">Semester</th>
                            </tr>
                        </thead>
                        <tbody>
            `;
            mataKuliah.forEach((mk, index) => {
                const bgColor = index % 2 === 0 ? '#f8f9fa' : 'white';
                mkHTML += `
                    <tr style="border-bottom: 1px solid #eee; background: ${bgColor};">
                        <td style="padding: 10px;">${mk.kode}</td>
                        <td style="padding: 10px;">${mk.nama}</td>
                        <td style="padding: 10px; text-align: center;">${mk.sks}</td>
                        <td style="padding: 10px; text-align: center;">${mk.semester}</td>
                    </tr>
                `;
            });
            mkHTML += `
                        </tbody>
                    </table>
                    <div style="margin-top: 20px; padding: 15px; background: #f0f4ff; border-radius: 8px; text-align: center; color: #555;">
                        Total: ${mataKuliah.length} Mata Kuliah | Total SKS: ${mataKuliah.reduce((sum, mk) => sum + mk.sks, 0)}
                    </div>
                </div>
            `;
            return mkHTML;
            
        case '/kontak':
            return `
                <div style="padding: 10px 0;">
                    <h2 style="color: #667eea; margin-bottom: 20px;">📞 Kontak</h2>
                    <div style="background: #f8f9fa; padding: 25px; border-radius: 10px;">
                        <div style="margin-bottom: 15px;">
                            <strong style="color: #555;">📧 Email:</strong>
                            <p style="color: #333; margin-top: 5px;">${biodata.email}</p>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong style="color: #555;">📱 No. HP:</strong>
                            <p style="color: #333; margin-top: 5px;">${biodata.noHP}</p>
                        </div>
                        <div style="margin-bottom: 15px;">
                            <strong style="color: #555;">🏠 Alamat:</strong>
                            <p style="color: #333; margin-top: 5px;">${biodata.alamat}</p>
                        </div>
                        <div>
                            <strong style="color: #555;">🏛️ Universitas:</strong>
                            <p style="color: #333; margin-top: 5px;">${biodata.universitas}</p>
                        </div>
                    </div>
                </div>
            `;
            
        default:
            return null;
    }
}

// Membuat HTTP server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    
    console.log(`[${new Date().toISOString()}] ${req.method} ${pathname}`);
    
    // Routing
    const content = getPageContent(pathname);
    
    if (content !== null) {
        // Halaman ditemukan - Status 200 OK
        let title = 'Selamat Datang';
        if (pathname === '/profil') title = 'Profil Mahasiswa';
        else if (pathname === '/mata-kuliah') title = 'Mata Kuliah';
        else if (pathname === '/kontak') title = 'Kontak';
        
        res.writeHead(200, { 
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end(generateHTML(title, content));
    } else {
        // Halaman tidak ditemukan - Status 404 Not Found
        const notFoundHTML = `
            <!DOCTYPE html>
            <html lang="id">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>404 - Halaman Tidak Ditemukan</title>
                <style>
                    * { margin: 0; padding: 0; box-sizing: border-box; }
                    body {
                        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        min-height: 100vh;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 20px;
                    }
                    .container {
                        background: white;
                        border-radius: 20px;
                        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
                        padding: 50px;
                        max-width: 600px;
                        width: 100%;
                        text-align: center;
                        animation: slideIn 0.5s ease-out;
                    }
                    @keyframes slideIn {
                        from { opacity: 0; transform: translateY(-30px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    h1 { color: #e74c3c; font-size: 72px; margin-bottom: 10px; }
                    h2 { color: #333; margin-bottom: 15px; }
                    p { color: #666; margin-bottom: 20px; }
                    .btn {
                        display: inline-block;
                        padding: 12px 30px;
                        background: #667eea;
                        color: white;
                        text-decoration: none;
                        border-radius: 8px;
                        transition: all 0.3s;
                    }
                    .btn:hover {
                        background: #764ba2;
                        transform: translateY(-2px);
                        box-shadow: 0 5px 15px rgba(118, 75, 162, 0.4);
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>404</h1>
                    <h2>Halaman Tidak Ditemukan</h2>
                    <p>Maaf, halaman yang Anda cari tidak tersedia.</p>
                    <p style="font-size: 14px; color: #999;">URL: ${pathname}</p>
                    <a href="/" class="btn">Kembali ke Home</a>
                </div>
            </body>
            </html>
        `;
        
        res.writeHead(404, { 
            'Content-Type': 'text/html; charset=utf-8'
        });
        res.end(notFoundHTML);
    }
});

// Port yang digunakan
const PORT = 2007;

server.listen(PORT, () => {
    console.log('='.repeat(60));
    console.log('🚀 Server berjalan pada:');
    console.log(`   http://localhost:${PORT}`);
    console.log('='.repeat(60));
    console.log('📋 Endpoint yang tersedia:');
    console.log(`   • http://localhost:${PORT}/         (Home)`);
    console.log(`   • http://localhost:${PORT}/profil   (Profil Mahasiswa)`);
    console.log(`   • http://localhost:${PORT}/mata-kuliah (Mata Kuliah)`);
    console.log(`   • http://localhost:${PORT}/kontak   (Kontak)`);
    console.log('='.repeat(60));
    console.log('ℹ️  Tekan Ctrl+C untuk menghentikan server\n');
});
