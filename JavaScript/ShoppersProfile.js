// Add payment method interaction
document.querySelector('.add-payment').addEventListener('click', () => {
    // Show payment method form
    alert('Payment method form would appear here');
});

// Form validation
document.querySelectorAll('.input-field').forEach(input => {
    input.addEventListener('input', () => {
        if (input.checkValidity()) {
            input.style.borderColor = '#e2e8f0';
        } else {
            input.style.borderColor = '#ef4444';
        }
    });
});