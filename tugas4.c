#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Mendefinisikan struct karyawan
struct Karyawan {
    int id;
    char nama[100];
    char jabatan[50];
    float gaji;
};

int main() {
    int jumlahKaryawan;
    struct Karyawan *karyawan;  // Pointer untuk alokasi memori dinamis
    
    // Input jumlah karyawan
    printf("Masukkan jumlah karyawan: ");
    scanf("%d", &jumlahKaryawan);
    getchar();  // Membersihkan newline dari buffer
    
    // Alokasi memori menggunakan malloc
    karyawan = (struct Karyawan*)malloc(jumlahKaryawan * sizeof(struct Karyawan));
    
    // Cek apakah alokasi memori berhasil
    if (karyawan == NULL) {
        printf("Gagal mengalokasikan memori!\n");
        return 1;
    }
    
    // Input data karyawan
    printf("\n=== INPUT DATA KARYAWAN ===\n");
    for (int i = 0; i < jumlahKaryawan; i++) {
        printf("\nData karyawan ke-%d:\n", i + 1);
        
        printf("ID Karyawan: ");
        scanf("%d", &karyawan[i].id);
        getchar();  // Membersihkan newline
        
        printf("Nama: ");
        fgets(karyawan[i].nama, sizeof(karyawan[i].nama), stdin);
        karyawan[i].nama[strcspn(karyawan[i].nama, "\n")] = 0;  // Menghapus newline
        
        printf("Jabatan: ");
        fgets(karyawan[i].jabatan, sizeof(karyawan[i].jabatan), stdin);
        karyawan[i].jabatan[strcspn(karyawan[i].jabatan, "\n")] = 0;
        
        printf("Gaji: Rp ");
        scanf("%f", &karyawan[i].gaji);
        getchar();
    }
    
    // Menampilkan semua data karyawan
    printf("\n=== DATA SEMUA KARYAWAN ===\n");
    printf("=================================================================\n");
    printf("%-5s %-20s %-20s %-15s\n", "ID", "Nama", "Jabatan", "Gaji");
    printf("=================================================================\n");
    
    for (int i = 0; i < jumlahKaryawan; i++) {
        printf("%-5d %-20s %-20s Rp %-12.2f\n", 
               karyawan[i].id, 
               karyawan[i].nama, 
               karyawan[i].jabatan, 
               karyawan[i].gaji);
    }
    printf("=================================================================\n");
    
    // Membebaskan memori yang telah dialokasikan
    free(karyawan);
    printf("\nMemori berhasil dibebaskan.\n");
    
    return 0;
}
