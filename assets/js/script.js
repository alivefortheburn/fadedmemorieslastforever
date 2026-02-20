document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("tap-overlay");
    const video = document.getElementById("bg-video");
    const logoLink = document.getElementById("logo-link");
    const gallery = document.getElementById("image-gallery");
    const topLogo = document.getElementById("top-logo"); // NEW

    overlay.addEventListener("click", function() {
        // Hide overlay immediately
        overlay.style.display = "none";

        // Show and play video with audio
        video.style.display = "block";
        video.muted = false;
        video.play();

        // Show logo after 2 seconds
        setTimeout(() => {
            logoLink.style.display = "block";
            setTimeout(() => {
                logoLink.style.opacity = "1";
            }, 50);

            // Fade out logo after 3 seconds
            setTimeout(() => {
                logoLink.style.opacity = "0";

                // Show gallery + top logo after logo fade out
                setTimeout(() => {
                    gallery.classList.add("show");

                    // Show the new top centered logo
                    topLogo.style.display = "block";

                }, 1200); // match logo fade-out time
            }, 3000); // logo visible duration
        }, 2000);
    });
});