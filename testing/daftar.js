function daftar(event) {
  event.preventDefault();

  let nama = document.getElementById("nama").value;
  let asal = document.getElementById("asal").value;
  let jurusan = document.getElementById("jurusan").value;
  let hp = document.getElementById("hp").value;
  let notif = document.getElementById("notif");

  if (nama === "" || asal === "" || jurusan === "" || hp === "") {
    notif.innerHTML = "❌ Data belum lengkap!";
    notif.style.color = "red";
  } else {
    notif.innerHTML =
      "✅ Pendaftaran berhasil! Tunggu info selanjutnya.";
    notif.style.color = "green";
  }
}