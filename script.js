/* =========================================================
   Ask. Seek. Receive.
   ========================================================= */

const verses = [
    {
        id: 1,
        reference: {
            en: "Proverbs 3:5-6",
            ml: "സദൃശവാക്യങ്ങൾ 3:5-6"
        },
        text: {
            en: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
            ml: "പൂർണ്ണഹൃദയത്തോടെ യഹോവയിൽ ആശ്രയിക്ക; സ്വന്തവിവേകത്തിൽ ഊന്നരുത്. നിന്റെ എല്ലാ വഴികളിലും അവനെ അംഗീകരിക്ക; അവൻ നിന്റെ പാതകളെ നേരെയാക്കും."
        }
    },
    {
        id: 2,
        reference: {
            en: "Jeremiah 29:11",
            ml: "യിരെമ്യാവ് 29:11"
        },
        text: {
            en: "For I know the plans I have for you, plans to prosper you and not to harm you, plans to give you hope and a future.",
            ml: "നിങ്ങൾക്കായി ഞാൻ ആലോചിക്കുന്ന ആലോചനകൾ എനിക്ക് അറിയാം; അവ നിങ്ങൾക്ക് ശുഭമായുള്ളതും അനർത്ഥത്തിനല്ലാത്തതും പ്രത്യാശയും ഭാവിയും നൽകുന്നതുമാകുന്നു."
        }
    },
    {
        id: 3,
        reference: {
            en: "Psalm 23:1",
            ml: "സങ്കീർത്തനങ്ങൾ 23:1"
        },
        text: {
            en: "The Lord is my shepherd; I shall not want.",
            ml: "യഹോവ എന്റെ ഇടയനാകുന്നു; എനിക്ക് മുട്ടുണ്ടാകയില്ല."
        }
    },
    {
        id: 4,
        reference: {
            en: "Isaiah 41:10",
            ml: "യെശയ്യാവ് 41:10"
        },
        text: {
            en: "So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you.",
            ml: "ഭയപ്പെടേണ്ടാ, ഞാൻ നിന്നോടുകൂടെ ഉണ്ടല്ലോ; ഭ്രമിച്ചുനോക്കേണ്ടാ, ഞാൻ നിന്റെ ദൈവമാകുന്നു. ഞാൻ നിന്നെ ശക്തീകരിക്കും; ഞാൻ നിന്നെ സഹായിക്കും."
        }
    },
    {
        id: 5,
        reference: {
            en: "Philippians 4:6-7",
            ml: "ഫിലിപ്പിയർ 4:6-7"
        },
        text: {
            en: "Do not be anxious about anything, but in every situation, by prayer and petition, present your requests to God.",
            ml: "ഒന്നിനെക്കുറിച്ചും വിചാരപ്പെടരുത്; എല്ലാറ്റിലും പ്രാർത്ഥനയാലും അപേക്ഷയാലും നിങ്ങളുടെ ആവശ്യങ്ങൾ ദൈവത്തോട് അറിയിക്കുവിൻ."
        }
    },
    {
        id: 6,
        reference: {
            en: "Psalm 46:10",
            ml: "സങ്കീർത്തനങ്ങൾ 46:10"
        },
        text: {
            en: "Be still, and know that I am God.",
            ml: "നിശ്ചലരായി ഞാൻ ദൈവമെന്നു അറിഞ്ഞുകൊൾവിൻ."
        }
    },
    {
        id: 7,
        reference: {
            en: "James 1:5",
            ml: "യാക്കോബ് 1:5"
        },
        text: {
            en: "If any of you lacks wisdom, you should ask God, who gives generously to all without finding fault, and it will be given to you.",
            ml: "നിങ്ങളിൽ ഒരുത്തന് ജ്ഞാനം കുറവാകുന്നു എങ്കിൽ എല്ലാവർക്കും ഔദാര്യമായി നൽകുന്നവനും ആക്ഷേപിക്കാത്തവനുമായ ദൈവത്തോട് ചോദിക്കട്ടെ; അവന് ലഭിക്കും."
        }
    },
    {
        id: 8,
        reference: {
            en: "Psalm 119:105",
            ml: "സങ്കീർത്തനങ്ങൾ 119:105"
        },
        text: {
            en: "Your word is a lamp for my feet, a light on my path.",
            ml: "നിന്റെ വചനം എന്റെ കാലിന്നു ദീപവും എന്റെ പാതയ്ക്കു പ്രകാശവും ആകുന്നു."
        }
    },
    {
        id: 9,
        reference: {
            en: "Matthew 6:33",
            ml: "മത്തായി 6:33"
        },
        text: {
            en: "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
            ml: "മുമ്പെ അവന്റെ രാജ്യവും നീതിയും അന്വേഷിപ്പിൻ; ഇതെല്ലാം നിങ്ങൾക്ക് കൂട്ടിത്തരുന്നതാകുന്നു."
        }
    },
    {
        id: 10,
        reference: {
            en: "Romans 8:28",
            ml: "റോമർ 8:28"
        },
        text: {
            en: "And we know that in all things God works for the good of those who love him.",
            ml: "ദൈവത്തെ സ്നേഹിക്കുന്നവർക്ക്, അവന്റെ നിർണ്ണയപ്രകാരം വിളിക്കപ്പെട്ടവർക്ക്, സകലവും നന്മയ്ക്കായി കൂടി വ്യാപരിക്കുന്നു എന്നു നാം അറിയുന്നു."
        }
    },
    {
        id: 11,
        reference: {
            en: "Psalm 37:5",
            ml: "സങ്കീർത്തനങ്ങൾ 37:5"
        },
        text: {
            en: "Commit your way to the Lord; trust in him and he will do this.",
            ml: "നിന്റെ വഴി യഹോവയെ ഭരമേല്പിക്ക; അവനിൽ ആശ്രയിക്ക; അവൻ അതു നിർവ്വഹിക്കും."
        }
    },
    {
        id: 12,
        reference: {
            en: "Matthew 11:28",
            ml: "മത്തായി 11:28"
        },
        text: {
            en: "Come to me, all you who are weary and burdened, and I will give you rest.",
            ml: "അദ്ധ്വാനിക്കുന്നവരും ഭാരം ചുമക്കുന്നവരുമായ എല്ലാവരും എന്റെ അടുക്കൽ വരുവിൻ; ഞാൻ നിങ്ങളെ ആശ്വസിപ്പിക്കും."
        }
    },
    {
        id: 13,
        reference: {
            en: "Joshua 1:9",
            ml: "യോശുവ 1:9"
        },
        text: {
            en: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
            ml: "ബലവും ധൈര്യവും ഉള്ളവനായിരിക്ക. ഭയപ്പെടരുത്, ഭ്രമിച്ചുപോകരുത്; നീ പോകുന്നേടത്തൊക്കെയും നിന്റെ ദൈവമായ യഹോവ നിന്നോടുകൂടെ ഉണ്ട്."
        }
    },
    {
        id: 14,
        reference: {
            en: "Psalm 34:8",
            ml: "സങ്കീർത്തനങ്ങൾ 34:8"
        },
        text: {
            en: "Taste and see that the Lord is good; blessed is the one who takes refuge in him.",
            ml: "യഹോവ നല്ലവൻ എന്നു രുചിച്ചറിവിൻ; അവനിൽ ശരണം പ്രാപിക്കുന്ന മനുഷ്യൻ ഭാഗ്യവാൻ."
        }
    },
    {
        id: 15,
        reference: {
            en: "Proverbs 16:3",
            ml: "സദൃശവാക്യങ്ങൾ 16:3"
        },
        text: {
            en: "Commit to the Lord whatever you do, and he will establish your plans.",
            ml: "നിന്റെ പ്രവൃത്തികളെ യഹോവയെ ഭരമേല്പിക്ക; എന്നാൽ നിന്റെ ആലോചനകൾ സ്ഥിരമാകും."
        }
    },
    {
        id: 16,
        reference: {
            en: "Psalm 27:1",
            ml: "സങ്കീർത്തനങ്ങൾ 27:1"
        },
        text: {
            en: "The Lord is my light and my salvation—whom shall I fear? The Lord is the stronghold of my life.",
            ml: "യഹോവ എന്റെ വെളിച്ചവും എന്റെ രക്ഷയും ആകുന്നു; ഞാൻ ആരെ ഭയപ്പെടും? യഹോവ എന്റെ ജീവന്റെ കോട്ട ആകുന്നു."
        }
    },
    {
        id: 17,
        reference: {
            en: "Isaiah 40:31",
            ml: "യെശയ്യാവ് 40:31"
        },
        text: {
            en: "Those who hope in the Lord will renew their strength. They will soar on wings like eagles.",
            ml: "യഹോവയെ കാത്തിരിക്കുന്നവരോ ശക്തിയെ പുതുക്കും; അവർ കഴുകന്മാരെപ്പോലെ ചിറകുകളടിച്ചു കയറും."
        }
    },
    {
        id: 18,
        reference: {
            en: "Psalm 55:22",
            ml: "സങ്കീർത്തനങ്ങൾ 55:22"
        },
        text: {
            en: "Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken.",
            ml: "നിന്റെ ഭാരം യഹോവയുടെമേൽ ഇട്ടുകൊൾക; അവൻ നിന്നെ പുലർത്തും; നീതിമാനെ അവൻ ഒരുനാളും ഇളകുവാൻ സമ്മതിക്കയില്ല."
        }
    },
    {
        id: 19,
        reference: {
            en: "John 14:27",
            ml: "യോഹന്നാൻ 14:27"
        },
        text: {
            en: "Peace I leave with you; my peace I give you. Do not let your hearts be troubled and do not be afraid.",
            ml: "സമാധാനം ഞാൻ നിങ്ങൾക്കു തന്നിട്ടുപോകുന്നു; എന്റെ സമാധാനം നിങ്ങൾക്കു തരുന്നു. നിങ്ങളുടെ ഹൃദയം കലങ്ങരുത്; ഭയപ്പെടുകയും അരുത്."
        }
    },
    {
        id: 20,
        reference: {
            en: "Psalm 121:1-2",
            ml: "സങ്കീർത്തനങ്ങൾ 121:1-2"
        },
        text: {
            en: "I lift up my eyes to the mountains—where does my help come from? My help comes from the Lord, the Maker of heaven and earth.",
            ml: "ഞാൻ പർവ്വതങ്ങളിലേക്കു കണ്ണുയർത്തുന്നു; എനിക്ക് സഹായം എവിടെനിന്നു വരും? എന്റെ സഹായം ആകാശവും ഭൂമിയും ഉണ്ടാക്കിയ യഹോവയിങ്കൽനിന്നു വരുന്നു."
        }
    },
    {
        id: 21,
        reference: {
            en: "Psalm 91:4",
            ml: "സങ്കീർത്തനങ്ങൾ 91:4"
        },
        text: {
            en: "He will cover you with his feathers, and under his wings you will find refuge.",
            ml: "അവൻ തന്റെ തൂവലുകൾകൊണ്ടു നിന്നെ മറയ്ക്കും; അവന്റെ ചിറകിൻ കീഴിൽ നീ ശരണം പ്രാപിക്കും."
        }
    },
    {
        id: 22,
        reference: {
            en: "Lamentations 3:22-23",
            ml: "വിലാപങ്ങൾ 3:22-23"
        },
        text: {
            en: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning.",
            ml: "യഹോവയുടെ ദയയാൽ നാം നശിച്ചുപോകാതിരിക്കുന്നു; അവന്റെ കരുണ തീർന്നുപോയിട്ടില്ല. അതു രാവിലെതോറും പുതുതാകുന്നു."
        }
    },
    {
        id: 23,
        reference: {
            en: "Romans 15:13",
            ml: "റോമർ 15:13"
        },
        text: {
            en: "May the God of hope fill you with all joy and peace as you trust in him.",
            ml: "പ്രത്യാശയുടെ ദൈവം വിശ്വാസത്തിൽ നിങ്ങളെ സകല സന്തോഷവും സമാധാനവുംകൊണ്ടു നിറയ്ക്കുമാറാകട്ടെ."
        }
    },
    {
        id: 24,
        reference: {
            en: "Psalm 32:8",
            ml: "സങ്കീർത്തനങ്ങൾ 32:8"
        },
        text: {
            en: "I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.",
            ml: "നീ നടക്കേണ്ടുന്ന വഴി ഞാൻ നിന്നെ ഉപദേശിച്ചു കാണിച്ചുതരും; ഞാൻ നിനക്ക് ആലോചന പറഞ്ഞുതരും; എന്റെ കണ്ണ് നിന്റെമേൽ വെച്ചിരിക്കും."
        }
    },
    {
        id: 25,
        reference: {
            en: "Proverbs 4:23",
            ml: "സദൃശവാക്യങ്ങൾ 4:23"
        },
        text: {
            en: "Above all else, guard your heart, for everything you do flows from it.",
            ml: "സകലജാഗ്രതയോടുംകൂടെ നിന്റെ ഹൃദയത്തെ കാത്തുകൊൾക; ജീവന്റെ പുറപ്പാടുകൾ അതിൽനിന്നല്ലോ."
        }
    },
    {
        id: 26,
        reference: {
            en: "Psalm 16:8",
            ml: "സങ്കീർത്തനങ്ങൾ 16:8"
        },
        text: {
            en: "I keep my eyes always on the Lord. With him at my right hand, I will not be shaken.",
            ml: "ഞാൻ യഹോവയെ എപ്പോഴും എന്റെ മുമ്പിൽ വെച്ചിരിക്കുന്നു; അവൻ എന്റെ വലത്തുഭാഗത്തുള്ളതുകൊണ്ട് ഞാൻ കുലുങ്ങുകയില്ല."
        }
    },
    {
        id: 27,
        reference: {
            en: "2 Timothy 1:7",
            ml: "2 തിമൊഥെയൊസ് 1:7"
        },
        text: {
            en: "For God has not given us a spirit of fear, but of power and of love and of a sound mind.",
            ml: "ദൈവം നമുക്കു ഭീരുത്വത്തിന്റെ ആത്മാവിനെയല്ല, ശക്തിയുടെയും സ്നേഹത്തിന്റെയും സുബോധത്തിന്റെയും ആത്മാവിനെയത്രേ നൽകിയതു."
        }
    },
    {
        id: 28,
        reference: {
            en: "Psalm 62:5-6",
            ml: "സങ്കീർത്തനങ്ങൾ 62:5-6"
        },
        text: {
            en: "Yes, my soul, find rest in God; my hope comes from him. Truly he is my rock and my salvation.",
            ml: "എന്റെ ഉള്ളമേ, ദൈവത്തിൽ തന്നേ സ്വസ്ഥമായിരിക്ക; എന്റെ പ്രത്യാശ അവങ്കൽനിന്നാകുന്നു. അവൻ മാത്രം എന്റെ പാറയും എന്റെ രക്ഷയും ആകുന്നു."
        }
    },
    {
        id: 29,
        reference: {
            en: "Hebrews 11:1",
            ml: "എബ്രായർ 11:1"
        },
        text: {
            en: "Now faith is confidence in what we hope for and assurance about what we do not see.",
            ml: "വിശ്വാസം എന്നത് ആശിക്കുന്നതിന്റെ ഉറപ്പും കാണാത്ത കാര്യങ്ങളുടെ നിശ്ചയവും ആകുന്നു."
        }
    },
    {
        id: 30,
        reference: {
            en: "Psalm 19:14",
            ml: "സങ്കീർത്തനങ്ങൾ 19:14"
        },
        text: {
            en: "May the words of my mouth and the meditation of my heart be pleasing in your sight, Lord.",
            ml: "എന്റെ വായിലെ വാക്കുകളും എന്റെ ഹൃദയത്തിലെ ധ്യാനവും നിന്റെ സന്നിധിയിൽ പ്രസാദകരമായിരിക്കട്ടെ, യഹോവേ."
        }
    },
    {
        id: 31,
        reference: {
            en: "Matthew 7:7",
            ml: "മത്തായി 7:7"
        },
        text: {
            en: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.",
            ml: "ചോദിപ്പിൻ, എന്നാൽ നിങ്ങൾക്കു കിട്ടും; അന്വേഷിപ്പിൻ, എന്നാൽ നിങ്ങൾ കണ്ടെത്തും; മുട്ടുവിൻ, എന്നാൽ നിങ്ങൾക്കു തുറക്കും."
        }
    },
    {
        id: 32,
        reference: {
            en: "Psalm 34:18",
            ml: "സങ്കീർത്തനങ്ങൾ 34:18"
        },
        text: {
            en: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
            ml: "ഹൃദയം നുറുങ്ങിയവർക്കു യഹോവ സമീപസ്ഥൻ; മനസ്സു തകർന്നവരെ അവൻ രക്ഷിക്കുന്നു."
        }
    },
    {
        id: 33,
        reference: {
            en: "Psalm 118:24",
            ml: "സങ്കീർത്തനങ്ങൾ 118:24"
        },
        text: {
            en: "The Lord has made this day; let us rejoice and be glad in it.",
            ml: "ഇതു യഹോവ ഉണ്ടാക്കിയ ദിവസം; നാം അതിൽ സന്തോഷിച്ചു ആനന്ദിക്ക."
        }
    },
    {
        id: 34,
        reference: {
            en: "Colossians 3:15",
            ml: "കൊലൊസ്സ്യർ 3:15"
        },
        text: {
            en: "Let the peace of Christ rule in your hearts.",
            ml: "ക്രിസ്തുവിന്റെ സമാധാനം നിങ്ങളുടെ ഹൃദയങ്ങളിൽ വാഴട്ടെ."
        }
    },
    {
        id: 35,
        reference: {
            en: "Psalm 31:24",
            ml: "സങ്കീർത്തനങ്ങൾ 31:24"
        },
        text: {
            en: "Be strong and take heart, all you who hope in the Lord.",
            ml: "യഹോവയിൽ പ്രത്യാശവെക്കുന്ന ഏവരുമേ, ധൈര്യപ്പെടുവിൻ; നിങ്ങളുടെ ഹൃദയം ബലപ്പെടട്ടെ."
        }
    }
];


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