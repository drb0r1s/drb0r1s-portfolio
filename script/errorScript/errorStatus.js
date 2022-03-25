export default function errorStatus() {
    const text = "not found";
    let textField = document.getElementById("error-status-strong");
    let i = 0;
    let j = 0;

    startTyping();

    function startTyping() {
        if(i < text.length) {
            textField.innerHTML += text.charAt(i);
            i++;
        }

        if(i === text.length) deleteText();

        setTimeout(startTyping, i === text.length ? 50 : 150);
    }

    function deleteText() {
        if(j < text.length + 1) {
            textField.innerHTML = "status: " + text.substring(0, text.length - j);
            j++;
        }

        if(j === text.length + 1) {
            i = 0;
            j = 0;
        }
    }
}