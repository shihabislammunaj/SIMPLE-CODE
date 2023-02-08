// const numbers=[45,25,65,50,70 ];

// for(let i =0; i< numbers.length;i++){
//   const number =numbers[i];
//   console.log(number);
// }
// for(const number of numbers){
  // console.log(number);
// }
// const products=[
//  {id:1,name:"xiami phone one night",price:19000},
//  {id:2,name:"iphone",price:19000},
//  {id:3,name:"mac book air",price:119000},
//  {id:4,name:"lenovo yoga laptop 2025",price:19000},
//  {id:5,name:"Dell inspiron laptop",price:19000},
//  {id:6,name:"samsung phone note 7",price:19000},
//  {id:7,name:"Nokia old age phone gone",price:19000},
//  {id:8,name:"pnode noe",price:19000},
//  ];
//  for(const product of products){
//   console.log(product)
//  }
const products=[
 {id:1,name:"xiami Phone one night",price:19000},
 {id:2,name:"iphone",price:19000},
 {id:3,name:"mac book air",price:119000},
 {id:4,name:"lenovo yoga laptop 2025",price:19000},
 {id:5,name:"Dell inspiron laptop",price:19000},
 {id:5,name:"Dell lsd laptop",price:19000},
 {id:6,name:"samsung phone note 7",price:19000},
 {id:7,name:"Nokia old age Phone gone",price:19000},
 {id:8,name:"Pnode noe",price:19000}
];
//  for(const product of products){
//   console.log(product);
//  }

// function matchedroducts (products,search){
//   const matched =[];
//   for(const product of products){
//     if(product.name.toLowerCase().includes(search.toLowerCase())){
//       matched.push(product);
//     }
//     console.log(product.name.includes(search));
//   }
//   return matched;
// }
// const result =matchedroducts(products,"laptop")
// console.log(result);
 

// sfhsyf
const prodects=[
  {id:1,name:"xiami Phone one night",price:19000},
  {id:2,name:"iphone",price:19000},
  {id:3,name:"mac book air",price:119000},
  {id:4,name:"lenovo yoga laptop 2025",price:19000},
  {id:5,name:"Dell inspiron laptop",price:19000},
  {id:5,name:"Dell lsd laptop",price:19000},
  {id:6,name:"samsung phone note 7",price:19000},
  {id:7,name:"Nokia old age Phone gone",price:19000},
  {id:8,name:"Pnode noe",price:19000}
]
// for(const product of prodects){
//   console.log(prodects);
// }

function matchedroducts (products,search){
  const matched =[];
  for(const product of products){
    if(product.name.toLowerCase().includes(search.toLowerCase())){
      matched.push(product);
    }
    console.log(product.name.includes(search));
  }
  return matched;
}
const result =matchedroducts(products,"laptop")
console.log(result);
