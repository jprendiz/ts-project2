(()=>{
  let prices = [1,1,1,2,2,2,1,1,2,3,2]
  prices.push(777)
  console.log(prices);

  let mixed: (number | string | boolean | object)[] = ['hola', true]
  mixed.push(12)
  mixed.push('as')
  mixed.push(true)
  mixed.push({})
  mixed.push([])

  let numbers = [2,4,5]
  let numbers2 = numbers.map(item => item * 2)
  console.log(numbers2);

})()
