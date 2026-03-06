const translations = {
  swedish: {
    title: "Edgar Allan Poe",
    content: `<p></p>`,
  },
  english: {
    title: "Edgar Allan Poe",
    content: `<p>Edgar Allan Poe's central theme focuses on the dark side of human experience, most notably death, grief and the macabre. His works explore intense psychological horror, including madness, guilt, isolation and the impulses of the human mind. 
His most notable work is The Raven, The Tell-Tale Heart, The fall of the House of Usher, The Cask of Amontillado and The Pit and the Pendulum. Edgar Allan Poe was born January 19 1809  Boston Massachusetts and died October 7 1849 Baltimore Maryland.  Edgar Allan Poe was  an American writer and poet who is best known for his poetry and short stories, Allan Poe also contributing significantly to the science fiction genre. He is the first well known American author to earn a living from writing which ended in a financially difficult life and career. 
Edgar Allan Poe was the second child of the actors David Poe and Elizabeth Poe. In his early life his father abandoned the family in 1810, and when Eliza died the following year, Poe was taken in by John and Frances Allan. 
Poe attended the University of Virginia but left after a year due to lack of money. He frequently argued with John Allan over funds needed to continue his education as well as his gambling debt. Edgar Allan Poe was unusual rather than typical for his period in terms of his professional and economic dependence on writing. While many early nineteenth century American writers held other jobs, relied on financial support for family or received patronage, Poe attempted to support himself almost entirely through his work including writing, editing and publishing. Edgar wrote the first ever detective novel utilizing a complex system of deduction to reach conclusions, and pioneered the gothic horror genre.


Edgar was the creator of detective novels. His character Auguste Duplin, featured in several works such as “murders on rue morgue”, “the purloined letter” and “the mystery of Marie Rôget”, introduced logical reasoning and forensic style analysis to a character. This created a lot of inspiration for later detective novels such as Sherlock Holmes. He also pioneered the gothic horror genre by focusing on madness, death and the darker side of the human mind which was unusual for this time. All this influence can be seen today with modern horror movies and detective novels.

Our views of Edgar Allan Poe are largely positive. We appreciate his distinctive writing style and his innovative use of language, including his creation of new words.

Yes, mostly in relation to the gothic horror genre, but also in reference to literature as a whole. He is also mentioned numerous times in tv-shows and has connections to songs which are Nevermore by Queen, I am the walrus by The Beatles. 

Texts by Edgar Allan Poe often use the concepts of grief and despair to forward the plot of his stories. A famous example would be his depiction of the protagonist in “The Raven” as a grieving man longing for his departed lover. The way this is portrayed is by repeatedly mentioning the name of the main character’s deceased lover, Lenore, to show our nameless protagonist’s obsession with her even in death.
‘In visions of the dark night
I have dreamed of joy departed—
But a waking dream of life and light
Hath left me broken-hearted.
Ah! What is not a dream by day
To him whose eyes are cast
On things around him with a ray
Turned back upon the past’
-Edgar Allan Poe.

Edgar Allan Poe's primary message or rather his goal was not to teach a simple lesson but to create an immediate emotional impact on the reader, which he termed the “unity of effect. Poe believed that every element of a story or a poem should be meticulously calculated to contribute to a single and often dark emotional experience, such as terror, melancholy or awe. 
Some examples in his works: 
Raven: A grieving, heartbroken narrator descending into madness while mourning the death of his beloved. 
The Tell-Tale Heart: Unchecked guilt and paranoia, rather than external forces, are the ultimate destroyers of a criminal psyche.

Edgar Allan Poe's childhood was marked by death and instability. His father abandoned him and his mother died of tuberculosis, when he was just two. He lived with another family and his relationship with them was often tense especially when he got older. During the year 1837 a financial crisis occurred and high unemployment and depression increased especially in the United States of America. These factors contributed to his dark theme in his story. 

During the 1840s mental health was going through a transitional period, with the general opinion changing from a religious to a medical standpoint (a new perspective by the name of “mental hygiene"). Mental illness was misunderstood and stigmatized often driven by fear or religious zealotry. People with mental illness often ended up in asylum where they were treated as outcasts separated from family and society. They tried to treat them with methods such as bloodletting and electrotherapy. The asylums were overcrowded and understaffed, leading to horrendous living conditions. 
		In today’s society we have a much larger understanding of mental health. People are nowadays encouraged to speak openly about it and seeking help is normalized. In schools they educate about the subject and where you can find help.

There are similarities and differences between the 1840s and now. One similarity is that mental illness is still a problem that troubles us today. This shows that mental health problems are something always prone to  trouble humanity. The difference is the view of it, during the 19th century they saw it as insanity. which often led to confinement in asylums. The treatments were often painful and did not help. Today mental health is understood as a medical condition. Modern society is also more open about discussing mental health, making it easier for individuals to seek help without the same level of shame
        </p>`,
  },
};

const elements = {
  title: document.querySelector("h1"),
  contentContainer: document.querySelector("main"),
};

function setLanguage(lang) {
  const translation = translations[lang];

  elements.title.textContent = translation.title;

  const image = elements.contentContainer.querySelector("img");

  elements.contentContainer.innerHTML = `
    <h1>${translation.title}</h1>
    ${image.outerHTML}
    ${translation.content}
    `;

  document.documentElement.lang = lang === "english" ? "en" : "sv";
}

document.getElementById("lang_swe").addEventListener("click", () => {
  setLanguage("swedish");
});

document.getElementById("lang_eng").addEventListener("click", () => {
  setLanguage("english");
});

setLanguage("swedish");

document.getElementById("menu").addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("active");
});
