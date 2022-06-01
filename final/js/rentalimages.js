

const scooterImages = (scooteImageList) => {
    scooterList.forEach(scooter => {

        let imgDiv = document.createElement("div");

        let imageElement = document.createElement("img");
        imageElement.setAttribute('src', `assets/${scooter.image}`);
        imageElement.setAttribute('alt', scooter.model);
        
        let modelDesc = document.createElement("p");
        modelDesc.textContent = scooter.model;
        
        imgDiv.appendChild(imageElement);
        imgDiv.appendChild(modelDesc);

        document.querySelector('.rental-gallery').appendChild(imgDiv);
    })
};

fetch('../final/data/scooterinfo.json')
    .then(response => response.json())
    .then(scooters => {
        scooterImageList = scooters.scooters;
        scooterImages(scooterImageList);
    });
