function average(){
arr = [20, 12, 9, 8];
average = arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(average);
}
average();