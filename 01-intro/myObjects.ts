// const user = {
//   name: 'parth',
//   email:'abc@gmail.vom',
//   isActive: true
// }

// function createUser({name: string, isPaid: boolean}){
// }

// let newUser = {name: 'parth', isPaid: false, email:'anc.com'}
// createUser(newUser)

// function createCourse():{name: string, isPaid: boolean}{
//   return {name:'parth', isPaid : true}
// }

// type User = {
//   name: string,
//   email: string,
//   isActive: boolean 
// }

// function createUser(user:User): User{
//   return {
//     name:'',
//     email:'',
//     isActive: true
//   }
// }

// createUser({name:'parth', email: 'abc', isActive: true})

type User = {
  readonly _id: string 
  name: string
  email : string
  isActive : boolean 
  creditCard?: number
}

type cardNumber = {
  cardNumber : string 
}
type cardDate= {
  cardDate: string
}

type cardDetails = cardNumber &  cardDate & {
  cvv: number 
}


let myUser: User ={
  _id: '1234',
  name:'parth',
  email:'pp',
  isActive: false
}

myUser.email = 'abc';
myUser._id ='123'
export {}