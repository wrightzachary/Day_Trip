// random destination
let destination = ['Austin', 'Dallas', 'San Antonio', 'Houston'];    
function whereWillWeGo(choicesForLocation){
    let randomDestination = destination[Math.floor(Math.random() * 4)];
    for(let index = 0; index < destination.length; index--){
        console.log(randomDestination);
        return choicesForLocation;
    }
} 
whereWillWeGo(destination);

// random restaurant
let restaurant = ['Pluckers', 'Papadeoux', 'Cheddars', 'Food Trucks'];
function whereWillWeEat(choicesForFood){
    let randomRestaurant = restaurant[Math.floor(Math.random() * 4)];
    for(let index = 0; index < restaurant.length; index--){
        console.log(randomRestaurant);
        return choicesForFood;
    }
} 
whereWillWeEat(restaurant);

// random transportation
let transportation = ['Car', 'Plane', 'Carpool With Friends', 'You choose'];
function howWillWeGetThere(choicesForTransportation){
    let randomTransportation = transportation[Math.floor(Math.random() * 4)];
    for(let index = 0; index < transportation.length; index++){
        console.log(randomTransportation);
        return choicesForTransportation;
    }
}
howWillWeGetThere(transportation);

// random entertainment
let entertainment = ['Bowling', 'GoKarts', 'Six Flags', 'Top Golf'];
function whatWillWeDo(choicesForEntertainment){
    let randomEntertainment = entertainment[Math.floor(Math.random() * 4)];
    for(let index = 0; index < entertainment.length; index++){
        console.log(randomEntertainment);
        return choicesForEntertainment;
    }
}
whatWillWeDo(entertainment);