// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];

// // ----------------------------------------------------------------------------------------------------------------------------------------------------

// // const getTotalBalanceByGender = (users, gender) => totalBalance = users.filter(user => user.gender === gender);

// const getTotalBalanceByGender = (users, gender) => totalBalance = users.filter(user => user.gender === gender).reduce((total, user) => {return total += user.balance }, 0);


// // const getGenrders = (users, gender) => usersWithChosenColor = users.filter(user => user.gender === gender);


// // const getUsersWithEyeColor = (users, color) => {
// //   const usersWithChosenColor = users.filter(user => user.eyeColor === color);
// //  return usersWithChosenColor;
// //  };


// // ----------------------------------------------------------------------------------------------------------------------------------------------------


// // const allGenders = (users, {gender}) => {
// //   const users.filter(user => user.gender === gender)

// //   return allGenders
// // }

// // const getSortedFriends = users => users.flatMap(user => user.friends).filter((friend,index,array) => array.indexOf(friend) === index).sort((a,b) => a.localeCompare(b))


// // const getNamesSortedByFriendCount = users => [...users].sort((a,b) => a.friends.length - b.friends.length).map(user => user.name);

// // Change code below this line

// // const names = [...books].sort((a,b) => a.author.localeCompare(b.author)).filter(rate =>  rate.rating > MIN_BOOK_RATING).map(name => name.author);


// // const names = [...books].sort((a,b) => a.author.localeCompare(b.author));
// // const filteredNames = names.filter(rate =>  rate.rating > MIN_BOOK_RATING);
// // const newNames = filteredNames.map(name => name.author);


// // ----------------------------------------------------------------------------------------------------------------------------------------------------


// class StringBuilder {
//   constructor (value){
//     this.value = value;
//   }
// getValue(){
//   return this.value;
// }
// padEnd(str){
//   return this.value += str;
// }
// padStart(str){
//   return this.value = str + this.value;
// }
// padBoth(str){
//   return this.value = str + this.value + str;
// }

// }


// // ----------------------------------------------------------------------------------------------------------------------------------------------------


// Change code above this line
// const builder = new StringBuilder("<>");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// class Car {
//   // Change code below this line
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE){
//     this.#price = newPrice;
//   }
//   return
// }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// // ----------------------------------------------------------------------------------------------------------------------------------------------------


// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice (price) {
//     if (price >= Car.#MAX_PRICE){
//     return "Error! Price exceeds the maximum";
//   }
//     return "Success! Price is within acceptable limits";
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });


// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// // ----------------------------------------------------------------------------------------------------------------------------------------------------


// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));


// // ----------------------------------------------------------------------------------------------------------------------------------------------------


// class User {
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
//   // Change code below this line
  
//   class Admin extends User {
//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser"
//     };
//     access;
//   }


// // ----------------------------------------------------------------------------------------------------------------------------------------------------


// class User {
//     email;
  
//     constructor(email) {
//       this.email = email;
//     }
  
//     get email() {
//       return this.email;
//     }
  
//     set email(newEmail) {
//       this.email = newEmail;
//     }
//   }
  
//   class Admin extends User {
//     // Change code below this line
  
//     static AccessLevel = {
//       BASIC: "basic",
//       SUPERUSER: "superuser",
//     };
//   constructor({email, accessLevel}){
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//     // Change code above this line
//   }
  
//   const mango = new Admin({
//     email: "mango@mail.com",
//     accessLevel: Admin.AccessLevel.SUPERUSER,
//   });
  
// //   console.log(mango.email); // "mango@mail.com"
// //   console.log(mango.accessLevel); // "superuser"


// // ----------------------------------------------------------------------------------------------------------------------------------------------------


class User {
    email;
  
    constructor(email) {
      this.email = email;
    }
  
    get email() {
      return this.email;
    }
  
    set email(newEmail) {
      this.email = newEmail;
    }
  }
  class Admin extends User {
    // Change code below this line
  
    static AccessLevel = {
      BASIC: "basic",
      SUPERUSER: "superuser",
    };
  
    constructor({ email, accessLevel }) {
      super(email);
      this.accessLevel = accessLevel;
    }

    blacklistedEmails = [];

    blacklist(email) {
        this.blacklistedEmails.push(email);
    }

    isBlacklisted(email) {
        return this.blacklistedEmails.includes(email);
    }
    
    // Change code above this line
  }
  
  const mango = new Admin({
    email: "mango@mail.com",
    accessLevel: Admin.AccessLevel.SUPERUSER,
  });
  
//   console.log(mango.email); // "mango@mail.com"
//   console.log(mango.accessLevel); // "superuser"
  
//   mango.blacklist("poly@mail.com");
//   console.log(mango.blacklistedEmails); // ["poly@mail.com"]
//   console.log(mango.isBlacklisted("mango@mail.com")); // false
//   console.log(mango.isBlacklisted("poly@mail.com")); // true
  