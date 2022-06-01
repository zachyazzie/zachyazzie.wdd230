const townCards = (listOfTowns) => {
    listOfTowns.forEach(town => {

        let article = document.createElement("article");

        let townInfoDiv = document.createElement("div");
        townInfoDiv.setAttribute('class', 'town-info');

        let townImgDiv = document.createElement("div");
        townImgDiv.setAttribute('class', 'town-img');

        let townName = document.createElement("h2");
        townName.innerText = town.name;

        let description = document.createElement("p");
        description.innerText = town.description;

        let imageElement = document.createElement("img");
        imageElement.setAttribute('src', `assets/${town.photo}`);
        imageElement.setAttribute('alt', town.name);
        
        townInfoDiv.appendChild(townName);
        townInfoDiv.appendChild(description);
        townImgDiv.appendChild(imageElement);
        
        article.appendChild(townInfoDiv);
        article.appendChild(townImgDiv);
        document.querySelector('#places-cards').appendChild(article);
    })
};

fetch('../final/data/nearbytowns.json')
    .then(response => response.json())
    .then(towns => {
        townList = towns.towns;
        console.log(towns)
        townCards(townList);
    });
