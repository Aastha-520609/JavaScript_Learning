function greet()
{
    return "Hello World"
}
let str = greet()
console.log(str)
//2nd
function name(user)
{
    return `Hello ${user}`
}
let user = "Aastha";
console.log(name(user));

//Function Expression
let add = function(num1, num2)
         {
            return num1+num2;
         }
let result = add(5,6)
console.log(result)

//Arrow function - we can remove function keyword and add => (Arrow)
let arrow_fun = (user) => {
    console.log("Hello  " + user);
    return 1;
}
console.log(arrow_fun("Aastha"));

let sub = (num1, num2) =>
         {
            return num1-num2;
         }
console.log(sub(15,6))

//Methods
let laptop = {
    cpu: 'i9',
    ram: '16',
    brand: 'HP',

    methods: function()
    {
        console.log("Hello Hi Bye Bye");
    }
}
laptop.methods();