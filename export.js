document.getElementById('download-btn').addEventListener('click', function() {
  const nama = document.getElementById('preview-nama').textContent;
  const desc = document.getElementById('preview-desc').textContent;
  const tanggal = document.getElementById('preview-tanggal').textContent;
  const lokasi = document.getElementById('preview-lokasi').textContent;
  const foto = document.getElementById('preview-foto').dataset.image || "template/pasangan-default.jpg";

  const htmlContent = `
  <html>
  <head>
    <title>Undangan ${nama}</title>
    <style>
      body { font-family: sans-serif; text-align: center; background: #fffaf0; padding: 20px; }
      .foto { width: 200px; border-radius: 10px; margin-top: 20px; }
      .card { background: white; max-width: 600px; margin: auto; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
    </style>
  </head>
  <body>
    <div class="card">
      <img src="${foto}" class="foto">
      <h2>${nama}</h2>
      <p>${desc}</p>
      <p><strong>${tanggal}</strong></p>
      <p><strong>${lokasi}</strong></p>
      <p>Terima kasih atas doa dan kehadirannya.</p>
    </div>
  </body>
  </html>`;

  const blob = new Blob([htmlContent], { type: "text/html" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `undangan-${nama.replaceAll(" ", "-").toLowerCase()}.html`;
  a.click();
});
