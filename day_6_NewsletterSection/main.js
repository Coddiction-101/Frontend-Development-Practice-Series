
const form = document.querySelector('.email-input-group');
const emailInput = document.querySelector('.email-input-group input');
const submitBtn = document.querySelector('.submit-btn');
const checkbox = document.querySelector('.terms input[type="checkbox"]');
const rightPanel = document.querySelector('.right-panel');

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function shakeElement(el) {
    el.classList.add('shake');
    el.addEventListener('animationend', () => el.classList.remove('shake'), { once: true });
}

function showError(message) {
    const existing = document.querySelector('.error-msg');
    if (existing) existing.remove();

    const error = document.createElement('p');
    error.className = 'error-msg';
    error.textContent = message;
    form.insertAdjacentElement('afterend', error);

    setTimeout(() => error.remove(), 3000);
}

function showSuccess() {
    const inputGroup = document.querySelector('.email-input-group');
    const termsLabel = document.querySelector('.terms');
    const heading = document.querySelector('.subscribe-heading');

    inputGroup.style.transition = 'opacity 0.3s ease';
    termsLabel.style.transition = 'opacity 0.3s ease';
    inputGroup.style.opacity = '0';
    termsLabel.style.opacity = '0';

    setTimeout(() => {
        inputGroup.remove();
        termsLabel.remove();
        heading.textContent = "You're in! 🎉";

        const successMsg = document.createElement('p');
        successMsg.className = 'success-msg';
        successMsg.textContent = "Thanks for subscribing. Check your inbox for the first edition.";
        heading.insertAdjacentElement('afterend', successMsg);
    }, 300);
}

submitBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();

    if (!checkbox.checked) {
        shakeElement(form);
        showError('Please accept the terms before subscribing.');
        return;
    }

    if (!email || !isValidEmail(email)) {
        shakeElement(form);
        showError('Please enter a valid email address.');
        return;
    }

    showSuccess();
});

emailInput.addEventListener('focus', () => {
    const existing = document.querySelector('.error-msg');
    if (existing) existing.remove();
});
