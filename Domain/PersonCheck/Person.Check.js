//var PersonLogic= require('../Person/Person.Logic')
var PersonAgeLogic= require('../PersonAge/Person.Age')

class PersonCheckLogic extends PersonAgeLogic{
    constructor(...args) {
    super(...args)
  }

  CheckNIK() {
  if (this.nik.length == 16){
    if (`19${this.nik.slice(10,12)}`>1970 && `19${this.nik.slice(10,12)}`<2000){
        var nikcek = `19${this.nik.slice(10,12)}-${this.nik.slice(8,10)}-${this.nik.slice(6,8)}`
        if (nikcek === this.bod){
            return "data nik valid dengan tanggal lahir, anda kelahiran tahun 19xx"
        } //data ok tuk tahun kelahiran dibawah 2000
        else {
            return "data nik tidak valid dengan tanggal lahir"
        } // data nok tuk tahun kelahiran dibawah 2000
    }
    else{
        var nikcek = `20${this.nik.slice(10,12)}-${this.nik.slice(8,10)}-${this.nik.slice(6,8)}`
        if (nikcek === this.bod){
            return "data nik valid dengan tanggal lahir, anda kelahiran tahun 20xx"
        }
        else {
            return "data nik tidak valid dengan tanggal lahir"
        } // data nok tuk tahun kelahiran diatas 2000
    } // cek tahun
  }//cek number digit nik
  else{
      return "data nik tidak tepat/kurang"
  }
       
     
  } // CheckNIK

}// class
module.exports = PersonCheckLogic;