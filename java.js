const translations = {
    swedish: {
        title: "Edgar Allan Poe",
        content:`<p>Edgar Allan Poe (1809-1849) var en amerikansk författare, poet, redaktör och litteraturkritiker, mest känd för sina skräck- och mysterieromaner. Han anses vara en av de mest inflytelserika figurerna i amerikansk litteratur och är ofta kallad "skräckens mästare".</p>`,
    },
    english: {
        title: "Edgar Allan Poe2",
        content:`<p>Edgar Allan Poe (1809-1849) was an American writer, poet, editor, and literary critic, best known for his horror and mystery stories. He is considered one of the most influential figures in American literature and is often called "the master of horror".</p>`,
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