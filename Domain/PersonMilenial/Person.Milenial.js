var PersonLogic= require('../Person/Person.Logic')

class PersonMilenialLogic extends PersonLogic{
    constructor(...args) {
    super(...args)
  }
  
personByAge () {
        if(super.getAge() < 20) {
          return "Generasi Z"
        } 
        else if (super.getAge() >= 20 || super.getAge() < 30) {
          return "Milenial Muda"
        } 
        else if (super.getAge() >= 30 || super.getAge() < 40) {
          return "Milenial Tua"
        } 
        else 
        {
          return "Baby Boomer"
        }
}
}
module.exports = PersonMilenialLogic;