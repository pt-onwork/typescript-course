class User {

  protected _courseCount = 1
  private readonly city: string = "noida"
  constructor(
    public email: string, 
    public name: string,
    // private userId: string 
  ) {
  }

  get getAppleEmail(): string{
    return `apple${this.email }`
  }

  get courseCount(): number{
    return this._courseCount
  }

  set courseCount(courseNumber){
    if(courseNumber<=1){
      throw new Error('Course count should be more than 1')
    }
    this._courseCount = courseNumber
  }

  private deleteToken(){
    console.log('token delted')
  }
}

class SubUser extends User{
  isFamily: boolean = true
  changeCourseCount(){
    this._courseCount = 4
  }
}


// class User {
//   public email: string
//   #name: string
//   private readonly city: string = "noida"
//   constructor(email: string,name: string){
//     this.email = email;
//     this.name = name 
//     this.city
//   }
// }

const parth = new User('p@p.com', 'parth')
