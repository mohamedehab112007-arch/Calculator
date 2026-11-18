// variables
let num1,operator,num2;
let cleared=false;
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
function isNumberLongEnough(num)
{
    let stringNumber=num+"";
    let number_array= Array.from(stringNumber);
    let index=number_array.findIndex((element)=>element==='.' );
    if(number_array.length-(index)>9)
    {
      return Number(Math.ceil(num));
    }
    return num;
}
function append_num(screen,element)
    {
      let text=screen.textContent+element.textContent;
          screen.textContent=text;
    }

function appendEventListenersToNumbers(screen,num_array)
{
  num_array.forEach(function(element,index,array)
    {
   
       element.addEventListener("click",function(){
         append_num(screen,element);
        });
    });
}
function appendEventListenersToOperator(screen,signs_array)
{
    signs_array.forEach(function(element,index,array)
       {
        
          element.addEventListener("click",function()
          {
            if(operator!==null && operator!==undefined)
           {
            num2=Number(screen.textContent);
            screen.textContent=operate(num1,operator,num2);
            operator=element.textContent;
           }
            num1=Number(screen.textContent);
            operator=element.textContent;
            screen.textContent="";
          })
       });
}
function appendEventListenersToEqualButton(screen,equal_button)
{
   equal_button.addEventListener("click",function()
       {
           if(cleared||(num1!==null && num2!==null))
           { 

              num2=Number(screen.textContent);
            if(num1!==0&&num2===0)
            {
              screen.textContent="MATH ERRRRRRROR!"
            }
            else
            {
             let ans=operate(num1,operator,num2);
             screen.textContent=isNumberLongEnough(ans);
             num2=null;
             num1=null;
             operator=null;
             cleared=true;
            }
         
           }
         
       });
}
function appendEventListenersToClear(screen,clear)
{
  clear.addEventListener("click",function()
  {
     num1=null;
     num2=null;
     operator=null;
     screen.textContent="";

  })
  
}

function update_number()
{ 
  let screenGlobal =document.querySelector(".screen");
   let number_buttons=document.querySelectorAll("#num");
   let number_array=Array.from(number_buttons);
    appendEventListenersToNumbers(screenGlobal,number_array)
     let operators=document.querySelectorAll("#operator");
     let operator_array=Array.from(operators);
      appendEventListenersToOperator(screenGlobal,operator_array);
       let equal=document.querySelector("#equal");
       appendEventListenersToEqualButton(screenGlobal,equal);
        let clear_btn=document.querySelector("#clear");
       appendEventListenersToClear(screenGlobal,clear_btn);
}
// update_number();