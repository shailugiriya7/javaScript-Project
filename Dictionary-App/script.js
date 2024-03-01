const form = document.querySelector("form");
const Result = document.querySelector("#Result");

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const WordInfo = async (word) => {
    try {
        const response = await fetch(`${url}${word}`);
        const data = await response.json();
        Result.textContent = JSON.stringify(data, null, 2);
        let definitions = data[0].meanings[0].definitions[0];
        Result.innerHTML = `
            <h2><strong>Word:</strong> ${data[0].word}</h2>
            <p><strong>Meanings:</strong> ${definitions.definition === undefined ? "Not Available" : definitions.definition}</p>
            <h3>Synonyms:</h3>
            <ul>
                <li>${definitions.example}</li>
            </ul>
            <p><strong>Source URL:</strong> <a href="${data[0].phonetics[0].sourceUrl}" target="_blank">${data[0].phonetics[0].sourceUrl}</a></p>
            <p><strong>Audio Pronunciation:</strong> <audio controls><source src="${data[0].phonetics[0].audio}" type="audio/mpeg">Your browser does not support the audio element.</audio></p>
            <button class="Read-more" onclick="window.open('${data[0].phonetics[0].sourceUrl}', '_blank')">Read More</button>
        `;
    } catch (error) {
        console.error("Error fetching word info:", error);
        Result.textContent = "Error fetching word info";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const wordInput = form.elements[0].value;
    WordInfo(wordInput);
});
