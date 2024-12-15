// Hide the splash screen after 3 seconds
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splash-screen').style.display = 'none';
    }, 3000);
});