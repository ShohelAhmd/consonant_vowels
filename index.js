var letter = prompt("Enter a letter : ");

letter= letter.toLocaleLowerCase();

if (letter=="a"||letter=="e"||letter=="i"||letter=="o"||letter=="u")
    document.write("vowel");

else
    document.write("consonat");