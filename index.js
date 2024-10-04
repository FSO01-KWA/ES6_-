// 1
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // 출력: 3, 3, 3
  }
  
  for (let j = 0; j < 3; j++) {
    setTimeout(() => console.log(j), 100); // 출력: 0, 1, 2
  }
  
  // 2
  const person = {
    name: 'Alice',
    greet: function() {
      console.log(`Hello, ${this.name}!`); // 출력: Hello, Alice!
    }
  };
  
  person.greet();
  
  // 3
  const day = 'Monday';
  const weather = 'sunny';
  console.log(`Today is ${day} and the weather is ${weather}.`); // 출력: Today is Monday and the weather is sunny.
  
  // 4
  const user = {
    name: 'Bob',
    age: 25,
    address: {
      city: 'New York',
      zip: '10001',
    },
  };
  const { name, age, address: { city } } = user;
  console.log(name, age, city); // 출력: Bob 25 New York
  
  // 5
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const mergedArray = [...arr1, ...arr2];
  console.log(mergedArray); // 출력: [1, 2, 3, 4, 5, 6]
  
  // 6
  class Animal {
    speak() {
      console.log('Animal sound');
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log('Woof!');
    }
  }
  
  const dog = new Dog();
  dog.speak(); // 출력: Woof!
  
  // 7
  function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
  }
  
  for (const num of numberGenerator()) {
    console.log(num); // 출력: 1 2 3 4 5
  }
  
  // 8
  const id = Symbol('id');
  const userWithSymbol = {
    name: 'Eve',
    [id]: 12345,
  };
  
  console.log(userWithSymbol[id]); // 출력: 12345
  
  // 9
  const validator = {
    set(obj, prop, value) {
      if (typeof value !== 'number') {
        throw new TypeError('The value must be a number');
      }
      obj[prop] = value;
      return true;
    },
  };
  
  const numbers = new Proxy({}, validator);
  numbers.age = 30; // 정상 작동
  
  // 10
  async function fetchData() {
    try {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  
  // 11
  const numbersArray = [1, 3, 5, 7, 9];
  console.log(numbersArray.includes(7)); // 출력: true
  
  // 12
  const person2 = { name: 'Eve', age: 28, city: 'Paris' };
  const { name: personName, ...details } = person2;
  console.log(details); // 출력: { age: 28, city: 'Paris' }
  
  // 13
  const entries = [
    ['fruit', 'apple'],
    ['color', 'red'],
  ];
  const objFromEntries = Object.fromEntries(entries);
  console.log(objFromEntries); // 출력: { fruit: 'apple', color: 'red' }
  
  // 14
  let value = null;
  value = value ?? 'default';
  console.log(value); // 출력: default
  
  // 15
  const order = {
    id: 1,
    // customer: { name: 'Frank' },
  };
  console.log(order?.customer?.name); // 출력: undefined
  
  // 16
  import('./math.js')
    .then((module) => {
      console.log(module.add(2, 3)); // 5
    })
    .catch((error) => {
      console.error('모듈 로드 실패', error);
    });
  
  // 17
  const text = 'banana';
  const newText = text.replaceAll('a', 'o');
  console.log(newText); // 출력: bonono
  
  // 18
  const p1 = new Promise((resolve) => setTimeout(resolve, 300, '첫 번째'));
  const p2 = new Promise((resolve) => setTimeout(resolve, 200, '두 번째'));
  const p3 = new Promise((resolve) => setTimeout(resolve, 100, '세 번째'));
  
  Promise.any([p1, p2, p3]).then((value) => console.log(value)); // 출력: 세 번째
  
  // 19
  class Car {
    brand = 'Tesla';
    color = 'red';
  
    constructor(brand, color) {
      this.brand = brand;
      this.color = color;
    }
  }
  
  const myCar = new Car('Toyota', 'blue');
  console.log(myCar.brand, myCar.color); // 출력: Toyota blue
  
  // 20
  const letters = ['x', 'y', 'z'];
  console.log(letters.at(-1)); // 출력: z
  