// verses.js

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
    },

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
            en: "For I know the plans I have for you, plans for peace and not for evil, to give you a future and a hope.",
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
            en: "Fear not, for I am with you; be not dismayed, for I am your God. I will strengthen you and help you.",
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
            en: "Do not be anxious about anything, but in everything by prayer and supplication let your requests be made known to God.",
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
            en: "If any of you lacks wisdom, let him ask God, who gives generously to all without reproach.",
            ml: "നിങ്ങളിൽ ഒരുത്തന് ജ്ഞാനം കുറവാകുന്നു എങ്കിൽ എല്ലാവർക്കും ഔദാര്യമായി നൽകുന്ന ദൈവത്തോട് ചോദിക്കട്ടെ."
        }
    },

    {
        id: 8,
        reference: {
            en: "Psalm 119:105",
            ml: "സങ്കീർത്തനങ്ങൾ 119:105"
        },
        text: {
            en: "Your word is a lamp to my feet and a light to my path.",
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
            en: "Seek first the kingdom of God and his righteousness, and all these things will be given to you.",
            ml: "മുമ്പെ ദൈവത്തിന്റെ രാജ്യവും അവന്റെ നീതിയും അന്വേഷിപ്പിൻ; ഇതെല്ലാം നിങ്ങൾക്കു കൂട്ടിത്തരുന്നതാകുന്നു."
        }
    },

    {
        id: 10,
        reference: {
            en: "Romans 8:28",
            ml: "റോമർ 8:28"
        },
        text: {
            en: "We know that God works all things together for good for those who love him.",
            ml: "ദൈവത്തെ സ്നേഹിക്കുന്നവർക്ക് സകലവും നന്മയ്ക്കായി കൂടി വ്യാപരിക്കുന്നു എന്നു നാം അറിയുന്നു."
        }
    },

    {
        id: 11,
        reference: {
            en: "Psalm 37:5",
            ml: "സങ്കീർത്തനങ്ങൾ 37:5"
        },
        text: {
            en: "Commit your way to the Lord; trust in him, and he will act.",
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
            en: "Come to me, all who labor and are heavy laden, and I will give you rest.",
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
            en: "Be strong and courageous. Do not be afraid, for the Lord your God is with you wherever you go.",
            ml: "ബലവും ധൈര്യവും ഉള്ളവനായിരിക്ക. ഭയപ്പെടരുത്; നീ പോകുന്നേടത്തൊക്കെയും നിന്റെ ദൈവമായ യഹോവ നിന്നോടുകൂടെ ഉണ്ട്."
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
            en: "Commit your work to the Lord, and your plans will be established.",
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
            en: "The Lord is my light and my salvation; whom shall I fear?",
            ml: "യഹോവ എന്റെ വെളിച്ചവും എന്റെ രക്ഷയും ആകുന്നു; ഞാൻ ആരെ ഭയപ്പെടും?"
        }
    },

    {
        id: 17,
        reference: {
            en: "Isaiah 40:31",
            ml: "യെശയ്യാവ് 40:31"
        },
        text: {
            en: "Those who wait for the Lord shall renew their strength; they shall rise on wings like eagles.",
            ml: "യഹോവയെ കാത്തിരിക്കുന്നവർ ശക്തിയെ പുതുക്കും; അവർ കഴുകന്മാരെപ്പോലെ ചിറകുകളടിച്ചു കയറും."
        }
    },

    {
        id: 18,
        reference: {
            en: "Psalm 55:22",
            ml: "സങ്കീർത്തനങ്ങൾ 55:22"
        },
        text: {
            en: "Cast your burden on the Lord, and he will sustain you.",
            ml: "നിന്റെ ഭാരം യഹോവയുടെമേൽ ഇട്ടുകൊൾക; അവൻ നിന്നെ പുലർത്തും."
        }
    },

    {
        id: 19,
        reference: {
            en: "John 14:27",
            ml: "യോഹന്നാൻ 14:27"
        },
        text: {
            en: "Peace I leave with you; my peace I give you. Let not your heart be troubled or afraid.",
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
            en: "I lift up my eyes to the hills. From where does my help come? My help comes from the Lord.",
            ml: "ഞാൻ പർവ്വതങ്ങളിലേക്കു കണ്ണുയർത്തുന്നു; എനിക്ക് സഹായം എവിടെനിന്നു വരും? എന്റെ സഹായം യഹോവയിങ്കൽനിന്നു വരുന്നു."
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
            en: "The steadfast love of the Lord never ceases; his mercies are new every morning.",
            ml: "യഹോവയുടെ ദയ ഒരിക്കലും തീരുകയില്ല; അവന്റെ കരുണ ഓരോ പ്രഭാതത്തിലും പുതുതാകുന്നു."
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
            en: "I will instruct you and teach you in the way you should go; I will counsel you.",
            ml: "നീ നടക്കേണ്ടുന്ന വഴി ഞാൻ നിന്നെ ഉപദേശിച്ചു കാണിച്ചുതരും; ഞാൻ നിനക്ക് ആലോചന പറഞ്ഞുതരും."
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
            en: "I have set the Lord always before me; because he is at my right hand, I shall not be shaken.",
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
            en: "God gave us a spirit not of fear but of power and love and self-control.",
            ml: "ദൈവം നമുക്കു ഭീരുത്വത്തിന്റെ ആത്മാവിനെയല്ല, ശക്തിയുടെയും സ്നേഹത്തിന്റെയും സുബോധത്തിന്റെയും ആത്മാവിനെയാണ് നൽകിയിരിക്കുന്നത്."
        }
    },

    {
        id: 28,
        reference: {
            en: "Psalm 62:5-6",
            ml: "സങ്കീർത്തനങ്ങൾ 62:5-6"
        },
        text: {
            en: "For God alone, O my soul, wait in silence, for my hope is from him.",
            ml: "എന്റെ ഉള്ളമേ, ദൈവത്തിൽ തന്നേ സ്വസ്ഥമായിരിക്ക; എന്റെ പ്രത്യാശ അവങ്കൽനിന്നാകുന്നു."
        }
    },

    {
        id: 29,
        reference: {
            en: "Hebrews 11:1",
            ml: "എബ്രായർ 11:1"
        },
        text: {
            en: "Faith is the assurance of things hoped for, the conviction of things not seen.",
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
            en: "Let the words of my mouth and the meditation of my heart be pleasing in your sight, O Lord.",
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
            en: "Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.",
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
            en: "The Lord is near to the brokenhearted and saves those who are crushed in spirit.",
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
            en: "This is the day that the Lord has made; let us rejoice and be glad in it.",
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
            en: "Be strong, and let your heart take courage, all you who wait for the Lord.",
            ml: "യഹോവയിൽ പ്രത്യാശവെക്കുന്ന ഏവരുമേ, ധൈര്യപ്പെടുവിൻ; നിങ്ങളുടെ ഹൃദയം ബലപ്പെടട്ടെ."
        }
    },


    // =========================================================
    // 100 ADDITIONAL VERSES
    // =========================================================

    {
        id: 36,
        reference: {
            en: "Psalm 4:8",
            ml: "സങ്കീർത്തനങ്ങൾ 4:8"
        },
        text: {
            en: "In peace I will lie down and sleep, for you alone, Lord, make me dwell in safety.",
            ml: "ഞാൻ സമാധാനത്തോടെ കിടന്നു ഉറങ്ങും; യഹോവേ, നീ മാത്രമാണ് എന്നെ നിർഭയമായി വസിപ്പിക്കുന്നത്."
        }
    },

    {
        id: 37,
        reference: {
            en: "Psalm 5:11",
            ml: "സങ്കീർത്തനങ്ങൾ 5:11"
        },
        text: {
            en: "Let all who take refuge in you rejoice; let them ever sing for joy.",
            ml: "നിന്നിൽ ശരണം പ്രാപിക്കുന്ന ഏവരും സന്തോഷിക്കട്ടെ; അവർ എപ്പോഴും ആനന്ദത്തോടെ പാടട്ടെ."
        }
    },

    {
        id: 38,
        reference: {
            en: "Psalm 9:10",
            ml: "സങ്കീർത്തനങ്ങൾ 9:10"
        },
        text: {
            en: "Those who know your name put their trust in you, for you, Lord, have never forsaken those who seek you.",
            ml: "നിന്റെ നാമം അറിയുന്നവർ നിന്നിൽ ആശ്രയിക്കുന്നു; നിന്നെ അന്വേഷിക്കുന്നവരെ നീ ഒരിക്കലും ഉപേക്ഷിക്കുന്നില്ല."
        }
    },

    {
        id: 39,
        reference: {
            en: "Psalm 18:2",
            ml: "സങ്കീർത്തനങ്ങൾ 18:2"
        },
        text: {
            en: "The Lord is my rock, my fortress and my deliverer; my God is my rock, in whom I take refuge.",
            ml: "യഹോവ എന്റെ പാറയും കോട്ടയും വിടുവിക്കുന്നവനും ആകുന്നു; എന്റെ ദൈവത്തിൽ ഞാൻ ശരണം പ്രാപിക്കുന്നു."
        }
    },

    {
        id: 40,
        reference: {
            en: "Psalm 18:30",
            ml: "സങ്കീർത്തനങ്ങൾ 18:30"
        },
        text: {
            en: "As for God, his way is perfect; the word of the Lord is flawless.",
            ml: "ദൈവത്തിന്റെ വഴി പരിപൂർണ്ണമാണ്; യഹോവയുടെ വചനം നിർമ്മലമാണ്."
        }
    },

    {
        id: 41,
        reference: {
            en: "Psalm 25:4-5",
            ml: "സങ്കീർത്തനങ്ങൾ 25:4-5"
        },
        text: {
            en: "Show me your ways, Lord, teach me your paths. Guide me in your truth and teach me.",
            ml: "യഹോവേ, നിന്റെ വഴികൾ എന്നെ അറിയിക്കേണമേ; നിന്റെ പാതകളിൽ എന്നെ പഠിപ്പിക്കേണമേ. നിന്റെ സത്യത്തിൽ എന്നെ നടത്തേണമേ."
        }
    },

    {
        id: 42,
        reference: {
            en: "Psalm 25:9",
            ml: "സങ്കീർത്തനങ്ങൾ 25:9"
        },
        text: {
            en: "He guides the humble in what is right and teaches them his way.",
            ml: "അവൻ താഴ്മയുള്ളവരെ ന്യായത്തിൽ നടത്തുകയും തന്റെ വഴി അവരെ പഠിപ്പിക്കുകയും ചെയ്യുന്നു."
        }
    },

    {
        id: 43,
        reference: {
            en: "Psalm 27:14",
            ml: "സങ്കീർത്തനങ്ങൾ 27:14"
        },
        text: {
            en: "Wait for the Lord; be strong and take heart and wait for the Lord.",
            ml: "യഹോവയെ കാത്തിരിക്കുക; ധൈര്യപ്പെടുക; നിങ്ങളുടെ ഹൃദയം ബലപ്പെടട്ടെ."
        }
    },

    {
        id: 44,
        reference: {
            en: "Psalm 28:7",
            ml: "സങ്കീർത്തനങ്ങൾ 28:7"
        },
        text: {
            en: "The Lord is my strength and my shield; my heart trusts in him, and he helps me.",
            ml: "യഹോവ എന്റെ ശക്തിയും പരിചയും ആകുന്നു; എന്റെ ഹൃദയം അവനിൽ ആശ്രയിക്കുന്നു; അവൻ എന്നെ സഹായിക്കുന്നു."
        }
    },

    {
        id: 45,
        reference: {
            en: "Psalm 30:5",
            ml: "സങ്കീർത്തനങ്ങൾ 30:5"
        },
        text: {
            en: "Weeping may stay for the night, but rejoicing comes in the morning.",
            ml: "രാത്രിയിൽ കരച്ചിൽ ഉണ്ടായേക്കാം; പ്രഭാതത്തിൽ ആനന്ദഘോഷം വരുന്നു."
        }
    },

    {
        id: 46,
        reference: {
            en: "Psalm 33:4",
            ml: "സങ്കീർത്തനങ്ങൾ 33:4"
        },
        text: {
            en: "For the word of the Lord is right and true; he is faithful in all he does.",
            ml: "യഹോവയുടെ വചനം നേരുള്ളതും സത്യവുമാകുന്നു; അവൻ ചെയ്യുന്ന സകലത്തിലും വിശ്വസ്തനാണ്."
        }
    },

    {
        id: 47,
        reference: {
            en: "Psalm 37:4",
            ml: "സങ്കീർത്തനങ്ങൾ 37:4"
        },
        text: {
            en: "Delight yourself in the Lord, and he will give you the desires of your heart.",
            ml: "യഹോവയിൽ ആനന്ദിച്ചുകൊൾക; അവൻ നിന്റെ ഹൃദയത്തിലെ ആഗ്രഹങ്ങൾ നിനക്കു തരും."
        }
    },

    {
        id: 48,
        reference: {
            en: "Psalm 37:7",
            ml: "സങ്കീർത്തനങ്ങൾ 37:7"
        },
        text: {
            en: "Be still before the Lord and wait patiently for him.",
            ml: "യഹോവയുടെ മുമ്പാകെ നിശ്ചലനായിരിക്കുകയും ക്ഷമയോടെ അവനെ കാത്തിരിക്കുകയും ചെയ്യുക."
        }
    },

    {
        id: 49,
        reference: {
            en: "Psalm 40:1",
            ml: "സങ്കീർത്തനങ്ങൾ 40:1"
        },
        text: {
            en: "I waited patiently for the Lord; he turned to me and heard my cry.",
            ml: "ഞാൻ യഹോവയെ ക്ഷമയോടെ കാത്തിരുന്നു; അവൻ എങ്കലേക്കു തിരിഞ്ഞ് എന്റെ നിലവിളി കേട്ടു."
        }
    },

    {
        id: 50,
        reference: {
            en: "Psalm 42:11",
            ml: "സങ്കീർത്തനങ്ങൾ 42:11"
        },
        text: {
            en: "Why are you downcast, my soul? Put your hope in God, for I will yet praise him.",
            ml: "എന്റെ ഉള്ളമേ, നീ എന്തിന് വിഷണ്ണയായിരിക്കുന്നു? ദൈവത്തിൽ പ്രത്യാശ വെക്കുക; ഞാൻ ഇനിയും അവനെ സ്തുതിക്കും."
        }
    },

    {
        id: 51,
        reference: {
            en: "Psalm 51:10",
            ml: "സങ്കീർത്തനങ്ങൾ 51:10"
        },
        text: {
            en: "Create in me a pure heart, O God, and renew a steadfast spirit within me.",
            ml: "ദൈവമേ, നിർമ്മലമായൊരു ഹൃദയം എന്നിൽ സൃഷ്ടിക്കേണമേ; സ്ഥിരമായൊരു ആത്മാവിനെ എന്നിൽ പുതുക്കേണമേ."
        }
    },

    {
        id: 52,
        reference: {
            en: "Psalm 56:3",
            ml: "സങ്കീർത്തനങ്ങൾ 56:3"
        },
        text: {
            en: "When I am afraid, I put my trust in you.",
            ml: "എനിക്ക് ഭയം തോന്നുന്ന നാളിൽ ഞാൻ നിന്നിൽ ആശ്രയിക്കും."
        }
    },

    {
        id: 53,
        reference: {
            en: "Psalm 61:2",
            ml: "സങ്കീർത്തനങ്ങൾ 61:2"
        },
        text: {
            en: "When my heart is overwhelmed, lead me to the rock that is higher than I.",
            ml: "എന്റെ ഹൃദയം തളരുമ്പോൾ എനിക്കതിലും ഉയർന്ന പാറയിലേക്കു എന്നെ നടത്തേണമേ."
        }
    },

    {
        id: 54,
        reference: {
            en: "Psalm 63:1",
            ml: "സങ്കീർത്തനങ്ങൾ 63:1"
        },
        text: {
            en: "O God, you are my God; earnestly I seek you; my soul thirsts for you.",
            ml: "ദൈവമേ, നീ എന്റെ ദൈവമാകുന്നു; ഞാൻ നിന്നെ ആകാംക്ഷയോടെ അന്വേഷിക്കുന്നു; എന്റെ ഉള്ളം നിന്നെ ദാഹിക്കുന്നു."
        }
    },

    {
        id: 55,
        reference: {
            en: "Psalm 68:19",
            ml: "സങ്കീർത്തനങ്ങൾ 68:19"
        },
        text: {
            en: "Praise be to the Lord, to God our Savior, who daily bears our burdens.",
            ml: "നമ്മുടെ രക്ഷകനായ ദൈവമായ കർത്താവിന് സ്തുതി; അവൻ ദിവസേന നമ്മുടെ ഭാരങ്ങൾ വഹിക്കുന്നു."
        }
    },

    {
        id: 56,
        reference: {
            en: "Psalm 73:26",
            ml: "സങ്കീർത്തനങ്ങൾ 73:26"
        },
        text: {
            en: "My flesh and my heart may fail, but God is the strength of my heart and my portion forever.",
            ml: "എന്റെ ശരീരവും ഹൃദയവും ക്ഷയിച്ചാലും ദൈവം എന്റെ ഹൃദയത്തിന്റെ ശക്തിയും എന്നേക്കുമുള്ള എന്റെ ഭാഗവുമാകുന്നു."
        }
    },

    {
        id: 57,
        reference: {
            en: "Psalm 84:11",
            ml: "സങ്കീർത്തനങ്ങൾ 84:11"
        },
        text: {
            en: "The Lord is a sun and shield; the Lord bestows favor and honor; no good thing does he withhold.",
            ml: "യഹോവ സൂര്യനും പരിചയും ആകുന്നു; അവൻ കൃപയും മഹത്വവും നൽകുന്നു; നന്മയായത് ഒന്നും അവൻ തടയുകയില്ല."
        }
    },

    {
        id: 58,
        reference: {
            en: "Psalm 86:11",
            ml: "സങ്കീർത്തനങ്ങൾ 86:11"
        },
        text: {
            en: "Teach me your way, Lord, that I may walk in your truth; give me an undivided heart.",
            ml: "യഹോവേ, നിന്റെ വഴി എന്നെ പഠിപ്പിക്കേണമേ; ഞാൻ നിന്റെ സത്യത്തിൽ നടക്കട്ടെ; ഏകാഗ്രമായ ഹൃദയം എനിക്കു തരേണമേ."
        }
    },

    {
        id: 59,
        reference: {
            en: "Psalm 90:12",
            ml: "സങ്കീർത്തനങ്ങൾ 90:12"
        },
        text: {
            en: "Teach us to number our days, that we may gain a heart of wisdom.",
            ml: "ഞങ്ങളുടെ നാളുകളെ എണ്ണുവാൻ ഞങ്ങളെ പഠിപ്പിക്കേണമേ; ജ്ഞാനമുള്ള ഹൃദയം ഞങ്ങൾക്കു ലഭിക്കട്ടെ."
        }
    },

    {
        id: 60,
        reference: {
            en: "Psalm 94:19",
            ml: "സങ്കീർത്തനങ്ങൾ 94:19"
        },
        text: {
            en: "When anxiety was great within me, your consolation brought me joy.",
            ml: "എന്റെ ഉള്ളിൽ വ്യാകുലതകൾ പെരുകിയപ്പോൾ നിന്റെ ആശ്വാസങ്ങൾ എന്റെ പ്രാണനെ സന്തോഷിപ്പിച്ചു."
        }
    },

    {
        id: 61,
        reference: {
            en: "Psalm 103:2",
            ml: "സങ്കീർത്തനങ്ങൾ 103:2"
        },
        text: {
            en: "Praise the Lord, my soul, and forget not all his benefits.",
            ml: "എന്റെ ഉള്ളമേ, യഹോവയെ വാഴ്ത്തുക; അവന്റെ ഉപകാരങ്ങൾ ഒന്നും മറക്കരുത്."
        }
    },

    {
        id: 62,
        reference: {
            en: "Psalm 103:8",
            ml: "സങ്കീർത്തനങ്ങൾ 103:8"
        },
        text: {
            en: "The Lord is compassionate and gracious, slow to anger, abounding in love.",
            ml: "യഹോവ കരുണയും കൃപയും നിറഞ്ഞവനും ദീർഘക്ഷമയും മഹാദയയും ഉള്ളവനും ആകുന്നു."
        }
    },

    {
        id: 63,
        reference: {
            en: "Psalm 107:1",
            ml: "സങ്കീർത്തനങ്ങൾ 107:1"
        },
        text: {
            en: "Give thanks to the Lord, for he is good; his love endures forever.",
            ml: "യഹോവ നല്ലവനാകയാൽ അവന്നു സ്തോത്രം ചെയ്‍വിൻ; അവന്റെ ദയ എന്നേക്കും നിലനിൽക്കുന്നു."
        }
    },

    {
        id: 64,
        reference: {
            en: "Psalm 112:7",
            ml: "സങ്കീർത്തനങ്ങൾ 112:7"
        },
        text: {
            en: "They will have no fear of bad news; their hearts are steadfast, trusting in the Lord.",
            ml: "ദുഷ്‌വാർത്ത കേട്ടാലും അവർക്കു ഭയമില്ല; അവരുടെ ഹൃദയം സ്ഥിരമായും യഹോവയിൽ ആശ്രയിച്ചും ഇരിക്കുന്നു."
        }
    },

    {
        id: 65,
        reference: {
            en: "Psalm 115:11",
            ml: "സങ്കീർത്തനങ്ങൾ 115:11"
        },
        text: {
            en: "You who fear him, trust in the Lord—he is their help and shield.",
            ml: "യഹോവയെ ഭയപ്പെടുന്നവരേ, അവനിൽ ആശ്രയിപ്പിൻ; അവൻ അവരുടെ സഹായവും പരിചയും ആകുന്നു."
        }
    },

    {
        id: 66,
        reference: {
            en: "Psalm 119:11",
            ml: "സങ്കീർത്തനങ്ങൾ 119:11"
        },
        text: {
            en: "I have hidden your word in my heart that I might not sin against you.",
            ml: "ഞാൻ നിന്നോടു പാപം ചെയ്യാതിരിക്കേണ്ടതിന് നിന്റെ വചനം എന്റെ ഹൃദയത്തിൽ സൂക്ഷിച്ചിരിക്കുന്നു."
        }
    },

    {
        id: 67,
        reference: {
            en: "Psalm 119:114",
            ml: "സങ്കീർത്തനങ്ങൾ 119:114"
        },
        text: {
            en: "You are my refuge and my shield; I have put my hope in your word.",
            ml: "നീ എന്റെ സങ്കേതവും പരിചയും ആകുന്നു; ഞാൻ നിന്റെ വചനത്തിൽ പ്രത്യാശ വെച്ചിരിക്കുന്നു."
        }
    },

    {
        id: 68,
        reference: {
            en: "Psalm 121:7-8",
            ml: "സങ്കീർത്തനങ്ങൾ 121:7-8"
        },
        text: {
            en: "The Lord will keep you from all harm; he will watch over your coming and going.",
            ml: "യഹോവ നിന്നെ സകല അനർത്ഥത്തിൽനിന്നും കാക്കും; നിന്റെ വരവും പോകയും അവൻ കാത്തുകൊള്ളും."
        }
    },

    {
        id: 69,
        reference: {
            en: "Psalm 126:5",
            ml: "സങ്കീർത്തനങ്ങൾ 126:5"
        },
        text: {
            en: "Those who sow with tears will reap with songs of joy.",
            ml: "കണ്ണുനീരോടെ വിതയ്ക്കുന്നവർ ആനന്ദഘോഷത്തോടെ കൊയ്യും."
        }
    },

    {
        id: 70,
        reference: {
            en: "Psalm 127:1",
            ml: "സങ്കീർത്തനങ്ങൾ 127:1"
        },
        text: {
            en: "Unless the Lord builds the house, the builders labor in vain.",
            ml: "യഹോവ വീടു പണിയുന്നില്ലെങ്കിൽ പണിയുന്നവർ വെറുതെ അദ്ധ്വാനിക്കുന്നു."
        }
    },

    {
        id: 71,
        reference: {
            en: "Psalm 130:5",
            ml: "സങ്കീർത്തനങ്ങൾ 130:5"
        },
        text: {
            en: "I wait for the Lord, my whole being waits, and in his word I put my hope.",
            ml: "ഞാൻ യഹോവയെ കാത്തിരിക്കുന്നു; എന്റെ ഉള്ളം കാത്തിരിക്കുന്നു; അവന്റെ വചനത്തിൽ ഞാൻ പ്രത്യാശ വെക്കുന്നു."
        }
    },

    {
        id: 72,
        reference: {
            en: "Psalm 138:8",
            ml: "സങ്കീർത്തനങ്ങൾ 138:8"
        },
        text: {
            en: "The Lord will fulfill his purpose for me; your love, Lord, endures forever.",
            ml: "യഹോവ എനിക്കുവേണ്ടി തന്റെ ഉദ്ദേശ്യം നിവർത്തിക്കും; യഹോവേ, നിന്റെ ദയ എന്നേക്കും നിലനിൽക്കുന്നു."
        }
    },

    {
        id: 73,
        reference: {
            en: "Proverbs 2:6",
            ml: "സദൃശവാക്യങ്ങൾ 2:6"
        },
        text: {
            en: "For the Lord gives wisdom; from his mouth come knowledge and understanding.",
            ml: "ജ്ഞാനം നൽകുന്നത് യഹോവയാകുന്നു; അവന്റെ വായിൽനിന്നു പരിജ്ഞാനവും വിവേകവും പുറപ്പെടുന്നു."
        }
    },

    {
        id: 74,
        reference: {
            en: "Proverbs 3:7",
            ml: "സദൃശവാക്യങ്ങൾ 3:7"
        },
        text: {
            en: "Do not be wise in your own eyes; fear the Lord and turn away from evil.",
            ml: "സ്വന്തം കണ്ണിൽ നീ തന്നെ ജ്ഞാനിയാകരുത്; യഹോവയെ ഭയപ്പെടുകയും ദോഷം വിട്ടുമാറുകയും ചെയ്യുക."
        }
    },

    {
        id: 75,
        reference: {
            en: "Proverbs 4:11",
            ml: "സദൃശവാക്യങ്ങൾ 4:11"
        },
        text: {
            en: "I instruct you in the way of wisdom and lead you along straight paths.",
            ml: "ജ്ഞാനത്തിന്റെ വഴിയിൽ ഞാൻ നിന്നെ പഠിപ്പിക്കുകയും നേരുള്ള പാതകളിൽ നിന്നെ നടത്തുകയും ചെയ്യുന്നു."
        }
    },

    {
        id: 76,
        reference: {
            en: "Proverbs 9:10",
            ml: "സദൃശവാക്യങ്ങൾ 9:10"
        },
        text: {
            en: "The fear of the Lord is the beginning of wisdom, and knowledge of the Holy One is understanding.",
            ml: "യഹോവാഭക്തി ജ്ഞാനത്തിന്റെ ആരംഭമാകുന്നു; പരിശുദ്ധനായവനെ അറിയുന്നതു വിവേകമാകുന്നു."
        }
    },

    {
        id: 77,
        reference: {
            en: "Proverbs 11:25",
            ml: "സദൃശവാക്യങ്ങൾ 11:25"
        },
        text: {
            en: "A generous person will prosper; whoever refreshes others will be refreshed.",
            ml: "ഉദാരനായവൻ പുഷ്ടിപ്പെടും; മറ്റുള്ളവരെ തണുപ്പിക്കുന്നവൻ തണുപ്പിക്കപ്പെടും."
        }
    },

    {
        id: 78,
        reference: {
            en: "Proverbs 12:25",
            ml: "സദൃശവാക്യങ്ങൾ 12:25"
        },
        text: {
            en: "Anxiety weighs down the heart, but a kind word cheers it up.",
            ml: "ഹൃദയത്തിലെ വ്യാകുലത അതിനെ താഴ്ത്തുന്നു; നല്ലൊരു വാക്ക് അതിനെ സന്തോഷിപ്പിക്കുന്നു."
        }
    },

    {
        id: 79,
        reference: {
            en: "Proverbs 15:1",
            ml: "സദൃശവാക്യങ്ങൾ 15:1"
        },
        text: {
            en: "A gentle answer turns away wrath, but a harsh word stirs up anger.",
            ml: "മൃദുവായ ഉത്തരം ക്രോധത്തെ ശമിപ്പിക്കുന്നു; കഠിനവാക്ക് കോപം ഉണർത്തുന്നു."
        }
    },

    {
        id: 80,
        reference: {
            en: "Proverbs 15:13",
            ml: "സദൃശവാക്യങ്ങൾ 15:13"
        },
        text: {
            en: "A glad heart makes a cheerful face, but by sorrow of heart the spirit is crushed.",
            ml: "സന്തോഷമുള്ള ഹൃദയം മുഖത്തെ പ്രസന്നമാക്കുന്നു; ഹൃദയത്തിലെ ദുഃഖത്താൽ ആത്മാവ് തകർന്നുപോകുന്നു."
        }
    },

    {
        id: 81,
        reference: {
            en: "Proverbs 16:9",
            ml: "സദൃശവാക്യങ്ങൾ 16:9"
        },
        text: {
            en: "The heart of man plans his way, but the Lord establishes his steps.",
            ml: "മനുഷ്യൻ തന്റെ വഴി ആലോചിക്കുന്നു; എന്നാൽ അവന്റെ കാലടികളെ യഹോവ ഉറപ്പിക്കുന്നു."
        }
    },

    {
        id: 82,
        reference: {
            en: "Proverbs 18:10",
            ml: "സദൃശവാക്യങ്ങൾ 18:10"
        },
        text: {
            en: "The name of the Lord is a strong tower; the righteous run to it and are safe.",
            ml: "യഹോവയുടെ നാമം ബലമുള്ള ഗോപുരം ആകുന്നു; നീതിമാൻ അതിലേക്കു ഓടിച്ചെന്ന് സുരക്ഷിതനാകുന്നു."
        }
    },

    {
        id: 83,
        reference: {
            en: "Proverbs 19:21",
            ml: "സദൃശവാക്യങ്ങൾ 19:21"
        },
        text: {
            en: "Many are the plans in a person's heart, but it is the Lord's purpose that prevails.",
            ml: "മനുഷ്യന്റെ ഹൃദയത്തിൽ അനേകം ആലോചനകൾ ഉണ്ടെങ്കിലും യഹോവയുടെ ഉദ്ദേശ്യമത്രേ നിലനിൽക്കുന്നത്."
        }
    },

    {
        id: 84,
        reference: {
            en: "Proverbs 24:16",
            ml: "സദൃശവാക്യങ്ങൾ 24:16"
        },
        text: {
            en: "Though the righteous fall seven times, they rise again.",
            ml: "നീതിമാൻ ഏഴു പ്രാവശ്യം വീണാലും വീണ്ടും എഴുന്നേൽക്കും."
        }
    },

    {
        id: 85,
        reference: {
            en: "Ecclesiastes 3:1",
            ml: "സഭാപ്രസംഗി 3:1"
        },
        text: {
            en: "There is a time for everything, and a season for every activity under the heavens.",
            ml: "എല്ലാറ്റിനും ഒരു കാലമുണ്ട്; ആകാശത്തിൻ കീഴിലുള്ള ഓരോ കാര്യത്തിനും ഒരു സമയമുണ്ട്."
        }
    },

    {
        id: 86,
        reference: {
            en: "Isaiah 26:3",
            ml: "യെശയ്യാവ് 26:3"
        },
        text: {
            en: "You will keep in perfect peace those whose minds are steadfast, because they trust in you.",
            ml: "നിന്നിൽ ആശ്രയിക്കുന്ന സ്ഥിരചിത്തനെ നീ പൂർണ്ണസമാധാനത്തിൽ കാത്തുകൊള്ളും."
        }
    },

    {
        id: 87,
        reference: {
            en: "Isaiah 30:21",
            ml: "യെശയ്യാവ് 30:21"
        },
        text: {
            en: "Whether you turn to the right or to the left, your ears will hear a voice saying, This is the way; walk in it.",
            ml: "നീ വലത്തോട്ടോ ഇടത്തോട്ടോ തിരിയുമ്പോൾ, ഇതാണ് വഴി; ഇതിൽ നടക്കുക എന്ന വാക്ക് നിന്റെ ചെവികൾ കേൾക്കും."
        }
    },

    {
        id: 88,
        reference: {
            en: "Isaiah 43:2",
            ml: "യെശയ്യാവ് 43:2"
        },
        text: {
            en: "When you pass through the waters, I will be with you; when you walk through fire, you will not be burned.",
            ml: "നീ വെള്ളത്തിലൂടെ കടക്കുമ്പോൾ ഞാൻ നിന്നോടുകൂടെ ഉണ്ടാകും; തീയിൽകൂടെ നടന്നാലും നീ വെന്തുപോകയില്ല."
        }
    },

    {
        id: 89,
        reference: {
            en: "Isaiah 43:4",
            ml: "യെശയ്യാവ് 43:4"
        },
        text: {
            en: "You are precious and honored in my sight, and I love you.",
            ml: "നീ എന്റെ ദൃഷ്ടിയിൽ വിലയേറിയവനും മാന്യനും ആകുന്നു; ഞാൻ നിന്നെ സ്നേഹിക്കുന്നു."
        }
    },

    {
        id: 90,
        reference: {
            en: "Isaiah 54:10",
            ml: "യെശയ്യാവ് 54:10"
        },
        text: {
            en: "Though the mountains be shaken, my unfailing love for you will not be shaken.",
            ml: "പർവ്വതങ്ങൾ നീങ്ങിയാലും എന്റെ ദയ നിന്നിൽനിന്നു നീങ്ങുകയില്ല."
        }
    },

    {
        id: 91,
        reference: {
            en: "Isaiah 55:8-9",
            ml: "യെശയ്യാവ് 55:8-9"
        },
        text: {
            en: "My thoughts are not your thoughts, neither are your ways my ways, declares the Lord.",
            ml: "എന്റെ വിചാരങ്ങൾ നിങ്ങളുടെ വിചാരങ്ങളല്ല; നിങ്ങളുടെ വഴികൾ എന്റെ വഴികളുമല്ല എന്നു യഹോവ അരുളിച്ചെയ്യുന്നു."
        }
    },

    {
        id: 92,
        reference: {
            en: "Isaiah 58:11",
            ml: "യെശയ്യാവ് 58:11"
        },
        text: {
            en: "The Lord will guide you always; he will satisfy your needs and strengthen your frame.",
            ml: "യഹോവ നിന്നെ എപ്പോഴും നടത്തും; അവൻ നിന്റെ ആവശ്യങ്ങൾ നിറവേറ്റുകയും നിന്റെ അസ്ഥികളെ ബലപ്പെടുത്തുകയും ചെയ്യും."
        }
    },

    {
        id: 93,
        reference: {
            en: "Jeremiah 17:7",
            ml: "യിരെമ്യാവ് 17:7"
        },
        text: {
            en: "Blessed is the one who trusts in the Lord, whose confidence is in him.",
            ml: "യഹോവയിൽ ആശ്രയിക്കുന്ന മനുഷ്യൻ ഭാഗ്യവാൻ; അവന്റെ ആശ്രയം യഹോവ തന്നേ."
        }
    },

    {
        id: 94,
        reference: {
            en: "Jeremiah 33:3",
            ml: "യിരെമ്യാവ് 33:3"
        },
        text: {
            en: "Call to me and I will answer you and tell you great and unsearchable things.",
            ml: "എന്നെ വിളിച്ചപേക്ഷിക്ക; ഞാൻ നിനക്കുത്തരം അരുളുകയും നീ അറിയാത്ത മഹത്തായ കാര്യങ്ങൾ നിന്നെ അറിയിക്കുകയും ചെയ്യും."
        }
    },

    {
        id: 95,
        reference: {
            en: "Nahum 1:7",
            ml: "നഹൂം 1:7"
        },
        text: {
            en: "The Lord is good, a refuge in times of trouble. He cares for those who trust in him.",
            ml: "യഹോവ നല്ലവൻ; കഷ്ടകാലത്ത് അവൻ സങ്കേതമാകുന്നു; അവനിൽ ആശ്രയിക്കുന്നവരെ അവൻ അറിയുന്നു."
        }
    },

    {
        id: 96,
        reference: {
            en: "Habakkuk 3:17-18",
            ml: "ഹബക്കൂക്ക് 3:17-18"
        },
        text: {
            en: "Though the fig tree does not bud, yet I will rejoice in the Lord; I will be joyful in God my Savior.",
            ml: "അത്തിവൃക്ഷം പൂക്കാതിരുന്നാലും ഞാൻ യഹോവയിൽ സന്തോഷിക്കും; എന്റെ രക്ഷയുടെ ദൈവത്തിൽ ഞാൻ ആനന്ദിക്കും."
        }
    },

    {
        id: 97,
        reference: {
            en: "Zephaniah 3:17",
            ml: "സെഫന്യാവ് 3:17"
        },
        text: {
            en: "The Lord your God is with you, the Mighty One who saves. He will rejoice over you with love.",
            ml: "നിന്റെ ദൈവമായ യഹോവ നിന്നോടുകൂടെ ഉണ്ട്; രക്ഷിപ്പാൻ ശക്തനായവൻ തന്നേ. അവൻ സ്നേഹത്തിൽ നിന്നെക്കുറിച്ച് ആനന്ദിക്കും."
        }
    },

    {
        id: 98,
        reference: {
            en: "Matthew 5:4",
            ml: "മത്തായി 5:4"
        },
        text: {
            en: "Blessed are those who mourn, for they will be comforted.",
            ml: "ദുഃഖിക്കുന്നവർ ഭാഗ്യവാന്മാർ; അവർക്കു ആശ്വാസം ലഭിക്കും."
        }
    },

    {
        id: 99,
        reference: {
            en: "Matthew 5:6",
            ml: "മത്തായി 5:6"
        },
        text: {
            en: "Blessed are those who hunger and thirst for righteousness, for they will be filled.",
            ml: "നീതിക്കായി വിശപ്പും ദാഹവും ഉള്ളവർ ഭാഗ്യവാന്മാർ; അവർ തൃപ്തരാകും."
        }
    },

    {
        id: 100,
        reference: {
            en: "Matthew 5:9",
            ml: "മത്തായി 5:9"
        },
        text: {
            en: "Blessed are the peacemakers, for they will be called children of God.",
            ml: "സമാധാനം ഉണ്ടാക്കുന്നവർ ഭാഗ്യവാന്മാർ; അവർ ദൈവത്തിന്റെ മക്കൾ എന്നു വിളിക്കപ്പെടും."
        }
    },

    {
        id: 101,
        reference: {
            en: "Matthew 5:14",
            ml: "മത്തായി 5:14"
        },
        text: {
            en: "You are the light of the world. A city set on a hill cannot be hidden.",
            ml: "നിങ്ങൾ ലോകത്തിന്റെ വെളിച്ചം ആകുന്നു; മലമേൽ ഇരിക്കുന്ന പട്ടണം മറഞ്ഞിരിക്കയില്ല."
        }
    },

    {
        id: 102,
        reference: {
            en: "Matthew 6:34",
            ml: "മത്തായി 6:34"
        },
        text: {
            en: "Do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own.",
            ml: "നാളെയെക്കുറിച്ച് വിചാരപ്പെടരുത്; നാളത്തെ ദിവസം തനിക്കുള്ളതിനെക്കുറിച്ച് വിചാരിക്കും. ഓരോ ദിവസത്തിനും അതിന്റെ കഷ്ടം മതി."
        }
    },

    {
        id: 103,
        reference: {
            en: "Matthew 10:29-31",
            ml: "മത്തായി 10:29-31"
        },
        text: {
            en: "Do not be afraid; you are worth more than many sparrows. Even the hairs of your head are all numbered.",
            ml: "ഭയപ്പെടേണ്ടാ; അനേകം കുരുവികളേക്കാൾ നിങ്ങൾ വിലയേറിയവരാണ്. നിങ്ങളുടെ തലയിലെ രോമങ്ങൾപോലും എണ്ണപ്പെട്ടിരിക്കുന്നു."
        }
    },

    {
        id: 104,
        reference: {
            en: "Matthew 11:29",
            ml: "മത്തായി 11:29"
        },
        text: {
            en: "Take my yoke upon you and learn from me, for I am gentle and humble in heart.",
            ml: "എന്റെ നുകം ഏറ്റുകൊണ്ട് എന്നോടു പഠിപ്പിൻ; ഞാൻ സൗമ്യതയും ഹൃദയത്തിലെ താഴ്മയും ഉള്ളവൻ ആകുന്നു."
        }
    },

    {
        id: 105,
        reference: {
            en: "Matthew 19:26",
            ml: "മത്തായി 19:26"
        },
        text: {
            en: "With man this is impossible, but with God all things are possible.",
            ml: "മനുഷ്യർക്കു അസാധ്യമായത് ദൈവത്തോടുകൂടെ സാധ്യമാണ്."
        }
    },

    {
        id: 106,
        reference: {
            en: "Matthew 28:20",
            ml: "മത്തായി 28:20"
        },
        text: {
            en: "Surely I am with you always, to the very end of the age.",
            ml: "ഞാൻ ലോകാവസാനത്തോളം എല്ലാനാളും നിങ്ങളോടുകൂടെ ഉണ്ട്."
        }
    },

    {
        id: 107,
        reference: {
            en: "Mark 5:36",
            ml: "മർക്കോസ് 5:36"
        },
        text: {
            en: "Do not be afraid; just believe.",
            ml: "ഭയപ്പെടേണ്ടാ; വിശ്വസിക്ക മാത്രം ചെയ്യുക."
        }
    },

    {
        id: 108,
        reference: {
            en: "Mark 10:27",
            ml: "മർക്കോസ് 10:27"
        },
        text: {
            en: "With man it is impossible, but not with God; all things are possible with God.",
            ml: "മനുഷ്യരാൽ അസാധ്യം; ദൈവത്താൽ അല്ല; ദൈവത്താൽ സകലവും സാധ്യമാണ്."
        }
    },

    {
        id: 109,
        reference: {
            en: "Luke 1:37",
            ml: "ലൂക്കോസ് 1:37"
        },
        text: {
            en: "For nothing will be impossible with God.",
            ml: "ദൈവത്തിന്നു ഒരു കാര്യവും അസാധ്യമല്ല."
        }
    },

    {
        id: 110,
        reference: {
            en: "Luke 6:31",
            ml: "ലൂക്കോസ് 6:31"
        },
        text: {
            en: "Do to others as you would have them do to you.",
            ml: "മനുഷ്യർ നിങ്ങൾക്കു ചെയ്യേണം എന്നു നിങ്ങൾ ആഗ്രഹിക്കുന്നതുപോലെ നിങ്ങൾക്കും അവരോടു ചെയ്യുവിൻ."
        }
    },

    {
        id: 111,
        reference: {
            en: "Luke 12:32",
            ml: "ലൂക്കോസ് 12:32"
        },
        text: {
            en: "Do not be afraid, little flock, for your Father has been pleased to give you the kingdom.",
            ml: "ചെറിയ ആട്ടിൻ കൂട്ടമേ, ഭയപ്പെടേണ്ടാ; നിങ്ങൾക്കു രാജ്യം നൽകുവാൻ നിങ്ങളുടെ പിതാവിനു പ്രസാദമായിരിക്കുന്നു."
        }
    },

    {
        id: 112,
        reference: {
            en: "John 1:5",
            ml: "യോഹന്നാൻ 1:5"
        },
        text: {
            en: "The light shines in the darkness, and the darkness has not overcome it.",
            ml: "വെളിച്ചം ഇരുട്ടിൽ പ്രകാശിക്കുന്നു; ഇരുട്ട് അതിനെ കീഴടക്കിയിട്ടില്ല."
        }
    },

    {
        id: 113,
        reference: {
            en: "John 8:12",
            ml: "യോഹന്നാൻ 8:12"
        },
        text: {
            en: "Whoever follows me will never walk in darkness, but will have the light of life.",
            ml: "എന്നെ അനുഗമിക്കുന്നവൻ ഇരുട്ടിൽ നടക്കുകയില്ല; അവന്നു ജീവന്റെ വെളിച്ചം ഉണ്ടാകും."
        }
    },

    {
        id: 114,
        reference: {
            en: "John 10:10",
            ml: "യോഹന്നാൻ 10:10"
        },
        text: {
            en: "I have come that they may have life, and have it abundantly.",
            ml: "അവർക്ക് ജീവൻ ഉണ്ടാകുവാനും സമൃദ്ധിയായി ഉണ്ടാകുവാനും ഞാൻ വന്നിരിക്കുന്നു."
        }
    },

    {
        id: 115,
        reference: {
            en: "John 13:34",
            ml: "യോഹന്നാൻ 13:34"
        },
        text: {
            en: "Love one another. As I have loved you, so you must love one another.",
            ml: "നിങ്ങൾ തമ്മിൽ തമ്മിൽ സ്നേഹിക്കുവിൻ; ഞാൻ നിങ്ങളെ സ്നേഹിച്ചതുപോലെ നിങ്ങളും തമ്മിൽ സ്നേഹിക്കുവിൻ."
        }
    },

    {
        id: 116,
        reference: {
            en: "John 16:33",
            ml: "യോഹന്നാൻ 16:33"
        },
        text: {
            en: "In this world you will have trouble. But take heart; I have overcome the world.",
            ml: "ലോകത്തിൽ നിങ്ങൾക്കു കഷ്ടം ഉണ്ടാകും; എങ്കിലും ധൈര്യപ്പെടുവിൻ; ഞാൻ ലോകത്തെ ജയിച്ചിരിക്കുന്നു."
        }
    },

    {
        id: 117,
        reference: {
            en: "Romans 5:3-4",
            ml: "റോമർ 5:3-4"
        },
        text: {
            en: "Suffering produces perseverance; perseverance, character; and character, hope.",
            ml: "കഷ്ടത സഹിഷ്ണുതയെയും സഹിഷ്ണുത പരിശോധനയെയും പരിശോധന പ്രത്യാശയെയും ഉളവാക്കുന്നു."
        }
    },

    {
        id: 118,
        reference: {
            en: "Romans 5:8",
            ml: "റോമർ 5:8"
        },
        text: {
            en: "God demonstrates his own love for us in this: while we were still sinners, Christ died for us.",
            ml: "നാം പാപികളായിരിക്കുമ്പോൾ തന്നേ ക്രിസ്തു നമുക്കുവേണ്ടി മരിച്ചതിനാൽ ദൈവം തന്റെ സ്നേഹം നമ്മോടു കാണിച്ചിരിക്കുന്നു."
        }
    },

    {
        id: 119,
        reference: {
            en: "Romans 8:31",
            ml: "റോമർ 8:31"
        },
        text: {
            en: "If God is for us, who can be against us?",
            ml: "ദൈവം നമുക്കു അനുകൂലമെങ്കിൽ നമുക്കു പ്രതികൂലമായി ആർ നിൽക്കും?"
        }
    },

    {
        id: 120,
        reference: {
            en: "Romans 8:38-39",
            ml: "റോമർ 8:38-39"
        },
        text: {
            en: "Nothing can separate us from the love of God that is in Christ Jesus our Lord.",
            ml: "നമ്മുടെ കർത്താവായ ക്രിസ്തുയേശുവിലുള്ള ദൈവസ്നേഹത്തിൽനിന്ന് ഒന്നിനും നമ്മെ വേർപെടുത്താൻ കഴിയുകയില്ല."
        }
    },

    {
        id: 121,
        reference: {
            en: "Romans 12:2",
            ml: "റോമർ 12:2"
        },
        text: {
            en: "Be transformed by the renewing of your mind, that you may discern what is the will of God.",
            ml: "നിങ്ങളുടെ മനസ്സിന്റെ പുതുക്കത്താൽ രൂപാന്തരപ്പെടുവിൻ; ദൈവത്തിന്റെ ഇഷ്ടം എന്തെന്നു തിരിച്ചറിയുവിൻ."
        }
    },

    {
        id: 122,
        reference: {
            en: "Romans 12:12",
            ml: "റോമർ 12:12"
        },
        text: {
            en: "Be joyful in hope, patient in affliction, faithful in prayer.",
            ml: "പ്രത്യാശയിൽ സന്തോഷിക്കുകയും കഷ്ടതയിൽ ക്ഷമിക്കുകയും പ്രാർത്ഥനയിൽ വിശ്വസ്തരായിരിക്കുകയും ചെയ്യുവിൻ."
        }
    },

    {
        id: 123,
        reference: {
            en: "1 Corinthians 10:13",
            ml: "1 കൊരിന്ത്യർ 10:13"
        },
        text: {
            en: "God is faithful; he will not let you be tempted beyond what you can bear.",
            ml: "ദൈവം വിശ്വസ്തനാകുന്നു; നിങ്ങൾക്കു സഹിക്കാവുന്നതിലധികം പരീക്ഷ ഉണ്ടാകുവാൻ അവൻ സമ്മതിക്കയില്ല."
        }
    },

    {
        id: 124,
        reference: {
            en: "1 Corinthians 13:4",
            ml: "1 കൊരിന്ത്യർ 13:4"
        },
        text: {
            en: "Love is patient, love is kind. It does not envy or boast.",
            ml: "സ്നേഹം ദീർഘക്ഷമയും ദയയും ഉള്ളതാണ്; സ്നേഹം അസൂയപ്പെടുകയോ പ്രശംസിക്കുകയോ ചെയ്യുന്നില്ല."
        }
    },

    {
        id: 125,
        reference: {
            en: "2 Corinthians 4:16",
            ml: "2 കൊരിന്ത്യർ 4:16"
        },
        text: {
            en: "Though outwardly we are wasting away, yet inwardly we are being renewed day by day.",
            ml: "പുറമേയുള്ള മനുഷ്യൻ ക്ഷയിച്ചാലും അകമേയുള്ള മനുഷ്യൻ ദിവസംതോറും പുതുക്കപ്പെടുന്നു."
        }
    },

    {
        id: 126,
        reference: {
            en: "2 Corinthians 5:7",
            ml: "2 കൊരിന്ത്യർ 5:7"
        },
        text: {
            en: "For we walk by faith, not by sight.",
            ml: "ഞങ്ങൾ കാഴ്ചയാൽ അല്ല, വിശ്വാസത്താലാണ് നടക്കുന്നത്."
        }
    },

    {
        id: 127,
        reference: {
            en: "Galatians 6:9",
            ml: "ഗലാത്യർ 6:9"
        },
        text: {
            en: "Let us not become weary in doing good, for at the proper time we will reap a harvest.",
            ml: "നന്മ ചെയ്യുന്നതിൽ നാം മടുത്തുപോകരുത്; തക്കസമയത്ത് നാം കൊയ്യും."
        }
    },

    {
        id: 128,
        reference: {
            en: "Ephesians 3:20",
            ml: "എഫെസ്യർ 3:20"
        },
        text: {
            en: "God is able to do immeasurably more than all we ask or imagine.",
            ml: "നാം ചോദിക്കുന്നതിലും ചിന്തിക്കുന്നതിലും അത്യന്തം അധികമായി ചെയ്യുവാൻ ദൈവത്തിനു കഴിയും."
        }
    },

    {
        id: 129,
        reference: {
            en: "Ephesians 6:10",
            ml: "എഫെസ്യർ 6:10"
        },
        text: {
            en: "Be strong in the Lord and in his mighty power.",
            ml: "കർത്താവിലും അവന്റെ മഹാശക്തിയിലും ശക്തിപ്പെടുവിൻ."
        }
    },

    {
        id: 130,
        reference: {
            en: "Philippians 1:6",
            ml: "ഫിലിപ്പിയർ 1:6"
        },
        text: {
            en: "He who began a good work in you will carry it on to completion.",
            ml: "നിങ്ങളിൽ നല്ല പ്രവൃത്തി ആരംഭിച്ചവൻ അതിനെ പൂർത്തിയാക്കും."
        }
    },

    {
        id: 131,
        reference: {
            en: "Philippians 4:13",
            ml: "ഫിലിപ്പിയർ 4:13"
        },
        text: {
            en: "I can do all things through Christ who strengthens me.",
            ml: "എന്നെ ശക്തനാക്കുന്ന ക്രിസ്തുവിൽ ഞാൻ സകലവും ചെയ്യുവാൻ ശക്തനാകുന്നു."
        }
    },

    {
        id: 132,
        reference: {
            en: "Colossians 3:23",
            ml: "കൊലൊസ്സ്യർ 3:23"
        },
        text: {
            en: "Whatever you do, work at it with all your heart, as working for the Lord.",
            ml: "നിങ്ങൾ ചെയ്യുന്നതെന്തും മനുഷ്യർക്കുവേണ്ടിയല്ല, കർത്താവിനുവേണ്ടി എന്നപോലെ പൂർണ്ണഹൃദയത്തോടെ ചെയ്യുവിൻ."
        }
    },

    {
        id: 133,
        reference: {
            en: "1 Thessalonians 5:16-18",
            ml: "1 തെസ്സലൊനീക്യർ 5:16-18"
        },
        text: {
            en: "Rejoice always, pray continually, give thanks in all circumstances.",
            ml: "എപ്പോഴും സന്തോഷിപ്പിൻ; ഇടവിടാതെ പ്രാർത്ഥിപ്പിൻ; എല്ലാറ്റിലും സ്തോത്രം ചെയ്‍വിൻ."
        }
    },

    {
        id: 134,
        reference: {
            en: "2 Thessalonians 3:3",
            ml: "2 തെസ്സലൊനീക്യർ 3:3"
        },
        text: {
            en: "The Lord is faithful, and he will strengthen you and protect you from the evil one.",
            ml: "കർത്താവ് വിശ്വസ്തൻ; അവൻ നിങ്ങളെ ശക്തീകരിക്കുകയും ദുഷ്ടനിൽനിന്നു കാക്കുകയും ചെയ്യും."
        }
    },

    {
        id: 135,
        reference: {
            en: "Hebrews 13:8",
            ml: "എബ്രായർ 13:8"
        },
        text: {
            en: "Jesus Christ is the same yesterday and today and forever.",
            ml: "യേശുക്രിസ്തു ഇന്നലെയും ഇന്നും എന്നേക്കും അനന്യൻ തന്നേ."
        }
    },

    {
        id: 136,
        reference: {
            en: "Genesis 28:15",
            ml: "ഉല്പത്തി 28:15"
        },
        text: {
            en: "I am with you and will watch over you wherever you go.",
            ml: "നീ പോകുന്നേടത്തൊക്കെയും ഞാൻ നിന്നോടുകൂടെ ഇരിക്കുകയും നിന്നെ കാക്കുകയും ചെയ്യും."
        }
    },

    {
        id: 137,
        reference: {
            en: "Exodus 14:14",
            ml: "പുറപ്പാട് 14:14"
        },
        text: {
            en: "The Lord will fight for you; you need only to be still.",
            ml: "യഹോവ നിങ്ങൾക്കുവേണ്ടി യുദ്ധം ചെയ്യും; നിങ്ങൾ സ്വസ്ഥമായിരിക്കേണം."
        }
    },

    {
        id: 138,
        reference: {
            en: "Exodus 15:2",
            ml: "പുറപ്പാട് 15:2"
        },
        text: {
            en: "The Lord is my strength and my song; he has become my salvation.",
            ml: "യഹോവ എന്റെ ബലവും എന്റെ ഗാനവും ആകുന്നു; അവൻ എനിക്ക് രക്ഷയായിത്തീർന്നു."
        }
    },

    {
        id: 139,
        reference: {
            en: "Exodus 33:14",
            ml: "പുറപ്പാട് 33:14"
        },
        text: {
            en: "My presence will go with you, and I will give you rest.",
            ml: "എന്റെ സാന്നിധ്യം നിന്നോടുകൂടെ പോകും; ഞാൻ നിനക്കു വിശ്രമം നൽകും."
        }
    },

    {
        id: 140,
        reference: {
            en: "Numbers 6:24-26",
            ml: "സംഖ്യാപുസ്തകം 6:24-26"
        },
        text: {
            en: "The Lord bless you and keep you; the Lord make his face shine on you and give you peace.",
            ml: "യഹോവ നിന്നെ അനുഗ്രഹിക്കുകയും കാക്കുകയും ചെയ്യട്ടെ; യഹോവ തന്റെ മുഖം നിന്റെമേൽ പ്രകാശിപ്പിച്ച് നിനക്കു സമാധാനം നൽകട്ടെ."
        }
    },

    {
        id: 141,
        reference: {
            en: "Deuteronomy 31:6",
            ml: "ആവർത്തനം 31:6"
        },
        text: {
            en: "Be strong and courageous. Do not be afraid, for the Lord your God goes with you.",
            ml: "ബലവും ധൈര്യവും ഉള്ളവരായിരിപ്പിൻ; ഭയപ്പെടരുത്, നിങ്ങളുടെ ദൈവമായ യഹോവ നിങ്ങളോടുകൂടെ പോകുന്നു."
        }
    },

    {
        id: 142,
        reference: {
            en: "Deuteronomy 31:8",
            ml: "ആവർത്തനം 31:8"
        },
        text: {
            en: "The Lord himself goes before you and will be with you; he will never leave you nor forsake you.",
            ml: "യഹോവ തന്നേ നിനക്കു മുമ്പായി നടക്കും; അവൻ നിന്നോടുകൂടെ ഇരിക്കും; അവൻ നിന്നെ കൈവിടുകയോ ഉപേക്ഷിക്കുകയോ ഇല്ല."
        }
    },

    {
        id: 143,
        reference: {
            en: "Joshua 24:15",
            ml: "യോശുവ 24:15"
        },
        text: {
            en: "As for me and my house, we will serve the Lord.",
            ml: "ഞാനും എന്റെ കുടുംബവും യഹോവയെ സേവിക്കും."
        }
    },

    {
        id: 144,
        reference: {
            en: "Judges 6:12",
            ml: "ന്യായാധിപന്മാർ 6:12"
        },
        text: {
            en: "The Lord is with you, mighty warrior.",
            ml: "യഹോവ നിന്നോടുകൂടെ ഉണ്ട്, വീരനായ യോദ്ധാവേ."
        }
    },

    {
        id: 145,
        reference: {
            en: "1 Samuel 16:7",
            ml: "1 ശമൂവേൽ 16:7"
        },
        text: {
            en: "The Lord looks at the heart.",
            ml: "യഹോവ ഹൃദയത്തെ നോക്കുന്നു."
        }
    },

    {
        id: 146,
        reference: {
            en: "2 Samuel 22:31",
            ml: "2 ശമൂവേൽ 22:31"
        },
        text: {
            en: "As for God, his way is perfect; the word of the Lord is flawless.",
            ml: "ദൈവത്തിന്റെ വഴി പരിപൂർണ്ണമാണ്; യഹോവയുടെ വചനം നിർമ്മലമാണ്."
        }
    },

    {
        id: 147,
        reference: {
            en: "1 Kings 8:57",
            ml: "1 രാജാക്കന്മാർ 8:57"
        },
        text: {
            en: "May the Lord our God be with us as he was with our ancestors; may he never leave us nor forsake us.",
            ml: "നമ്മുടെ പിതാക്കന്മാരോടുകൂടെ ഇരുന്നതുപോലെ നമ്മുടെ ദൈവമായ യഹോവ നമ്മോടുകൂടെ ഇരിക്കട്ടെ; അവൻ നമ്മെ കൈവിടുകയോ ഉപേക്ഷിക്കുകയോ അരുതേ."
        }
    },

    {
        id: 148,
        reference: {
            en: "1 Chronicles 16:11",
            ml: "1 ദിനവൃത്താന്തം 16:11"
        },
        text: {
            en: "Look to the Lord and his strength; seek his face always.",
            ml: "യഹോവയെയും അവന്റെ ശക്തിയെയും അന്വേഷിപ്പിൻ; അവന്റെ മുഖം എപ്പോഴും അന്വേഷിപ്പിൻ."
        }
    },

    {
        id: 149,
        reference: {
            en: "1 Chronicles 16:34",
            ml: "1 ദിനവൃത്താന്തം 16:34"
        },
        text: {
            en: "Give thanks to the Lord, for he is good; his love endures forever.",
            ml: "യഹോവ നല്ലവനാകയാൽ അവന്നു സ്തോത്രം ചെയ്‍വിൻ; അവന്റെ ദയ എന്നേക്കും നിലനിൽക്കുന്നു."
        }
    },

    {
        id: 150,
        reference: {
            en: "2 Chronicles 20:15",
            ml: "2 ദിനവൃത്താന്തം 20:15"
        },
        text: {
            en: "Do not be afraid or discouraged. The battle is not yours, but God's.",
            ml: "ഭയപ്പെടരുത്; ഭ്രമിക്കയും അരുത്. ഈ യുദ്ധം നിങ്ങളുടേതല്ല, ദൈവത്തിന്റേതാകുന്നു."
        }
    },

    {
        id: 151,
        reference: {
            en: "Nehemiah 8:10",
            ml: "നെഹെമ്യാവ് 8:10"
        },
        text: {
            en: "The joy of the Lord is your strength.",
            ml: "യഹോവയിലുള്ള സന്തോഷം നിങ്ങളുടെ ബലം ആകുന്നു."
        }
    },

    {
        id: 152,
        reference: {
            en: "Job 19:25",
            ml: "ഇയ്യോബ് 19:25"
        },
        text: {
            en: "I know that my Redeemer lives, and that in the end he will stand upon the earth.",
            ml: "എന്റെ വീണ്ടെടുപ്പുകാരൻ ജീവിച്ചിരിക്കുന്നു എന്നും അവസാനം അവൻ ഭൂമിയിൽ നിൽക്കും എന്നും ഞാൻ അറിയുന്നു."
        }
    },

    {
        id: 153,
        reference: {
            en: "Job 23:10",
            ml: "ഇയ്യോബ് 23:10"
        },
        text: {
            en: "When he has tested me, I will come forth as gold.",
            ml: "അവൻ എന്നെ പരീക്ഷിച്ചശേഷം ഞാൻ പൊന്നുപോലെ പുറപ്പെട്ടുവരും."
        }
    },

    {
        id: 154,
        reference: {
            en: "Psalm 1:1-2",
            ml: "സങ്കീർത്തനങ്ങൾ 1:1-2"
        },
        text: {
            en: "Blessed is the one whose delight is in the law of the Lord, and who meditates on it day and night.",
            ml: "യഹോവയുടെ ന്യായപ്രമാണത്തിൽ സന്തോഷിക്കുകയും രാവും പകലും അതിൽ ധ്യാനിക്കുകയും ചെയ്യുന്നവൻ ഭാഗ്യവാൻ."
        }
    },

    {
        id: 155,
        reference: {
            en: "Psalm 8:3-4",
            ml: "സങ്കീർത്തനങ്ങൾ 8:3-4"
        },
        text: {
            en: "When I consider your heavens, the work of your fingers, what is mankind that you are mindful of them?",
            ml: "നിന്റെ വിരലുകളുടെ പ്രവൃത്തിയായ ആകാശങ്ങളെ ഞാൻ നോക്കുമ്പോൾ, മനുഷ്യനെ നീ ഓർക്കേണ്ടതിന് അവൻ എന്തുള്ളു?"
        }
    },

    {
        id: 156,
        reference: {
            en: "Psalm 13:5",
            ml: "സങ്കീർത്തനങ്ങൾ 13:5"
        },
        text: {
            en: "But I trust in your unfailing love; my heart rejoices in your salvation.",
            ml: "ഞാനോ നിന്റെ അചഞ്ചലമായ ദയയിൽ ആശ്രയിക്കുന്നു; നിന്റെ രക്ഷയിൽ എന്റെ ഹൃദയം ആനന്ദിക്കും."
        }
    },

    {
        id: 157,
        reference: {
            en: "Psalm 16:11",
            ml: "സങ്കീർത്തനങ്ങൾ 16:11"
        },
        text: {
            en: "You make known to me the path of life; in your presence there is fullness of joy.",
            ml: "ജീവന്റെ വഴി നീ എന്നെ അറിയിക്കുന്നു; നിന്റെ സന്നിധിയിൽ സന്തോഷത്തിന്റെ പൂർണ്ണതയുണ്ട്."
        }
    },

    {
        id: 158,
        reference: {
            en: "Psalm 18:32",
            ml: "സങ്കീർത്തനങ്ങൾ 18:32"
        },
        text: {
            en: "It is God who arms me with strength and keeps my way secure.",
            ml: "എനിക്ക് ശക്തി ധരിപ്പിക്കുന്നതും എന്റെ വഴി സുരക്ഷിതമാക്കുന്നതും ദൈവമാണ്."
        }
    },

    {
        id: 159,
        reference: {
            en: "Psalm 23:4",
            ml: "സങ്കീർത്തനങ്ങൾ 23:4"
        },
        text: {
            en: "Even though I walk through the darkest valley, I will fear no evil, for you are with me.",
            ml: "കൂരിരുളിന്റെ താഴ്വരയിൽ കൂടി നടന്നാലും ഞാൻ ഒരു അനർത്ഥവും ഭയപ്പെടുകയില്ല; നീ എന്നോടുകൂടെ ഉണ്ടല്ലോ."
        }
    },

    {
        id: 160,
        reference: {
            en: "Psalm 24:1",
            ml: "സങ്കീർത്തനങ്ങൾ 24:1"
        },
        text: {
            en: "The earth is the Lord's, and everything in it.",
            ml: "ഭൂമിയും അതിന്റെ പൂർണ്ണതയും യഹോവയ്ക്കുള്ളതാകുന്നു."
        }
    },

    {
        id: 161,
        reference: {
            en: "Psalm 29:11",
            ml: "സങ്കീർത്തനങ്ങൾ 29:11"
        },
        text: {
            en: "The Lord gives strength to his people; the Lord blesses his people with peace.",
            ml: "യഹോവ തന്റെ ജനത്തിന് ശക്തി നൽകുന്നു; യഹോവ തന്റെ ജനത്തെ സമാധാനത്തോടെ അനുഗ്രഹിക്കുന്നു."
        }
    },

    {
        id: 162,
        reference: {
            en: "Psalm 31:14",
            ml: "സങ്കീർത്തനങ്ങൾ 31:14"
        },
        text: {
            en: "But I trust in you, Lord; I say, You are my God.",
            ml: "ഞാനോ യഹോവേ, നിന്നിൽ ആശ്രയിക്കുന്നു; നീ എന്റെ ദൈവമാകുന്നു എന്നു ഞാൻ പറയുന്നു."
        }
    },

    {
        id: 163,
        reference: {
            en: "Psalm 34:4",
            ml: "സങ്കീർത്തനങ്ങൾ 34:4"
        },
        text: {
            en: "I sought the Lord, and he answered me; he delivered me from all my fears.",
            ml: "ഞാൻ യഹോവയെ അന്വേഷിച്ചു; അവൻ എനിക്ക് ഉത്തരമരുളി; എന്റെ സകലഭയങ്ങളിൽനിന്നും എന്നെ വിടുവിച്ചു."
        }
    },

    {
        id: 164,
        reference: {
            en: "Psalm 34:17",
            ml: "സങ്കീർത്തനങ്ങൾ 34:17"
        },
        text: {
            en: "The righteous cry out, and the Lord hears them; he delivers them from all their troubles.",
            ml: "നീതിമാന്മാർ നിലവിളിക്കുന്നു; യഹോവ കേൾക്കുന്നു; അവരുടെ സകല കഷ്ടങ്ങളിൽനിന്നും അവരെ വിടുവിക്കുന്നു."
        }
    },

    {
        id: 165,
        reference: {
            en: "Psalm 40:11",
            ml: "സങ്കീർത്തനങ്ങൾ 40:11"
        },
        text: {
            en: "May your love and faithfulness always protect me.",
            ml: "നിന്റെ ദയയും വിശ്വസ്തതയും എപ്പോഴും എന്നെ കാക്കട്ടെ."
        }
    },

    {
        id: 166,
        reference: {
            en: "Psalm 46:1",
            ml: "സങ്കീർത്തനങ്ങൾ 46:1"
        },
        text: {
            en: "God is our refuge and strength, an ever-present help in trouble.",
            ml: "ദൈവം നമ്മുടെ സങ്കേതവും ശക്തിയും കഷ്ടങ്ങളിൽ ഏറ്റവും അടുത്ത സഹായവും ആകുന്നു."
        }
    },

    {
        id: 167,
        reference: {
            en: "Psalm 50:15",
            ml: "സങ്കീർത്തനങ്ങൾ 50:15"
        },
        text: {
            en: "Call on me in the day of trouble; I will deliver you, and you will honor me.",
            ml: "കഷ്ടകാലത്ത് എന്നെ വിളിച്ചപേക്ഷിക്ക; ഞാൻ നിന്നെ വിടുവിക്കും; നീ എന്നെ മഹത്വപ്പെടുത്തും."
        }
    },

    {
        id: 168,
        reference: {
            en: "Psalm 57:1",
            ml: "സങ്കീർത്തനങ്ങൾ 57:1"
        },
        text: {
            en: "In you I take refuge. I will take refuge in the shadow of your wings until the disaster has passed.",
            ml: "ഞാൻ നിന്നിൽ ശരണം പ്രാപിക്കുന്നു; അനർത്ഥങ്ങൾ ഒഴിഞ്ഞുപോകുവോളം നിന്റെ ചിറകിൻ നിഴലിൽ ഞാൻ ശരണം പ്രാപിക്കും."
        }
    },

    {
        id: 169,
        reference: {
            en: "Psalm 59:16",
            ml: "സങ്കീർത്തനങ്ങൾ 59:16"
        },
        text: {
            en: "I will sing of your strength and proclaim your love in the morning.",
            ml: "ഞാൻ നിന്റെ ശക്തിയെക്കുറിച്ചു പാടും; പ്രഭാതത്തിൽ നിന്റെ ദയയെ പുകഴ്ത്തും."
        }
    },

    {
        id: 170,
        reference: {
            en: "Psalm 71:5",
            ml: "സങ്കീർത്തനങ്ങൾ 71:5"
        },
        text: {
            en: "For you have been my hope, Sovereign Lord, my confidence since my youth.",
            ml: "പരമാധികാരിയായ കർത്താവേ, നീ എന്റെ പ്രത്യാശയും എന്റെ യൗവനംമുതൽ എന്റെ ആശ്രയവും ആകുന്നു."
        }
    },

    {
        id: 171,
        reference: {
            en: "Psalm 71:14",
            ml: "സങ്കീർത്തനങ്ങൾ 71:14"
        },
        text: {
            en: "As for me, I will always have hope; I will praise you more and more.",
            ml: "ഞാനോ എപ്പോഴും പ്രത്യാശ വെക്കും; ഞാൻ നിന്നെ അധികമധികം സ്തുതിക്കും."
        }
    },

    {
        id: 172,
        reference: {
            en: "Psalm 73:23",
            ml: "സങ്കീർത്തനങ്ങൾ 73:23"
        },
        text: {
            en: "Yet I am always with you; you hold me by my right hand.",
            ml: "എങ്കിലും ഞാൻ എപ്പോഴും നിന്നോടുകൂടെ ഇരിക്കുന്നു; നീ എന്റെ വലങ്കൈ പിടിച്ചിരിക്കുന്നു."
        }
    },

    {
        id: 173,
        reference: {
            en: "Psalm 86:5",
            ml: "സങ്കീർത്തനങ്ങൾ 86:5"
        },
        text: {
            en: "You, Lord, are forgiving and good, abounding in love to all who call to you.",
            ml: "കർത്താവേ, നീ നല്ലവനും ക്ഷമിക്കുന്നവനും നിന്നെ വിളിച്ചപേക്ഷിക്കുന്ന ഏവരോടും മഹാദയയുള്ളവനും ആകുന്നു."
        }
    },

    {
        id: 174,
        reference: {
            en: "Psalm 91:1-2",
            ml: "സങ്കീർത്തനങ്ങൾ 91:1-2"
        },
        text: {
            en: "Whoever dwells in the shelter of the Most High will rest in the shadow of the Almighty.",
            ml: "അത്യുന്നതന്റെ മറവിൽ വസിക്കുന്നവൻ സർവ്വശക്തന്റെ നിഴലിൽ വിശ്രമിക്കും."
        }
    },

    {
        id: 175,
        reference: {
            en: "Psalm 92:1-2",
            ml: "സങ്കീർത്തനങ്ങൾ 92:1-2"
        },
        text: {
            en: "It is good to praise the Lord and make music to your name, O Most High.",
            ml: "യഹോവയ്ക്കു സ്തോത്രം ചെയ്യുന്നതും അത്യുന്നതാ, നിന്റെ നാമത്തെ പാടിപ്പുകഴ്ത്തുന്നതും നല്ലതു."
        }
    },

    {
        id: 176,
        reference: {
            en: "Psalm 100:5",
            ml: "സങ്കീർത്തനങ്ങൾ 100:5"
        },
        text: {
            en: "The Lord is good and his love endures forever; his faithfulness continues through all generations.",
            ml: "യഹോവ നല്ലവൻ; അവന്റെ ദയ എന്നേക്കും നിലനിൽക്കുന്നു; അവന്റെ വിശ്വസ്തത തലമുറതലമുറയായി നിലനിൽക്കുന്നു."
        }
    },

    {
        id: 177,
        reference: {
            en: "Psalm 103:12",
            ml: "സങ്കീർത്തനങ്ങൾ 103:12"
        },
        text: {
            en: "As far as the east is from the west, so far has he removed our transgressions from us.",
            ml: "കിഴക്ക് പടിഞ്ഞാറിനോട് എത്ര അകലെയോ അത്രയും അവൻ നമ്മുടെ അതിക്രമങ്ങളെ നമ്മിൽനിന്ന് അകറ്റിയിരിക്കുന്നു."
        }
    },

    {
        id: 178,
        reference: {
            en: "Psalm 103:13",
            ml: "സങ്കീർത്തനങ്ങൾ 103:13"
        },
        text: {
            en: "As a father has compassion on his children, so the Lord has compassion on those who fear him.",
            ml: "അപ്പൻ മക്കളോടു കരുണ കാണിക്കുന്നതുപോലെ യഹോവ തന്നെ ഭയപ്പെടുന്നവരോടു കരുണ കാണിക്കുന്നു."
        }
    },

    {
        id: 179,
        reference: {
            en: "Psalm 111:10",
            ml: "സങ്കീർത്തനങ്ങൾ 111:10"
        },
        text: {
            en: "The fear of the Lord is the beginning of wisdom; all who follow his precepts have good understanding.",
            ml: "യഹോവാഭക്തി ജ്ഞാനത്തിന്റെ ആരംഭമാകുന്നു; അവന്റെ കല്പനകൾ അനുസരിക്കുന്ന ഏവർക്കും നല്ല വിവേകം ഉണ്ട്."
        }
    },

    {
        id: 180,
        reference: {
            en: "Psalm 119:9",
            ml: "സങ്കീർത്തനങ്ങൾ 119:9"
        },
        text: {
            en: "How can a young person stay on the path of purity? By living according to your word.",
            ml: "യുവാവ് തന്റെ വഴി എങ്ങനെ നിർമ്മലമാക്കും? നിന്റെ വചനപ്രകാരം അതിനെ സൂക്ഷിക്കുന്നതിനാൽ തന്നെ."
        }
    },

    {
        id: 181,
        reference: {
            en: "Psalm 119:18",
            ml: "സങ്കീർത്തനങ്ങൾ 119:18"
        },
        text: {
            en: "Open my eyes that I may see wonderful things in your law.",
            ml: "നിന്റെ ന്യായപ്രമാണത്തിലെ അത്ഭുതങ്ങളെ കാണേണ്ടതിന് എന്റെ കണ്ണുകളെ തുറക്കേണമേ."
        }
    },

    {
        id: 182,
        reference: {
            en: "Psalm 119:50",
            ml: "സങ്കീർത്തനങ്ങൾ 119:50"
        },
        text: {
            en: "My comfort in my suffering is this: your promise preserves my life.",
            ml: "എന്റെ കഷ്ടതയിൽ എന്റെ ആശ്വാസം ഇതാകുന്നു: നിന്റെ വാഗ്ദാനം എന്നെ ജീവിപ്പിക്കുന്നു."
        }
    },

    {
        id: 183,
        reference: {
            en: "Psalm 119:165",
            ml: "സങ്കീർത്തനങ്ങൾ 119:165"
        },
        text: {
            en: "Great peace have those who love your law; nothing can make them stumble.",
            ml: "നിന്റെ ന്യായപ്രമാണത്തെ സ്നേഹിക്കുന്നവർക്ക് മഹാസമാധാനം ഉണ്ട്; അവർക്ക് ഇടർച്ചയില്ല."
        }
    },

    {
        id: 184,
        reference: {
            en: "Psalm 121:5",
            ml: "സങ്കീർത്തനങ്ങൾ 121:5"
        },
        text: {
            en: "The Lord watches over you; the Lord is your shade at your right hand.",
            ml: "യഹോവ നിന്നെ കാക്കുന്നു; യഹോവ നിന്റെ വലത്തുഭാഗത്ത് നിന്റെ നിഴലാകുന്നു."
        }
    },

    {
        id: 185,
        reference: {
            en: "Psalm 139:14",
            ml: "സങ്കീർത്തനങ്ങൾ 139:14"
        },
        text: {
            en: "I praise you because I am fearfully and wonderfully made.",
            ml: "ഞാൻ ഭയങ്കരവും അതിശയകരവുമായി സൃഷ്ടിക്കപ്പെട്ടിരിക്കുന്നതിനാൽ ഞാൻ നിന്നെ സ്തുതിക്കുന്നു."
        }
    },

    {
        id: 186,
        reference: {
            en: "Psalm 143:8",
            ml: "സങ്കീർത്തനങ്ങൾ 143:8"
        },
        text: {
            en: "Let the morning bring me word of your unfailing love, for I have put my trust in you.",
            ml: "പ്രഭാതത്തിൽ നിന്റെ അചഞ്ചലമായ ദയയുടെ വാക്ക് എന്നെ കേൾപ്പിക്കേണമേ; ഞാൻ നിന്നിൽ ആശ്രയിച്ചിരിക്കുന്നു."
        }
    },

    {
        id: 187,
        reference: {
            en: "Proverbs 10:12",
            ml: "സദൃശവാക്യങ്ങൾ 10:12"
        },
        text: {
            en: "Hatred stirs up conflict, but love covers over all wrongs.",
            ml: "പക കലഹങ്ങളെ ഉണർത്തുന്നു; സ്നേഹമോ സകല കുറ്റങ്ങളെയും മൂടുന്നു."
        }
    },

    {
        id: 188,
        reference: {
            en: "Proverbs 10:22",
            ml: "സദൃശവാക്യങ്ങൾ 10:22"
        },
        text: {
            en: "The blessing of the Lord brings wealth, without painful toil for it.",
            ml: "യഹോവയുടെ അനുഗ്രഹം സമ്പത്ത് നൽകുന്നു; അതിനോടൊപ്പം ദുഃഖം അവൻ ചേർക്കുന്നില്ല."
        }
    },

    {
        id: 189,
        reference: {
            en: "Proverbs 12:18",
            ml: "സദൃശവാക്യങ്ങൾ 12:18"
        },
        text: {
            en: "The words of the reckless pierce like swords, but the tongue of the wise brings healing.",
            ml: "അശ്രദ്ധരുടെ വാക്കുകൾ വാളുകൊണ്ടെന്നപോലെ കുത്തുന്നു; ജ്ഞാനികളുടെ നാവ് സൗഖ്യം നൽകുന്നു."
        }
    },

    {
        id: 190,
        reference: {
            en: "Proverbs 13:12",
            ml: "സദൃശവാക്യങ്ങൾ 13:12"
        },
        text: {
            en: "Hope deferred makes the heart sick, but a longing fulfilled is a tree of life.",
            ml: "താമസിച്ച പ്രത്യാശ ഹൃദയത്തെ ക്ഷീണിപ്പിക്കുന്നു; ആഗ്രഹം സാധിച്ചുകിട്ടുന്നത് ജീവവൃക്ഷംപോലെയാകുന്നു."
        }
    },

    {
        id: 191,
        reference: {
            en: "Proverbs 14:29",
            ml: "സദൃശവാക്യങ്ങൾ 14:29"
        },
        text: {
            en: "Whoever is patient has great understanding, but one who is quick-tempered displays folly.",
            ml: "ദീർഘക്ഷമയുള്ളവൻ വലിയ വിവേകമുള്ളവൻ; ക്ഷിപ്രകോപിയായവൻ ഭോഷത്വം കാണിക്കുന്നു."
        }
    },

    {
        id: 192,
        reference: {
            en: "Proverbs 15:3",
            ml: "സദൃശവാക്യങ്ങൾ 15:3"
        },
        text: {
            en: "The eyes of the Lord are everywhere, keeping watch on the wicked and the good.",
            ml: "യഹോവയുടെ കണ്ണുകൾ എല്ലായിടത്തും ഇരിക്കുന്നു; ദുഷ്ടന്മാരെയും നല്ലവരെയും അവൻ നോക്കിക്കൊണ്ടിരിക്കുന്നു."
        }
    },

    {
        id: 193,
        reference: {
            en: "Proverbs 15:22",
            ml: "സദൃശവാക്യങ്ങൾ 15:22"
        },
        text: {
            en: "Plans fail for lack of counsel, but with many advisers they succeed.",
            ml: "ആലോചനയില്ലാതെ പദ്ധതികൾ പരാജയപ്പെടുന്നു; അനേകം ആലോചനക്കാരാൽ അവ വിജയിക്കുന്നു."
        }
    },

    {
        id: 194,
        reference: {
            en: "Proverbs 16:20",
            ml: "സദൃശവാക്യങ്ങൾ 16:20"
        },
        text: {
            en: "Whoever gives heed to instruction prospers, and blessed is the one who trusts in the Lord.",
            ml: "വചനത്തിൽ ശ്രദ്ധിക്കുന്നവൻ നന്മ പ്രാപിക്കും; യഹോവയിൽ ആശ്രയിക്കുന്നവൻ ഭാഗ്യവാൻ."
        }
    },

    {
        id: 195,
        reference: {
            en: "Proverbs 17:17",
            ml: "സദൃശവാക്യങ്ങൾ 17:17"
        },
        text: {
            en: "A friend loves at all times, and a brother is born for a time of adversity.",
            ml: "സ്നേഹിതൻ എല്ലാകാലത്തും സ്നേഹിക്കുന്നു; കഷ്ടകാലത്തേക്കായി സഹോദരൻ ജനിച്ചിരിക്കുന്നു."
        }
    },

    {
        id: 196,
        reference: {
            en: "Proverbs 18:24",
            ml: "സദൃശവാക്യങ്ങൾ 18:24"
        },
        text: {
            en: "There is a friend who sticks closer than a brother.",
            ml: "സഹോദരനേക്കാൾ അടുത്തു ചേർന്നുനിൽക്കുന്ന ഒരു സ്നേഹിതൻ ഉണ്ടു."
        }
    },

    {
        id: 197,
        reference: {
            en: "Proverbs 20:24",
            ml: "സദൃശവാക്യങ്ങൾ 20:24"
        },
        text: {
            en: "A person's steps are directed by the Lord. How then can anyone understand their own way?",
            ml: "മനുഷ്യന്റെ കാലടികൾ യഹോവയാൽ നിയന്ത്രിക്കപ്പെടുന്നു; പിന്നെ മനുഷ്യന് തന്റെ വഴി എങ്ങനെ മനസ്സിലാക്കാൻ കഴിയും?"
        }
    },

    {
        id: 198,
        reference: {
            en: "Proverbs 21:5",
            ml: "സദൃശവാക്യങ്ങൾ 21:5"
        },
        text: {
            en: "The plans of the diligent lead to profit as surely as haste leads to poverty.",
            ml: "പരിശ്രമശീലന്റെ ആലോചനകൾ സമൃദ്ധിയിലേക്കു നയിക്കുന്നു; ധൃതിയുള്ളവന്റെത് ദാരിദ്ര്യത്തിലേക്കു നയിക്കുന്നു."
        }
    },

    {
        id: 199,
        reference: {
            en: "Proverbs 22:6",
            ml: "സദൃശവാക്യങ്ങൾ 22:6"
        },
        text: {
            en: "Start children off on the way they should go, and even when they are old they will not turn from it.",
            ml: "ബാലനെ അവൻ നടക്കേണ്ട വഴിയിൽ അഭ്യസിപ്പിക്ക; വൃദ്ധനായാലും അവൻ അതിൽനിന്നു മാറുകയില്ല."
        }
    },

    {
        id: 200,
        reference: {
            en: "Proverbs 27:17",
            ml: "സദൃശവാക്യങ്ങൾ 27:17"
        },
        text: {
            en: "As iron sharpens iron, so one person sharpens another.",
            ml: "ഇരുമ്പ് ഇരുമ്പിനെ മൂർച്ചയാക്കുന്നതുപോലെ മനുഷ്യൻ തന്റെ സ്നേഹിതന്റെ മുഖം മൂർച്ചയാക്കുന്നു."
        }
    },

    {
        id: 201,
        reference: {
            en: "Isaiah 12:2",
            ml: "യെശയ്യാവ് 12:2"
        },
        text: {
            en: "God is my salvation; I will trust and not be afraid. The Lord is my strength and my song.",
            ml: "ദൈവം എന്റെ രക്ഷയാകുന്നു; ഞാൻ ആശ്രയിക്കും, ഭയപ്പെടുകയില്ല. യഹോവ എന്റെ ശക്തിയും എന്റെ ഗാനവും ആകുന്നു."
        }
    },

    {
        id: 202,
        reference: {
            en: "Isaiah 35:4",
            ml: "യെശയ്യാവ് 35:4"
        },
        text: {
            en: "Be strong, do not fear; your God will come and save you.",
            ml: "ബലപ്പെടുവിൻ, ഭയപ്പെടേണ്ടാ; നിങ്ങളുടെ ദൈവം വന്നു നിങ്ങളെ രക്ഷിക്കും."
        }
    },

    {
        id: 203,
        reference: {
            en: "Isaiah 40:29",
            ml: "യെശയ്യാവ് 40:29"
        },
        text: {
            en: "He gives strength to the weary and increases the power of the weak.",
            ml: "അവൻ ക്ഷീണിച്ചവന് ശക്തി നൽകുന്നു; ബലഹീനന്റെ ശക്തി വർദ്ധിപ്പിക്കുന്നു."
        }
    },

    {
        id: 204,
        reference: {
            en: "Isaiah 41:13",
            ml: "യെശയ്യാവ് 41:13"
        },
        text: {
            en: "I am the Lord your God who takes hold of your right hand and says to you, Do not fear; I will help you.",
            ml: "നിന്റെ ദൈവമായ യഹോവയായ ഞാൻ നിന്റെ വലങ്കൈ പിടിച്ച് നിന്നോട് പറയുന്നു: ഭയപ്പെടേണ്ടാ; ഞാൻ നിന്നെ സഹായിക്കും."
        }
    },

    {
        id: 205,
        reference: {
            en: "Isaiah 43:1",
            ml: "യെശയ്യാവ് 43:1"
        },
        text: {
            en: "Do not fear, for I have redeemed you; I have called you by name; you are mine.",
            ml: "ഭയപ്പെടേണ്ടാ; ഞാൻ നിന്നെ വീണ്ടെടുത്തിരിക്കുന്നു; ഞാൻ നിന്നെ പേരുചൊല്ലി വിളിച്ചിരിക്കുന്നു; നീ എന്റേതാകുന്നു."
        }
    },

    {
        id: 206,
        reference: {
            en: "Isaiah 44:3",
            ml: "യെശയ്യാവ് 44:3"
        },
        text: {
            en: "I will pour water on the thirsty land and streams on the dry ground; I will pour out my Spirit.",
            ml: "ദാഹിച്ചിരിക്കുന്ന ദേശത്തിന്മേൽ ഞാൻ വെള്ളവും ഉണങ്ങിയ നിലത്തിന്മേൽ അരുവികളും ഒഴുക്കും; എന്റെ ആത്മാവിനെ ഞാൻ പകരും."
        }
    },

    {
        id: 207,
        reference: {
            en: "Isaiah 46:4",
            ml: "യെശയ്യാവ് 46:4"
        },
        text: {
            en: "Even to your old age I am he, and even to gray hairs I will carry you.",
            ml: "നിങ്ങളുടെ വാർദ്ധക്യത്തിലും ഞാൻ തന്നേ; നര വന്നാലും ഞാൻ നിങ്ങളെ വഹിക്കും."
        }
    },

    {
        id: 208,
        reference: {
            en: "Isaiah 49:15",
            ml: "യെശയ്യാവ് 49:15"
        },
        text: {
            en: "Can a mother forget the baby at her breast? Though she may forget, I will not forget you.",
            ml: "ഒരു അമ്മ തന്റെ മുലകുടിക്കുന്ന കുഞ്ഞിനെ മറക്കുമോ? അവൾ മറന്നാലും ഞാൻ നിന്നെ മറക്കുകയില്ല."
        }
    },

    {
        id: 209,
        reference: {
            en: "Isaiah 52:12",
            ml: "യെശയ്യാവ് 52:12"
        },
        text: {
            en: "The Lord will go before you, and the God of Israel will be your rear guard.",
            ml: "യഹോവ നിങ്ങൾക്കു മുമ്പായി നടക്കും; യിസ്രായേലിന്റെ ദൈവം നിങ്ങളുടെ പിൻകാവൽ ആയിരിക്കും."
        }
    },

    {
        id: 210,
        reference: {
            en: "Isaiah 60:1",
            ml: "യെശയ്യാവ് 60:1"
        },
        text: {
            en: "Arise, shine, for your light has come, and the glory of the Lord rises upon you.",
            ml: "എഴുന്നേറ്റ് പ്രകാശിക്കുക; നിന്റെ വെളിച്ചം വന്നിരിക്കുന്നു; യഹോവയുടെ മഹത്വം നിന്റെമേൽ ഉദിച്ചിരിക്കുന്നു."
        }
    },

    {
        id: 211,
        reference: {
            en: "Jeremiah 31:3",
            ml: "യിരെമ്യാവ് 31:3"
        },
        text: {
            en: "I have loved you with an everlasting love; I have drawn you with unfailing kindness.",
            ml: "ഞാൻ നിന്നെ നിത്യസ്നേഹത്താൽ സ്നേഹിച്ചിരിക്കുന്നു; അതുകൊണ്ട് ദയയാൽ നിന്നെ ആകർഷിച്ചിരിക്കുന്നു."
        }
    },

    {
        id: 212,
        reference: {
            en: "Ezekiel 36:26",
            ml: "യെഹെസ്കേൽ 36:26"
        },
        text: {
            en: "I will give you a new heart and put a new spirit in you.",
            ml: "ഞാൻ നിങ്ങൾക്കു പുതിയൊരു ഹൃദയം തരും; പുതിയൊരു ആത്മാവിനെ നിങ്ങളുടെ ഉള്ളിൽ ആക്കും."
        }
    },

    {
        id: 213,
        reference: {
            en: "Daniel 2:22",
            ml: "ദാനീയേൽ 2:22"
        },
        text: {
            en: "He reveals deep and hidden things; he knows what lies in darkness, and light dwells with him.",
            ml: "അവൻ ആഴവും രഹസ്യവുമായ കാര്യങ്ങൾ വെളിപ്പെടുത്തുന്നു; ഇരുട്ടിൽ ഉള്ളത് അവൻ അറിയുന്നു; വെളിച്ചം അവനോടുകൂടെ വസിക്കുന്നു."
        }
    },

    {
        id: 214,
        reference: {
            en: "Micah 6:8",
            ml: "മീഖാ 6:8"
        },
        text: {
            en: "Act justly, love mercy, and walk humbly with your God.",
            ml: "ന്യായം പ്രവർത്തിക്കുകയും കരുണയെ സ്നേഹിക്കുകയും നിന്റെ ദൈവത്തോടുകൂടെ താഴ്മയോടെ നടക്കുകയും ചെയ്യുക."
        }
    },

    {
        id: 215,
        reference: {
            en: "Matthew 5:8",
            ml: "മത്തായി 5:8"
        },
        text: {
            en: "Blessed are the pure in heart, for they will see God.",
            ml: "ഹൃദയശുദ്ധിയുള്ളവർ ഭാഗ്യവാന്മാർ; അവർ ദൈവത്തെ കാണും."
        }
    },

    {
        id: 216,
        reference: {
            en: "Matthew 5:16",
            ml: "മത്തായി 5:16"
        },
        text: {
            en: "Let your light shine before others, that they may see your good deeds and glorify your Father.",
            ml: "മനുഷ്യർ നിങ്ങളുടെ നല്ല പ്രവൃത്തികളെ കണ്ടു സ്വർഗ്ഗസ്ഥനായ നിങ്ങളുടെ പിതാവിനെ മഹത്വപ്പെടുത്തേണ്ടതിന് നിങ്ങളുടെ വെളിച്ചം അവരുടെ മുമ്പിൽ പ്രകാശിക്കട്ടെ."
        }
    },

    {
        id: 217,
        reference: {
            en: "Matthew 6:21",
            ml: "മത്തായി 6:21"
        },
        text: {
            en: "Where your treasure is, there your heart will be also.",
            ml: "നിന്റെ നിക്ഷേപം ഉള്ളിടത്ത് നിന്റെ ഹൃദയവും ഇരിക്കും."
        }
    },

    {
        id: 218,
        reference: {
            en: "Matthew 7:24",
            ml: "മത്തായി 7:24"
        },
        text: {
            en: "Everyone who hears these words of mine and puts them into practice is like a wise person who built a house on the rock.",
            ml: "എന്റെ ഈ വചനങ്ങൾ കേട്ട് അവയെ ചെയ്യുന്നവൻ പാറമേൽ വീട് പണിത ജ്ഞാനിയായ മനുഷ്യനെപ്പോലെയാകുന്നു."
        }
    },

    {
        id: 219,
        reference: {
            en: "Matthew 18:20",
            ml: "മത്തായി 18:20"
        },
        text: {
            en: "Where two or three gather in my name, there am I with them.",
            ml: "രണ്ടോ മൂന്നോ പേർ എന്റെ നാമത്തിൽ കൂടിവരുന്നിടത്ത് ഞാൻ അവരുടെ നടുവിൽ ഉണ്ടാകും."
        }
    },

    {
        id: 220,
        reference: {
            en: "Matthew 22:37-39",
            ml: "മത്തായി 22:37-39"
        },
        text: {
            en: "Love the Lord your God with all your heart and love your neighbor as yourself.",
            ml: "നിന്റെ ദൈവമായ കർത്താവിനെ പൂർണ്ണഹൃദയത്തോടെ സ്നേഹിക്ക; നിന്റെ അയൽക്കാരനെ നിന്നെപ്പോലെ സ്നേഹിക്ക."
        }
    },

    {
        id: 221,
        reference: {
            en: "Mark 9:23",
            ml: "മർക്കോസ് 9:23"
        },
        text: {
            en: "Everything is possible for one who believes.",
            ml: "വിശ്വസിക്കുന്നവന് സകലവും സാധ്യമാണ്."
        }
    },

    {
        id: 222,
        reference: {
            en: "Mark 11:24",
            ml: "മർക്കോസ് 11:24"
        },
        text: {
            en: "Whatever you ask for in prayer, believe that you have received it, and it will be yours.",
            ml: "നിങ്ങൾ പ്രാർത്ഥിച്ചു ചോദിക്കുന്നതൊക്കെയും ലഭിച്ചു എന്നു വിശ്വസിപ്പിൻ; എന്നാൽ അത് നിങ്ങൾക്കു ഉണ്ടാകും."
        }
    },

    {
        id: 223,
        reference: {
            en: "Luke 6:36",
            ml: "ലൂക്കോസ് 6:36"
        },
        text: {
            en: "Be merciful, just as your Father is merciful.",
            ml: "നിങ്ങളുടെ പിതാവ് കരുണയുള്ളവനായിരിക്കുന്നതുപോലെ നിങ്ങളും കരുണയുള്ളവരായിരിക്കുവിൻ."
        }
    },

    {
        id: 224,
        reference: {
            en: "Luke 11:28",
            ml: "ലൂക്കോസ് 11:28"
        },
        text: {
            en: "Blessed are those who hear the word of God and obey it.",
            ml: "ദൈവവചനം കേട്ട് പ്രമാണിക്കുന്നവർ ഭാഗ്യവാന്മാർ."
        }
    },

    {
        id: 225,
        reference: {
            en: "Luke 12:7",
            ml: "ലൂക്കോസ് 12:7"
        },
        text: {
            en: "Even the hairs of your head are all numbered. Do not be afraid; you are worth more than many sparrows.",
            ml: "നിങ്ങളുടെ തലയിലെ രോമങ്ങൾപോലും എണ്ണപ്പെട്ടിരിക്കുന്നു. ഭയപ്പെടേണ്ടാ; അനേകം കുരുവികളേക്കാൾ നിങ്ങൾ വിലയേറിയവരാണ്."
        }
    },

    {
        id: 226,
        reference: {
            en: "John 3:16",
            ml: "യോഹന്നാൻ 3:16"
        },
        text: {
            en: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
            ml: "ദൈവം ലോകത്തെ അത്രമേൽ സ്നേഹിച്ചതിനാൽ തന്റെ ഏകജാതനായ പുത്രനെ നൽകി; അവനിൽ വിശ്വസിക്കുന്ന ഏവനും നശിച്ചുപോകാതെ നിത്യജീവൻ പ്രാപിക്കും."
        }
    },

    {
        id: 227,
        reference: {
            en: "John 6:35",
            ml: "യോഹന്നാൻ 6:35"
        },
        text: {
            en: "Whoever comes to me will never go hungry, and whoever believes in me will never be thirsty.",
            ml: "എന്റെ അടുക്കൽ വരുന്നവന് വിശപ്പുണ്ടാകയില്ല; എന്നിൽ വിശ്വസിക്കുന്നവന് ഒരുനാളും ദാഹിക്കയില്ല."
        }
    },

    {
        id: 228,
        reference: {
            en: "John 11:25",
            ml: "യോഹന്നാൻ 11:25"
        },
        text: {
            en: "I am the resurrection and the life. The one who believes in me will live, even though they die.",
            ml: "ഞാൻ പുനരുത്ഥാനവും ജീവനും ആകുന്നു; എന്നിൽ വിശ്വസിക്കുന്നവൻ മരിച്ചാലും ജീവിക്കും."
        }
    },

    {
        id: 229,
        reference: {
            en: "John 14:6",
            ml: "യോഹന്നാൻ 14:6"
        },
        text: {
            en: "I am the way and the truth and the life. No one comes to the Father except through me.",
            ml: "ഞാൻ തന്നേ വഴിയും സത്യവും ജീവനും ആകുന്നു; എന്നിലൂടെ അല്ലാതെ ആരും പിതാവിന്റെ അടുക്കൽ എത്തുന്നില്ല."
        }
    },

    {
        id: 230,
        reference: {
            en: "John 15:5",
            ml: "യോഹന്നാൻ 15:5"
        },
        text: {
            en: "Whoever remains in me and I in them will bear much fruit; apart from me you can do nothing.",
            ml: "എന്നിൽ വസിക്കുന്നവനും ഞാൻ അവനിൽ വസിക്കുന്നവനും വളരെ ഫലം കായിക്കും; എന്നെ വിട്ടു നിങ്ങൾക്ക് ഒന്നും ചെയ്യുവാൻ കഴിയുകയില്ല."
        }
    },

    {
        id: 231,
        reference: {
            en: "Acts 20:35",
            ml: "പ്രവൃത്തികൾ 20:35"
        },
        text: {
            en: "It is more blessed to give than to receive.",
            ml: "വാങ്ങുന്നതിനെക്കാൾ കൊടുക്കുന്നതു ഭാഗ്യം."
        }
    },

    {
        id: 232,
        reference: {
            en: "Romans 12:21",
            ml: "റോമർ 12:21"
        },
        text: {
            en: "Do not be overcome by evil, but overcome evil with good.",
            ml: "തിന്മയാൽ ജയിക്കപ്പെടാതെ നന്മകൊണ്ടു തിന്മയെ ജയിക്കുക."
        }
    },

    {
        id: 233,
        reference: {
            en: "1 Corinthians 16:14",
            ml: "1 കൊരിന്ത്യർ 16:14"
        },
        text: {
            en: "Let everything you do be done in love.",
            ml: "നിങ്ങൾ ചെയ്യുന്നതൊക്കെയും സ്നേഹത്തിൽ ചെയ്യുവിൻ."
        }
    },

    {
        id: 234,
        reference: {
            en: "2 Corinthians 12:9",
            ml: "2 കൊരിന്ത്യർ 12:9"
        },
        text: {
            en: "My grace is sufficient for you, for my power is made perfect in weakness.",
            ml: "എന്റെ കൃപ നിനക്കു മതി; എന്റെ ശക്തി ബലഹീനതയിൽ തികഞ്ഞുവരുന്നു."
        }
    },

    {
        id: 235,
        reference: {
            en: "1 John 4:19",
            ml: "1 യോഹന്നാൻ 4:19"
        },
        text: {
            en: "We love because he first loved us.",
            ml: "അവൻ ആദ്യം നമ്മെ സ്നേഹിച്ചതുകൊണ്ട് നാം സ്നേഹിക്കുന്നു."
        }
    }

];