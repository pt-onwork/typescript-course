abstract class TakePhoto{
  constructor(
    public cameraMode: string,
    public filter: string
  ){}

  abstract getSepia(): void

  getReelTime(): number{
    //some complex calculations
    return 8 
  }
}
// const parth = new TakePhoto('test', 'test') not valid with abstract classes 


class Instagram extends TakePhoto{
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ){
    super(cameraMode,filter)
  }

  getSepia():void{
    console.log('sepia');
    
  }

}
const parth = new Instagram('test', 'test', 4)
