function changeBackground() {
    const color = getRandomColor();
    document.body.style.backgroundColor = color;
    document.getElementById('colorCode').textContent = `Background Color: ${color}`;
}

function copyColorCode() {
    const color = document.getElementById('colorCode').textContent.replace('Background Color: ', '');
    navigator.clipboard.writeText(color);
    alert('Color code copied: ' + color);
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
