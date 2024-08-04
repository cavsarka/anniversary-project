document.addEventListener("DOMContentLoaded", function() {
    const jar = document.getElementById('jar');
    const text = document.getElementById('text');

    const messages = ["This shit cool and it work, This shit cool and it work, This shit cool and it work", "it's eefoc and it's funny, it's eefoc and it's funny, it's eefoc and it's funny"]

    let n = 0;

    jar.addEventListener('click', function() {
        // Add vibration class to jar
        jar.classList.add('vibrate');

        k = n%2; 
        // Change text
        text.innerHTML = messages[k];
        text.style.fontSize = "45px";
        
        n += 1;

        setTimeout(() => {
            jar.classList.remove('vibrate');
        }, 500); // Remove vibration class after animation ends
        // Duration of the vibration
    });
});
