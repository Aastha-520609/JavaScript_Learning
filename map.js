let map = new Map();
map.set("Aastha", "Java");
map.set("Pasta","Html");
map.set("Pranjali", "React");
console.log(map.keys());
console.log(map.values());
console.log(map.has("Aastha"));
for(let[k,v] of map)
{
    console.log(k, ":" , v);
}