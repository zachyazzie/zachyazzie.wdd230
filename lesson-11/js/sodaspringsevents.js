let townList=[];

const events = (listOfTowns) => {
    listOfTowns.forEach(town => {
        if (town.name == 'Soda Springs') {
            let eventDiv = document.createElement("div");
            eventDiv.setAttribute('class', 'event-div');
            console.log(town.events);
            console.log(town.events.length);
            let events = town.events;
            events.forEach(event => {
                console.log(event)
                let upcomingEvent = document.createElement("p");
                upcomingEvent.innerText = event;
                eventDiv.appendChild(upcomingEvent);
            })
            document.querySelector('.town-events').appendChild(eventDiv);
        }

    })
};

fetch('https://byui-cit230.github.io/weather/data/towndata.json')
    .then(response => response.json())
    .then(towns => {
        townList = towns.towns;
        events(townList);
    });
