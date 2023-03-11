(()=>{
  let myDynamicVar: any

  myDynamicVar = 'Hola'
  myDynamicVar = 90
  const rta = (myDynamicVar as string).toLowerCase()
  console.log(rta);
  console.log(rta);

})()
