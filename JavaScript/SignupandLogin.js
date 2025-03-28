function switchForm(formType) {
    // Switch tabs
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(form => form.classList.remove('active'));

    document.querySelector(`.tab[onclick*="${formType}"]`).classList.add('active');
    document.getElementById(`${formType}Form`).classList.add('active');
}

function showForgotPassword() {
    // Implement forgot password flow
    alert('Forgot password functionality would go here');
}

// Form validation
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add form submission logic
    });
});

// Add floating label animation
document.querySelectorAll('.input-field').forEach(input => {
    input.addEventListener('focus', () => {
        input.previousElementSibling.style.color = '#6366f1';
    });

    input.addEventListener('blur', () => {
        input.previousElementSibling.style.color = '#0f172a';
    });
});