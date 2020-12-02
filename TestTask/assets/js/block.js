function openBox(box) {
    let display = document.getElementById(box).style.display;
    if (display === 'none') {
        document.getElementById(box).style.display='block';
    } else {
        document.getElementById(box).style.display='none';
    }
}

openBox(box);