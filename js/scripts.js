window.onload = function() {
  let db = document.querySelector("#darkMode");
  db.onclick = function() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  };

  let lb = document.querySelector("#lightMode");
  lb.onclick = function() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  };
};