let intervalId = null;

function tampilHalamanAwal() {
  clearInterval(intervalId); // stop spam jika ada
  intervalId = null;

  const main = document.getElementById("main");
  main.innerHTML = `
    <h1>HBD yh syg</h1>
    <p class="pesan">Salam hangat dari kk yg sgt imoep inie</p>
    <p class="pesan">mff klo jelek, pke gpt soalnya awokawok</p>
    <div class="btn-group">
      <button onclick="reaksiCantik()">Maaciw cantii 😘</button>
      <button onclick="reaksiJink()">Ok, mksh 🙄</button>
    </div>
  `;
  document.body.style.background = "linear-gradient(to top right, #ffe0f0, #ffc3a0)";
}

function reaksiCantik() {
  const main = document.getElementById("main");
  main.innerHTML = `
    <h1>💐 XIXIXI iyah macama cantikkuu 💖</h1>
    <p>tuh bunga sekebon buat kamu unch</p>
    <button class="back-btn" onclick="tampilHalamanAwal()">⬅ noo</button>
  `;

  // looping bunga-bunga tiap 500ms
  intervalId = setInterval(() => {
    const bungaList = ["🌸", "🌼", "🌺", "💮", "🌷"];
    const bunga = document.createElement("div");
    bunga.classList.add("bunga");
    bunga.innerText = bungaList[Math.floor(Math.random() * bungaList.length)];
    bunga.style.left = Math.random() * 100 + "vw";
    bunga.style.top = Math.random() * 100 + "vh";
    bunga.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(bunga);
    setTimeout(() => bunga.remove(), 1000);
  }, 500);

  // ganti background
  document.body.style.background = "linear-gradient(to right, #ffe4e1, #ffccff)";
  document.body.style.transition = "0.3s";
}

function reaksiJink() {
  const main = document.getElementById("main");
  main.innerHTML = `
    <h1>💢 SOK KUL ANJ, NAJIS CUIH</h1>
    <p>pergi lo pntk</p>
    <button class="back-btn" onclick="tampilHalamanAwal()">⬅ hm</button>
  `;

  const kataSpam = ["jink", "sialan", "yeu kocak", "awas lo", "tai", "jahat", "dih"];

  intervalId = setInterval(() => {
    const spam = document.createElement("div");
    spam.classList.add("jink-spam");
    spam.innerText = kataSpam[Math.floor(Math.random() * kataSpam.length)];
    spam.style.left = Math.random() * window.innerWidth + "px";
    spam.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(spam);
    setTimeout(() => spam.remove(), 1000);
  }, 200); // muncul tiap 100ms

  document.body.style.background = "#000";
}

// tampilkan halaman awal saat web dibuka
window.onload = tampilHalamanAwal;
