(()=>{
  const calcTotal = (prices: number[]): string => {

    let total = 0

    prices.forEach(item =>{
      total += item
    })

    return total.toString()
  }

  const printTotal = (prices:number[]): void => {
    const rta = calcTotal(prices)
    console.log(`El total es ${rta}`);

  }
  const rta = calcTotal([1,2,1,5,2,4,3,8,1,6])
  console.log(rta);

  printTotal([1,2,1,5,2,4])

})()