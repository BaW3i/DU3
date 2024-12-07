
const numbers = [
    -24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];

//1.  Vypište do stránky všechna čísla.

//zastarale

document.write(numbers);

//kdybych to chtěla  několikrát (pozměním i na numbers.length 

for (let i = 0; i < 1; i++) {
document.write(numbers);
}

// bezpečnější 

 document.body.innerHTML += `<p> The best option is here${numbers}</p>`;

//kombinace

for (let i = 0; i < 1; i++) {
document.body.innerHTML += `<p> The other best option ${numbers}</p>`;
}

//2. Vypište do stránky druhé mocniny všech čísel.
 
const squared = (arr) => {
    let squaredArray = [];
    for (let i = 0; i < arr.length; i++) {
    squaredArray.push(Math.pow(arr[i], 2)); // Math.pow(x,y) - returns x squared by y, u 2 squared ale stačí použít  - arr[i] ** 2
    }
    return squaredArray;
};

document.body.innerHTML += `<p> Square up,chap: ${squared(numbers)} <p>`

//3.Vypište do stránky pouze záporná čísla.
let negative = [];
const onlyNegative = (arr) => {
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0 ) {
        negative.push(arr[i]);
      }
    }
    return negative;
}
console.log(onlyNegative(numbers))
document.body.innerHTML += `<p> Pretty negative: ${onlyNegative(numbers)} <p> `

// using .filter method
const onlyNegative2 = numbers.filter((i) => i < 0 )

console.log(onlyNegative2)
document.body.innerHTML += `<p> Negative but faster ${onlyNegative2} <p> `


//4. Vypište do stránky absolutní hodnotu všech čísel.
let absoluted = [];
const absolute = (arr) =>{
    for (let i = 0; i < arr.length; i++) {
        absoluted.push(Math.abs(arr[i]))
}
 return absoluted;
}
document.body.innerHTML += `<p> Absolutely: ${absolute(numbers)} <p> `

// 5. Vypište do stránky pouze sudá čísla.
const even = numbers.filter((i) => i %2 == 0 )  //šlo by i ifem s dělením nebo modulem dvou

console.log(even)
document.body.innerHTML += `<p> Evening lads: ${even} <p> `

//6.Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.

const absolute3 = absoluted.filter((i) => i%3 == 0)
document.body.innerHTML += `<p> Threelling discovery: ${absolute3} <p>`

// 7.Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.

const distanceFrom5 = (arr) => {
        let distanced = []
    for (let i = 0; i < arr.length; i++) {
        let index1 = i
        let index2 = arr.length - 1 // cse indexing starts at 0 
        let distance = Math.abs(index1 - index2)
        distanced.push(distance)
}
    return distanced;
}
document.body.innerHTML += `<p> High five: ${distanceFrom5(numbers)} <p>`

// 8. Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.

document.body.innerHTML += `<p> Square idea: ${squared(distanceFrom5(numbers))} <p>`

//9.Spočítejte, kolik je v seznamu záporných čísel.

document.body.innerHTML += `<p> Negating still: ${negative.length} <p>`

// 10. Spočítejte součet všech čísel v poli.

const summed = (arr) => {
    let sum = 0;
for (let i = 0; i < arr.length; i++ ) {
  sum += arr[i];
}
return sum }

document.body.innerHTML += `<p> In summary: ${summed(numbers)} <p>`


// 11. Spočítejte průměr všech čísel v poli.


document.body.innerHTML += `<p> A-summing all: ${numbers.length} <p>`
document.body.innerHTML += `<p> Average: ${summed(numbers)/numbers.length} <p>`

// 12. Spočítejte součet všech kladných čísel v poli.


let positive = [];
const onlyPositive = (arr) => {
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > 0 ) {
        positive.push(arr[i]);
      }
    }
    return positive;
}

const  sumDaNumber = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    } 
    return sum  
}
document.body.innerHTML += `<p> Pretty positive: ${onlyPositive(numbers)} <p> `
document.body.innerHTML += `<p> Sumply lazy: ${sumDaNumber(positive)} <p> `


// shortened version just for me so I know a different way of how to solve this issue

const sumOfPositives = (arr) => 
    arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);

  
  document.body.innerHTML += `<p> Alternative sum: ${sumOfPositives(numbers)} <p>`;

  /* 

  filter: vyfiltruje jen pozitivní čísla a vytvoří z nich novou array
  reduce: vrátí jednu hodnotu jako výsledek operací na všech elementech v poli. */
