document.getElementById('form-undangan').addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('nama-pasangan').value;
  const desc = document.getElementById('desc').value;
  const tanggal = document.getElementById('tanggal').value;
  const lokasi = document.getElementById('lokasi').value;
  const foto = document.getElementById('foto-pasangan').files[0];

  document.getElementById('preview-nama').textContent = nama;
  document.getElementById('preview-desc').textContent = desc;
  document.getElementById('preview-tanggal').textContent = tanggal;
  document.getElementById('preview-lokasi').textContent = lokasi;

  if (foto) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('preview-foto').src = e.target.result;
      document.getElementById('preview-foto').dataset.image = e.target.result;
    }
    reader.readAsDataURL(foto);
  }
});
