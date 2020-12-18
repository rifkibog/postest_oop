const prompt = require('prompt-sync')();
var PersonLogic= require('./Domain/Person/Person.Logic')
var PersonAgeLogic= require('./Domain/PersonAge/Person.Age')

function ask(){
var name = prompt ('Masukkan namamu: ')
var nik = prompt ('Masukkan 16 digit nik: ')
var bod = prompt ('Masukkan 8 digit tanggal lahir seperti contoh sbb yyyy-mm-dd: ')
var person = new PersonLogic(name, nik, bod);

if (person.getWeekType() === 'Weekday' || person.getWeekType() === 'Weekend') 
    {console.log(`${person.name} lahir pada tipe minggu ${person.getWeekType()}`)
     var person = new PersonAgeLogic(name, nik, bod);
     console.log(`Saat ini berumur ${person.getAge()}`)
     console.log(`Merupakan seorang ${person.personByAge()}`)
    } 
else 
    {console.log(`Tanggal lahir ${person.name} bermasalah`)}
}


ask();
