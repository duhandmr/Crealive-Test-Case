//Page Script

function changePage(page) {
  $.ajax({
    url: page + ".html",
    success: function (data) {
      $("#content").html(data);
    },
    error: function () {
      $("#content").html("<p>Page not found</p>");
    },
  });
}

$(document).ready(function () {
  changePage("homeContent");
});

$(document).on("click", "a[data-page]", function (e) {
  e.preventDefault();
  var page = $(this).data("page");
  changePage(page);
});

//User Script

const Login = (e) => {
  e.preventDefault();
  const emailVal = document.getElementById("email").value;
  const passwordVal = document.getElementById("password").value;

  console.log("email:", emailVal);
  console.log("password:", passwordVal);

  if (emailVal === "duhan@test.com" && passwordVal === "123123") {
    alert("Giriş Yaptınız");
  } else {
    alert("Kullanıcı Adı ya da Şifre Hatalı!");
  }
  window.location.reload();
};
