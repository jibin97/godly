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
   SECRET LOVE NOTE
   ========================================================= */

const loveAffirmations = [
    "I choose you, today, tomorrow, and every day after.",
    "You are my favorite person, my safe place, and my home.",
    "I hope you always know how deeply you are loved by me.",
    "I don’t just love you—I’m grateful for you.",
    "You deserve a love that makes you feel certain, and I’ll give you mine.",
    "My heart feels at peace when it’s with you.",
    "I’ll keep choosing you, even on the ordinary days.",
    "You are enough, exactly as you are, and I love you for it.",
    "I want to be the reason you feel loved, never the reason you doubt it.",
    "You have my heart, completely and genuinely.",
    "I’m lucky to love you, and even luckier to be loved by you.",
    "No matter how much time passes, I’ll never stop appreciating you.",
    "With you, love feels natural, peaceful, and real.",
    "I’ll always remind you of how special you are to me.",
    "You are the love I never want to take for granted.",
    "My love for you isn’t temporary—it’s a choice I make every day.",
    "I want to grow with you, laugh with you, and love you through it all.",
    "You make my heart feel like it’s exactly where it belongs.",
    "I see you, I appreciate you, and I love you more than words can say.",
    "If I had to choose again, I’d still choose you."
];


const loveHeart = document.getElementById("loveHeart");
const loveNote = document.getElementById("loveNote");
const closeLoveNote = document.getElementById("closeLoveNote");
const loveNoteMessage = document.querySelector(".love-note-message");


let loveHoldTimer = null;
let loveHoldTriggered = false;


/* ---------------------------------------------------------
   Get Random Love Affirmation
   --------------------------------------------------------- */

function getRandomLoveAffirmation() {

    const randomIndex = Math.floor(
        Math.random() * loveAffirmations.length
    );

    return loveAffirmations[randomIndex];
}


/* ---------------------------------------------------------
   Open after 3-second hold
   --------------------------------------------------------- */

function startLoveHold() {

    if (loveHoldTriggered) {
        return;
    }

    loveHeart.classList.add("holding");

    loveHoldTimer = setTimeout(() => {

        loveHoldTriggered = true;

        loveHeart.classList.remove("holding");

        // Choose a new message every time the note opens.
        const affirmation = getRandomLoveAffirmation();

        // Put the selected message into the popup.
        loveNoteMessage.textContent = affirmation;

        // Show popup.
        loveNote.classList.add("visible");

    }, 3000);
}


/* ---------------------------------------------------------
   Cancel hold
   --------------------------------------------------------- */

function cancelLoveHold() {

    if (loveHoldTimer !== null) {

        clearTimeout(loveHoldTimer);

        loveHoldTimer = null;
    }

    loveHeart.classList.remove("holding");
}


/* ---------------------------------------------------------
   Close popup
   --------------------------------------------------------- */

function closeLoveNotePopup() {

    loveNote.classList.remove("visible");

    loveHoldTriggered = false;
}


/* ---------------------------------------------------------
   Mouse events
   --------------------------------------------------------- */

loveHeart.addEventListener(
    "mousedown",
    startLoveHold
);

loveHeart.addEventListener(
    "mouseup",
    cancelLoveHold
);

loveHeart.addEventListener(
    "mouseleave",
    cancelLoveHold
);


/* ---------------------------------------------------------
   Touch events
   --------------------------------------------------------- */

loveHeart.addEventListener(
    "touchstart",
    startLoveHold,
    {
        passive: true
    }
);

loveHeart.addEventListener(
    "touchend",
    cancelLoveHold
);

loveHeart.addEventListener(
    "touchcancel",
    cancelLoveHold
);


/* ---------------------------------------------------------
   Close button
   --------------------------------------------------------- */

closeLoveNote.addEventListener(
    "click",
    closeLoveNotePopup
);


/* ---------------------------------------------------------
   Click outside popup
   --------------------------------------------------------- */

loveNote.addEventListener("click", (event) => {

    if (event.target === loveNote) {
        closeLoveNotePopup();
    }

});


/* ---------------------------------------------------------
   Escape key
   --------------------------------------------------------- */

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        loveNote.classList.contains("visible")
    ) {
        closeLoveNotePopup();
    }

});


/* =========================================================
   Initial State
   ========================================================= */

setLanguage(currentLanguage);

document.documentElement.lang = currentLanguage;