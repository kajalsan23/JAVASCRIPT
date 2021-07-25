//  const items = [
//      {name:"Android", IDE="Android studio"},
//      {name:'Basic', ide='IDE'},
//      {name:"Cobol",IDE="Eclipse"},
//      {name:"Database",IDE="SQL Server"}
//  ]

const items = [
    {name:"Android"},
    {name:"Basic"},
    {name:"Cobol"},
    {name:"Database",IDE="SQL Server"}
]

// const filtered = items.filter((item)=>{
//     return item.name
// })

// console.log(filtered);

// const mapitems = items.map((item)=>{
//     return item.name
// })
// console.log(mapitems);

const finder = items.find((item)=>{
    return item.name === 'Basic'
})
console.log(finder);

//  items.array.forEach(element => {
//      console.log(element.name)
//  });