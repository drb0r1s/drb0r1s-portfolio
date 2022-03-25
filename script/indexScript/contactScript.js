import { contactData } from "../../functions/data.js";

export default function contactScript() {
    const contactInfo = document.querySelector(".contact-info");
    
    contactData.forEach((contact) => {
        const newContact = document.createElement("a");
        newContact.setAttribute("href", contact.link);
        newContact.setAttribute("class", "single-contact");
        contactInfo.appendChild(newContact);

        const newContactLineIcon = document.createElement("img");
        newContactLineIcon.setAttribute("src", contact.lineIcon);
        newContactLineIcon.setAttribute("alt", contact.title);
        newContactLineIcon.setAttribute("class", "contact-line-icon");
        newContact.appendChild(newContactLineIcon);

        const newContactInfoHolder = document.createElement("div");
        newContactInfoHolder.setAttribute("class", "contact-info-holder");
        newContact.appendChild(newContactInfoHolder);

        const newContactIcon = document.createElement("img");
        newContactIcon.setAttribute("src", contact.icon);
        newContactIcon.setAttribute("alt", contact.username);
        newContactInfoHolder.appendChild(newContactIcon);

        const newInfoHolder = document.createElement("div");
        newInfoHolder.setAttribute("class", "info-holder");
        newContactInfoHolder.appendChild(newInfoHolder);

        const newInfoHolderTitle = document.createElement("p");
        newInfoHolderTitle.innerHTML = contact.title;
        newInfoHolder.appendChild(newInfoHolderTitle);

        const newInfoHolderUsername = document.createElement("strong");
        newInfoHolderUsername.innerHTML = contact.username;
        newInfoHolder.appendChild(newInfoHolderUsername);
    });
}