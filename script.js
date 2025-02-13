document.getElementById("card").addEventListener("click", function() {
    const front = document.getElementById("card-front");
    const back = document.getElementById("card-back");

    // Toggle open/close effect
    front.classList.toggle("opened");

    // Add a delay before toggling the visibility of the children
    setTimeout(() => {
        const children = front.children;
        for (let i = 0; i < children.length; i++) {
            children[i].classList.toggle("hidden");
        }
        document.getElementById("card-back").classList.add("show-rose");
        // const children2 = back.children;
        // for (let i = 0; i < children2.length; i++) {
        //     children2[i].classList.toggle("fadein");
        // }
    }, 500); // Adjust the delay time to match the animation duration
});
