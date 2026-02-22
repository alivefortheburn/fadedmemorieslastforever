document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("tap-overlay");
    const video = document.getElementById("bg-video");
    const logoLink = document.getElementById("logo-link");
    const gallery = document.getElementById("image-gallery");

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

                // Show gallery after logo fade out
                setTimeout(() => {
                    gallery.classList.add("show");
                    gallery.style.pointerEvents = "auto";
                }, 1200);
            }, 3000);
        }, 2000);
    });
});
