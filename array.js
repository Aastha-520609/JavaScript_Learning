let values = [5,7,8]
console.log(values)
// to assign
let val = [];
val.push(5);
val.push(7);
console.log(val);
//we can add diff types in single array
let data = ['Navin', 5, {tech: 'JS'}, function(){console.log("Hello World")}]
console.log(data)
//Methods in array javascript
//push,pop,shift
//pop removes from end and shift removes from front
let arr = [5,7,8,9]
console.log(arr.shift());
// to add at front we can use unshift
console.log(arr.unshift(2));
//splice is used to remove elements from that particular index
//console.log(arr.splice(2))
//console.log(arr)
//console.log(arr.splice(2,1))
//console.log(arr)
//we can also add some element after deleting
console.log(arr.splice(2,1, 10))
console.log(arr)
//#Looping in array
//for of loop
let nums = [];
nums[0] = 5;
nums[99] = 9;
for(let n in nums)
{
    console.log(n);
}
//for in loop
for(let key in nums)
{
    console.log(nums[key]);
}
//Array Destructing 
let n = [5,7,8,9]
console.log(n);
let[a,b,c,d] = n;
console.log(d);
//split function
let words = "My name is Aastha Chaudhary".split(' ');
console.log(words)
//For Each Method
let array = [23,24,56,78,90,22];
array.forEach((n) => {
      console.log(n);
});

//Array method filter map reduc
array.filter(n => n%2===0)
     .forEach(x => {
        console.log(x);
     })

