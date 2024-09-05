function openPDF() {
  const pdfUrl = "AI _ FREMTIDEN.pdf";
  window.open(pdfUrl, "_blank");
}

window.onload = function () {
  const buttons = document.querySelectorAll(".pdf-button");
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      openPDF();
    });
  });
};
