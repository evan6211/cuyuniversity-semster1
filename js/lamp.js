// sesi4 ctrak cetrek fungsi dasboard
// ruang keluarga kontrol
function saklarK(action,lamp) {
  let suara = new Audio('assets/audio/klik.wav');
  let lampuK1 = document.getElementById('lampuK1');
  let lampuK2 = document.getElementById('lampuK2');
  let lampuK3 = document.getElementById('lampuK3');
  let MtoggleK = document.getElementById('MtoggleK');

  let toogleK1 = document.getElementById('toggleK1');
  let toogleK2 = document.getElementById('toggleK2');
  let toogleK3 = document.getElementById('toggleK3');

  if (action == 'master') {

    suara.currentTime = 0;
    suara.play();

    if (MtoggleK.checked) {
      toogleK1.checked = true;
      toogleK2.checked = true;
      toogleK3.checked = true;
    }else{
      toogleK1.checked = false;
      toogleK2.checked = false;
      toogleK3.checked = false;
    }
  }

  if (toogleK1.checked) {
    lampuK1.src = 'assets/image/on.gif';
  }else{
    lampuK1.src = 'assets/image/off.gif';
  }
  if (toogleK2.checked) {
    lampuK2.src = 'assets/image/on.gif';
  }else{
    lampuK2.src = 'assets/image/off.gif';
  }
  if (toogleK3.checked) {
    lampuK3.src = 'assets/image/on.gif';
  }else{
    lampuK3.src = 'assets/image/off.gif';
  }

  if (action == 'toogle') {
    suara.currentTime = 0;
    suara.play();

    if (toogleK1.checked && toogleK2.checked && toogleK3.checked) {
        MtoggleK.checked = true;
    }else{
        MtoggleK.checked = false;
    }

  }
}

// ruang makan kontrol
function saklarM() {
  let suara = new Audio('assets/audio/klik.wav');
  let lampuM1 = document.getElementById('lampuM1');
  let toggleM1 = document.getElementById('toggle4');
  if (toggleM1.checked) {
    lampuM1.src = 'assets/image/on.gif';
    suara.currentTime = 0;
    suara.play();
  }else{
    lampuM1.src = 'assets/image/off.gif';
    suara.currentTime = 0 ;
    suara.play();
  }
}


// ruang tidur kontrol
function saklarT(action) {
  let suara = new Audio('assets/audio/klik.wav');
  let lampuT1 = document.getElementById('lampuT1');
  let lampuT2 = document.getElementById('lampuT2');
  let toggleT1 = document.getElementById('toggle5');
  let toggleT2 = document.getElementById('toggle6');
  let MtoggleT = document.getElementById('mastertoggle2');

  if (action == 'master') {
    suara.currentTime = 0;
    suara.play();

    if (MtoggleT.checked) {
      toggleT1.checked = true;
      toggleT2.checked = true;
    }else{
      toggleT1.checked = false;
      toggleT2.checked = false;
    }
  } 
  if (toggleT1.checked) {
    lampuT1.src = 'assets/image/on.gif';
  }else{
    lampuT1.src = 'assets/image/off.gif';
  }
  if (toggleT2.checked) {
    lampuT2.src = 'assets/image/on.gif';
  }else{
    lampuT2.src = 'assets/image/off.gif';
  }

  if (action == 'toogle') {
    suara.currentTime = 0;
    suara.play();

    if(toggleT1.checked && toggleT2.checked) {
      MtoggleT.checked = true;
    }else{
      MtoggleT.checked = false;
    }
  }
}

// ruang tamu kontrol
function saklarTM(action) {
  let suara = new Audio('assets/audio/klik.wav');
  let lampuTM1 = document.getElementById('lampuTM1');
  let lampuTM2 = document.getElementById('lampuTM2');
  let lampuTM3 = document.getElementById('lampuTM3');
  let toggleTM1 = document.getElementById('toggle7');
  let toggleTM2 = document.getElementById('toggle8');
  let toggleTM3 = document.getElementById('toggle9');
  let MtoggleTM = document.getElementById('mastertoggle3');

  if (action == 'master') {
    suara.currentTime = 0;
    suara.play();

    if (MtoggleTM.checked) {
      toggleTM1.checked = true;
      toggleTM2.checked = true;
      toggleTM3.checked = true;
    }else{
      toggleTM1.checked = false;
      toggleTM2.checked = false;
      toggleTM3.checked = false;
    }
  }

  if (toggleTM1.checked) {
    lampuTM1.src = 'assets/image/on.gif';
  }else{
    lampuTM1.src = 'assets/image/off.gif';
  }

  if (toggleTM2.checked) {
    lampuTM2.src = 'assets/image/on.gif';
  }else{
    lampuTM2.src = 'assets/image/off.gif';
  }

  if (toggleTM3.checked) {
    lampuTM3.src = 'assets/image/on.gif';
  }else{
    lampuTM3.src = 'assets/image/off.gif';
  }

  if (action == 'toogle') {
    suara.currentTime = 0;
    suara.play();

    if (toggleTM1.checked && toggleTM2.checked && toggleTM3.checked) {
      MtoggleTM.checked - true;
    }else{
      MtoggleTM.checked = false;
    }
  }
}