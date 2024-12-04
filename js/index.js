 // JavaScript for Modal Functionality
 const uploadButton = document.getElementById('uploadButton');
 const uploadModal = document.getElementById('uploadModal');
 const closeModal = document.getElementById('closeModal');
 const dropZone = document.getElementById('dropZone');
 const fileInput = document.getElementById('fileInput');
 const chooseFile = document.getElementById('chooseFile');

 // Open Modal
 uploadButton.addEventListener('click', () => {
     uploadModal.classList.remove('hidden');
 });

 // Close Modal
 closeModal.addEventListener('click', () => {
     uploadModal.classList.add('hidden');
 });

 // Drag and Drop
 dropZone.addEventListener('dragover', (e) => {
     e.preventDefault();
     dropZone.classList.add('bg-blue-50');
 });

 dropZone.addEventListener('dragleave', () => {
     dropZone.classList.remove('bg-blue-50');
 });

 dropZone.addEventListener('drop', (e) => {
     e.preventDefault();
     dropZone.classList.remove('bg-blue-50');
     const file = e.dataTransfer.files[0];
     alert(`File uploaded: ${file.name}`);
 });

 // File Input Trigger
 chooseFile.addEventListener('click', () => fileInput.click());

 fileInput.addEventListener('change', () => {
     const file = fileInput.files[0];
     alert(`File chosen: ${file.name}`);
 });
