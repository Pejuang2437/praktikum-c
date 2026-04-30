# Program Input 5 Nilai, List, dan Rata-rata

print("="*40)
print("   PROGRAM INPUT 5 NILAI")
print("="*40)

# Membuat list kosong
nilai = []

# Input 5 nilai
for i in range(5):
    n = float(input(f"Masukkan nilai ke-{i+1}: "))
    nilai.append(n)

# Menampilkan isi list
print("\n" + "="*40)
print(f"Daftar nilai: {nilai}")

# Menghitung rata-rata
total = sum(nilai)
rata_rata = total / len(nilai)

print(f"Total nilai: {total}")
print(f"Rata-rata: {rata_rata:.2f}")
print("="*40)
