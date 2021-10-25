// 
// document.querySelector(`.submit`).addEventListener("click", function(event)
// {
//     // alert("Clicked")
//     console.log("Hello")
//     btnClk(event.target.innerText);
// })
// // 
// function btnClk(value)
// {
//     console.log(value)
// }
// console.log(element.innertText);
// // 

// var result = 0;
function print()
        {
            result = 15;
            console.log(result);
        }
print();

        console.log(result+10);
        
var clickHandler = function(){console.log("anonymous function");};

var keyHandler = function keyHandler(){console.log("This is keyHandler function");};

// console.log(clickHandler);
console.log(keyHandler);
keyHandler();

var teacher = "Anwar";

(function anotherTeacher(){
        var teacher = "ABC";
        console.log(teacher);
}) ();

console.log(teacher);

var workshop = {
        teacher: "Anwar",
        ask(question){
                console.log(this.teacher,question);
        },
};
workshop.ask("What is implicit binding?");

function ask(){
        // console.log(this.teacher,question)
}

function otherClass(){
        var myContext = {
                teacher: "Anwar"
        };
        ask.call(myContext,"Why?")
}
otherClass();
ask();

// 47 ==> Concatenating Two Integer Arrays
//     Create a function to concatenate two integer arrays.
//     concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]
//     concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]
//     concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]

// Using concat function
function concateArr(arr1,arr2) {
        // console.log(`Concatenate of ${arr1} and ${arr2} is :` arr1.concat(arr2));
        result = arr1.concat(arr2);
        console.log(`Concatenate of ${arr1} and ${arr2} is ${result}`);
}
    
// concateArr([1,3,5],[2,3,8]);
// concateArr([7, 8], [10, 9, 1, 1, 2]);
// concateArr([4, 5, 1], [3, 3, 3, 3, 3]);


// Without using concat function
ar1 = [1,2,3,4,5];
ar2 = [10,20,30,40,50];

// console.log(ar1);
// console.log(ar2);
// let ar3 = [];
// ar3.push(...ar1,...ar2);
// console.log(ar1);
// console.log(ar2);
// console.log(ar3);
let ar3 = JSON.parse(JSON.stringify(ar1));
for(i=0;i<ar2.length;i++)
{
        ar3.push(ar2[i]);

}
console.log(JSON.stringify(ar1));
console.log(ar2);
console.log(ar3);




