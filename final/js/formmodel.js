const scooterModels = (scooterModelList) => {
    scooterModelList.forEach(scooter => {

        let modelOption = document.createElement("option");
        modelOption.setAttribute('value', scooter.model.replace(/\s+/g, ''));
        modelOption.textContent = scooter.model;

        document.querySelector('#model-type').appendChild(modelOption);
    })
};

fetch('../final/data/scooterinfo.json')
    .then(response => response.json())
    .then(scooters => {
        scooterModelList = scooters.scooters;
        scooterModels(scooterModelList);
    });
