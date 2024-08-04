document.addEventListener("DOMContentLoaded", function() {
    const jar = document.getElementById('jar');
    const text = document.getElementById('text');

    const messages = ["You are the most gorgeous girl in the entire world", "Your smile brightens up my day every single day", "I love how supportive you are everytime I need it", "You're beautiful", "You always know how to make me laugh", "You are very very caring", 
    "You're so driven and it makes me want to do more too", "You're insanely fun to travel with", "You make the best Teague dinners", "I love how your always complimenting me", "Ari kisses are the best thing in the world", "hella freaky", "mwah mwah mwah mwah mwah",
"everything about our whole Cancun trip", "How you brought me a cup of candy after work every day", "How caring and sweet you are when I'm not feeling well", "How you're always very grateful for anything I do", "How you care SO much about me being happy"];

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
