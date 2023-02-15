function checkSign(num) {
  if (Math.sign(num) === -1) {
    console.log('Négatif');
  } else if(Math.sign(num)>=0){
    console.log('Positif');
  }else{
    console.log('Positif');
  }
}
checkSign(-5); 
checkSign(2);
checkSign(0);
//module.exports= checkSign;