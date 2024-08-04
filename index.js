document.addEventListener("DOMContentLoaded", function() {
    const jar = document.getElementById('jar');
    const text = document.getElementById('text');

    const messages = ["This shit cool and it work, This shit cool and it work, This shit cool and it work", "it's eefoc and it's funny, it's eefoc and it's funny, it's eefoc and it's funny"]

    jar.addEventListener('click', function() {
        // Add vibration class to jar
        jar.classList.add('vibrate');


        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)); // The maximum is exclusive and the minimum is inclusive
          }

        k = getRandomInt(0, messages.length);

        // Change text
        text.innerHTML = messages[k];
        text.style.fontSize = "45px";

        setTimeout(() => {
            jar.classList.remove('vibrate');
        }, 500); // Remove vibration class after animation ends
        // Duration of the vibration
    });
});
