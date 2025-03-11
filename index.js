function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('clock').innerText = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock();

document.getElementById('startButton').addEventListener('click', function() {
    const startMenu = document.getElementById('startMenu');
    startMenu.style.display = startMenu.style.display === 'flex' ? 'none' : 'flex';
});

document.getElementById('searchInput').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const icons = document.querySelectorAll('.icon');
    
    icons.forEach(icon => {
        const name = icon.getAttribute('data-name').toLowerCase();
        if (name.includes(query)) {
            icon.classList.remove('hidden');
        } else {
            icon.classList.add('hidden');
        }
    });
});

function changeBackground(color) {
    const backgrounds = {
        'yellow': './assets/windows_bg_1.jpg',
        'red': './assets/windows_bg_2.jpg',
        'green': './assets/windows_bg_3.jpg',
        'blue': './assets/windows_bg_4.jpg'
    };
    document.body.style.transition = 'background 0.5s ease-in-out';
    document.body.style.background = `url('${backgrounds[color]}') no-repeat center center/cover`;
}