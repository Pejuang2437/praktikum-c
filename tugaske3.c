#include <stdio.h>
#include <string.h>

// Fungsi untuk menentukan grade berdasarkan nilai
char* tentukanGrade(int nilai) {
    if (nilai >= 85 && nilai <= 100) {
        return "A";
    } else if (nilai >= 75 && nilai < 85) {
        return "B";
    } else if (nilai >= 65 && nilai < 75) {
        return "C";
    } else if (nilai >= 50 && nilai < 65) {
        return "D";
    } else if (nilai >= 0 && nilai < 50) {
        return "E";
    } else {
        return "Tidak Valid";
    }
}

// Fungsi untuk menampilkan hasil
void tampilkanHasil(char nama[], int nilai, char grade[]) {
    printf("\n========== HASIL ==========\n");
    printf("Nama Mahasiswa: %s\n", nama);
    printf("Nilai: %d\n", nilai);
    printf("Grade: %s\n", grade);
    printf("============================\n");
}

int main() {
    int jumlahMahasiswa;
    char nama[100][100];  // Array untuk menyimpan nama
    int nilai[100];        // Array untuk menyimpan nilai
    char grade[100][10];   // Array untuk menyimpan grade
    
    printf("=== PROGRAM INPUT NILAI MAHASISWA ===\n");
    printf("Masukkan jumlah mahasiswa: ");
    scanf("%d", &jumlahMahasiswa);
    
    // Validasi jumlah mahasiswa
    if (jumlahMahasiswa <= 0 || jumlahMahasiswa > 100) {
        printf("Jumlah mahasiswa tidak valid! (Maksimal 100)\n");
        return 1;
    }
    
    // Perulangan untuk input data mahasiswa
    for(int i = 0; i < jumlahMahasiswa; i++) {
        printf("\n--- Mahasiswa ke-%d ---\n", i+1);
        
        // Input nama
        printf("Masukkan nama mahasiswa: ");
        scanf(" %[^\n]", nama[i]);  // Membaca string dengan spasi
        
        // Input nilai
        printf("Masukkan nilai (0-100): ");
        scanf("%d", &nilai[i]);
        
        // Validasi nilai
        while(nilai[i] < 0 || nilai[i] > 100) {
            printf("Nilai tidak valid! Masukkan nilai antara 0-100: ");
            scanf("%d", &nilai[i]);
        }
        
        // Panggil fungsi untuk menentukan grade
        strcpy(grade[i], tentukanGrade(nilai[i]));
    }
    
    // Perulangan untuk menampilkan semua hasil
    printf("\n\n========== DAFTAR NILAI MAHASISWA ==========\n");
    for(int i = 0; i < jumlahMahasiswa; i++) {
        tampilkanHasil(nama[i], nilai[i], grade[i]);
    }
    
    // Menampilkan statistik sederhana
    printf("\n========== STATISTIK ==========\n");
    int totalNilai = 0;
    int maxNilai = nilai[0];
    int minNilai = nilai[0];
    
    for(int i = 0; i < jumlahMahasiswa; i++) {
        totalNilai += nilai[i];
        if(nilai[i] > maxNilai) maxNilai = nilai[i];
        if(nilai[i] < minNilai) minNilai = nilai[i];
    }
    
    float rataRata = (float)totalNilai / jumlahMahasiswa;
    
    printf("Jumlah Mahasiswa: %d\n", jumlahMahasiswa);
    printf("Nilai Tertinggi: %d\n", maxNilai);
    printf("Nilai Terendah: %d\n", minNilai);
    printf("Nilai Rata-rata: %.2f\n", rataRata);
    printf("================================\n");
    
    return 0;
}
