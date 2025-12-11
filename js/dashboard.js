
// dashbord load
function loadDashboard() {
  let userData = localStorage.getItem("loggedUser");

  if (!userData) {
    alert("anda belum login,silakan login terlebih dahulu");
    window.location.href = "./index.html";
  };

  let user = JSON.parse(userData);

  document.getElementById("welcome").innerHTML = `<h2>Selamat datang ${user.username}</h2>`
};

// BACKGROUND FUNCTION
const cricles = document.querySelectorAll('.cricle');
cricles.forEach(circle => {
  circle.addEventListener('click', (style) => {
    const computedStyle = window.getComputedStyle(style.target);
    console.log(computedStyle.backgroundColor)
    document.body.style.backgroundColor = computedStyle.backgroundColor;
  });
});

function risetBg() {
  document.body.style.backgroundColor = "#8B5CF6";
};

// COMPONEN & FUNCTION VIDEO
const vidioComponent = document.getElementById("vidioComponent");
function playVidio() {
  vidioComponent.play();
};
function pauseVidio() {
  vidioComponent.pause();
};
function minimizeVidio() {
  vidioComponent.requestPictureInPicture();
};

function zoomInVidio() {
  vidioComponent.requestFullscreen();
};

// CEK UMUR & GENERATOR PASSWORD
// FUNGSI CEK UMUR
let tanggalLahirInput = document.getElementById("tanggalLahir");
let cekUmurBtn = document.getElementById("cekUmurBtn");
let hasilUmur = document.getElementById("hasilUmur");

cekUmurBtn.addEventListener("click", async () => {
  const tanggal = tanggalLahirInput.value;
  if (!tanggal) {
    hasilUmur.innerHTML = "silakan masukan tanggal lahir terlebih dahulu";
    return;
  }

  try {
    cekUmurBtn.disabled = true;
    cekUmurBtn.textContent = "Memeriksa...";
    const res = await fetch(`/api/cek-usia?tanggal=${encodeURIComponent(tanggal)}`);
    const data = await res.json();

    if (!res.ok) {
      hasilUmur.textContent = data.error || "Terjadi kesalahan.";
    } else {
      hasilUmur.innerHTML = `
        <p>hasil perhitungan umur kamu sekarang: ${data.umurTahun} tahun,${data.umurBulan} bulan, ${data.umurHari} hari.</p>
        <p>kamu lahir pada hari ${data.hariLahir} dan kategori ${data.kategori}</p>
      `;
    }
  } catch (err) {
    hasilUmur.textContent = "Gagal menghubungi server.";
  } finally {
    cekUmurBtn.disabled = false;
    cekUmurBtn.textContent = "Cek Umur";
  }
})

// FUNGSI GENERATOR PASSWORD
let panjangPasswordInput = document.getElementById("panjangPw");
let hasilPassword = document.getElementById("hasilPw");
let generatorPwBtn = document.getElementById("generatePasswordBtn");
let savePwBtn = document.getElementById("saveBtn");

let lastGeneratorPassword = "";

generatorPwBtn.addEventListener("click", async () => {
  const panjang = panjangPasswordInput.value;
  if (!panjang) {
    hasilPassword.value = "silakan masukan panjang passsword terlebih dahulu";
    return;
  }

  try {
    generatorPwBtn.disabled = true;
    generatorPwBtn.textContent = "Menghasilkan..";
    const res = await fetch(`/api/password-generator?length=${panjang}`);
    const data = await res.json();

    if (!res.ok) {
      hasilPassword.value = data.error || "terjadi kesalahan..";
    } else {
      lastGeneratorPassword = data.password;
      hasilPassword.value = data.password;
    }
  } catch (err) {
    hasilPassword.value = "gagal manghubungi server.";
  } finally {
    generatorPwBtn.disabled = false;
    generatorPwBtn.textContent = "Generate Password";
  }
})
// save password
savePwBtn.addEventListener("click", () => {
  if (!lastGeneratorPassword) {
    alert("silakan generate password sebelum menyimpan.");
    return;
  }
  const isiFile = `password: ${lastGeneratorPassword}\n\ndibuat pada: ${new Date().toLocaleString()}`;
  const blob = new Blob([isiFile], { type: "text/plain" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "password.txt";
  link.click();

  URL.revokeObjectURL(link.href);
});
// content 2 end

// content 4 -piano
const chords = ['a','c','d','e','f']
const note = document.getElementById('note');

chords.forEach(chord => {
  const button = document.createElement('button');
  button.innerText = chord
  button.classList.add('note-button');
  button.addEventListener('click', () => {
    const audio = new Audio(`assets/audio/${chord}.wav`);
    audio.play();
  })
  note.appendChild(button);
})
// content 4 end