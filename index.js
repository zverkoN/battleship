// позиция корабля
const location1 = 3
const location2 = 4
const location3 = 5

// потоплен или нет
let isSunk = false;

// предполагаемая позиция корабля (выстрел)
let guess;

// счетчик попаданий
let hits = 0



while (isSunk ===false) {
    // не забываем, что строку надо превратить в число +
    guess = +prompt("fire! enter a number 0-6")
    if (guess ===  location1 || guess === location2 || guess === location3 ) {
        alert ("HIT!")
        // считаем попадания
        hits = hits +1 
        // если подбили
        if ( hits === 3) {
            isSunk = true
            alert ("dead")
        }
    } else {
        alert  ("MISS!")
    }
}