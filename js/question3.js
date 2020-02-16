const apiUrl = "https://api.rawg.io/api/games/4200";

fetch(apiUrl)
 .then(response => {
    return response.json();
})
.then(json =>{
    createGameDetails(json);
})
.catch(error => {
  console.log(error);
});


function createGameDetails(game)
{
    document.querySelector("h1").innerText = game.name;
    document.querySelector(".description").innerHTML = game.description;

    let  image = document.querySelector(".image");
    image.style.backgroundImage = "url(" + game.background_image + ")";
    image.style.height = "200px";
    image.style.backgroundPosition = "center center";
    image.style.backgroundRepeat = "no-repeat"
    image.style.backgroundSize = "cover";
}