console.clear();
import { faker } from "https://cdn.skypack.dev/@faker-js/faker";
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

const table = document.querySelector("table");
const button = document.querySelector("button");


function createPerson() {
  return {
    firstName: faker.person.firstName(),
    lasName: faker.person.lastName(),
    email: faker.internet.email(),
    dateOfBirth: faker.date.birthdate(),
    friends: []
  };
}

// const person1 = createPerson("female");
// const person2 = createPerson("female");
// const person3 = createPerson("male");

// console.log(person1 , person2, person3);

// color
// function createFlight() {

//   return {aircraft: faker.airline.aircraftType(),
//   airplane: faker.airline.airplane(),
//   airport: faker.airline.airport(),
//   flightNumber: faker.airline.flightNumber(),
//   seat: faker.airline.seat()}

// }

// const flight1 = createFlight();
// const flight2 = createFlight();
// const flight3 = createFlight();

// console.log(flight1 , flight2 ,flight3)

function getRandomNumber(max = 3) {
  return Math.floor(Math.random() * max + 1);
}

function createFriends(max) {
  const friends = [];

  for (let i = 0; i < getRandomNumber(max); i++) {
    const friend = createPerson();
    for (let j = 0; j < getRandomNumber(); j++) {
      friend.friends.push(createPerson());
    }

    friends.push(friend);
  }

  return friends;
}



function td(text) {
  const el = document.createElement("td");
  el.innerText = text;
  return el;
}



function createTableRows() {
  const myFriends = createFriends(3);

  for (let i = 0; i < myFriends.length; i++) {
  const friend = myFriends[i];
  const tr = document.createElement("tr");
  const firstNameTD = td(friend.firstName);
  const lastNameTD = td(friend.lastName);
  const email = td(friend.email);
  const dob = td(friend.dateOfBirth);

  tr.appendChild(firstNameTD);
  tr.appendChild(lastNameTD);
  tr.appendChild(email);
  tr.appendChild(dob);

  table.appendChild(tr);
}
  
  
  
}


button.addEventListener("click",   createTableRows
 )
