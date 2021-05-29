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
let transportation = ['Car', 'Plane', 'Carpool with friends', 'Transportation of your choosing'];
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

function whatIfWeDo(whatDoYouThink){
let userResponse = prompt("How does that sound? Enter 'Yes' or 'Try Again'.");
let selection = userResponse;
    while(selection){
    if(userResponse  == "Yes"){
        console.log(userResponse, "let's get ready!");
        return this;
    }
    else if(userResponse == "Try again"){
        console.log(destination[Math.floor(Math.random() * 4)]);
        console.log(restaurant[Math.floor(Math.random() * 4)]);
        console.log(transportation[Math.floor(Math.random() * 4)]);
        console.log(entertainment[Math.floor(Math.random() * 4)]);
        return this;
    }
        else if(userResponse  != "Yes" && "Try again"){
        console.log(userResponse, "let's retry the generator!");
    }
    }
    return this;
}

whatIfWeDo();

function confirmationOfTrip(){
    userResponse = prompt("Confirm your trip?");
    if (userResponse == "Yes"){
        console.log("Trip completed!");
    }
    else if( userResponse == "No"){
        console.log("Trip not completed!");
    }
    else{
        console.log("Not a valid response!");
    }
}
confirmationOfTrip();