#include <stdio.h>
#include <string.h>

// int  main() {
//      printf("Hello World\n");
//    printf("Selamat datang di praktikum Pemrograman Dasar\n");


//     return 0;
// }




// int main() {

//    printf("Nama   : Ahmad Ghazy Aulia\n");
//    printf("NIM    : 12345678\n");
//    printf("Prodi  : Teknik Informatika\n");

//    return 0;
// }




// int main() {

//     int panjang,lebar,luas;
 
//     printf("Masukkan Panjang: ");
//     scanf("%d", &panjang);
//     printf("Panjang: %d\n", panjang);


//     printf("Masukkan Lebar: ");
//     scanf("%d", &lebar);
//     printf("lebar : %d\n", lebar);

//     printf("Menghitung Hasil ... \n");

//     luas = panjang * lebar;
//         printf("Hasil : %d\n", luas);

    
//    return 0;
// }






// Tugas Praktikum 




// int main(){
//       char nama[100];
  
//     int nilai;
    
//      printf("Masukkan Nama Siswa: ");
//     scanf("%s", nama);   
    
    

//        printf("Masukkan Nilai siswa: ");
//     scanf("%d", &nilai);
//     printf("nilai siswa : %d\n", nilai);
//     if(nilai > 100){
//         printf("Nilai Tidak Boleh lebih 100");
//         return 0;
//     }
//     printf("\n=== DATA ===\n");
//     printf("Nama: %s\n", nama);
//     printf("Nilai: %d\n", nilai);

//     return 0;
   
// }



// Tugas Praktikum 2




int main() {
    char nama[100];
    float nilai_tugas, nilai_uts, nilai_uas;
    float total, rata_rata;
    
    printf("=== PROGRAM HITUNG NILAI RATA-RATA ===\n\n");
    
    // Input nama
    printf("Masukkan nama: ");
    fgets(nama, sizeof(nama), stdin);
    nama[strcspn(nama, "\n")] = 0;  // Hapus karakter newline
    if (!nama[0]) {  // jika karakter pertama adalah null (kosong)
        printf("ERROR: Nama tidak boleh kosong!\n");
        return 1;
    }
    // Input nilai tugas
    printf("Masukkan nilai tugas: ");
    scanf("%f", &nilai_tugas);
    if (nilai_tugas > 100 ){
        printf("Nilai TUGAS Tidak Boleh Lebih 100");
        return 0;
    }
    // Input nilai UTS
    printf("Masukkan nilai UTS: ");
    scanf("%f", &nilai_uts);
    if (nilai_uts > 100){
        printf("Nilai UTS Tidak Boleh Lebih 100");
        return 0;
    }
 
    
    // Hitung total nilai (jumlah semua)
    total = nilai_tugas + nilai_uts ;
    
    // Hitung rata-rata
    rata_rata = total / 2;
    
    // Output hasil
   


    //       if(nilai_tugas > 100){
    //     printf("Nilai Tugas Tidak Boleh lebih 100");
    //    return 0;}
    // if(nilai_uts > 100){
    //     printf("Nilai UTS Tidak Boleh lebih 100");
    //    return 0;}
     
    // if (nilai_tugas > 100 || nilai_uts > 100){
    //     printf("Nilai TUGAS ATAU Nilai UTS Tidak Boleh Lebih 100");
    //     return 0;
    // }
   
    
        
 
    printf("\n=== HASIL ===\n");
    printf("Nama: %s\n", nama);
    printf("Nilai Tugas: %.2f\n", nilai_tugas);
    printf("Nilai UTS: %.2f\n", nilai_uts);
    printf("Total Nilai: %.2f\n", total);
    printf("Rata-rata: %.2f\n", rata_rata);
    
    return 0;

}



