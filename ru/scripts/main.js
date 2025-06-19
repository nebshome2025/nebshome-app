document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.querySelector(".start-btn");

  startButton.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Testul va începe în curând. (Aici va fi redirecționarea)");
    // Aici poți adăuga redirecționare:
    // window.location.href = "test.html";
  });
});
