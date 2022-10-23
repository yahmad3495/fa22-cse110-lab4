/*
Loop over properties, print values if
property starts with letter r OR if value of property
is odd
*/

let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const variable in statistics) {
    if (variable[0] == 'r' || statistics[variable] % 2 == 1) {
        console.log(statistics[variable]);
    }
}
