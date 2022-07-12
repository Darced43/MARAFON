const list = [
    {
    id: 1,
    name: 'buy bober',
    status: 'TODO',
    priority: 'high',
    },
    
    {
    id: 2,
    name: 'fix vdkanal',
    status: 'Completed',
    priority: 'low',
    },
]

// list.forEach(list => console.log(list.priority))


function priority(){
console.log("priority:");
list.forEach(function(list){
    console.log(list.priority)
})
}

// priority();

// const newList = list.map(list => list.id*100)
// console.log(newList)

// let newList = [];

// for(i=0; i < list.length; i++) {
//     if( list[i].id <= 2){
//         newList.push(list[i])
//     }
// }

// const newList = list.filter(list => list.id > 0)
//     console.log(newList)

// const newList = list.reduce((total, sum) => {
//     return total + sum.id
// }, 0)

// const TODO = list.filter(stat => list.status === "TODO")
// console.log(TODO);
