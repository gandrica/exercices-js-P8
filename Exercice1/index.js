//votre code ici
function pairNumbers(min, max){
    const pairNumbersArray = [];
    let pairNumbers = "";
    for(let i = +min; i<=+max;i++){
        if(+max<=+min) return pairNumbers = "";
        if(i%2 ===0) pairNumbersArray.push(i);
    }
    pairNumbers = pairNumbersArray.join(',');
    console.log(pairNumbers);
    return pairNumbers;
}
export default pairNumbers
