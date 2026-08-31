
/* =========================================================
   ASK. SEEK. RECEIVE.
   Main Application Logic
   ========================================================= */

/* ---------------------------------------------------------
   DOM Elements
   --------------------------------------------------------- */

const divineButton = document.getElementById("divineButton");
const verseContainer = document.getElementById("verseContainer");
const verseText = document.getElementById("verseText");
const verseReference = document.getElementById("verseReference");

const langEn = document.getElementById("langEn");
const langMl = document.getElementById("langMl");


/* ---------------------------------------------------------
   Application State
   --------------------------------------------------------- */

// English is the default language.
// Remember the user's choice between visits.
let currentLanguage = localStorage.getItem("language") || "en";

// The verse currently being displayed.
let currentVerse = null;

// Prevent the same verse from appearing twice consecutively.
let lastVerseId = null;

// Prevent multiple clicks while the reveal animation is running.
let isRevealing = false;


/* ---------------------------------------------------------
   Language
   --------------------------------------------------------- */

function setLanguage(language) {
    if (language !== "en" && language !== "ml") {
        return;
    }

    currentLanguage = language;

    // Save language preference.
    localStorage.setItem("language", language);

    // Update HTML language attribute.
    document.documentElement.lang = language;

    // Update visual state of language buttons.
    updateLanguageToggle();

    // If a verse is already visible,
    // change ONLY its language.
    // Do not generate a new verse.
    if (currentVerse) {
        displayCurrentVerse();
    }
}


function updateLanguageToggle() {
    if (langEn) {
        langEn.classList.toggle(
            "active",
            currentLanguage === "en"
        );
    }

    if (langMl) {
        langMl.classList.toggle(
            "active",
            currentLanguage === "ml"
        );
    }
}


/* ---------------------------------------------------------
   Random Verse
   --------------------------------------------------------- */

function getRandomVerse() {

    // Safety check.
    if (!Array.isArray(verses) || verses.length === 0) {
        console.error("No verses found in verses.js");
        return null;
    }

    // If there is only one verse, simply return it.
    if (verses.length === 1) {
        return verses[0];
    }

    // Remove the previous verse from the possibilities.
    const availableVerses = verses.filter(
        verse => verse.id !== lastVerseId
    );

    // Pick a random verse.
    const randomIndex = Math.floor(
        Math.random() * availableVerses.length
    );

    const selectedVerse = availableVerses[randomIndex];

    // Remember it so it cannot immediately repeat.
    lastVerseId = selectedVerse.id;

    return selectedVerse;
}


/* ---------------------------------------------------------
   Display Current Verse
   --------------------------------------------------------- */

function displayCurrentVerse() {

    if (!currentVerse) {
        return;
    }

    const text =
        currentVerse.text[currentLanguage];

    const reference =
        currentVerse.reference[currentLanguage];

    if (verseText) {
        verseText.textContent = text;
    }

    if (verseReference) {
        verseReference.textContent = `— ${reference}`;
    }
}


/* ---------------------------------------------------------
   Verse Reveal
   --------------------------------------------------------- */

function revealVerse() {

    // Prevent accidental double clicks during animation.
    if (isRevealing) {
        return;
    }

    isRevealing = true;

    // Select a new verse.
    currentVerse = getRandomVerse();

    if (!currentVerse) {
        isRevealing = false;
        return;
    }

    // Get the translated text.
    const text =
        currentVerse.text[currentLanguage];

    const reference =
        currentVerse.reference[currentLanguage];


    /* -----------------------------------------------------
       Prepare the verse
       ----------------------------------------------------- */

    if (verseText) {
        verseText.textContent = "";
    }

    if (verseReference) {
        verseReference.textContent = "";
    }


    /* -----------------------------------------------------
       Transform the button
       ----------------------------------------------------- */

    if (divineButton) {
        divineButton.classList.add("revealing");
    }

    if (verseContainer) {
        verseContainer.classList.remove("visible");
        verseContainer.classList.add("revealing");
    }


    /* -----------------------------------------------------
       Wait briefly before revealing the words
       ----------------------------------------------------- */

    setTimeout(() => {

        if (!verseText) {
            finishReveal();
            return;
        }

        // Split the verse into individual words.
        const words = text.split(" ");

        words.forEach((word, index) => {

            const span = document.createElement("span");

            span.textContent =
                word + (index < words.length - 1 ? " " : "");

            span.className = "verse-word";

            // Progressive delay.
            span.style.animationDelay =
                `${index * 35}ms`;

            verseText.appendChild(span);
        });

    }, 350);


    /* -----------------------------------------------------
       Reveal reference after the verse
       ----------------------------------------------------- */

    const verseDuration =
        Math.max(1000, text.split(" ").length * 35 + 600);

    setTimeout(() => {

        if (verseReference) {
            verseReference.textContent =
                `— ${reference}`;

            verseReference.classList.add("visible");
        }

    }, verseDuration);


    /* -----------------------------------------------------
       Complete animation
       ----------------------------------------------------- */

    setTimeout(() => {

        if (verseContainer) {
            verseContainer.classList.remove("revealing");
            verseContainer.classList.add("visible");
        }

        if (divineButton) {
            divineButton.classList.remove("revealing");
            divineButton.classList.add("revealed");
        }

        finishReveal();

    }, verseDuration + 500);
}


/* ---------------------------------------------------------
   Finish Reveal
   --------------------------------------------------------- */

function finishReveal() {
    isRevealing = false;
}


/* ---------------------------------------------------------
   Ask Again
   --------------------------------------------------------- */

function askAgain() {

    if (isRevealing) {
        return;
    }

    // Hide the current verse first.
    if (verseContainer) {
        verseContainer.classList.remove("visible");
    }

    if (verseReference) {
        verseReference.classList.remove("visible");
    }

    // Give the UI a tiny breathing moment.
    setTimeout(() => {

        revealVerse();

    }, 250);
}


/* ---------------------------------------------------------
   Button Click
   --------------------------------------------------------- */

if (divineButton) {

    divineButton.addEventListener(
        "click",
        () => {

            // First click reveals a verse.
            // Later clicks reveal another verse.
            revealVerse();

        }
    );
}


/* ---------------------------------------------------------
   Language Buttons
   --------------------------------------------------------- */

if (langEn) {

    langEn.addEventListener(
        "click",
        () => {
            setLanguage("en");
        }
    );
}


if (langMl) {

    langMl.addEventListener(
        "click",
        () => {
            setLanguage("ml");
        }
    );
}


/* ---------------------------------------------------------
   Keyboard Accessibility
   --------------------------------------------------------- */

// Buttons already support Enter and Space naturally.
// This section is intentionally kept minimal.


/* ---------------------------------------------------------
   Initial Setup
   --------------------------------------------------------- */

function initializeApp() {

    // Set the correct HTML language.
    document.documentElement.lang =
        currentLanguage;

    // Update EN / ML visual state.
    updateLanguageToggle();

    // Make sure no verse is initially visible.
    if (verseContainer) {
        verseContainer.classList.remove("visible");
        verseContainer.classList.remove("revealing");
    }

    if (verseReference) {
        verseReference.classList.remove("visible");
    }

    // Make sure the main button starts in its original state.
    if (divineButton) {
        divineButton.classList.remove("revealing");
        divineButton.classList.remove("revealed");
    }
}


/* ---------------------------------------------------------
   Start
   --------------------------------------------------------- */

initializeApp();
