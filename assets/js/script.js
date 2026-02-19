document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("tap-overlay");
    const video = document.getElementById("bg-video");
    const logoLink = document.getElementById("logo-link");

    overlay.addEventListener("click", function() {

        // Hide overlay
        overlay.style.display = "none";

        // Show video
        video.style.display = "block";
        video.muted = false;
        video.play();

        // Show logo after 2 seconds
        setTimeout(() => {
            logoLink.style.display = "block";
            logoLink.style.opacity = "1";
        }, 2000);
    });
});
