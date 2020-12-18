const prompt = require('prompt-sync')();
var PersonAgeLogic= require('./Domain/PersonAge/Person.Age')
var PersonCheckLogic= require('./Domain/PersonCheck/Person.Check')

function ask(){
var name = prompt ('Masukkan namamu: ')
var nik = prompt ('Masukkan 16 digit nik: ')
var bod = prompt ('Masukkan 8 digit tanggal lahir seperti contoh sbb yyyy-mm-dd: ')
var person = new PersonAgeLogic(name, nik, bod);
console.log(person.getWeekType())
console.log(`Saat ini berumur${person.getAge()}`)
console.log(person.personByAge())
}

ask();
