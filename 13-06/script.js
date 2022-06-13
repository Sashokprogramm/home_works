/*************** Class Work ****************/
function shoeMinimumValue(a,b) {
    if (a < b){
        return a;
    } else {
        return b;
    }
}
let result = shoeMinimumValue(2,1);
function showValue(value) {
    console.log(value);
}
showValue(result);