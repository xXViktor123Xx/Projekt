const translations = {
    swedish: {
        title: "Edgar Allan Poe",
        content:`<p></p>`,
    },
    english: {
        title: "Edgar Allan Poe",
        content:`<p>Edgar Allan Poe's central theme focuses on the dark side of human experience, most notably death, grief and the macabre. His works explore intense psychological horror, including madness, guilt, isolation and the impulses of the human mind. 
His most notable work is The Raven, The Tell-Tale Heart, The fall of the House of Usher, The Cask of Amontillado and The Pit and the Pendulum. Edgar Allan Poe was born January 19 1809  Boston Massachusetts and died October 7 1849 Baltimore Maryland.  Edgar Allan Poe was  an American writer and poet who is best known for his poetry and short stories, Allan Poe also contributing significantly to the science fiction genre. He is the first well known American author to earn a living from writing which ended in a financially difficult life and career. 
Edgar Allan Poe was the second child of the actors David Poe and Elizabeth Poe. In his early life his father abandoned the family in 1810, and when Eliza died the following year, Poe was taken in by John and Frances Allan. 
Poe attended the University of Virginia but left after a year due to lack of money. He frequently argued with John Allan over funds needed to continue his education as well as his gambling debt. Edgar Allan Poe was unusual rather than typical for his period in terms of his professional and economic dependence on writing. While many early nineteenth century American writers held other jobs, relied on financial support for family or received patronage, Poe attempted to support himself almost entirely through his work including writing, editing and publishing.</p>`,
    }
};

const elements = {
    title: document.querySelector('h1'),
    contentContainer: document.querySelector('main')
};

function setLanguage(lang) {
    const translation = translations[lang];


    elements.title.textContent = translation.title;

    const image = elements.contentContainer.querySelector('img');

    elements.contentContainer.innerHTML = `
    <h1>${translation.title}</h1>
    ${image.outerHTML}
    ${translation.content}
    `;

    document.documentElement.lang = lang === 'english' ? 'en' : 'sv';
}

document.getElementById('lang_swe').addEventListener('click', () => {setLanguage ('swedish');
});

document.getElementById('lang_eng').addEventListener('click', () => {setLanguage ('english');
});

setLanguage('swedish');

document.getElementById('menu').addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
    
});