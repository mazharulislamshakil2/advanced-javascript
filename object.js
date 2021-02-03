

const students = [
    {id : 21 , name:'rohim' },
    {id:12 , name:'kuddus' },
    {id:16 , name : 'rohoman' }
];
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger =students.filter(s => s.id>20);
const biggerOne =students.find(s => s.id>20);
console.log(biggerOne);