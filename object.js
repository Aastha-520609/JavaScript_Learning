let alien = {//object
    name: 'Aastha',//properties
    tech: 'JS'
}
console.log(alien)
console.log(alien['name'])
console.log(alien.name)

//Complex object - an object inside an object
let device ={
    name: 'Latest',
    laptop: {
        company : 'dell',
        ram: '4'
    }
}
console.log(device)
for(let key in device)
{
    console.log(key)
}
delete device.laptop.ram
console.log(device)