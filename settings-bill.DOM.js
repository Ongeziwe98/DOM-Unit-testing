var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var radioSettingsAddBtn = document.querySelector(".radioSettingsAddBtn");
var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");
var updateSettings = document.querySelector(".updateSettings");
var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting")

var callTotal = 0;
var smsTotal = 0;
var totals = 0;
var callCost = 0;
var smsCost = 0;
var warningLevel = 0;
var criticalLevel = 0;

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