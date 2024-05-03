const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);//output array under array
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); // concat merge in a single array

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//flat method gives a single array
console.log(real_another_array);



console.log(Array.isArray("ashadulla"))// checking array or not
console.log(Array.from("ashadulla"))// output:['a', 's', 'h','a', 'd', 'u','l', 'l', 'a'] form method divide anything in a piece of array
console.log(Array.from({name: "ashadulla"}))//interesting //confused first which one need to convert in an array key or value then give empty arry

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));