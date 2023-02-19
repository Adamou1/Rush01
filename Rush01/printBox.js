function printBox(width, height){
  let i, j;
  width= 5;
  height= 4;
  for(let i=1; i<width; i++){
    for(let j=1; j<=height; j++){
        if(i==1|| i==width|| j==1|| j==height){
          console.log("*");
        }else{
          console.log("");
        }
        console.log("\n");
      }
      return 0
  }
}
printBox(5, 4);