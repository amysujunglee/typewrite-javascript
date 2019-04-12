const texts = ['front-end developer.', 'UX designer.', 'graphic designer.'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if(count === texts.length) {
        count = 0; // loop
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length) {
        count++;
        index = 0; // keep going
    }
    setTimeout(type, 300);
}()); // close a function with '()' and add '()' at the end to make it run immediately
