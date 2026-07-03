function addTwo(num: number):number{
  return num+2
  // return 'hello'
}

function getUpper(val: string){
  return val.toUpperCase();
}

function signUpUser(name:string , email:string, password:string ){
}

let loginUser = (name:string, email:string, isPaid: boolean = false)=>{}

loginUser('h','h@h.com')


signUpUser('parth','abc@gmail.com','hi')

let myValue= addTwo(5);
getUpper('4')


// function getValue(myVal: number){
//   if(myVal>5){
//     return true
//   }
//   return '200 ok '
// }

const getHello = (s:string):string=>{
  return ''
}

// const heros = ['thor','spiderman', 'ironman']
const heros = [1,true,'thor']


heros.map((hero):string=>{
  return `hero is ${hero}`
})

function consoleError(errorMessage: string): void{
  console.log(errorMessage);
}

function handleError(errorMessage: string): never{
  throw new Error(errorMessage);
}

export{} 