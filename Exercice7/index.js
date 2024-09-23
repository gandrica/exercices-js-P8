const decimalInput = document.getElementById("decimalInput");
const binaryResult = document.getElementById("binaryResult");

function convertToBinary(){
    let numberToConvert =  +decimalInput.value;
    if(numberToConvert){
        const numberBinaryArray= [];
        while(numberToConvert){
            numberBinaryArray.unshift(numberToConvert%2);
            numberToConvert = Math.floor(numberToConvert / 2);
        }

        binaryResult.textContent = numberBinaryArray.join('');
    }else{
        binaryResult.textContent = "";
    }
}