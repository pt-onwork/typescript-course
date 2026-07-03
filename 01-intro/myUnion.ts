let score: number | string = 33;

type User={
  name: string
  id: number
}
type Admin={
  username: string
  id: number
}

let parth: User | Admin ={
  name:'parth',
  id:2
}

parth = {
  username: 'parth',
  id:4
}

// function getDbId(id: number | string ){
//   console.log(`Db id is ${id}`);
// }

// getDbId(3)
// getDbId('hi')
function getDbId(id: number | string ){
  if(typeof id === 'string'){
    id.toLowerCase();
  }
}

//array

const data: (number | string)[] = [1,2,3,'4']

let seatAllotment: 'aisle' | 'middle' | 'window'
seatAllotment = 'aisle2'