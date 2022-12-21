function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
    
function toggleTheme() {
if (localStorage.getItem('theme') === 'theme-dark'){
    setTheme('theme-light');
    document.getElementById('icona-tema').classList.remove("bxs-sun");
    document.getElementById('icona-tema').classList.add("bxs-moon");
} else {
    setTheme('theme-dark');
    document.getElementById('icona-tema').classList.remove("bxs-moon");
    document.getElementById('icona-tema').classList.add("bxs-sun");
}
}
 
// when the page is load do seTheme whit the localStorage value vanilla js
window.addEventListener('load', e => {
    setTheme(localStorage.getItem('theme'));
});
