// User token will be user ID (for now)
const userLog = localStorage.getItem("userToken");
const isUserLoged = Boolean(userLog);
if (!isUserLoged) {
  window.location.href = "./views/login.html";
}
