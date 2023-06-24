exports.handler = async (event, context) => {
  const jsQuestions = [
    {
      question: `¿Qué devuelve la siguiente función?`,
      code: `function sayHi() {
        console.log(name);
        console.log(age);
        var name = "Lydia";
        let age = 21;
      }`,

      options: [
        "`Lydia` y `undefined`",
        "`Lydia` y `ReferenceError`",
        "`ReferenceError` y `21`",
        "undefined` y `ReferenceError",
      ],
      correctOption: 3,
      points: 10,
    },
    {
      question: `¿Qué devuelve la siguiente función?`,
      code: `for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
      }
      
      for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1);
      }`,

      options: ["0 1 2 y 0 1 2", "0 1 2 y 3 3 3", "3 3 3 y 0 1 2"],
      correctOption: 2,
      points: 10,
    },
    {
      question: `¿Qué devuelve la siguiente función?`,
      code: `const shape = {
        radius: 10,
        diameter() {
          return this.radius * 2;
        },
        perimeter: () => 2 * Math.PI * this.radius
      };
      
      shape.diameter();
      shape.perimeter();`,

      options: ["20 y 62.83185307179586", "20 y NaN", "20 y 63"],
      correctOption: 2,
      points: 10,
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
