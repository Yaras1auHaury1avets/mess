const input = document.querySelector("input");
const span = document.querySelector("span");
const buttonSearch = document.querySelector("#search");
const buttonRandom = document.querySelector("#random");

buttonRandom.onclick = getPlaceholder;
buttonSearch.onclick = searchSubArray;

getPlaceholder();

function getPlaceholder(){
    input.value = getRandomArray();
}

function getRandomArray(){
    let arr = [];
    for(let i=0; i<10;i++){
        arr.push(Math.floor(Math.random()*21-10));
    }
    return arr.join(" ");
}

function searchSubArray(){
    let arr = input.value.split(" ");
    let maxValue = 0;
    
    let maxArr = [];
    
    for(let i=0;i<arr.length;i++){
        let currentValue = 0;
        let currentArr = [];
        for(let y=i;y<arr.length;y++){
            currentValue += +arr[y];
            currentArr.push(arr[y]);
            if(currentValue>maxValue){
                maxValue = currentValue;
                maxArr = currentArr.join(" ").split(" ");
            }
       
        }
    }
    span.innerText = maxArr.join(" ");
}

function copyArr(arr){
    let result = [];

}