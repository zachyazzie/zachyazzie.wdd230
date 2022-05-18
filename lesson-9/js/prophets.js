const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

const output = (listOfProphets) => {
    console.log(listOfProphets);
    listOfProphets.forEach(prophet => {

        // "name": "Joseph",
        // "lastname": "Smith",
        // "birthdate": "23 December 1805",
        // "death": "27 June 1844",
        // "length": 14,
        // "order": 1,
        // "birthplace": "Vermont",
        // "numofchildren": 11,
        // "imageurl": "https://media.ldscdn.org/images/media-library/gospel-art/latter-day-prophets/american-prophet-joseph-smith-jr-1178035-gallery.jpg"

        //create parent article to hold all elements
        let article = document.createElement("article");
        //create full name
        let fullName = document.createElement("h2");
        let firstName = prophet.name;
        let lastName = prophet.lastname;
        fullName.innerText = `${firstName} ${lastName}`;
        //create birthday
        let birthday = document.createElement("p");
        birthday.innerText = `Day of Birth: ${prophet.birthdate}`;
        //create place of birth
        let birthplace = document.createElement("p");
        birthplace.innerText = `Place of Birth: ${prophet.birthplace}`;
        //create image
        let imageElement = document.createElement("img");
        imageElement.setAttribute('src', prophet.imageurl);
        imageElement.setAttribute('alt', `${firstName} ${lastName}`);

        article.appendChild(fullName);
        article.appendChild(birthday);
        article.appendChild(birthplace);
        article.appendChild(imageElement);

        document.querySelector('.cards').appendChild(article);
    })
};

fetch(requestURL)
    .then(response => response.json())
    .then(prophet => {
        prophetList = prophet.prophets;
        console.log(prophetList)
        output(prophetList);
    });
