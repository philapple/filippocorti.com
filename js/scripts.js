$(document).ready(function() {
	$(".typed").typed({
		strings: ["UX Designer", "Blogger", "Human", "Coffee Enthusiast", "Filippo Corti"],
		typeSpeed: 50
	});

});

new cf.ConversationalForm({
    formEl: document.getElementById("contact-form"),
		context: document.getElementById("chat"),
    userImage: "../assets/icons/face.png"
});
