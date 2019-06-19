var billStringField = document.querySelector(".billString");
var calculateBtn = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");

var color = calculateBtnClicked();

var bill = calculateBtnClicked();

calculateBtn.addEventListener("click", function(){ 
    
    var total = bill.billsMade(billStringField.value);
  
    

billTotalElement.innerHTML = total;


if (color.criticalLevel(total)){
    billTotalElement.classList.add("danger");
    billTotalElement.classList.remove("warning");

}
else if (color.warningLevel(total)){
    billTotalElement.classList.add("warning");
    billTotalElement.classList.remove("danger");

}else{
    billTotalElement.classList.remove("warning");
    billTotalElement.classList.remove("danger");

}
});

calculateBtn.addEventListener('click', calculateBtnClicked);