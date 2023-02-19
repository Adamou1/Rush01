function printBox(width, height){
  let box= " ";
  for(var j = 1; j <= height; j++){
    for(var i = 1; i <= width; i++){
      if(j == 1 || j == height){
        box += " * ";
      }else if(i == 1 || i == width){
        box += " * ";
      }else{
        box += "    ";
      }
    }
    box += "\n"
  }
  console.log(box);
}
printBox(5, 4);
printBox(6, 5)