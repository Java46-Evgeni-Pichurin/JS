class Person {
  #id;
  #name;
  constructor(id, name) {
          this.#id = id;
          this.#name = name
  }
  getId() {
          return this.#id;
  }
  getName() {
          return this.#name
  }
  toString() {
          return `id: ${this.#id}; name: ${this.#name};`
  }
}
class Employee extends Person {
  #salary;
  constructor(id, name, salary) {
          super(id, name); //call the constructor of the class Person
          this.#salary = salary;
  }
  computeSalary() {
          return this.#salary
  }
  toString() {
          return super.toString() + ` salary: ${this.computeSalary()}`
  }
}
class Child extends Person {
  #kindergarten
  constructor(id, name, kindergarten) {
       super(id, name);
       this.#kindergarten = kindergarten   
  }
  getKindergarten() {
          return this.#kindergarten;
  }
  toString() {
          return `${super.toString()} kindergarten: ${this.#kindergarten}`
  }
}
class WageEmployee extends Employee {
  #hours
  #wage
  constructor(id, name, salary, hours, wage) {
          super(id, name, salary)
          this.#hours = hours;
          this.#wage = wage;
  }
  computeSalary() {
          return super.computeSalary() + this.#hours * this.#wage
  }
  

}

/****************************************************HW #17*****************************************************/
const persons = [
  new Child(100, 'Olya', 'Shalom'),
  new Child(101, 'Serega', "Boker"),
  new Child(102, 'Kolya', 'Shalom'),
  new Employee(103, 'Vasya', 1000),
  new WageEmployee(104, 'Tolya', 1000, 10, 100)
]
/***************************************************Task 1******************************************************/
function countOfPersonType(persons, type) {
  //return count of persons of the given type
    return persons.filter(el => el.constructor.name === type).length
}
console.log(`\nTask 1\n`);
console.log(`Number of persons of type "Child" is ${countOfPersonType(persons, `Child`)}`);
console.log(`Number of persons of type "Employee" is ${countOfPersonType(persons, `Employee`)}`);
console.log(`Number of persons of type "WageEmployee" is ${countOfPersonType(persons, `WageEmployee`)}`);

/***************************************************Task 2******************************************************/
function computeSalaryBudget(persons) {
  //returns total salary of all employee objects in the given array
    return persons.filter(el => el.computeSalary !== undefined).reduce((sum, cur) => sum += cur.computeSalary(), 0)
}
console.log(`\nTask 2\n`);
console.log(`Total salary of all employee objects in the given array is ${computeSalaryBudget(persons)}`);

/***************************************************Task 3******************************************************/
function countChildrenGindergarten(persons, kindergarten) {
  //returns number of children in the given kindergarten
    return persons.filter(el => el.getKindergarten !== undefined).filter(n => n.getKindergarten() === kindergarten).length
}
console.log(`\nTask 3\n`);
console.log(`Number of children in kindergarten "Shalom" is ${countChildrenGindergarten(persons, `Shalom`)}`);