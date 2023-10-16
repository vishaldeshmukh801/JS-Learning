var countStr = function(inputStr){
   
    var count = 0;

    for(let i=0;i<= inputStr.length-1; i++){
        var char = inputStr.charAt(i);
        if(char== 'a' || char == 'A' || char == 'E' || char == 'e' || char == 'V'){
            count = count+1;
        }
    }
   return count;
   
}
 var str1 = countStr("I am Angular Developer");
 console.log(`String :=> "I am Angular Developer"`);
 console.log(`Count Character "A" & "a" :-> ${str1} `);

 console.log(`---------------------------------------------------`);
 console.log(`String :=> "I am React DevEloper"`);
 var str2 = countStr("I am React DevEloper");
 console.log(`Count Character "E" & "e" :-> ${str2}`);

 console.log(`---------------------------------------------------`);

 var str3 = countStr("Im Vishakha Kokare");
 console.log(`String :=> "Im Vishakha Kokare"`);
 console.log(`Counting......."V" Character :-> ${str3}`);
    