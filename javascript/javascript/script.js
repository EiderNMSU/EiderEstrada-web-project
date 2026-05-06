document.addEventListener('DOMContentLoaded', () => {
    const myForm = document.getElementById('userForm');
    const display = document.getElementById('greetingDisplay');

    myForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('nameInput').value;
        display.innerHTML = `<h3>Hello, ${name}!</h3><p>Welcome to my Project 4 interactive page.</p>`;
        display.style.color = "darkblue";
    });
});