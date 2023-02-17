let property={
  name: "coder",
  legs: 4,
  tails: 1,
  friends: ['Codeloccol Campers']
}
function display(){
  property.name=['Happy Coder'];
  obj={...property}
  console.log(obj);
}
display();