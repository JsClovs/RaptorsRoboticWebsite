function toggleContent(button) {
   let article = button.parentElement.parentElement;
   article.classList.toggle("show");

   if (article.classList.contains("show")) {
       button.textContent = "Ver menos";
   } else {
       button.textContent = "Ver mais";
   }
}
