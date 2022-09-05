let counts = document.querySelectorAll('.count');
let number = 0;
window.onscroll = () => {
    if (scrollY > 2850) {
        var stop = setInterval(update, 100);
    } else {
        counts.forEach(element => {
            number = 0;
            element.innerHTML = number;
        });
    }
    function update() {
        counts.forEach(element => {
            element.innerHTML = number++;
            if (number >= 3000) {
                clearInterval(stop);

            }

        });
    }
};