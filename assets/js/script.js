document.addEventListener("DOMContentLoaded", () => {

    const overlay = document.getElementById("tap-overlay");
    const video = document.getElementById("bg-video");
    const logo = document.getElementById("main-logo");
    const gallery = document.getElementById("image-gallery");
    const productView = document.getElementById("product-view");

    let interval;

    overlay.addEventListener("click", () => {
        overlay.style.display = "none";

        video.muted = false;
        video.play();

        logo.style.opacity = "1";

        setTimeout(() => {
            logo.style.opacity = "0";

            setTimeout(() => {
                gallery.classList.add("active");
            }, 800);

        }, 1800);
    });

    const data = {
        uzi: {
            imgs: ["assets/images/uzifront.png", "assets/images/uziback.png"],
            title: "feel like uzi",
            desc: "220 gsm<br>true to size<br>inspired by prettifun's funhouse"
        },
        culture: {
            imgs: ["assets/images/culturefront.png", "assets/images/cultureback.png"],
            title: "culture",
            desc: "250 gsm enzyme wash<br>oversize fit<br>inspired by tdf's culture"
        },
        cc: {
            imgs: ["assets/images/ccfront.png", "assets/images/ccback.png"],
            title: "frank ocean",
            desc: "460 gsm<br>oversize fit<br>inspired by che's closed captions"
        },
        fifty: {
    imgs: [
        "assets/images/fiftyfront.png",
        "assets/images/fiftyback.png"
    ],
    title: "feel like uzi",
    desc: "220 gsm<br>true to size<br>inspired by prettifun's funhouse"
}
    };

    window.showProduct = (key) => {

        const p = data[key];

        // stop gallery interaction + fade out
        gallery.classList.remove("active");

        setTimeout(() => {

            productView.style.display = "block";

            setTimeout(() => {
                productView.classList.add("active");
            }, 30);

            document.getElementById("ptitle").innerHTML = p.title;
            document.getElementById("pdesc").innerHTML = p.desc;

            const img1 = document.getElementById("pimg1");
            const img2 = document.getElementById("pimg2");

            img1.src = p.imgs[0];
            img2.src = p.imgs[1];

            let state = 0;

            function cycle() {
                if (state === 0) {
                    img1.classList.add("show");
                    img2.classList.remove("show");
                    state = 1;
                } else {
                    img1.classList.remove("show");
                    img2.classList.add("show");
                    state = 0;
                }
            }

            img1.classList.add("show");
            img2.classList.remove("show");
            
            clearInterval(interval);
            cycle();
            interval = setInterval(cycle, 2500);

            document.body.style.overflow = "hidden";

        }, 400);
    };

    window.hideProduct = () => {

        productView.classList.remove("active");

        clearInterval(interval);

        document.body.style.overflow = "auto";

        setTimeout(() => {

            productView.style.display = "none";
            gallery.classList.add("active");

        }, 600);
    };

});