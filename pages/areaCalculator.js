function calculateAreaCost() {
    const area = document.getElementById('area').value;
    let areaCost = 0;

    if (area === 'rectangular') {
        const length = parseFloat(document.getElementById('length').value) || 0;
        const width = parseFloat(document.getElementById('width').value) || 0;
        const height = parseFloat(document.getElementById('height').value) || 0;
        areaCost = length * width * height / 2; // Прямоугольник
    } else if (area === 'sphere') {
        const radius = parseFloat(document.getElementById('radius').value) || 0;
        areaCost = radius * 3; // Сфера
    } else if (area === 'cylinder') {
        const cylinderHeight = parseFloat(document.getElementById('cylinderHeight').value) || 0;
        const cylinderRadius = parseFloat(document.getElementById('cylinderRadius').value) || 0;
        areaCost = cylinderRadius * cylinderHeight; // Цилиндр
    } else if (area === 'cone') {
        const coneHeight = parseFloat(document.getElementById('coneHeight').value) || 0;
        const coneRadius = parseFloat(document.getElementById('coneRadius').value) || 0;
        areaCost = coneRadius * coneHeight / 10; // Конус
    } else if (area === 'line') {
        const lineLength = parseFloat(document.getElementById('lineLength').value) || 0;
        areaCost = lineLength; // Линия
    }

    return areaCost;
}
