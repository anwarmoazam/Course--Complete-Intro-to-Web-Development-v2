// Return the Sum of Two Numbers
function addition(num1,num2)
{
    if(typeof num1 !== "number" || typeof num2 !== "number")
    {
        return "Sorry but you didn't pass two numbers.";
    }
        return num1+num2;
}

// addition(3,2);
// addition(-3,-6);
// addition(7,3);

// Return the Sum of Two Numbers
function addition(num1,num2)
{
    let result = num1+num2;
    console.log(`Sum : ${result}`);
}

// addition(3,2);
// addition(-3,-6);
// addition(7,3);

// Convert Minutes into Second
function minutesToSecond(num1)
{
    if(typeof num1 === "number")
    {
        let result = num1*60;
        console.log(`Seconds of given number is : ${result}`);    
    } else
    {
        console.log("Not a number");
    }
}

// minutesToSecond(5);
// minutesToSecond(3);
// minutesToSecond(2);

// Return the Next Number from the Integer Passed
function increamentNumberToOne(num1)
{
    if(typeof num1 === "number")
    {
        let result = num1+1;
        console.log(`Next number of ${num1} is : ${result}`);    
    } else
    {
        console.log("Not a number");
    }
}

// increamentNumberToOne(0);
// increamentNumberToOne(9);
// increamentNumberToOne(-3);

// Area of a Triangle
function areaOfTriangle(base,height)
{
    if(typeof base === "number" && typeof height === "number")
    {
        let result = (base*height)/2;
        console.log(`Area of trianle is : ${result}`);    
    } else
    {
        console.log("Not a number");
    }
}

// areaOfTriangle(3,2);
// areaOfTriangle(7,4);
// areaOfTriangle(10,10);

// Convert Age to Days
function convertAgeIntoDays(age)
{
    if(typeof age === "number")
    {
        let result = age*365;
        console.log(`Days in ${age} years is : ${result}`);    
    } else
    {
        console.log(`${age} is Not a number`);
    }
}

// convertAgeIntoDays(65);
// convertAgeIntoDays(0);
// convertAgeIntoDays(20);

// Return the First Element in an Array
function firstElement(arr)
{
    // let result = arr[0];
    console.log(`First element of an Array ${arr} is : ${arr[0]}`);
}

// firstElement([1,2,3]);
// firstElement([80,5,100]);
// firstElement([-500,0,50]);

// Find the Perimeter of a Rectangle
function peremeterOfRectengle(length,width)
{
    if(typeof length === "number" && typeof width === "number")
    {
        let result = 2*(length+width);
        console.log(`Peremeter of Rectengle is : ${result}`);    
    } else
    {
        console.log("Not a number");
    }       
}

// peremeterOfRectengle(6,7);
// peremeterOfRectengle(20,10);
// peremeterOfRectengle(2,9);

// Return Something to Me!
function giveMeSomething(text)
{
    console.log(`something ${text}`);
}

// giveMeSomething("is better than nothing");
// giveMeSomething("Bob Jane");
// giveMeSomething("something");

// Print Array
function printArray(num)
{
    let arr = [];
    for(i=0;i<num;i++)
    {
        arr.push(i+1);
    }    
    console.log(arr);
}

printArray(1);
printArray(3);
printArray(6);

// Swap Numbers
function swapNumbers(num1,num2)
{
    let tmp = num1;
    num1 = num2;
    num2 = tmp;
    console.log(`${num1},${num2}`)
}

swapNumbers(100,200);
swapNumbers(44,33);
swapNumbers(21,12);