interface Person {
  firstName: string;
  age: number;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + ", I am " + person.age + 'years old.';
}

let user = { firstName: "liu", age: 18 };

console.log(greeter(user));
