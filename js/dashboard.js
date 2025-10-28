
// dashbord load
function loadDashboard() {
    let userData = localStorage.getItem("loggedUser");
    
    if(!userData){
        alert("anda belum login,silakan login terlebih dahulu");
        window.location.href = "./index.html";
    };

    let user =JSON.parse(userData);

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

function risetBg(){
    document.body.style.backgroundColor = "#8B5CF6";
};

// COMPONEN & FUNCTION VIDEO
const vidioComponent = document.getElementById("vidioComponent");
function playVidio(){
    vidioComponent.play();
};
function pauseVidio(){
    vidioComponent.pause();
};
function minimizeVidio(){
    vidioComponent.requestPictureInPicture();
};

function zoomInVidio(){
    vidioComponent.requestFullscreen();
};

// CEK UMUR & GENERATOR PASSWORD

let tanggalLahirInput = document.getElementById("tanggalLahir");
let cekUmurBtn = document.getElementById("cekUmurBtn");
let hasilUmur = document.getElementById("hasilUmur");

console.log(tanggalLahirInput)
console.log(cekUmurBtn)
console.log(hasilUmur)
