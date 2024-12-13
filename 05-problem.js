// 05. Create a function which will return fibonacci sequence till the given index.

function fibonacci(n) {
    let fib=[0,1]
    for (i = 2; i < n; i++) 
        fib.push(fib[i-1] + fib[i - 2])
  
    return fib
  }
  console.log(fibonacci(10)  )

//   output
//    [0, 1,  1,  2,  3,
//     5, 8, 13, 21, 34]  