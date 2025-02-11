document.getElementById("surpriseBtn").addEventListener("click", function() {
    const message = document.getElementById("surpriseMessage");
    message.classList.toggle("hidden");
    message.style.animation = "fadeIn 1s ease-in-out";
});