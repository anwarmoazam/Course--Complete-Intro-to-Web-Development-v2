// 47 ==> Concatenating Two Integer Arrays
//     Create a function to concatenate two integer arrays.
//     concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]
//     concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]
//     concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]

//Concatenate Arrays Using concat function
function concateArr(arr1,arr2)
{
    let arr3 = [].concat(arr1,arr2);
    console.log(`Concatenate of ${arr1} and ${arr2} are : ${arr3}`);
}
// concateArr([1,3,5],[2,3,8]);
// concateArr([7, 8], [10, 9, 1, 1, 2]);
// concateArr([4, 5, 1], [3, 3, 3, 3, 3]);


//Concatenate Arrays Using Push with array
function concateArr1(arr1,arr2)
{
    let arr3 = JSON.parse(JSON.stringify(arr1));
    for(i=0;i<arr2.length;i++)
    {
        arr3.push(arr2[i]);
    }
    console.log(`Concatenate of ${arr1} and ${arr2} are : ${arr3}`);
}
// concateArr1([1,3,5],[2,3,8]);
// concateArr1([7, 8], [10, 9, 1, 1, 2]);
// concateArr1([4, 5, 1], [3, 3, 3, 3, 3]);



//Concatenate Arrays Using Spread
function concateArr2(arr1,arr2)
{
    // let arr3 = [].push(...arr1,...arr2);
    let arr3 = [];
    arr3.push(...arr1,...arr2);
    console.log(`Concatenate of ${arr1} and ${arr2} are : ${arr3}`);
}
// concateArr2([1,3,5],[2,3,8]);
// concateArr2([7, 8], [10, 9, 1, 1, 2]);
// concateArr2([4, 5, 1], [3, 3, 3, 3, 3]);

// Function to check whether an 'input' is an array or not
function isArray(value)
{
    if(toString.call(value) === "[object Array]")
    {
        console.log("Given value is Array type Object");
    }
    else
    {
        console.log("Given value is Not an Array type Object");
    }
}

// isArray("Anwar","Uzair");

function isEqual(arr1,arr2)
{
    // let tmp = arr1.length;
    if(arr1.length==arr2.length)
    {
        console.log("Array size is Equal");
    } else
    {
        console.log("Array size is not Equal");
    }
}
// isEqual([2,3,4,5],[1,2,3,4])

let isEven = (number)=>{
    if (number%2==0){
        console.log("Even Number");
    } else
    console.log("Not an Even Number");
}

// isEven(50);

// Creates a new array with given values
let letCreateArray = (numberOfElements,value)=>{
    arr1 = new Array(numberOfElements).fill(value);
    console.log(arr1);
}

// letCreateArray(5,'Anwar');

// Write a method that reverts input array
function reverseArray(array)
{
    let tmpArray = [];
    for(let i=array.length-1;i>=0;i-=1)
    {
        tmpArray.push(array[i]);
    }
    console.log(tmpArray);
}

reverseArray([15,20,25,30,35]);