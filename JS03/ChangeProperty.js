let property={
  name: "coder",
  legs: 4,
  tails: 1,
  friends: ['Codeloccol Campers']
}
function display(){
  property.name=['Happy Coder'];
  obj={...property, ...property.name}
  console.log(obj);
}
display();