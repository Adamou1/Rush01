function countAcaracter(str, letter) 
{
 var letter_Count = 0;
 for (var i= 0; i< str.length; i++) 
 {
    if (str[i] == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log("Le nombre d'occurences de 'a' est:", letter_count('Bonjour, chers candidats comment vous allez aujourdhui " ', 'a'));