document.addEventListener('DOMContentLoaded', (event) => { 
    const element = document.getElementById('currentyear'); 
    const currentYear = new Date().getFullYear(); 
element.textContent = `\u00A9${currentYear} ${element.textContent}`; 
}); 
document.addEventListener('DOMContentLoaded', (event) => {
    const element = document.getElementById('lastModified');
element.textContent = `Last Modification: ${document.lastModified}`
})