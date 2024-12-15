document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const messageTextarea = document.getElementById('message');
    const sendFormButton = document.getElementById('sendForm');

    nameInput.addEventListener('input', function() {
        if (nameInput.value.trim() !== '') {
            messageTextarea.disabled = false;
            sendFormButton.disabled = false;
        } else {
            messageTextarea.disabled = true;
            sendFormButton.disabled = true;
        }
    });
});
