const API = "/students";
const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");
const id = document.getElementById("id");
const npm = document.getElementById("npm");
const nama = document.getElementById("nama");
const jurusan = document.getElementById("jurusan");
const semester = document.getElementById("semester");
const email = document.getElementById("email");
const alamat = document.getElementById("alamat");

// Ambil dan tampilkan semua data
async function loadStudents() {
  const response = await fetch(API);
  const result = await response.json();

  table.innerHTML = "";
  result.data.forEach(student => {
    table.innerHTML += `
      <tr>
        <td>${student.id}</td>
        <td>${student.npm}</td>
        <td>${student.nama}</td>
        <td>${student.jurusan}</td>
        <td>${student.semester}</td>
        <td>${student.email}</td>
        <td>${student.alamat}</td>
        <td>
          <button class="edit" onclick="editStudent(${student.id})">Edit</button>
          <button class="delete" onclick="deleteStudent(${student.id})">Hapus</button>
        </td>
      </tr>
    `;
  });
}

loadStudents(); // langsung dipanggil saat halaman dibuka

// Saat form disubmit (tombol Simpan diklik)
form.addEventListener("submit", async (e) => {
  e.preventDefault(); // supaya halaman tidak reload

  const student = {
  npm: npm.value,
  nama: nama.value,
  jurusan: jurusan.value,
  semester: semester.value,
  email: email.value,
  alamat: alamat.value
};

  if (id.value == "") {
    // Kalau id kosong = mode TAMBAH data baru
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    });
  } else {
    // Kalau id ada isinya = mode EDIT data
    await fetch(API + "/" + id.value, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    });
  }

  form.reset();
  id.value = "";
  loadStudents(); // refresh tabel
});

// Saat tombol Edit diklik
async function editStudent(studentId) {
  const response = await fetch(API + "/" + studentId);
  const result = await response.json();
  const data = result.data;

  id.value = data.id;
  npm.value = data.npm;
  nama.value = data.nama;
  jurusan.value = data.jurusan;
  semester.value = data.semester;
  email.value = data.email;
  alamat.value = data.alamat;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Saat tombol Hapus diklik
async function deleteStudent(studentId) {
  const konfirmasi = confirm("Yakin ingin menghapus data?");
  if (!konfirmasi) return;

  await fetch(API + "/" + studentId, { method: "DELETE" });
  loadStudents();
}
