var PersonLogic= require('../Person/Person.Logic')

class PersonCheckLogic extends PersonLogic{
    constructor(...args) {
    super(...args)
  }

  CheckNIK() {
  if (this.nik.length = 16){
    if (this.nik.slice(0,4)>1970 && this.nik.slice(0,4)<2000){
        var nikcek1 = `19${this.nik.slice(10,12)}-${this.nik.slice(8,10)}-${this.nik.slice(6,8)}`
        if (nikcek1 == this.nik.slice(0,4)){
            return "data valid"
        } //data ok tuk tahun kelahiran dibawah 2000
        else {
            return "data not valid"
        } // data nok tuk tahun kelahiran dibawah 2000
    }
    else{
        var nikcek2 = `20${this.nik.slice(10,12)}-${this.nik.slice(8,10)}-${this.nik.slice(6,8)}`
        if (nikcek2 == this.nik.slice(0,4)){
            return "data valid"
        }
        else {
            return "data not valid"
        } // data nok tuk tahun kelahiran diatas 2000
    } // cek tahun
  }//cek number digit nik
  else{
      return "data nok"
  }
       
     
  } // CheckNIK

}// class
module.exports = PersonCheckLogic;