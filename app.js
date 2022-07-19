const gameList = document.getElementById('gameList');
let hpgames = [];

const loadgames = async () => {
    try {
        const res = await fetch('https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json');
        hpgames = await res.json();
        displaygames(hpgames);
    } catch (err) {
        console.error(err);
    }
};

const displaygames = (game) => {
    const htmlString = game
        .map((game) => {
            return `
            <li class="title">
                <h2>${game.title}</h2>
                <p>Genre: ${game.genre}</p>
                <p>Platform: ${game.platform}</p>
                <p>Editors choice: ${game.editors_choice}</p>
                <p>Score: ${game.score}</p>


            </li>
        `;
        })
        .join('');
    gameList.innerHTML = htmlString;
};

loadgames();
