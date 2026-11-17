// variables
let num1,operator,num2;
function add(a,b)
{
    return a+b;
}
function substract(a,b)
{
    return a-b;
}
function multiply(a,b)
{
    return a*b;
}
function divide(a,b)
{
    if(b===0)
    {
        return "math error";
    }
    else
    {
        return a/b;
    }
}
function operate(number1,operatant,number2)
{
  if(operatant==='+')
  {
    return add(number1,number2);
  }
  else if(operatant==='-')
  {
    return substract(number1,number2);
  }
  else if(operatant==="*")
  {
   return  multiply(number1,number2);
  }
  else if(operatant==='/')
  {
   return divide(number1,number2);
  }
}
function update_number()
{
    let screen =document.querySelector(".screen");
    let whichNumberIsEmpty=new function(value)
    {
      if(num1!==null || num1!==undefined)
      {
        num2=value;
      }
      else
      {
        num1=value;
      }
    }
   let number_buttons=document.querySelectorAll("#num");
   let number_array=Array.from(number_buttons);
    number_array.forEach(function(element,index,array)
    {
       element.addEventListener("click",function(){
         let text=screen.textContent+element.textContent;
          screen.textContent=text;
        });
    });
     
    

}
update_number();