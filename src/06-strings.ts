(()=>{
  let productTitle = 'My amazing product'
  productTitle = 'My amazing product changed'
  console.log('productTitle', productTitle);

  const productDescription = "I'm Jose Prendiz bla bla"
  console.log('productDescripcion', productDescription);

  let productPrize: number = 70

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    prices: ${productPrize}
  `
  console.log(summary);

})()
