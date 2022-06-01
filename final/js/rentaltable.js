let scooterList=[];

const output = (scooterList) => {
    scooterList.forEach(scooter => {

        let tr = document.createElement("tr");

        let model = document.createElement("th");
        model.innerText = scooter.model;

        let maxPersons = document.createElement("th");
        maxPersons.innerText = scooter.maxPersons;

        let halfWithReservation = document.createElement("th");
        halfWithReservation.innerText = scooter.withReservation[0].halfDay;

        let fullWithReservation = document.createElement("th");
        fullWithReservation.innerText = scooter.withReservation[0].fullDay;

        let halfWithoutReservation = document.createElement("th");
        halfWithoutReservation.innerText = scooter.withoutReservation[0].halfDay;

        let fullWithoutReservation = document.createElement("th");
        fullWithoutReservation.innerText = scooter.withoutReservation[0].fullDay;

        tr.appendChild(model);
        tr.appendChild(maxPersons);
        tr.appendChild(halfWithReservation);
        tr.appendChild(fullWithReservation);
        tr.appendChild(halfWithoutReservation);
        tr.appendChild(fullWithoutReservation);
        console.log(tr)
        
        document.querySelector('#rental-table').appendChild(tr);
    })
};

fetch('../final/data/scooterinfo.json')
    .then(response => response.json())
    .then(scooters => {
        scooterList = scooters.scooters;
        output(scooterList);
    });
