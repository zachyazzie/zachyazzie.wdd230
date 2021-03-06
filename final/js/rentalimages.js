

const scooterImages = (scooteImageList) => {
    scooterList.forEach(scooter => {

        let imgDiv = document.createElement("div");

        let imageElement = document.createElement("img");
        imageElement.setAttribute('src', `assets/${scooter.image}`);
        imageElement.setAttribute('alt', scooter.model);
        
        let modelDesc = document.createElement("h4");
        modelDesc.textContent = scooter.model;
        
        imgDiv.appendChild(modelDesc);
        imgDiv.appendChild(imageElement);
        

        document.querySelector('.rental-gallery').appendChild(imgDiv);
    })
};

fetch('../final/data/scooterinfo.json')
    .then(response => response.json())
    .then(scooters => {
        scooterImageList = scooters.scooters;
        scooterImages(scooterImageList);
    });
