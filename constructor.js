function Cons(name,tech)
{
  this.name = name;
  this.tech = tech;
  return this;
}
let obj = new Cons('Aastha', 'JS');
console.log(obj);
