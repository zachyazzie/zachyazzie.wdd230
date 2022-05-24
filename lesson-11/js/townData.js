let townList=[];

const output = (listOfTowns) => {
    console.log(listOfTowns);
    listOfTowns.forEach(town => {
        //Available elements in the list:
        //name
        //photo
        //motto
        //yearFounded
        //currentPopulation
        //averageRainfall
        //events['...',...]
        if (town.name == 'Soda Springs' || town.name == 'Fish Haven' || town.name == 'Preston') {
            let article = document.createElement("article");
            let townInfoDiv = document.createElement("div");
            townInfoDiv.setAttribute('class', 'town-info');
            let townImgDiv = document.createElement("div");
            townImgDiv.setAttribute('class', 'town-img');
            let townName = document.createElement("h2");
            townName.innerText = town.name;
            let imageElement = document.createElement("img");
            imageElement.setAttribute('src', `assets/${town.photo}`);
            imageElement.setAttribute('alt', town.name);
            let motto = document.createElement("h3");
            motto.innerText = town.motto;
            motto.setAttribute('class', 'motto');
            let yearFounded = document.createElement("p");
            yearFounded.innerText = `Year Founded: ${town.yearFounded}`;
            let currentPopulation = document.createElement("p");
            currentPopulation.innerText = `Population: ${town.currentPopulation}`;
            let averageRainfall = document.createElement("p");
            averageRainfall.innerText = `Average Rain Fall: ${town.averageRainfall}`;

            townInfoDiv.appendChild(townName);
            townInfoDiv.appendChild(motto);
            townInfoDiv.appendChild(yearFounded);
            townInfoDiv.appendChild(currentPopulation);
            townInfoDiv.appendChild(averageRainfall);
            townImgDiv.appendChild(imageElement);
            
            article.appendChild(townInfoDiv);
            article.appendChild(townImgDiv);
            document.querySelector('#town-cards-home').appendChild(article);
        }

    })
};

fetch('https://byui-cit230.github.io/weather/data/towndata.json')
    .then(response => response.json())
    .then(towns => {
        townList = towns.towns;
        console.log(towns)
        output(townList);
    });
