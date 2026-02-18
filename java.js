const translations = {
    swedish: {
        title: "Edgar Allan Poe",
        description: ""
    },
    english: {
        title: "Edgar Allan Poe",
        description: ""
    }
};

const elements = {
    title: document.querySelector('h1'),
    description: document.querySelector('main')
};

function setLanguage(language) {
    const translation = translations[lang];
    elements.title.textContent = translation.title;
    elements.description.textContent = translation.description;
}