document.getElementById("openGiftButton").addEventListener("click", function() {
    document.querySelector(".lid").style.transform = "rotateX(90deg)";
    setTimeout(function() {
      alert("Selamat! Anda mendapatkan kado spesial!");
    }, 1000); // Ubah waktu delay sesuai kebutuhan
  });
  