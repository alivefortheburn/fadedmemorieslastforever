document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("tap-overlay");
    const video = document.getElementById("bg-video");
    const logoLink = document.getElementById("logo-link");

    overlay.addEventListener("click", function() {
        // Hide overlay
        overlay.classList.add("hidden");

        // Show and play video
        video.classList.remove("hidden");
        video.muted = false;
        video.play();

        // Show logo (which is now the link)
        setTimeout(() => {
            logoLink.classList.add("show");
        }, 2000);
    });
});
