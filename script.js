function sound(){
    var snd = new Audio('click.mp3')
    snd.play()
}

const ac = document.getElementById("ac");
const frontMinus = document.getElementById("frontMinus");
const percentage= document.getElementById("percentage");
const divide = document.getElementById("divide");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const multiply = document.getElementById("multiply");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const minus = document.getElementById("minus");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const plus = document.getElementById("plus");
const zero = document.getElementById("zero");
const point = document.getElementById("point");
const equal = document.getElementById("equal");
let output = document.getElementById("output");

let input = [];
let calc = 0;
let operator;
let temp;
let plusActive;
let minusActive;
let multiplyActive;
let divideActive;
let numCount = 0;

zero.addEventListener("click", function () {
    if(numCount == 8){
        alert("Max limit is 8.");
        return 0;
      }
    input.push(0);
    numCount++;
    output.innerText = input.join("");
  });
  one.addEventListener("click", function () {
    if(numCount == 8){
        alert("Max limit is 8.");
        return 0;
      }
    input.push(1);
    numCount++;
    output.innerText = input.join("");
  });
  two.addEventListener("click", function () {
    if(numCount == 8){
        alert("Max limit is 8.");
        return 0;
      }
    input.push(2);
    numCount++;
    output.innerText = input.join("");
  });
  three.addEventListener("click", function () {
    if(numCount == 8){
        alert("Max limit is 8.");
        return 0;
      }
    input.push(3);
    numCount++;
    output.innerText = input.join("");
  });
  four.addEventListener("click", function () {
    if(numCount == 8){
        alert("Max limit is 8.");
        return 0;
      }
    input.push(4);
    numCount++;
    output.innerText = input.join("");
  });
  five.addEventListener("click", function () {
    if(numCount == 8){
        alert("Max limit is 8.");
        return 0;
      }
    input.push(5);
    numCount++;
    output.innerText = input.join("");
  });
  six.addEventListener("click", function () {
    if(numCount == 8){
        alert("Max limit is 8.");
        return 0;
      }
    input.push(6);
    numCount++;
    output.innerText = input.join("");
  });
  seven.addEventListener("click", function () {
    if(numCount == 8){
        alert("Max limit is 8.");
        return 0;
      }
    input.push(7);
    numCount++;
    output.innerText = input.join("");
  });
  eight.addEventListener("click", function () {
    if(numCount == 8){
        alert("Max limit is 8.");
        return 0;
      }
    input.push(8);
    numCount++;
    output.innerText = input.join("");
  });
  nine.addEventListener("click", function () {
    if(numCount == 8){
        alert("Max limit is 8.");
        return 0;
      }
    input.push(9);
    numCount++;
    output.innerText = input.join("");
  });


  point.addEventListener("click", function () {
    if (output.innerText == 0) {
      input.push("0,");
      output.innerText = input.join("");
      return 0;
    } 
    else if (input.includes(",") || input.includes("0,")) {
      return 0;
    } 
    else {
      input.push(",");
      output.innerText = input.join("");
    }
  });


  ac.addEventListener("click", function () {
    output.textContent = 0;
    input = [];
    plusActive = false;
    minusActive = false;
    divideActive = false;
    multiplyActive = false;
    temp = 0;
    calc = 0;
    numCount = 0;
  });

plus.addEventListener("click", function(){
    operator = '+';
    if(input == []){
        return 0;
    }
    console.log("plusActive:",plusActive);
    if(plusActive == true){
        calc = input.join("");
        temp += (+calc);
        output.textContent = temp;
        input = [];
        numCount = 0;
        return 0;
    }
    else{
        // output.textContent = 0;
        calc = input.join("");
        temp = (+calc);
        // output.textContent = 0;
        input = [];
    }
    plusActive = true;
    numCount = 0;
})

minus.addEventListener("click", function(){
    operator = '-';
    if(input == []){
        return 0;
    }
    console.log("minusActive:",minusActive);
    if(minusActive == true){
        calc = input.join("");
        temp -= (+calc);
        output.textContent = temp;
        input = [];
        numCount = 0;
        return 0;
    }
     else{
        // output.textContent = 0;
        calc = input.join("");
        temp = (+calc);
        // output.textContent = 0;
        input = [];
    }
    minusActive = true;
    numCount = 0;
})

multiply.addEventListener("click", function(){
    operator = '*';
    if(input == []){
        return 0;
    }
    console.log("multiplyActive:",multiplyActive);
    if(multiplyActive == true){
        calc = input.join("");
        temp *= (+calc);
        output.textContent = temp;
        input = [];
        numCount = 0;
        return 0;
    }
     else{
        // output.textContent = 0;
        calc = input.join("");
        temp = (+calc);
        // output.textContent = 0;
        input = [];
    }
    multiplyActive = true;
    numCount = 0;
})

divide.addEventListener("click", function(){
    operator = '/';
    if(input == []){
        return 0;
    }
    console.log("divideActive:",divideActive);
    if(divideActive == true){
        calc = input.join("");
        temp /= (+calc);
        output.textContent = temp.toFixed(7);
        input = [];
        numCount = 0;
        return 0;
    }
     else{
        // output.textContent = 0;
        calc = input.join("");
        temp = (+calc);
        // output.textContent = 0;
        input = [];
    }
    divideActive = true;
    numCount = 0;
})

equal.addEventListener("click", function(){
    if(input == []){
        return 0;
    } else{
        calc = input.join("");
        // output.textContent = 0;
        input = [];
        calc = (+calc);
        if(operator == '+'){
            output.textContent = (temp+calc);
        } else if(operator == '-'){
            output.textContent = (temp-calc);
        } else if(operator == '*'){
            output.textContent = (temp*calc);
        } else if(operator == '/'){
            output.textContent = (temp/calc).toFixed(7);
        }
    }
    plusActive = false;
    minusActive = false;
    divideActive = false;
    multiplyActive = false;
    temp = 0;
    calc = 0;
    numCount = 0;
})