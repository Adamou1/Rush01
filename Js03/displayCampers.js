let campers= {
  name: ["Coder"],
  legs: 4,
  tails: 1,
  friends: ["Codeloccol Campers"]
}
function display (){
  obj={...campers.friends};
  console.log(obj);
};
display();