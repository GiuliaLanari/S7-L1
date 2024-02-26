class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  static showAge(user1, user2) {
    if (user1.age > user2.age) {
      return user1.firstName + " " + "è più vecchio di " + user2.firstName;
    } else if (user1.age < user2.age) {
      return user2.firstName + " " + "è più vecchio di " + user1.firstName;
    } else {
      return user1.firstName + " " + "ha la stessa età di " + user2.firstName;
    }
  }
}

const user1 = new User("Giuseppe", "Rossi", 20, "Milano");
const user2 = new User("Filippo", "Lampo", 45, "Genova");
const user3 = new User("Matteo", "Forti", 15, "Roma");
const user4 = new User("Jack", "Sasso", 15, "Londra");

console.log(User.showAge(user1, user2));
console.log(User.showAge(user1, user3));
console.log(User.showAge(user4, user2));
console.log(User.showAge(user3, user4));

////////////////////////////////////////
///////////////////////////////////////////////
////////////////////////////////////////////////////////

const formNode = document.querySelector("form");
formNode.onsubmit = function (e) {
  e.preventDefault();
  const compilazione = document.querySelector("#testo");

  function dati() {
    const pet = document.querySelector("#testo1");
    const padrone = document.querySelector("#testo2");
    const specie = document.querySelector("#testo3");
    const razza = document.querySelector("#testo4");
    const datiUtenti = pet.value + padrone.value + specie.value + razza.value;
    console.log(datiUtenti);
  }

  class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }
    static sameOwner(owner1, owner2) {
      return owner1.ownerName === owner2.ownerName;
    }
  }
};
