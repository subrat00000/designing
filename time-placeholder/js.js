document.getElementById('appt').addEventListener('focus', function () {
  document.getElementById("para").classList.add("mystyle");
});
document.getElementById('appt').addEventListener('blur', function () {
  if (document.getElementById("appt").value == "") {
    document.getElementById("para").classList.remove("mystyle");
  } else {
    document.getElementById("para").classList.add("mystyle");
    document.getElementById("appt").classList.add("abcd");
  }
});