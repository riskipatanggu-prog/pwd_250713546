function fn_ValForm() {
  var sMsg = "";
  var sNama = document.getElementById("nama").value;
  var sEmail = document.getElementById("email").value;
  var sUmur = document.getElementById("umur").value;
  var sKategori = document.getElementById("kategori").value;

  var regEmail = /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;
  var info = "";
  var pilihan = "";

  // 1. Validasi Nama
  if (sNama == "") {
    sMsg += "\n* Anda belum mengisikan nama";
  }

  // 2. Validasi Email (Kosong & RegEx)
  if (sEmail == "") {
    sMsg += "\n* Anda belum mengisikan email";
  } else if (!regEmail.test(sEmail)) {
    sMsg += "\n* Format email tidak valid (hanya huruf kecil)";
  }

  // 3. Validasi Umur (Kosong, Angka, & Rentang 7-70)
  if (sUmur == "") {
    sMsg += "\n* Anda belum mengisikan umur";
  } else if (isNaN(sUmur) || Number(sUmur) < 7 || Number(sUmur) > 70) {
    sMsg += "\n* Umur harus berupa angka antara 7 sampai 70 tahun";
  } else {
    if (Number(sUmur) <= 17) {
      info = "Anggota Pelajar";
    } else {
      info = "Anggota Umum";
    }
  }

  // 4. Validasi Koleksi Favorit
  if (sKategori == "") {
    sMsg += "\n* Anda belum memilih koleksi favorit";
  }

  // 5. Pengecekan Akhir
  if (sMsg != "") {
    alert("Peringatan:\n" + sMsg);
    return false;
  } else {
    switch (sKategori) {
      case "F":
        pilihan = "Fiksi";
        break;
      case "N":
        pilihan = "Non-Fiksi";
        break;
      case "J":
        pilihan = "Jurnal Ilmiah";
        break;
    }

    alert("Terima kasih " + sNama + " ! Anda terdaftar di koleksi " + pilihan + " (" + info + ").");
    return true;
  }
}