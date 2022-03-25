export default function menuObserver() {
    const getSections = document.querySelectorAll("section");
    const allSections = [];

    getSections.forEach((section) => {
        if(section.id) allSections.push(section);
    });

    startObserving(getMenu());
    window.addEventListener("resize", () => startObserving(getMenu()));

    function getMenu() {
        const headerNav = document.querySelectorAll("header nav a");
        const mobileMenuNav = document.querySelectorAll(".mobile-menu nav a");
    
        let currentMenu = mobileMenuNav.length === 0 ? headerNav : mobileMenuNav;
        return currentMenu;
    }
    
    function startObserving(m) {
        const options = {
            threshold: 0.5,
            rootMargin: "-20px 0px 0px 0px"
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting) setActiveSection(m, entry.target.id);
            });
        }, options);
    
        for(let i = 0; i < allSections.length; i++) observer.observe(allSections[i]);
    
        function setActiveSection(menu, id) {
            menu.forEach((section) => {
                if(section.innerHTML === id) section.id = "active-section";
                else if(section.id) section.id = "";
            });
        }
    }
}