// scripts/footer.js
const yearEl = document.getElementById('year');
const lastEl = document.getElementById('lastModified');
if (yearEl) yearEl.textContent = new Date().getFullYear();
if (lastEl) lastEl.textContent = document.lastModified;
