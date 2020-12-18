var PersonLogic= require('../Person/Person.Logic')

class PersonAgeLogic extends PersonLogic{
    constructor(...args) {
    super(...args)
  }

  personByAge() {
        if(this.getAge() < 20) {
          return "Merupakan Seorang Generasi Z"
        } 
        else if (this.getAge() >= 20 && this.getAge() < 30) {
          return "Merupakan Seorang Milenial Muda"
        } 
        else if (this.getAge() >= 30 && this.getAge() < 40) {
          return "Merupakan Seorang Milenial Tua"
        } 
        else 
        {
          return "Baby Boomer"
        }
  }

}
module.exports = PersonAgeLogic;