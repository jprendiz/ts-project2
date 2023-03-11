(()=>{
  type UserID = string | number | boolean
  let userId: UserID

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);

    }
  }

  greeting(11, 'S')
  greeting(444, 'L')

  // Literal types
  type Sizes = 'S' | 'M' | 'L' | 'XL'
  let shirtSize: Sizes
  shirtSize = 'M'
  shirtSize = 'L'
  shirtSize = 'XL'
})()
