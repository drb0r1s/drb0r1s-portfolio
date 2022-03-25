import { projectsData } from "../../functions/data.js";
import { topProjectsData } from "../../functions/data.js";

export default function projectsScript() {
    const projectsList = document.querySelector(".projects-list");
    const loader = document.getElementById("projects-loader");

    const projectsScreen = document.querySelector(".projects-screen");
    const projectsButton = document.getElementById("projects-button");
    const topProjectsButton = document.getElementById("top-projects-button");

    let activeList = projectsData;

    projectsButton.onclick = () => setList("projects");
    topProjectsButton.onclick = () => setList("allProjects");

    let prevListType = "";
    
    loader.remove();
    projectsButton.classList.add("active-project-button");
    setList("projects");

    function setList(listType) {
        if(listType === prevListType) return;
        
        const previousList = document.querySelectorAll(".projects-list .project");
        prevListType = listType;
        
        if(previousList.length > 0) {
            for(let i = 0; i < previousList.length; i++) previousList[i].remove();
        }

        if(listType === "projects") {
            activeList = projectsData;
            projectsScreen.classList.remove("top-projects-screen");
            projectsButton.classList.add("active-project-button");
            topProjectsButton.classList.remove("active-project-button");
        }

        else {
            activeList = topProjectsData;
            projectsScreen.classList.add("top-projects-screen");
            topProjectsButton.classList.add("active-project-button");
            projectsButton.classList.remove("active-project-button");
        }

        activeList.forEach((project, index) => {
            const currentProject = document.createElement("a");
            currentProject.setAttribute("class", "project");
            currentProject.setAttribute("id", `projects-list-${index}`);
            currentProject.setAttribute("href", project.link);
            projectsList.appendChild(currentProject);

            const techHolder = document.createElement("div");
            techHolder.setAttribute("class", "tech-holder");
            currentProject.appendChild(techHolder);

            let techFill = 0;
            let techIndex = 0;
            
            while(techFill < 9) {
                const currentProjectTech = document.createElement("img");
                currentProjectTech.setAttribute("src", project.technologies[techIndex]);
                currentProjectTech.setAttribute("alt", project.title);
                techHolder.appendChild(currentProjectTech);
                techFill++;
                
                if(techIndex === project.technologies.length - 1) techIndex = 0;
                else techIndex++;
            }

            const currentProjectInfo = document.createElement("div");
            currentProjectInfo.setAttribute("class", "project-info");
            currentProject.appendChild(currentProjectInfo);

            const currentProjectTitle = document.createElement("strong");
            currentProjectTitle.innerHTML = project.title;
            currentProjectInfo.appendChild(currentProjectTitle);

            const currentProjectDescription = document.createElement("p");
            currentProjectDescription.innerHTML = project.description;
            currentProjectInfo.appendChild(currentProjectDescription);
        });
    }
}