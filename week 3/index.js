var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return Person;
}());
function populator() {
    var people = [];
    for (var i = 1; i < 11; i++) {
        var min = 1;
        var max = 115;
        var randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
        var name_1 = "Person ".concat(i);
        var age = randomInt;
        var gender = Math.random() <= 0.5 ? "Male" : "Female";
        var person = new Person(name_1, age, gender);
        people.push(person);
    }
    return people;
}
function createTable(people) {
    var table = "<table>" +
        "<tr><th>Name</th><th>Age</th><th>Gender</th></tr>";
    for (var i = 0; i < people.length; i++) {
        var person = people[i];
        table += "<tr><td>".concat(person.name, "</td><td>").concat(person.age, "</td><td>").concat(person.gender, "</td></tr>");
    }
    table += "</table>";
    return table;
}
var btn = document.getElementById("root");
var rootElement = document.getElementById("root");
var people = populator();
var table = createTable(people);
rootElement.innerHTML = table;
document.addEventListener("click", doSomething);
function doSomething() {
}
// create class with name,age and gender    
