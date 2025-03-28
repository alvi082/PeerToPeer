document.addEventListener('DOMContentLoaded', () => {
    // Initialize default section
    const defaultSection = document.querySelector('#profile');
    const sections = document.querySelectorAll('.settings-section');

    // Hide all sections first
    sections.forEach(section => section.classList.remove('active'));

    // Show profile section by default
    defaultSection.classList.add('active');

    // Navigation handling
    document.querySelectorAll('.settings-sidebar a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Remove active classes
            document.querySelectorAll('.settings-sidebar a').forEach(l => l.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            // Add active classes
            this.classList.add('active');
            if(targetSection) targetSection.classList.add('active');
        });
    });

    // Payment Modal Handling
    const paymentModal = document.getElementById('paymentModal');
    const addPaymentBtn = document.getElementById('addPaymentBtn');
    const cancelPaymentBtn = document.getElementById('cancelPayment');

    if(addPaymentBtn && paymentModal && cancelPaymentBtn) {
        // Show modal
        addPaymentBtn.addEventListener('click', () => {
            paymentModal.classList.remove('hidden');
        });

        // Hide modal
        const hideModal = () => {
            paymentModal.classList.add('hidden');
        };

        // Cancel button
        cancelPaymentBtn.addEventListener('click', hideModal);

        // Close modal when clicking outside
        paymentModal.addEventListener('click', (e) => {
            if(e.target === paymentModal) hideModal();
        });
    }

    // Card Number Formatting
    document.querySelector('.card-number')?.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        let matches = value.match(/\d{4,16}/g);
        let match = matches?.[0] || '';
        let parts = [];

        for(let i=0; i<match.length; i+=4) {
            parts.push(match.substring(i, i+4));
        }

        e.target.value = parts.join(' ').substr(0, 19);
    });
});

// File Upload Handling
document.querySelectorAll('.upload-box').forEach(box => {
    const input = box.querySelector('input');
    box.addEventListener('click', () => input.click());
    box.addEventListener('dragover', e => e.preventDefault());
    box.addEventListener('drop', e => {
        e.preventDefault();
        input.files = e.dataTransfer.files;
    });
});

// Form Validation
document.querySelector('.kyc-form').addEventListener('submit', e => {
    e.preventDefault();
    const files = document.querySelectorAll('.upload-box input[type="file"]');
    let isValid = true;

    files.forEach(input => {
        if(!input.files.length) {
            input.parentElement.style.borderColor = '#dc3545';
            isValid = false;
        }
    });

    if(isValid) {
        // Submit form
        alert('Verification submitted successfully!');
    }
});