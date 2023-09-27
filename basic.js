
console.log(
    "**************************************** ASSIGNMENTS_02: STRING  ************************************************"
  );
  function stringHandsOn(){
    var stringVar = "     Hey you are doing good, Keep it up       ";
    console.log(`1. My Hobbies Are: ${stringVar}`);

    var lengthStr = stringVar.length;
    console.log(`2. Length: ${lengthStr}`);

    var newVar = stringVar.trim();
    console.log(`3. New Variable: ${newVar}`);

    var spacesRemoved = lengthStr - newVar.length;
    console.log(`4. Spaces Removed: ${spacesRemoved}`);

    var firstChar = newVar[0];
    var lastChar = newVar[newVar.length - 1];
    console.log(`5. First Character: ${firstChar}, Last Character: ${lastChar}`);

    var lengthWithoutSpaces = newVar.replace(/\s/g, '').length;
    console.log(`6. Length Without Spaces: ${lengthWithoutSpaces}`);

    var wordsArray = newVar.split(/\s+/);
    var totalWords = wordsArray.length;
    console.log(`7. Total Words: ${totalWords}`);

    var indexOfGood = newVar.indexOf("good");
    console.log(`8. Index of "good": ${indexOfGood}`);

    
}

stringHandsOn();