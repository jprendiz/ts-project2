(()=>{

  const login = (data: {email: string, password: string}) =>{
    console.log(data);
  }

  //login('jprendiz@gmail.com', '12345')

  login({
    email: 'jprendiz@gmail.com',
    password: '12345'
  })

  type Sizes = 'S' | 'M' | 'L' | 'XL'

  const products: any[]= []

  const addProduct = (data: {
    title:string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data)
  }

  addProduct({
    title: 'Pro1',
    createdAt: new Date(1975, 12,20),
    stock: 12
    })
    console.log(products);

    addProduct({
      title: 'Pro1',
      createdAt: new Date(1975, 12,20),
      stock: 12,
      size: 'L'
      })
      console.log(products);

})()
