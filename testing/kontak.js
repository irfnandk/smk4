function kirimPesan(event) {
  event.preventDefault();

  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let pesan = document.getElementById("pesan").value;
  let notif = document.getElementById("notif");

  if (nama === "" || email === "" || pesan === "") {
    notif.innerHTML = "❌ Semua kolom wajib diisi!";
    notif.style.color = "red";
  } else {
    notif.innerHTML = "✅ Pesan berhasil dikirim!";
    notif.style.color = "green";
  }
}