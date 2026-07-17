const score:  Array <number>=[]
const names: Array<string>=[]

function identityOne(val: boolean | number): boolean | number{
  return val 
}

function identityTwo(val: any): any{
  return val 
}

function identityThree<Type>(val: Type): Type{
  return val
}

identityThree('3')

function identityFour<T>(val:T):T{
  return val
}

interface Bottle{
  brand: string,
  type: number
}

const parth2: Bottle ={brand: 'mb', type: 4}

identityFour(parth2)


function getSearchProducts<T>(products: T[]): T{
  //do some database operations
  const myIndex = 3

  return products[3]!
}

const getMoreSearchProducts = <T,>(products: T[]): T =>{
  const myIndex = 4
  return products[myIndex]!

}
// const getMoreSearchProducts = (products: number[]): number =>{
//   const myIndex = 4
//   return products[myIndex]!

// }