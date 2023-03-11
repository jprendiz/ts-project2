(()=>{

  type Sizes = 'S' | 'M' | 'L' | 'XL'

  const myFunc = (a:number, b:number) => a + b
  console.log(myFunc(12,15));

  function createProductToJson(
    title:string,
    createdAt: Date,
    stock: number,
    size: Sizes
    )
    {
      return {
        title,
        createdAt,
        stock,
        size
      }
  }

  const producto1 = createProductToJson('P1', new Date(), 12, 'XL')
  console.log(producto1);
  console.log(producto1.title);
  console.log(producto1.stock);
  console.log(producto1.size);
  console.log(producto1.createdAt);

  const createProductToJsonV2 = (
    title:string,
    createdAt: Date,
    stock: number,
    size?: Sizes
    ) =>
    {
      return {
        title,
        createdAt,
        stock,
        size
      }
  }

  const producto2 = createProductToJsonV2('Prod3', new Date(), 34)
  console.log(producto2);

})()
