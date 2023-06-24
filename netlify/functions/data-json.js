exports.handler = async (event, context) => {
  const jsQuestions = [
    {
      question: `What's the output?`,
      code: `function sayHi() {
        console.log(name);
        console.log(age);
        var name = "Lydia";
        let age = 21;
      }`,

      options: [
        "Lydia and undefined",
        "Lydia and ReferenceError",
        "ReferenceError and 21",
        "undefined and ReferenceError",
      ],
      correctOption: 3,
      points: 10,
      answer: `Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined.

      Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a ReferenceError.`,
    },
    {
      question: `What's the output?`,
      code: `for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
      }
      
      for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
      }`,

      options: ["0 1 2 and 0 1 2", "0 1 2 and 3 3 3", "3 3 3 and 0 1 2"],
      correctOption: 2,
      points: 10,
      answer: `Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. Since the variable i in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example.

      In the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop.`,
    },
    {
      question: `What's the output?`,
      code: `const shape = {
        radius: 10,
        diameter() {
          return this.radius * 2;
        },
        perimeter: () => 2 * Math.PI * this.radius
      };
      
      shape.diameter();
      shape.perimeter();`,

      options: [
        "20 and 62.83185307179586",
        "20 and NaN",
        "20 and 63",
        "NaN and 63",
      ],
      correctOption: 2,
      points: 10,
      answer: `Note that the value of diameter is a regular function, whereas the value of perimeter is an arrow function.

      With arrow functions, the this keyword refers to its current surrounding scope, unlike regular functions! This means that when we call perimeter, it doesn't refer to the shape object, but to its surrounding scope (window for example).
      
      There is no value radius on that object, which returns NaN.`,
    },
    {
      question: `Which one is true?`,
      code: `const bird = {
        size: "small"
      };
      
      const mouse = {
        name: "Mickey",
        small: true
      };`,

      options: [
        "mouse.bird.size is not valid",
        "mouse[bird.size] is not valid",
        "mouse[bird['size']] is not valid",
        "All of them are valid",
      ],
      correctOption: 0,
      points: 10,
      answer: `In JavaScript, all object keys are strings (unless it's a Symbol). Even though we might not type them as strings, they are always converted into strings under the hood.

      JavaScript interprets (or unboxes) statements. When we use bracket notation, it sees the first opening bracket [ and keeps going until it finds the closing bracket ]. Only then, it will evaluate the statement.
      
      mouse[bird.size]: First it evaluates bird.size, which is "small". mouse["small"] returns true
      
      However, with dot notation, this doesn't happen. mouse does not have a key called bird, which means that mouse.bird is undefined. Then, we ask for the size using dot notation: mouse.bird.size. Since mouse.bird is undefined, we're actually asking undefined.size. This isn't valid, and will throw an error similar to Cannot read property "size" of undefined.`,
    },
    {
      question: `What's the output?`,
      code: `let c = { greeting: "Hey!" };
      let d;
      
      d = c;
      c.greeting = "Hello";
      console.log(d.greeting);`,

      options: ["Hello", "undefined", "ReferenceError", "TypeError"],
      correctOption: 0,
      points: 10,
      answer: `In JavaScript, all objects interact by reference when setting them equal to each other.

      First, variable c holds a value to an object. Later, we assign d with the same reference that c has to the object.
      
      When you change one object, you change all of them.`,
    },
    {
      question: `What's the output?`,
      code: `+true;
      !'Lydia';`,
      options: ["1 and false", "false and NaN", "false and false"],
      correctOption: 0,
      points: 10,
      answer: `The unary plus tries to convert an operand to a number. true is 1, and false is 0.

      The string 'Lydia' is a truthy value. What we're actually asking, is "is this truthy value falsy?". This returns false.`,
    },
    {
      question: ``,
      code: ``,
      options: ["", "", "", ""],
      correctOption: 0,
      points: 10,
      answer: ``,
    },
  ];

  const response = JSON.stringify(jsQuestions);
  return {
    statusCode: 200,
    body: response,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  };
};
