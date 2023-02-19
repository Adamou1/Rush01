function treeConstructor(strArr){
 let parents={};
 let children={};
for(let i=0; i<strArr.length; i++){
    if(parents[parent]){
       parents[parent].push(child);
    }else{
     parents[parent]=[child];
    }
    
    if(parents[parent].length > 2){
      return false;
    }
    
    if(children[child]){
     return false;
    } else {
       children[child]=[parent];
    }
}
return true;

} 
strArr= ["(1, 2)","(2, 4)","(5, 7)","(7, 2)","(9, 5)"];
console.log(strArr.length);
treeConstructor();