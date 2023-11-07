let word = document.getElementById('word');

let dict = {
    test: "prueba",
}

word.addEventListener('click', () => {
    translateWord(word)
});

function fadeOut(element) {
    var opacity = 1;  // Initial opacity

    // Create an interval to gradually reduce the opacity
    var fadeInterval = setInterval(function () {
        if (opacity <= 0) {
            // When opacity is 0 or negative, stop the interval
            clearInterval(fadeInterval);
            // element.style.display = "none"; // Optionally hide the element
            //Load translated word.
        } else {
            opacity -= 0.1; // Decrease opacity in steps
            element.style.opacity = opacity;
        }
    }, 50); // Adjust the interval time (in milliseconds) as needed
}

function fadeIn(element) {
    var opacity = 0; // Initial opacity

    element.style.display = "block"; // Ensure the element is visible

    // Create an interval to gradually increase the opacity
    var fadeInterval = setInterval(function () {
        if (opacity >= 1) {
            // When opacity is 1 or greater, stop the interval
            clearInterval(fadeInterval);
        } else {
            opacity += 0.1; // Increase opacity in steps
            element.style.opacity = opacity;
        }
    }, 100); // Adjust the interval time (in milliseconds) as needed
}

async function translateWord(element) {
    await fadeOut(element);
    const word = element.innerText;
    let translation = dict[element.innerText.toLowerCase()];

    // If the first letter of the word being translated is capitalized, capitalize the first letter of the translation.
    if (/[A-Z]/.test(word[0])) {
        translation = translation[0].toUpperCase() + translation.slice(1, translation.length);
    }

    element.innerHTML = translation;
    // fadeIn(element);
}