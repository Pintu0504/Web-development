// javascript object notation allows to create object without the class


var bird={
    x: 200,
    y: 300, 
    color: "red",
    eggs: [1, 2, 3, 4]

};
console.log(bird.eggs.length);



//Concept of Hoisting

function sqrt(n){                      // In this case the function code is moved to 
    console.log(Math.sqrt(n));          // the top of code before calling, which is called 
}                                       // hoisting



var sqrt=function(n){                   // But in this case hoisting will fail..
    console.log(Math.sqrt(n));
}


//concept of closure

function outer(arg1){
    let var1=10;

    function inner(arg2){     // Inner function can access the values of arg1, var1....
        let var2=20;
        console.log(arg1, var1, arg2, var2);
    }

    return inner;
}

let x=outer("param1");
x("param2");


// Concept of "this" keyword in javascript

// console.log(this);  //"This" will point windows self

// Here this will point to the student object itself..
                                //But if we store key "d" in another variable say, "x" then on /////calling x it will point to windows..
var student={

    name: "Pintu kumar",

    roll: 123,

    d: function(){
        console.log(this);       
    }
}



//Concept of Inheritance


obj1={
    a: 10,
    b: 20,
    c: 30
}

obj2=Objct.create(obj1);

obj2.p="abc";
obj2.q="cde";
obj2.r="efg";

obj3=Object.create(obj2);



    /*obj2.a -> it will try to find 'a' in obj2
        -> if not found,
        -> it will try to find it in obj2.__proto__
        -> if not found, 
        -> it will try to find it in obj2.__proto__.__proto
        -> and so on till .__proto becomes null...


    so Here in the cases of obj1, obj2, and obj3:
        obj2.__proto__==obj1
        obj3.__proto__==obj2
        obj3.__proto__.__proto___==obj1

*/
