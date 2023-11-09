let word = document.getElementById('word');

let dict = {
    test: "prueba",
}

word.addEventListener('click', async () => {
    await fadeOut(word);
    translateWord(word);
    await fadeIn(word);
});

async function fadeOut(element) {
    var opacity = 1;  // Initial opacity
    const fadeDuration = 500; // Duration in milliseconds
    const opacityInterval = 0.1;

    return new Promise(async (resolve) => {
        const fadeOutAnimation = () => {
            opacity -= opacityInterval;
            if (opacity <= 0) {
                element.style.opacity = 0;
                resolve();
            } else {
                element.style.opacity = opacity;
                setTimeout(fadeOutAnimation, fadeDuration * opacityInterval);
            }
        };

        fadeOutAnimation();
    });
}

async function fadeIn(element) {
    var opacity = 0; // Initial opacity
    const fadeDuration = 500; // Duration in milliseconds
    const opacityInterval = 0.1;

    element.style.display = "block"; // Ensure the element is visible

    return new Promise(async (resolve) => {
        const fadeInAnimation = () => {
            opacity += opacityInterval;
            if (opacity >= 1) {
                element.style.opacity = 1;
                resolve();
            } else {
                element.style.opacity = opacity;
                setTimeout(fadeInAnimation, fadeDuration * opacityInterval);
            }
        };

        fadeInAnimation();
    });
}

function translateWord(element) {
    const word = element.innerText;
    let translation = dict[element.innerText.toLowerCase()];

    if (dict[element.innerText.toLowerCase()]) {
        translation = dict[element.innerText.toLowerCase()];
    } else {
        for (let value in dict) {
            if (dict[value].toLowerCase() === word.toLowerCase()) {
                translation = value;
            }
        }
    }

    //Capitalizes the word if the translated word was also capitalized.
    if (/[A-Z]/.test(word[0])) {
        translation = translation[0].toUpperCase() + translation.slice(1, translation.length);
    }

    element.innerHTML = translation;
}
