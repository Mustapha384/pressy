const body = document.getElementById("body");

  function setColor(color) {
      body.style.backgroundColor = color;
}
document.addEventListener('DOMContentLoaded', (event) => {
    // Function to change the background color
    function changeBackgroundColor(color) {
        document.getElementById('body').style.backgroundColor = color;
    }

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Event listeners for the buttons
    document.getElementById('omo').addEventListener('click', () => {
        changeBackgroundColor('green');
    });

    document.getElementById('boy').addEventListener('click', () => {
        changeBackgroundColor('blue');
    });

    document.getElementById('toy').addEventListener('click', () => {
        changeBackgroundColor('red');
    });

    document.getElementById('random').addEventListener('click', () => {
        changeBackgroundColor(getRandomColor());
    });
});
