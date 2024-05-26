var count = 5;
refA;
refB;

function signal (){
    var car = document.getElementById('car');
    count += 5
    car.style.left = count + "px"
    

}

function goCar (){
    refA = setInterval(signal,20);
} 

function stop (){
    clearInterval(refA);
}   clearInterval(refB);


function ready (){
     refB = setInterval(signal,1000);
     
}






















// var count = 5;

// function goCar (){
//     var car = document.getElementById('car');
//     count += 5
//     car.style.left = count + "px"
    

// }

// var ref = setInterval(signals,20);

// function stop (){
//     clearInterval(ref) = document.getElementById('car')
// }
 

