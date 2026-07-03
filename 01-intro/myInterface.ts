interface User {
  readonly debId: number,
  email: string,
  userId : number,
  googleId?: string,
  // startTrial: ()=> string
  startTrial(): string,
  getCoupon(couponname:string, num : number): number
}

interface User {
  githubToken: string
}//add new field and updating it 

interface Admin extends User {
  role: 'admin' | 'ta' | 'learner'

}

const parth : Admin = {debId: 22, email: 'p@p.com', userId: 2211, startTrial : ()=>{
  return 'parth'
}, getCoupon:(name: 'parth', off: 2)=>{
  return 112
}, githubToken:'parthtomar', role: 'admin'}
// parth.email= 't@t.com'
// parth.debId = 223