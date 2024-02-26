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
let petNameField = document.getElementById("testo1");
let ownerNameField = document.getElementById("testo2");
let speciesField = document.getElementById("testo3");
let breedField = document.getElementById("testo4");

let petList = document.getElementById("lista");
let addButton = document.getElementById("add");

let pets = [];

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  checkSameOwner(anotherPet) {
    if (this.ownerName === anotherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

const renderList = function () {
  petList.innerHTML = ""; // <-- svuota la lista all'inizio
  pets.forEach((pet) => {
    const newLi = document.createElement("li");
    newLi.innerText =
      "Nome animale: " +
      pet.petName +
      " Proprietario: " +
      pet.ownerName +
      " Species: " +
      pet.speciesField +
      " Breed: " +
      pet.breed;
    petList.appendChild(newLi);
  });
};

addButton.onclick = function () {
  let newPet = new Pet(petNameField.value, ownerNameField.value, speciesField.value, breedField.value);
  pets.push(newPet);
  renderList();
  petNameField.value = "";
  ownerNameField.value = "";
  speciesField.value = "";
  breedField.value = "";
};

/*
const petArr = [];

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  static sameOwner(pet1, pet2) {
    if (pet1.ownerName === pet2.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(Pet.sameOwner(petArr[1], petArr[2]));
console.log(Pet.sameOwner(petArr[2], petArr[3]));

const formNode = document.querySelector("#petForm");

formNode.onclick = function (e) {
  e.preventDefault();

  const petName = document.getElementById("testo1").value;
  const ownerName = document.getElementById("testo2").value;
  const species = document.getElementById("testo3").value;
  const breed = document.getElementById("testo4").value;
  const pet = new Pet(petName, ownerName, species, breed);
  petArr.push(pet);
  const lista = document.getElementById("lista");
  const li = document.createElement("li");
  li.innerText =
    "Pet name:" +
    " " +
    pet.petName +
    "Owner name:" +
    " " +
    pet.ownerName +
    "Species:" +
    " " +
    pet.species +
    "Breed:" +
    " " +
    pet.breed;

  lista.appendChild(li);
  petName.value = "";
  ownerName.value = "";
};
*/
