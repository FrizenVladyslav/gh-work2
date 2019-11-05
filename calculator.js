const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function handleError( message) {
  console.log('Error:', message)
  process.exit()
}

rl.question('Input first number: ', firstNumber => {
  if (isNaN(firstNumber)) {
    handleError('Not valid first number')
  } 

  rl.question('Input second number: ', secondNumber => {
    if (isNaN(secondNumber)) {
      handleError('Not valid second number')
    } 

    rl.question('Input operator( + or - or / or * ): ', operator => {
      let res = 0

      switch (operator) {
        case '+':
          res = +firstNumber + +secondNumber
          break
        case '-':
          res = firstNumber - secondNumber
          break
        case '/':
          res = firstNumber / secondNumber
          break
        case '*':
          res = firstNumber * secondNumber
          break
        default:
          handleError('Not valid operator')
      }
      console.log('Result =', res)

      rl.close();
    })
  })
});
