var PersonLogic= require('../Person/Person.Logic')


class PersonAgeLogic extends PersonLogic{
    constructor(...args) {
    super(...args)
  }

  getAge() {
          var birthOfDate = Date.parse(this.bod)
          var now = Date.now()
          var diff = now - birthOfDate
          var diffDate = new Date(diff)
          var age = Math.abs(diffDate.getUTCFullYear() - 1970)
          return age
  }

  personByAge () {
        if(this.getAge() < 20) {
          return "Generasi Z"
        } 
        else if (this.getAge() >= 20 || this.getAge() < 30) {
          return "Milenial Muda"
        } 
        else if (this.getAge() >= 30 || this.getAge() < 40) {
          return "Milenial Tua"
        } 
        else 
        {
          return "Baby Boomer"
        }
  }

}
module.exports = PersonAgeLogic;