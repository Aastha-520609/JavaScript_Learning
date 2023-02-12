//postIncrement - It first fetch the value and the assign the value and then increment is done
let num = 4
let x = num++// here 4 will assign first to the x and the increment the value so the ans is 4 and 5
console.log(x,num)
//preIncrement - It first fetch the value and increment it and then assign it
let n = 5
let y = ++n // here n will be increment first and then assign to y
console.log(n,y)
// == checks only value , doesn't check type
let a = ''
let b = false
let res = a == b
console.log(res)
// === checks value as well as type
let a1 = ''
let b1 = false
let res1 = a === b
console.log(res1)

//Ternary Operator(?:)
let c = 8
let result = c % 2 === 0 ? "Even" : "Odd"
console.log(result)
