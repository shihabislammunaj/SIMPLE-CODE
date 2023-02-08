const nayok ={
  name:" sakib khan",
  id:121,
  address:"movie cinema",
 isSingle:true,
 friends:['Apu','Raaz','salman','aamir'],
 movies:[{ name:'Node.1',year:2015,},
 {name:'king Khan',year:2010}],
 act:function(){
  console.log('acting like sakib khan')
 },
 car:{
  brand:'tesla',
  price:5000000,
  made:2025,
  manufacturer:{
    name:'Honda',
    ceo:'Munas',
    country:'Bngladesh'
  }
 }
}
// console.log(student.car);
console.log(nayok.act);
nayok.act();