// Send message to Aussie Adventures team.
function sendMail(contact) {

    emailjs.send("Email service", "template_ms2", {
        "name": contact.name.value,
        "email": contact.email.value,
        "message": contact.message.value,
    });

    $("#successModal").modal();
    return false;
}