const apiUrl = "https://api.rawg.io/api/games";

fetch(apiUrl)
 .then(response => {
    return response.json();
})
.then(json =>{
  json.results.forEach(element => {
      createGames(element);
  });
})
.catch(error => {
  console.log(error);
});

const resultGames = document.querySelector(".results");


function createGames(game)
{
    let buildHTML = document.createElement("div");
    buildHTML.className = "game";
    buildHTML.innerHTML = "<h2>" + game.name + "</h2>" + "<img width=\"250\" src=\"" + game.background_image + "\" alt=\"" + game.name + "\">";

    resultGames.appendChild(buildHTML);
}