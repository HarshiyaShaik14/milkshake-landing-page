const orderButtons = document.querySelectorAll('.order-button');
const sign = document.getElementById('sign');
function signUp(){
    sign.textContent = "Signed Up"
    console.log(sign)
}
orderButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Thank you for your order!');
    });
});

const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted. We will get back to you soon!');
});
