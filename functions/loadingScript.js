export default function loadingScript() {
    const body = document.querySelector("body");
    const loading = document.querySelector(".loading");

    loading.style.opacity = "0";

    setTimeout(() => {
        loading.remove();
        body.style.overflow = "visible";
    }, 300);
}