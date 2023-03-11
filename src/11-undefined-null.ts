(()=>{
  //   let myNumber: number
  //   let myString: string
  let myNull: null = null
  let myUndefined: undefined = undefined

  let myNumber: number | null = null
  myNumber = 12

  let myString: string | undefined = undefined
  myString = 'aass'

  function hi(name: string | null) {
    let hello = 'Hola '
    if (name) {
      hello += name
    } else {
      hello += 'nobody'
    }

    console.log(hello);
  }

  function hiV2(name:string | null) {
    let hello = 'Hola '
    hello += name?.toLocaleLowerCase() || 'nobody'
    console.log(hello);

  }

  hi('Jose')
  hi(null)

  hiV2('Andres')
  hiV2(null)

})()
