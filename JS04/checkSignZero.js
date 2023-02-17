function checkSignZero(num){
  if(Math.sign(num)<0){
    console.log('Négatif');
  }if(Math.sign(num)>0){
    console.log('Positif');
  }else if (Math.sign(num)==0){
    console.log('Null');
  }
}
checkSignZero(-1);
checkSignZero(2);
checkSignZero(0);