// Créez votre fonction ici
function calculate(x,y,sign){
    const signArray = [`+`, `-`, `*`, `/`];
    let result;
    switch (sign) {
        case '+':
          result = +x+(+y);
          return result;
        case '-':
            result = +x-(+y);
            return result;
        case '*':
            result = +x*(+y);
            return result;
        case '/':
            if(y===0) result= "Division by zero is not allowed";
            else result = +x/(+y);
            return result;
        default:
            result = "Invalid operator";
            return result;  
      }
}

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate
