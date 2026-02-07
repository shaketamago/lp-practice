//ローディング＆白帯アニメーション//
const loading = document.getElementById("loading");

window.onload = ()=> {
    setTimeout(() => {
        loading.classList.add("loaded");
        setTimeout(() => {
            loading.remove();
            const bands = document.querySelectorAll(".band");
            bands.forEach(band => band.classList.add("show"));
        }, 500);

    }, 2000);
};

//フェイドインアニメーション//
const fadeins = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
        entry.target.classList.add('show');
        }
    });
});

fadeins.forEach((fadein) => {
    observer.observe(fadein);
});

