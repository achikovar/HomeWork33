//getProducts
document.getElementById("products").addEventListener("click", function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dummyjson.com/products", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      document.getElementById("output").innerHTML = JSON.stringify(
        response,
        null,
        2
      );
    }
  };
  xhr.send();
});
//getCarts
document.getElementById("carts").addEventListener("click", function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dummyjson.com/carts", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      document.getElementById("output").innerHTML = JSON.stringify(
        response,
        null,
        2
      );
    }
  };
  xhr.send();
});
//getUsers
document.getElementById("users").addEventListener("click", function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dummyjson.com/users", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      document.getElementById("output").innerHTML = JSON.stringify(
        response,
        null,
        2
      );
    }
  };
  xhr.send();
});
// getPosts
document.getElementById("posts").addEventListener("click", function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dummyjson.com/posts", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      document.getElementById("output").innerHTML = JSON.stringify(
        response,
        null,
        2
      );
    }
  };
  xhr.send();
});
// getComments
document.getElementById("comments").addEventListener("click", function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dummyjson.com/comments", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      document.getElementById("output").innerHTML = JSON.stringify(
        response,
        null,
        2
      );
    }
  };
  xhr.send();
});
// getQuotes
document.getElementById("quotes").addEventListener("click", function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dummyjson.com/quotes", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      document.getElementById("output").innerHTML = JSON.stringify(
        response,
        null,
        2
      );
    }
  };
  xhr.send();
});
// getRecipes
document.getElementById("recipes").addEventListener("click", function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dummyjson.com/recipes", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      document.getElementById("output").innerHTML = JSON.stringify(
        response,
        null,
        2
      );
    }
  };
  xhr.send();
});
// getTodos
document.getElementById("todos").addEventListener("click", function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dummyjson.com/todos", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var response = JSON.parse(xhr.responseText);
      document.getElementById("output").innerHTML = JSON.stringify(
        response,
        null,
        2
      );
    }
  };
  xhr.send();
});
