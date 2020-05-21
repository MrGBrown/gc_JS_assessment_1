
function countDown() {
    for (let i = 5; i >= 1; i--) {
        console.log(i)
    }
}

function countUp(start, end) {
    for (let i = start; i <= end; i++ ) {
        console.log(i);
    }
}

function isLong(word) {
    return (word.length > 10 ? true : false);
}

function whatWaterState(temperature) {
    if (temperature <= 32) {
        console.log('solid');
    } else if (temperature > 32 && temperature < 212) {
        console.log('liquid');
    } else if (temperature >= 212) {
        console.log('gas');
    } else {
    }
}

const sandwiches = [
    { type: 'italian', calories: 1000, cost: 7.69, isVegetarian: false },
    { type: 'veggie', calories: 500, cost: 5.50, isVegetarian: true },
    { type: 'meatball', calories: 900, cost: 8.25, isVegetarian: false },
    { type: 'jackfruit', calories: 650, cost: 8.50, isVegetarian: true }
];

function makeSandwich(sandwichArray, type, calories, cost, isVegetarian) {
    sandwichArray.push({type, calories, cost, isVegetarian})
    for(const n of sandwichArray){
        console.log(n);
    }
}

makeSandwich(sandwiches,'steak',1200,8.75,false);

function findVegetarianSandwich(sandwichArray) {
   let veganSandwich = sandwichArray.find(x => x.isVegetarian === true);
   return veganSandwich;
}

console.log(findVegetarianSandwich(sandwiches));

function findCheapestSandwich(sandwichArray){
    let cheapest = sandwichArray[0];
    for (let x of sandwichArray){
        if (cheapest.cost > x.cost){
            cheapest = x;
        }
    } return cheapest;
}

console.log(findCheapestSandwich(sandwiches));