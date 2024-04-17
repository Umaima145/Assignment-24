function sam(){
    alert("Thanks for purchaising from us..!")
}

function deleteRow(index) {
    var table = document.getElementById("studentTable");
    table.deleteRow(index + 1); 
}


var counterSpan = document.getElementsByTagName('span')[0];
var counterValue = 0;

function increaseCounter() {
     counterValue++;
     updateCounter();
    }

function decreaseCounter() {
        counterValue--;
        updateCounter();
    }

    function updateCounter() {
        counterSpan.textContent = counterValue;
    }

 

