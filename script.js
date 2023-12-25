/* NAV SCRIPT */
$(document).ready(function () {
  $(".submenu").hide();

  $(".dropdownmenu").hover(
    function () {
      $(this).find(".submenu").stop(true, false).slideDown(200);
    },
    function () {
      $(this).find(".submenu").stop(true, false).slideUp(200);
    }
  );
});

/* MOBILE MENU SCRIPT */

$(document).ready(function () {
  $("#menuBtn").click(function () {
    $("#mobile-nav").show();
  });
  $("#mobilemenuClose").click(function () {
    $("#mobile-nav").hide();
  });
});

$(function () {
  $(".mobile-submenu").hide();

  $(".mobile-dropdownmenu").click(function (e) {
    $(this).find(".mobile-submenu").toggle();

    $(".mobile-dropdownmenu").not(this).find(".mobile-submenu").hide();

    e.stopPropagation();
  });

  $(document).click(function () {
    $(".mobile-submenu").hide();
  });

  $(".mobile-submenu li").click(function (e) {
    e.stopPropagation();
  });
});

/* MODAL */

const LoginAndRegister = () => {
  const modalContainer = document.createElement("div");
  modalContainer.classList.add("modal");

  const tabContainer = document.createElement("div");
  tabContainer.classList.add("tab-container");

  const loginContent = document.createElement("div");
  loginContent.classList.add("modal-content", "active-tab");
  loginContent.innerHTML = `
    <div class="flex items-center justify-center mt-20">
    <div class="text-left">
    <h3 class="text-sm font-normal text-left">Hesabınıza Giriş Yapın</h3>
    <form onsubmit="Login(event)">
      <div class="flex flex-col mt-1" style="width: 300px">
        <div>
          <input
            type="email"
            placeholder="Email"
            id="login-email"
            required
            class="w-full px-4 py-4 border border-solid rounded-md text-sm focus:outline-none"
          />
        </div>
        <div class="mt-4">
          <input
            type="password"
            placeholder="Password"
            id="login-password"
            required
            class="w-full px-4 py-4 border border-solid rounded-md text-sm focus:outline-none"
          />
        </div>
        <a href="#" class="text-xs text-right mt-2 hover:underline"
          >Parolanızı unuttunuz mu?</a
        >
        <div class="flex flex-col gap-5 justify-between">
          <button
            type="submit"
            class="px-6 py-2 mt-4 text-white w-full rounded-full"
            style="background-color: #9f2842"
          >
            Login
          </button>
          <button
            class="bg-black text-white text-xs font-normal px-8 py-3 rounded-sm"
          >
            Alışverişe Başla
          </button>
        </div>
      </div>
    </form>
  </div>
</div>
  `;

  const registerContent = document.createElement("div");
  registerContent.classList.add("modal-content");
  registerContent.innerHTML = `
  
  <div class="flex items-center justify-center mt-20">
  <div class="text-left">
  <h3 class="text-sm font-normal text-left">Hesabınıza Giriş Yapın</h3>
  <form onsubmit="Register(event)">
    <div class="flex flex-col mt-1" style="width: 300px">
    <div>
        <input
          type="text"
          placeholder="Name"
          id="name"
          required
          class="w-full px-4 py-4 border border-solid rounded-md text-sm focus:outline-none"
        />
      </div>
      <div class="mt-4">
        <input
          type="email"
          placeholder="Email"
          id="register-email"
          required
          class="w-full px-4 py-4 border border-solid rounded-md text-sm focus:outline-none"
        />
      </div>
      <div class="mt-4">
        <input
          type="password"
          placeholder="Password"
          id="register-password"
          required
          class="w-full px-4 py-4 border border-solid rounded-md text-sm focus:outline-none"
        />
      </div>
      <div class="mt-4">
        <input
          type="password"
          placeholder="Password Again"
          id="register-password-again"
          required
          class="w-full px-4 py-4 border border-solid rounded-md text-sm focus:outline-none"
        />
      </div>
      <div class="flex flex-col gap-5 justify-between">
        <button
          type="submit"
          class="px-6 py-2 mt-4 text-white w-full rounded-full"
          style="background-color: #9f2842"
        >
          Register
        </button>
      </div>
    </div>
  </form>
</div>
</div>
  `;
  registerContent.style.display = "none";

  const closeButton = document.createElement("span");
  closeButton.classList.add("close");
  closeButton.innerHTML = "&times;";
  closeButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  const loginTabButton = document.createElement("button");
  loginTabButton.classList.add("tab-button", "active-tab-button");
  loginTabButton.textContent = "Login";
  loginTabButton.addEventListener("click", () => {
    loginContent.classList.add("active-tab");
    registerContent.classList.remove("active-tab");
    loginTabButton.classList.add("active-tab-button");
    registerTabButton.classList.remove("active-tab-button");

    loginContent.style.display = "block";
    registerContent.style.display = "none";
  });

  const registerTabButton = document.createElement("button");
  registerTabButton.classList.add("tab-button");
  registerTabButton.textContent = "Register";
  registerTabButton.addEventListener("click", () => {
    registerContent.classList.add("active-tab");
    loginContent.classList.remove("active-tab");
    registerTabButton.classList.add("active-tab-button");
    loginTabButton.classList.remove("active-tab-button");

    registerContent.style.display = "block";
    loginContent.style.display = "none";
  });

  modalContainer.appendChild(closeButton);

  tabContainer.appendChild(loginTabButton);
  tabContainer.appendChild(registerTabButton);
  modalContainer.appendChild(tabContainer);

  modalContainer.appendChild(loginContent);
  modalContainer.appendChild(registerContent);

  document.body.appendChild(modalContainer);

  modalContainer.style.display = "block";
};

/* USER LOGIN SCRIP*/

const Login = (e) => {
  e.preventDefault();

  const changeName = document.getElementById("login");

  const modalContainer = document.querySelector(".modal");

  const emailVal = document.getElementById("login-email").value;
  const passwordVal = document.getElementById("login-password").value;

  console.log("email:", emailVal);
  console.log("password:", passwordVal);

  const getUser = localStorage.getItem("user");

  if (getUser) {
    const user = JSON.parse(getUser);

    if (emailVal === user.email && passwordVal === user.password) {
      changeName.innerHTML = `Hoş geldiniz, ${user.name}`;
      modalContainer.style.display = "none";
    } else {
      alert("Kullanıcı adı ya da şifre hatalı!");
    }
  } else {
    alert("Kayıtlı kullanıcı bulunamadı!");
  }
};

/* USER REGISTER SCRIP*/

const Register = (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const emailVal = document.getElementById("register-email").value;
  const passwordVal = document.getElementById("register-password").value;
  const passwordAgainVal = document.getElementById(
    "register-password-again"
  ).value;

  if (emailVal && passwordVal) {
    if (passwordVal === passwordAgainVal) {
      console.log("Email:", emailVal);
      console.log("Password:", passwordVal);

      alert(`Kayıt başarıyla tamamlandı ${name}!`);
      const user = { email: emailVal, password: passwordVal, name: name };
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      alert("Şifreler uyuşmuyor");
    }
  } else {
    alert("Lütfen tüm alanları doldurun!");
  }
};
