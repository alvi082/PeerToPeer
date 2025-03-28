// Page Navigation
function showPage(pageId) {
    document.getElementById('homePage').style.display = pageId === 'home' ? 'block' : 'none';
    document.getElementById('postOrderPage').style.display = pageId === 'postOrder' ? 'block' : 'none';

    // Update active class on navigation links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${pageId}`) {
            link.classList.add('active');
        }
    });
}

// Previous JavaScript implementations
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Initialize with home page
showPage('home');

// Previous form step logic remains the same
let currentStep = 1;
const totalSteps = 4;

function updateProgress() {
    document.querySelectorAll('.step').forEach((step, index) => {
        step.classList.toggle('active', index < currentStep);
    });
}

function nextStep() {
    if (currentStep < totalSteps) {
        document.getElementById(`step${currentStep}`).classList.remove('active');
        currentStep++;
        document.getElementById(`step${currentStep}`).classList.add('active');
        updateProgress();
    }
}

function prevStep() {
    if (currentStep > 1) {
        document.getElementById(`step${currentStep}`).classList.remove('active');
        currentStep--;
        document.getElementById(`step${currentStep}`).classList.add('active');
        updateProgress();
    }
}















