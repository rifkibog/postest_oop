class PersonLogic {
  constructor(name, nik, bod){
  this.name = name;
  this.nik =  nik;
  this.bod = bod;
  }
  getWeekType(){
          var day = new Date(this.bod).getDay()
          if (day > 0 && day < 6) {
            return "Weekday" 
          } 
          else if(day === 0 || day === 6) {
            return "Weekend"      
          } 
          else {
            return "Birth of date not valid"  
          }
        }
}
module.exports = PersonLogic;