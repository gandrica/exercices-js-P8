const display = document.getElementById('display');

function appendToDisplay(element){
    display.value += element;
    return display;
}
function clearDisplay(){
    display.value = "";
    return display;
}

function calculateResult(){
    const numbers = display.value.split(/\D+/g);
    const signs = display.value.split(/[0-9]/g).filter(el=>el !== "");
    const signsFiltered = signs.filter(el=>el === "+" || el==="-");
    const signsPriorityIndex = signs.map((sign,i)=> {
        if(sign === "*" || sign === "/") return i;
    }).filter(el=>el!==undefined)
    const numbersPriorityCalculated= []
    for(let i =0; i<numbers.length;i++){
        if(signsPriorityIndex.includes(i)){
            if(signs[i]==="*")numbersPriorityCalculated.push(numbers[i]*numbers[i+1])
            else if(signs[i]==="/")numbersPriorityCalculated.push(numbers[i]/numbers[i+1])
            i++
        }else{
            numbersPriorityCalculated.push(+numbers[i])
        }
    }
    const result =numbersPriorityCalculated.includes(Infinity)? 'Division by zero is not allowed': numbersPriorityCalculated.reduce((acc,cum,i)=>{
        let res;
        if(signsFiltered[i-1]=== "+") res = +acc + (+cum);
        else if(signsFiltered[i-1]=== "-") res = +acc - (+cum);
        return res;
    })
    display.value = result;
    return result;
}