const button = document.getElementById('myButton');
const body = document.querySelector('body');
button.addEventListener('click', e=>{
    e.preventDefault();
    const p = document.createElement('p');
    p.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
    body.appendChild(p);
})