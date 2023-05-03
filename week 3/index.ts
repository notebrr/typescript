
class Person {
  name: string;
  age: number;
  gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

function populator(): Person[] {
    const people: Person[] = [];

    for (let i = 1; i < 11; i++) {
        const min = 1;
        const max = 115;
        const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
        const name = `Person ${i}`;
        const age = randomInt;
        const gender = Math.random() <= 0.5 ? "Male" : "Female"; 
    
        const person = new Person(name, age, gender);
        people.push(person);
    }
  
    return people;
  }

function createTable(people: Person[]): string {
    let table = "<table>"+
    "<tr><th>Name</th><th>Age</th><th>Gender</th></tr>";
   
  
    for (let i = 0; i < people.length; i++) {
      const person = people[i];
      table += `<tr><td>${person.name}</td><td>${person.age}</td><td>${person.gender}</td></tr>`;
    }
  
    table += "</table>";
  
    return table;
}

const btn: any = document.getElementById("root");

const rootElement: any = document.getElementById("root");
const people: Person[] = populator();
const table: string = createTable(people);

rootElement.innerHTML = table;

document.addEventListener("click", doSomething);
function doSomething(){
    
}

// create class with name,age and gender    

