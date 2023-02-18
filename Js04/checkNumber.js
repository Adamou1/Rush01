function checkNumber(num) {
  if (Math.max(num)<5) {
    console.log('Faible');
  } else if (Math.max(num)>6) {
    console.log('pas Moyen');
  }else{
  console.log('Moyen');
}
}

checkNumber(4);
checkNumber(5);
checkNumber(6);