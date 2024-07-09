function camelCase(){
    let str= "-webkit-transition";
    let arr = str.split("-");
    for(let i=1;i<arr.length;i++){
        arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1,arr[i].length);
    }
    str = arr.join("");
    alert(str);
}


function filterRange(arr, a, b){
    return arr.filter( item => (item>=a)&&(item<=b) );
}

function filterRangeInPlace(arr, a, b){
   arr =  arr.filter( item => (item>=a)&&(item<=b) );
    return arr;
}

function badSort(arr){
    return arr.sort( (a, b) => b-a);
}

function Calculator(){
    this.calculate = function(str){
        let arr= str.split(" ");
        switch(arr[1]){
            case "+" : return +arr[0] + +arr[2];
            case "-" : return +arr[0] - +arr[2];
        }
    }
}


function shuffleArray(arr){
    let result =[];
    let border = arr.length;
   // alert(111);
    for(let i=0;i<border;i++){
        let index = Math.floor(Math.random()*arr.length);
        result.push(arr[index]);
    //    alert(111);
        arr = arr.slice(0,index).concat(arr.slice(index+1, arr.length));
    }
    alert(result);
}

let arr = [1, 2, 3, 4,5,6,7,8,9,0];

shuffleArray(arr);