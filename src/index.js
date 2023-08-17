function getCharacters(done) {
    const results = fetch('https://rickandmortyapi.com/api/character');

    results 
    .then(response => response.json())
    .then(data => {
        done(data)
    });
}

getCharacters(data => {
    data.results.forEach(personaje => {
        const article = document.createRange().createContextualFragment(`
        <article>
            <div>
                <img src=${personaje.image} alt='personaje'>
            </div>
            <h2>${personaje.name}</h2>
            <span>${personaje.origin.name}</span>
            
          
        </article>
        `);

        const main = document.querySelector('main');
        main.append(article);
    })
})