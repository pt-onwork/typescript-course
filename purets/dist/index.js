class User {
    email;
    name;
    city = "noida";
    constructor(email, name) {
        this.email = email;
        this.name = name;
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
const parth = new User('p@p.com', 'parth');
parth.city;
export {};
//# sourceMappingURL=index.js.map