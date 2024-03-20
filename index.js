// Code your solution in this file!
const returnFirstTwoDrivers= function () {
    return ['Antonia', 'Nuru'];
}
const returnLastTwoDrivers= function () {
    return ['Amari', 'Mo'];
}
const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier=function () {
    return function (fareMultiplier) {
        return (fareMultiplier)*(fareMultiplier);
    } 
}

const fareDoubler= function fareMultiplier() {
    return fareMultiplier^20;
}

const fareTripler= function fareMultiplier() {
    return fareMultiplier^36;
}

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
        
}