class PersonLogic {
  constructor(name, nik, bod){
  this.name = name;
  this.nik =  nik;
  this.bod = bod;
  }
  getWeekType(){
          var day = new Date(this.bod).getDay()
          if (day > 0 && day < 6) {
            return `\n${this.name} lahir pada tipe minggu Weekday`
          } 
          else if(day === 0 || day === 6) {
            return `\n${this.name} lahir pada tipe minggu Weekend`  
          } 
          else {
            return `\nTanggal lahir ${this.name} bermasalah`
          }
        }

  getAge() {
          var diff = Date.now() - Date.parse(this.bod)
          var diffDate = new Date(diff)
          var age = Math.abs(diffDate.getUTCFullYear() - 1970)
          //return `Saat ini berumur ${age}`
          return age
  }

}
module.exports = PersonLogic;