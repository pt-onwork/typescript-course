class User {
  private readonly city: string = "noida"
  constructor(
    public email: string, 
    public name: string,
    // private userId: string 
  ) {
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
parth.city
