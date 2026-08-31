/* =========================================================
   Elements
   ========================================================= */

const divineButton = document.getElementById("divineButton");
const experience = document.querySelector(".experience");
const verseContainer = document.getElementById("verseContainer");
const verseText = document.getElementById("verseText");
const verseReference = document.getElementById("verseReference");
const languageButtons = document.querySelectorAll(".language");


/* =========================================================
   State
   ========================================================= */

const savedLanguage = localStorage.getItem("bibleLanguage");

let currentLanguage =
    savedLanguage === "ml" || savedLanguage === "en"
        ? savedLanguage
        : "en";

let currentVerse = null;
let lastVerseId = null;
let isRevealing = false;


/* =========================================================
   Language
   ========================================================= */

function setLanguage(language) {
    currentLanguage = language;

    localStorage.setItem("bibleLanguage", language);

    document.documentElement.lang = language;

    languageButtons.forEach(button => {
        const isActive = button.dataset.language === language;

        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    /*
     * If a verse is already visible, simply change its language.
     * Do NOT select another verse.
     */
    if (currentVerse) {
        displayVerse(currentVerse, false);
    }
}


/* =========================================================
   Random Verse
   ========================================================= */

function getRandomVerse() {
    const availableVerses = verses.filter(
        verse => verse.id !== lastVerseId
    );

    const randomIndex = Math.floor(
        Math.random() * availableVerses.length
    );

    return availableVerses[randomIndex];
}


/* =========================================================
   Verse Rendering
   ========================================================= */

function createAnimatedWords(text) {
    /*
     * Splitting on whitespace preserves Malayalam characters
     * while allowing a gentle word-by-word reveal.
     */
    const words = text.trim().split(/\s+/);

    return words.map((word, index) => {
        const span = document.createElement("span");

        span.className = "verse-word";
        span.textContent = word;

        /*
         * Small stagger between words.
         * Capped so long verses don't take excessively long.
         */
        const delay = Math.min(index * 35, 900);

        span.style.animationDelay = `${delay}ms`;

        return span;
    });
}


function displayVerse(verse, animate = true) {
    if (!verse) {
        return;
    }

    currentVerse = verse;

    const text = verse.text[currentLanguage];
    const reference = verse.reference[currentLanguage];

    verseText.innerHTML = "";
    verseReference.textContent = `— ${reference}`;

    verseContainer.classList.toggle(
        "ml",
        currentLanguage === "ml"
    );

    if (animate) {
        const words = createAnimatedWords(text);

        words.forEach((word, index) => {
            verseText.appendChild(word);

            if (index < words.length - 1) {
                verseText.appendChild(
                    document.createTextNode(" ")
                );
            }
        });
    } else {
        verseText.textContent = text;
    }

    verseContainer.setAttribute("aria-hidden", "false");
}


/* =========================================================
   Reveal Sequence
   ========================================================= */

function revealVerse() {
    if (isRevealing) {
        return;
    }

    isRevealing = true;

    const newVerse = getRandomVerse();

    lastVerseId = newVerse.id;

    /*
     * Let the button breathe away before the Scripture appears.
     */
    divineButton.style.opacity = "0";
    divineButton.style.transform = "scale(0.92)";

    setTimeout(() => {
        displayVerse(newVerse, true);

        experience.classList.add("has-verse");

        /*
         * Give the verse its own quiet entrance.
         */
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                verseContainer.classList.add("visible");
            });
        });

    }, 350);


    /*
     * Bring the button back as the smaller "Ask Again"
     * after the verse has begun appearing.
     */
    setTimeout(() => {
        divineButton.style.opacity = "1";
        divineButton.style.transform = "translateX(-50%) scale(1)";

        divineButton.setAttribute(
            "aria-label",
            "Ask for another Bible verse"
        );

        const label = divineButton.querySelector(".button-label");
        label.textContent = "Ask Again";

        isRevealing = false;
    }, 1500);
}


/* =========================================================
   Button Interaction
   ========================================================= */

divineButton.addEventListener("click", () => {
    if (isRevealing) {
        return;
    }

    /*
     * First press: reveal.
     * Later presses: gracefully replace the current verse.
     */
    if (!currentVerse) {
        revealVerse();
        return;
    }

    verseContainer.classList.remove("visible");

    divineButton.style.opacity = "0.35";

    setTimeout(() => {
        revealVerse();
    }, 550);
});


/* =========================================================
   Language Interaction
   ========================================================= */

languageButtons.forEach(button => {
    button.addEventListener("click", () => {
        setLanguage(button.dataset.language);
    });
});


/* =========================================================
   Initial State
   ========================================================= */

setLanguage(currentLanguage);

document.documentElement.lang = currentLanguage;