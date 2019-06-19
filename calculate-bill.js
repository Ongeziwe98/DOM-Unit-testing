function calculateBtnClicked(){
    var billTotal = 0.00;

    function phoneBills(bills){ 
        console.log(bills)
        billTotal = 0;
        var billItem = bills.split(",");
        for(var i = 0; i < billItem.length; i++){
            var billType = billItem[i].trim();
        if(billType === "call"){
            billTotal += 2.75;
        }
       else if(billType  === "sms"){
            billTotal += 0.75;
        }
        else{
            console.log('could not add '+billType);        }
    }
        return billTotal.toFixed(2)
    }

    function warningLevel(billTotal){
        return billTotal >= 20 && billTotal < 30;
    }

    function checkStringInput(){
        return '0.00';
    }
    
function criticalLevel(billTotal){
    return billTotal >= 30;
}


return{
    billsMade: phoneBills,
    checkString: checkStringInput,
    criticalLevel,
    warningLevel

}

}

