console.log("hello");
console.log("just testing it out")


$("#zero").click(zero);
$("#add1").click(add1);
$("#sub1").click(sub1);
$("#add5").click(add5);
$("#sub5").click(sub5);


//global scope
var result;


function zero() {
    result = 0;
    $("#result").html(result);

    // local scope
}


function add5() {
    result = result + 5;
    
    $("#result").html(result);

    // body...
}


function sub5() {
    result = result - 5;
    $("#result").html(result);

    // body...
}


function add1() {
     result = result + 1;
    $("#result").html(result);

    // body...
}

function sub1 () {
 result = result - 1;
    $("#result").html(result);
    // body...
}