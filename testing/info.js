function bukaInfo(id) {
  let detail = document.getElementById("detail");

  if (id === 1) {
    detail.innerHTML = "📢 PPDB SMK Negeri 4 Bojonegoro dibuka bulan Juni.";
  } else if (id === 2) {
    detail.innerHTML = "📅 Libur nasional mengikuti kalender pendidikan.";
  } else if (id === 3) {
    detail.innerHTML = "🎒 MPLS dilaksanakan awal tahun ajaran baru.";
  }
}