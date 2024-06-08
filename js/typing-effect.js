document.addEventListener("DOMContentLoaded", () => {
    const headerTexts = [
        "Math Statics Course",
        "Welcome to the Best Learning Experience",
        "Let's Explore the World of Statics"
    ];
    const headerElement = document.getElementById("header-text");
    let textIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        if (textIndex < headerTexts.length) {
            if (charIndex < headerTexts[textIndex].length) {
                headerElement.innerHTML += headerTexts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeEffect, 100);
            } else {
                headerElement.innerHTML += "<br>"; // Add a line break after each sentence
                textIndex++;
                charIndex = 0;
                setTimeout(typeEffect, 500); // Pause before typing the next line
            }
        }
    }

    typeEffect();
});
