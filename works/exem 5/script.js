// let x = prompt("Введіть будь-яке значення:", "-3.14");
// while(true){
// if (isNaN(x)) {
//   alert( "Це NaN - не число!" );
// } else {
//   alert( "Ви ввели число" );
// break;
// }

// }
// let value = ''
// let num1 = +prompt('Введіть перше число  ')
// let num2 = +prompt('Введіть друге число  ')
// if (num1>0&&num1<1&&num2>0&&num2){
//     let result = num1 + num2
//     result.toFixed
//     alert(result)
// }

//         let min=+prompt("min",0)
//         let max=+prompt("max",0)

//         for(let i=0;i<1000;i++){
// document.writeln(Math.floor(min+Math.random()*(max-min+1)))
// }


// function randomNumber(){
//     let min = +prompt("Введіть мінімальне значення: ")
//     let max = +prompt("Введіть максимальне значення: ")
//     let hiddenNumber = Math.floor(Math.random() * (max - min +1))
//     let number = +prompt("Спробуйте вгадати число в діапазоні від " + min + " до " + max )
//     let count = 0

//     for(let i=0; i<=8; i++) {
//         count++
//         if(count > 8){
//             alert("Кількість спроб вичерпано! Загадане число: " + hiddenNumber)
//             break;
//         } else if (number == hiddenNumber){
//             alert("Ви вгадали! Кількість спроб: " + count)
//             break;
//         } else {
//             number = +prompt("Спробуйте ще раз")
//         }
//     }


// }

// randomNumber()