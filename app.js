let a = prompt('Введите число a: ')
let b = prompt('Введите число b: ')
let letter = prompt('Введите знак: ')

switch(letter){
    case '+' :
    alert(+a + +b)
    break
    case '-' :
    alert(a - b)
    break
    case '*' :
    alert(a * b)
    break
    case '/' :
    alert(a / b)
    default :
    alert ('you are stupid')
}  
