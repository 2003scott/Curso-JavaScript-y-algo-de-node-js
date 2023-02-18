let factorial = 1
let num = 10
while (true) {
    factorial *= num
    num--
    if (num === 1) break
}
console.log(factorial) 


let factorial1 = 1
for (let i = 10; i > 0; i--) {
    factorial1 *= i
}
console.log(factorial1)


let factorial2 = 1
let num2 = 10
while (num2 > 1) {
    factorial2 *= num2
    num2--
}
console.log(factorial2)