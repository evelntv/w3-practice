let MyVariable = "value";
//console.log(MyVariable);

// Nem haszanlunk var-t//

MyVariable = "new value";
//console.log(MyVariable);

MyVariable = 1;
//console.log(MyVariable);

MyVariable = true;
//console.log(MyVariable);

let MyVariable2 = "text";
//console.log(MyVariable2);

MyVariable = MyVariable2;
//console.log(MyVariable);

let MyVariable3 = MyVariable + MyVariable2;
//console.log(MyVariable3);

function sumVariables() {
  console.log(variable1 + variable2);
}

sumVariables(MyVariable, MyVariable2);
sumVariables(8, nyolc);
sumVariables("word1" + "word2");
