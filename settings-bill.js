
function radioBillTotal() {
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn) {
        var billItemTypeWithSettings = checkedRadioBtn.value;
        if (billItemTypeWithSettings === "call") {
            callTotal += callCost;
        }
        else if (billItemTypeWithSettings === "sms") {
            smsTotal += smsCost;
        }
        callTotalSettings.innerHTML = callTotal.toFixed(2);
        smsTotalSettings.innerHTML = smsTotal.toFixed(2);
        totals = callTotal + smsTotal;
        totalSettings.innerHTML = totals.toFixed(2);



        if (totals >= criticalLevel) {
            totalSettings.classList.add("danger");
        }

        else if (totals >= warningLevel) {
            totalSettings.classList.remove("warning");
            totalSettings.classList.add("warning");
        } 

        if (totals >= criticalLevel) {
            radioSettingsAddBtn.disabled = true;
        }
        if (totalSettings < warningLevel) {

            totalSettings.classList.remove("warning")
        }
    }

}


function Settings() {

    callCost = Number(callCostSetting.value);
    smsCost = Number(smsCostSetting.value);
    warningLevel = warningLevelSetting.value;
    criticalLevel = criticalLevelSetting.value;



    callCostSetting.innerHTML = callTotal.toFixed(2);
    smsCostSetting.innerHTML = smsTotal.toFixed(2);
    totals = callTotal + smsTotal;
    totalSettings.innerHTML = totals.toFixed(2);

    if (totals < criticalLevel) {
        radioSettingsAddBtn.disabled = false;
    }
    if (totals >= criticalLevel) {
        radioSettingsAddBtn.disabled = true;
    }


    if (totals >= criticalLevel) {
        totalSettings.classList.add("danger");
        totalSettings.classList.remove("warning");

        
    }
    if (totals >= warningLevel && totals < criticalLevel) {
        totalSettings.classList.add("warning");
        totalSettings.classList.remove("danger");
    }
    if (totals < warningLevel) {
        totalSettings.classList.remove("danger")
        totalSettings.classList.remove("warning")
    }

    
}

radioSettingsAddBtn.addEventListener('click', radioBillTotal);
updateSettings.addEventListener('click', Settings);