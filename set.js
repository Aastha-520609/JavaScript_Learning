//let nums = new Set("Aastha");
//We can add it in another way too
let nums = new Set();
nums.add(3);
nums.add(3);
nums.add("Aastha");
nums.add(7.5);
console.log(nums);
//iteration on set
nums.forEach(value =>
    {
        console.log(value);
    });
//has method is used to check if the particular variable is present on the set or not
console.log(nums.has("Aastha"));
console.log(nums.has("Pastha"));