const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
    menuButton.setAttribute('aria-expanded', !expanded);
    mobileMenu.classList.toggle('show');

    const links = mobileMenu.querySelectorAll('a');
    if (!expanded) {
        links.forEach(link => link.setAttribute('tabindex', '0'));
    } else {
        links.forEach(link => link.setAttribute('tabindex', '-1'));
    }
});
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !menuButton.contains(e.target) && mobileMenu.classList.contains('show')) {
        menuButton.setAttribute('aria-expanded', false);
        mobileMenu.classList.remove('show');
        mobileMenu.querySelectorAll('a').forEach(link => link.setAttribute('tabindex', '-1'));
    }
});
const form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if (!name || !email || !message) {
        alert('Please fill in all fields before submitting.');
        return;
    }
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!pattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    alert(`Thank you ${ name }, your message has been received!`);
    form.reset();
});