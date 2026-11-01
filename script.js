const form = document.getElementById("formPendaftaran");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const sesi = document.getElementById("sesi");
const jumlahKarakter = document.getElementById("jumlahKarakter");
const ringkasanSesi = document.getElementById("ringkasanSesi");
const pesanForm = document.getElementById("pesanForm");

nama.addEventListener("input", function () {
    jumlahKarakter.textContent = nama.value.length;
});

sesi.addEventListener("change", function () {
    ringkasanSesi.textContent = sesi.value
        ? "Sesi dipilih: " + sesi.value
        : "Belum ada sesi dipilih.";
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const namaValue = nama.value.trim();
    const emailValue = email.value.trim();
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    pesanForm.className = "pesan";

    if (namaValue.length < 3) {
        pesanForm.textContent = "Nama minimal terdiri dari 3 karakter.";
        pesanForm.classList.add("error");
        nama.focus();
    } else if (!polaEmail.test(emailValue)) {
        pesanForm.textContent = "Masukkan alamat email yang valid.";
        pesanForm.classList.add("error");
        email.focus();
    } else if (sesi.value === "") {
        pesanForm.textContent = "Silakan pilih sesi workshop.";
        pesanForm.classList.add("error");
        sesi.focus();
    } else {
        pesanForm.textContent = "Pendaftaran berhasil untuk sesi " + sesi.value + ".";
        pesanForm.classList.add("success");
    }
});

form.addEventListener("reset", function () {
    setTimeout(function () {
        jumlahKarakter.textContent = "0";
        ringkasanSesi.textContent = "Belum ada sesi dipilih.";
        pesanForm.textContent = "Formulir berhasil direset.";
        pesanForm.className = "pesan info";
    }, 0);
});

const paragrafWorkshop = document.getElementById("paragrafWorkshop");
const tombolParagraf = document.getElementById("tombolParagraf");

tombolParagraf.addEventListener("click", function () {
    paragrafWorkshop.classList.toggle("hidden");
    const tersembunyi = paragrafWorkshop.classList.contains("hidden");
    tombolParagraf.textContent = tersembunyi ? "Tampilkan" : "Sembunyikan";
});

const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

function tambahDaftarTugas() {
    const teks = inputTugas.value.trim();
    pesanTugas.className = "pesan";

    if (teks === "") {
        pesanTugas.textContent = "Tuliskan tugas terlebih dahulu.";
        pesanTugas.classList.add("error");
        return;
    }

    const item = document.createElement("li");
    const label = document.createElement("span");
    const hapus = document.createElement("button");

    label.textContent = teks;
    hapus.type = "button";
    hapus.textContent = "Hapus";
    hapus.className = "hapus-tugas";
    hapus.addEventListener("click", function () {
        item.remove();
        pesanTugas.textContent = "Item berhasil dihapus.";
        pesanTugas.className = "pesan success";
    });

    item.append(label, hapus);
    daftarTugas.appendChild(item);
    inputTugas.value = "";
    pesanTugas.textContent = "Tugas berhasil ditambahkan.";
    pesanTugas.className = "pesan success";
    inputTugas.focus();
}

tambahTugas.addEventListener("click", tambahDaftarTugas);
inputTugas.addEventListener("keydown", function (event) {
    if (event.key === "Enter") tambahDaftarTugas();
});
