function buscarPersonagem() {
    let nome = document.getElementById('nomePersonagem').value;
    fetch(`https://rickandmortyapi.com/api/character/?name=${nome}`)
        .then(response => response.json())
        .then(data => {
            let personagens = document.getElementById('personagens');
            personagens.innerHTML = ''; // Limpa os resultados anteriores
            if (data.results.length > 0) {
                data.results.forEach(personagem => {
                    personagens.innerHTML += `
                        <h2>${personagem.name}</h2>
                        <img src="${personagem.image}" alt="${personagem.name}">
                        <p>Espécie: ${personagem.species}</p>
                        <p>Status: ${personagem.status}</p>
                        <hr>
                    `;
                });
            } else {
                alert('Nenhum personagem encontrado com esse nome.');
            }
        })
        .catch(error => console.error(error));
}

function limparResultados() {
    document.getElementById('personagens').innerHTML = '';
    document.getElementById('nomePersonagem').value = '';
}

