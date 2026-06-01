const form = document.getElementById("contactForm");
const container = document.getElementById("comments-container");

loadComments();

form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let message = document.getElementById("message").value;
let rating = document.getElementById("rating").value;

let time = new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});

let comment = {name,email,message,rating,time};

let comments = JSON.parse(localStorage.getItem("comments")) || [];
comments.push(comment);

localStorage.setItem("comments", JSON.stringify(comments));

displayComment(comment);

form.reset();

});

function displayComment(data){

let card = document.createElement("div");
card.classList.add("comment-card");

let initials = data.name.charAt(0).toUpperCase();

card.innerHTML = `
<div class="avatar">${initials}</div>

<div class="comment-content">

<div class="comment-message">${data.message}</div>

<div class="reactions">
<span class="reaction">${data.rating}</span>
<span class="reaction">👍</span>
<span class="reaction">❤️</span>
</div>

</div>
`;

container.appendChild(card);

}

function loadComments(){

let comments = JSON.parse(localStorage.getItem("comments")) || [];

comments.forEach(displayComment);

}