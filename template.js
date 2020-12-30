let contacts = [];

const addContact = (e) => {
  e.preventDefault();
  let contact = {
    id: Date.now(),
    name: document.getElementById("input-name").value,
    email: document.getElementById("input-email").value,
    homepage: document.getElementById("input-homepage").value,
  };
  contacts.push(contact);
  document.forms[0].reset();

  let temp = document.getElementById("contact-template");
  let content = temp.content.cloneNode(true);
  document.body.appendChild(content);

  let length = contacts === [] ? 0 : contacts.length - 1;

  document.getElementsByTagName("h2")[length].innerHTML = contact.name;
  document.getElementsByClassName("email")[length].innerHTML = contact.email;
  document
    .getElementsByTagName("a")
    [length].setAttribute("href", contact.homepage);
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submit").addEventListener("click", addContact);
});
