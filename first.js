console.log("Hello World")
// Table Print Programe
console.log("Table Print Programme")
function printTable(num)
{
    for(i=1; i<=10; i++)
        {
            result = num*i
            console.log(`${num} * ${i} is ${result}`)
        }
}

// Given Number Odd or Even Programe
console.log("Check Number Odd or Even Programe")
function oddEven(n1)
{
    if(n1%2==0)
    {
        console.log(`${n1} is Even Number`)
    }
    else
    {
        console.log(`${n1} is Odd Number`)
    }
}
const num = parseInt(prompt('Enter a Number Which table you want to print'))
console.log(printTable(num))
// const n1 = parseInt(prompt('Enter a Number to Check Odd or Even'))
// console.log(oddEven(n1))
                    // const character = "*"
                    // // const timesToRepeat = 50
                    // let answer = ""
                    // function printStar(timesToRepeat)
                    // {
                    //     for (i=1;i<=timesToRepeat;i++)
                    //     {
                    //         answer += character
                    //         console.log(answer)
                    //     }
                    // }
// const timesToRepeat = parseInt(prompt('Enter a Number for How much times you want to Print Star'))
// console.log(printStar(timesToRepeat))
            // const str = "This is a simple line"
            // console.log(str)
            // console.log(str.toUpperCase())
            // console.log(str.toLowerCase())

// Objects and Arrays
                        // const person = {
                        //     name: "Anwar Moazam",
                        //     age: 36,
                        //     city: "Pali",
                        //     state: "Rajasthan",
                        //     favoriteFood: "Pizza",
                        //     wantsTacosRightNow: true,
                        //     numberofTacosWanted: 50,
                        //     address: {
                        //         hno: "39",
                        //         street: "Shiv Nagar",
                        //         pin: "306401"
                        //     }
                        // };
                        // const propName = "state";
                        // console.log(person)
                        // console.log(person.name)
                        // console.log(person["city"])
                        // console.log(person["age"])
                        // console.log(person[propName]);
                        // console.log(person.address.hno,person.address.street,person.city,person.address.pin)

                        // const me = {
                        //     name: {
                        //         first: "Aaliya",
                        //         last: "Rizvi"
                        //     },
                        //     location: {
                        //         city: "Pali",
                        //         state: "Rajasthan",
                        //         country: "India"
                        //     }
                        // };

                        // console.log(me);
                        // console.log(me.location.city)

        function repeat(fn,n)
        {
            var result;
            for (i=0;i<n;i++)
            {
                result=fn(result,i);
            }
            return result;
        }
        console.log(repeat(10,3));