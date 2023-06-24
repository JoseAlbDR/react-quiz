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
