function checkEvenOdd(i=1){
  if (i%2!==0) {
    console.log('Impair');
  } else {
    console.log('Pair');
  }
}
checkEvenOdd(1);
checkEvenOdd(2);
module.exports= checkEvenOdd;