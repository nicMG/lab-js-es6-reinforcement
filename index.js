// ***************************************************************************
// Iteration 1 - `for...of` loop
// ***************************************************************************
let usersArray = require("./data")


//console.log(usersArray)

const getFirstNames = arr => {
  const userFirstNames = [];
  for (let user of arr) {
    //console.log(user.firstName)
    userFirstNames.push(user.firstName)
  };
  // console.log(userFirstNames);  
  return userFirstNames

};

getFirstNames(usersArray);
// expected output:
// [ 'Kirby', 'Tracie', 'Kendra', 'Kinney', 'Howard', 'Rachelle', 'Lizzie' ]

// ***************************************************************************
// Iteration 2 - `for...of` loop and ES6 string literals `${}`
// ***************************************************************************

const getFullNames = arr => {
  const names = []
  for (let user of arr) {
    names.push(`${user.firstName} ${user.lastName}`)
    //return names
  }
  return names
  // Your code goes here ...
};


getFullNames(usersArray);
// expected output:
// [ 'Kirby Doyle', 'Tracie May', 'Kendra Hines', 'Kinney Howard',
//   'Howard Gilmore', 'Rachelle Schneider', 'Lizzie Alford' ]

// ***************************************************************************
// Iteration 3 - ES6 destructuring , for of loop, object literal
// ***************************************************************************

const getUsersCreditDetails = arr => {
  let newList = []
  // Your code goes here ...
  for (let user of arr) {
    newList.push({firstName:user.firstName, lastName:user.lastName, balance:user.balance})
  }
  //console.log(newList)
  return newList

};

getUsersCreditDetails(usersArray);
// expected output:
// [ { firstName: 'Kirby', lastName: 'Doyle', balance: '$3,570.06' },
// { firstName: 'Tracie', lastName: 'May', balance: '$1,547.73' },
// { firstName: 'Kendra', lastName: 'Hines', balance: '$12,383.08' },
// { firstName: 'Kinney', lastName: 'Howard', balance: '$3,207.06' },
// { firstName: 'Howard', lastName: 'Gilmore', balance: '$21,307.75' },
// { firstName: 'Rachelle', lastName: 'Schneider', balance: '$35,121.49' },
// { firstName: 'Lizzie', lastName: 'Alford', balance: '$4,382.94' } ]

// ***************************************************************************
// Iteration 4 - practice `.filter()` method and how to return two elements
// ***************************************************************************

const genderView = users => {
  let maleList = []
  let femaleList = []

  let male = users.filter((elem, index) => users[index].gender == "male")
  maleList = getFullNames(male)
  // return `${elem[index].firstName} ${elem[index].lastName}`

  let female = users.filter((elem, index) => users[index].gender == "female")
  femaleList = getFullNames(female)

  let obj = {femaleUsers: femaleList, maleUsers: maleList}
  return obj
  //onsole.log(obj)
};


// return `${elem[index].firstName} ${elem[index].lastName}`

// console.log(genderView(usersArray));
// expected output:
// {
//    femaleUsers: [ 'Tracie May', 'Kendra Hines', 'Rachelle Schneider', 'Lizzie Alford' ],
//    maleUsers: [ 'Kirby Doyle', 'Kinney Howard', 'Howard Gilmore' ]
// }

// ***************************************************************************
// Bonus - Iteration 5
// ***************************************************************************


const data = genderView(usersArray);

const genderCount = data => {
  // console.log(`Female: ${data.femaleUsers.length}`)
  // console.log(`Male: ${data.maleUsers.length}`)
  // Your code goes here ...
};

genderCount(data);
// expected output:
// Female: 4
// Male: 3

// ***************************************************************************
// Bonus - Iteration 6
// ***************************************************************************


const users2 = getUsersCreditDetails(usersArray)
const promo20 = users2 => {
  let rich = users2.filter((elem, index) => parseFloat(users2[index].balance.split(“$”)[1].replace(/,/g, ‘’)) > 20000)


    console.log(rich)
  // Your code goes here ...
};
promo20(users2);
v
// expected output:
// Dears Howard, since your balance is $21,307.75, you are eligible to apply for this awesome credit card.
// Dear Rachelle, since your balance is $35,121.49, you are eligible to apply for this awesome credit card.

// ***************************************************************************
// Bonus - Iteration 7
// ***************************************************************************

const addActive = users => {
  // Your code goes here ...
};

addActive(usersArray);
// expected output:
// [
//    { firstName: 'Kirby',
//      lastName: 'Doyle',
//      id: 'b71794e5-851e-44b5-9eec-1dd4e897e3b8',
//      isActive: true,
//      balance: '$3,570.06',
//      gender: 'male'
//    },
//    {
//      // ...
//    }
// ]


