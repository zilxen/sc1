var redirectLinks = document.getElementsByClassName("redirect-link");
for (var i = 0; i < redirectLinks.length; i++) {
  redirectLinks[i].addEventListener("click", function(event) {
    event.preventDefault();
    var password = prompt("Please enter the password:");
    if (password === atob("YmV0bGVtc2th")) {
      // Redirect to protected page
      window.location.href = this.href;
    } else if (password === null) {
      // Do nothing if the user clicks on cancel
    } else if (password === "") {
      // Do nothing if the user does not enter anything
    } else {
      alert("Access denied. Incorrect password.");
    }
  });
}
