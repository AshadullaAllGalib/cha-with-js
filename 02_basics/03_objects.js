// singleton will learn later
// Object.create

// object literals
const mySym = Symbol("key1");


const JsUser = {
    name: "Ashadulla",
    "full name": "Ashadulla Galib",
    [mySym]: "mykey1",//symbol declare
    age: 18,
    location: "Dhaka",
    email: "Ashadulla@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "ashadulla@chatgpt.com";
// Object.freeze(JsUser);// freeze last updated obj
JsUser.email = "ashadulla@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
};
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());