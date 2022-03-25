export default function mainScript() {
    const skills = ["HTML", "CSS", "SASS", "Bootstrap", "JavaScript", "React", "Redux"];
    const textField = document.getElementById("main-skills-strong");
    let currentWord = 0;
    let i = 0;
    let j = 0;

    typing();

    function typing() {
        if(i < skills[currentWord].length) {
            textField.innerHTML += skills[currentWord].charAt(i);
            i++;
        }

        if(i === skills[currentWord].length) deleteText();

        setTimeout(typing, i === skills[currentWord].length ? 100 : 300);
    }

    function deleteText() {
        if(j < skills[currentWord].length + 1) {
            const deleteAmount = textField.innerHTML.substring(0, skills[currentWord].length - j);
            textField.innerHTML = deleteAmount;
            j++;
        }

        if(j === skills[currentWord].length + 1) {
            i = 0;
            j = 0;
                
            currentWord === skills.length - 1 ? currentWord = 0 : currentWord++;
        }
    }
}