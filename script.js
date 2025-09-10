<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>QR Code com JS</title>
  <script src="https://cdn.jsdelivr.net/npm/qrcodejs/qrcode.min.js"></script>
</head>
<body>
  <div id="qrcode"></div>

  <script>
    new QRCode(document.getElementById("qrcode"), {
      text: "https://meusite.com",
      width: 256,
      height: 256
    });
  </script>
</body>
</html>
