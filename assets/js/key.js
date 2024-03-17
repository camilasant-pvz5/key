var color = 'white';
document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = 'pink';
    } else if (event.key === 's') {
        color = 'orange';
    } else if (event.key === 'd') {
        color = 'lightblue';
    } 
    document.getElementById('key').style.backgroundColor = color;
});