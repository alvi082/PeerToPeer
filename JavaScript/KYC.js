document.addEventListener('DOMContentLoaded', () => {
    // File Upload Handling
    const uploadBoxes = document.querySelectorAll('.upload-box');

    uploadBoxes.forEach(box => {
        const input = box.querySelector('input[type="file"]');
        const preview = box.parentElement.querySelector('.upload-preview');

        // Drag & Drop Events
        box.addEventListener('dragover', (e) => {
            e.preventDefault();
            box.classList.add('dragover');
        });

        box.addEventListener('dragleave', () => {
            box.classList.remove('dragover');
        });

        box.addEventListener('drop', (e) => {
            e.preventDefault();
            box.classList.remove('dragover');
            handleFiles(e.dataTransfer.files);
        });

        // File Input Change
        input.addEventListener('change', (e) => {
            handleFiles(e.target.files);
        });

        function handleFiles(files) {
            if(files.length > 0) {
                const file = files[0];
                if(validateFile(file)) {
                    showPreview(file);
                    box.classList.remove('error');
                } else {
                    box.classList.add('error');
                }
            }
        }

        function validateFile(file) {
            const validTypes = ['image/jpeg', 'image/png', 'application/pdf'];
            return validTypes.includes(file.type);
        }

        function showPreview(file) {
            preview.innerHTML = `
                <div class="file-preview">
                    <i class="fas fa-file"></i>
                    <div>
                        <span>${file.name}</span>
                        <small>${(file.size/1024).toFixed(1)}KB</small>
                    </div>
                </div>
            `;
        }
    });

    // Form Submission
    document.querySelector('.btn-primary').addEventListener('click', (e) => {
        e.preventDefault();
        // Add validation and submission logic here
        alert('Verification submitted successfully!');
    });
});