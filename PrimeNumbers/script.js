



let button = document.querySelector("#button");
button.onclick = printPrimeNumbers;

function printPrimeNumbers(){
    
    let text = document.querySelector("#text");  
text.innerText = FindPrimeNumbers();

}


function FindPrimeNumbers() {
   
    let borderNumber = document.querySelector("#number").value;
    
    let tempArray = [borderNumber + 1];
    let resultNumbers="";
   
    for (let i = 2; i <= borderNumber; i++){
        if(tempArray[i]===undefined) resultNumbers += i + " ";
        for (let y = 2; y <= Math.sqrt(borderNumber); y++){
            tempArray[y*i] = 1;
        }
    }
    return resultNumbers;

}

