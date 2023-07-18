function index(array, n){
    n < array.length ? array[n]**n : -1
  }
  
  function method1(array, n){
      return array[n]**n || -1
  }
  
  console.log(method1([1,2,3,4], 2))