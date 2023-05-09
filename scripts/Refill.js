const confirmButton = document.getElementById("confirm-button");
const confirmationMessage = document.getElementById("confirmation-message");
const presForm = document.getElementById("#preForm");
confirmButton.addEventListener("click", () => {
  confirmationMessage.style.display = "block";
  presForm.style.display = "none";
  
  setTimeout(() => {
    confirmationMessage.style.display = "none";
  }, 30000);
});
