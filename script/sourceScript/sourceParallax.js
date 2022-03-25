export default function sourceParallax() {
    const sourceHolder = document.querySelector(".source-holder");

    sourceHolder.addEventListener("mousemove", (event) => {
        const x = (window.innerWidth - event.pageX * 10) / 100;
        const y = (window.innerHeight - event.pageY * 10) / 100;

        sourceHolder.style.backgroundPosition = `${x}px ${y}px`;
    });
}