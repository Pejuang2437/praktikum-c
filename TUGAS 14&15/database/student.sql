DROP DATABASE IF EXISTS student_db;

CREATE DATABASE student_db;

USE student_db;

CREATE TABLE students (

    id INT AUTO_INCREMENT PRIMARY KEY,

    npm VARCHAR(20) NOT NULL UNIQUE,

    nama VARCHAR(100) NOT NULL,

    jurusan VARCHAR(100) NOT NULL,

    semester INT NOT NULL,

    email VARCHAR(100),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ON UPDATE CURRENT_TIMESTAMP

);

INSERT INTO students
(npm,nama,jurusan,semester,email)

VALUES

('230001',
'Andi Saputra',
'Informatika',
4,
'andi@gmail.com'),

('230002',
'Budi Santoso',
'Sistem Informasi',
2,
'budi@gmail.com'),

('230003',
'Citra Lestari',
'Teknik Komputer',
6,
'citra@gmail.com');
