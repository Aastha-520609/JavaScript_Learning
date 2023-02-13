//to call the property of an current object that you are using ,this keyword is used
let laptop1 = {
    cpu: 'i9',
    ram: '16',
    brand: 'HP',

    getCon: function()
    {
        console.log(this.cpu)
    }
}
let laptop2 = {
    cpu: 'i7',
    ram: '16',
    brand: 'HP',

    getCon: function()
    {
        console.log(this.cpu)
    }
}

//laptop1.getCon(); // if here laptop1 object is called then it will access the property of that object 
laptop1.getCon(); //it access properties as per the object calling