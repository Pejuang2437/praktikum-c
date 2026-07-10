// Variabel global untuk menyimpan ID yang sedang diedit
let editId = null;

// ===================
// LOAD DATA
// ===================
async function loadData() {
    const response = await fetch("/api/mahasiswa");
    const data = await response.json();
    
    let html = "";
    data.forEach(item => {
        html += `
        <tr>
            <td>${item.nama}</td>
            <td>${item.nim}</td>
            <td>${item.prodi}</td>
            <td>
                <button onclick="edit(${item.id})">Edit</button>
                <button onclick="hapus(${item.id})">Delete</button>
            </td>
        </tr>
        `;
    });
    
    document.getElementById("tabelMahasiswa").innerHTML = html;
}

// ===================
// CREATE & UPDATE
// ===================
async function simpan() {
    const mahasiswa = {
        nama: document.getElementById("nama").value,
        nim: document.getElementById("nim").value,
        prodi: document.getElementById("prodi").value
    };
    
    if (editId === null) {
        // CREATE - POST request
        await fetch("/api/mahasiswa", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mahasiswa)
        });
    } else {
        // UPDATE - PUT request
        await fetch("/api/mahasiswa/" + editId, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mahasiswa)
        });
        editId = null;
    }
    
    // Reset form
    document.getElementById("nama").value = "";
    document.getElementById("nim").value = "";
    document.getElementById("prodi").value = "";
    
    loadData();
}

// ===================
// DELETE
// ===================
async function hapus(id) {
    if (confirm("Yakin ingin menghapus data?")) {
        await fetch("/api/mahasiswa/" + id, {
            method: "DELETE"
        });
        loadData();
    }
}

// ===================
// EDIT (Load data ke form)
// ===================
async function edit(id) {
    const response = await fetch("/api/mahasiswa/" + id);
    const data = await response.json();
    
    document.getElementById("nama").value = data.nama;
    document.getElementById("nim").value = data.nim;
    document.getElementById("prodi").value = data.prodi;
    
    editId = id;
}

// ===================
// LOAD PERTAMA KALI
// ===================
loadData();
