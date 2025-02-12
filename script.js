// document.getElementById("card").addEventListener("click", function() {
//     const front = document.getElementById("card-front");
//     const back = document.getElementById("card-back");

//     // Hide front properly
//     front.style.opacity = "0";
//     front.style.transition = "opacity 0.5s ease-in-out";
//     setTimeout(() => {
//         front.style.display = "none"; // Hide it after fading out
//     }, 500); // Match the transition time

//     // Show back properly
//     back.style.display = "flex"; // Change display first
//     setTimeout(() => {
//         back.style.opacity = "1";
//     }, 10); // Small delay to trigger transition
// });

document.getElementById("card").addEventListener("click", function() {
    const front = document.getElementById("card-front");
    
    // Toggle open/close effect
    front.classList.toggle("opened");
});
