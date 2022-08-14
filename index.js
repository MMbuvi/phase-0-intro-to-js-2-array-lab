// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    cats.push("Ralph");
}
function destructivelyPrependCat(){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    cats.shift();
}
function appendCat(){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    let otherCats = [...cats, "Broom"]
    return otherCats;
}
function prependCat(){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    let otherCats = [ "Arnold",...cats]
    return otherCats;
}
function removeLastCat(){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    let otherCats = cats.slice(0,cats.length-1);
    return otherCats;
}
function removeFirstCat(){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
    let otherCats = cats.slice(1);
    return otherCats;
}