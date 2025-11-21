
// MENU LOGIN
let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let BtnLogin = document.getElementById("btnLogin");

let users = JSON.parse(localStorage.getItem("users")) || [];

if (users.length === 0) {
  users.push({ username: "admin", password: "admin123", role: "admin" });
  users.push({ username: "rajwa", password: "rajwa123", role: "specialUser" });
  users.push({ username: "evanda", password: "evan123", role: "user" });
  users.push({ username: "bahul", password: "bahul123", role: "user" });
  users.push({ username: "dino", password: "dino123", role: "user" });
  users.push({ username: "takim", password: "takim123", role: "user" });
  users.push({ username: "iza", password: "iza123", role: "user" });
  users.push({ username: "ferdi", password: "ferdi123", role: "user" });
  users.push({ username: "bintang", password: "bintang123", role: "user" });
  users.push({ username: "syaif", password: "syaif123", role: "user" });
  users.push({ username: "aiman", password: "aiman123", role: "user" });
  users.push({ username: "rafi", password: "rafi123", role: "user" });
  users.push({ username: "alfino", password: "alfino123", role: "user" });
  localStorage.setItem("users", JSON.stringify(users));
}


function onLogin() {
  let username = usernameInput.value.trim();
  let password = passwordInput.value.trim();

  if (!username || !password) {
    alert("Silakan isi username dan password terlebih dahulu!");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  let user = users.find(u => u.username === username && u.password === password);

  if (user) {
    localStorage.setItem("loggedUser", JSON.stringify(user));

    if (user.role === "admin") {
      window.location.href = "./admin.html";
    } else if (user.role === "specialUser") {
      window.location.href = "./special12.html";
    } else {
      window.location.href = "./dashboard.html";
    }
  } else {
    alert("Username atau password salah!");
  }
};

// MENU REGISTER
let usernameRegister = document.getElementById("usernameRegister");
let passwordRegister =document.getElementById("passwordRegister");
let btnRegoster = document.getElementById("btnRegister");


function onRegister() {
  let username = usernameRegister.value.trim();
  let password = passwordRegister.value.trim();

  let userSudahAda = users.find(u => u.username === username);
  if (userSudahAda) {
    alert("username sudah terdaftar, silakan gunakan useername lain");
    return;
  }
  if (!username || !password) {
    alert ("silakan isi username dan passwword terlebih dahulu!");
    return;
  }

  users.push({ username: username , password: password , role: "user"});
  localStorage.setItem("users", JSON.stringify(users));
  alert("register berhasil , silakan login untuk melanjutkan");
  window.location.href = "./index.html";
}

function logout(){
  localStorage.removeItem("loggedUser");
  window.location.href = "./index.html";
  alert('anda telah logout');
};

