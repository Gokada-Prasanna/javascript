function arithmetic(a, b, operator){
    switch(operator){
        case "add":
        return a+b
        case "subtract":
        return a-b
        case "multiply":
        return a*b 
        case "divide":
            return (a/b)
    }
  }

  const method1 = (a,b,operator) => ({
    'add':a+b,
    'subtract':a-b,
    'multiply':a*b,
    'divide':a/b 
  }[operator])

  console.log(method1(5,2,"divide"))