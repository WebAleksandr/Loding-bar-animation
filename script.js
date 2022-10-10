let conatiner = document.querySelector('.container');
let output = document.querySelector('.output');
let fill = document.querySelector('.fill');
let clickBtn = document.querySelector('button');


clickBtn.addEventListener('click', () => {
    var a = 0;
    var run = setInterval(frames, 35);

    function frames() {
        a = a + 1;
        if (a == 101) {
            clearInterval(run);
            conatiner.style.display = 'none';
            output.style.display = 'block';
        } else {
            var counter = document.querySelector('.counter');
            counter.textContent = a + "%";
            fill.style.width = a + '%';
        }
    }
});