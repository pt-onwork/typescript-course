// const user: (string | number)[]=[1,'parth',2]
let user: [string,number,boolean];
user = ['parth',2,true]
let rgb: [number,number, number] = [255,255,255]

type user = [number, string]

const newUser: user = [112,'abc@gmail.com']

newUser[1]='abd@google.com'

newUser.push(true)