document.getElementById("card").addEventListener("click", function() {
    const front = document.getElementById("card-front");
    
    // Toggle open/close effect
    front.classList.toggle("opened");

    // Add a delay before toggling the visibility of the children
    setTimeout(() => {
        const children = front.children;
        for (let i = 0; i < children.length; i++) {
            children[i].classList.toggle("hidden");
        }
    }, 500); // Adjust the delay time to match the animation duration
});
