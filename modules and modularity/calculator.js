// calculator.js

// Named exports
function add(a, b) {
    console.log(a + b);
}

function sub(a, b) {
    console.log(a - b);
}

function mul(a, b) {
    console.log(a * b);
}

function div(a, b) {
    console.log(a / b);
}

function mergearr(array1, array2) {
    let new_array = [...array1, ...array2];
    console.log(new_array);
}

// Named exports
module.exports = {
    addfn: add,
    subfn: sub,
    mulfn: mul,
    divfn: div,
    mergearray: mergearr
};

// Default export
module.exports.myfunc = function() {
    console.log("I am the function that I created by me");
};
