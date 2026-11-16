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