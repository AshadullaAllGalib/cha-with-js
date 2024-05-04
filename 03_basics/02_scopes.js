//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // var c = 30
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "ashadulla"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); this will show error

     two()

}

// one()

if (true) {
    const username = "ashadulla"
    if (username === "ashadulla") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5)) // will run 

function addone(num){
    return num + 1
}



addTwo(5)// give error
const addTwo = function(num){
    return num + 2
}
