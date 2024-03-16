const produtos =[
{
    id:1,
    name:'Spicy Burguer',
    descricao:'Hambuguer de 250g, queijo, tomate, alface e cebola',
    preco:24.90,
    foto:"https://jornadajs-food.s3.amazonaws.com/spicy.png"
},
{
    id:2,
    name:'Sanduba',
    descricao:'Sanduiche natural, alface, tomate, pão integral e orégano',
    preco:22.00,
    foto:"https://jornadajs-food.s3.amazonaws.com/sanduba.png"
},
{
    id:3,
    name:'Super Buguer',
    descricao:'Hambuer de 300g, molho, queijo, tomate, alface e cebola',
    preco:29.90,
    foto:"https://jornadajs-food.s3.amazonaws.com/super.png"
},
{
    id:4,
    name:'Mega',
    descricao:'Hambuguer de 300g, maionese, tomate, alface, queijo e cebola',
    preco:34.90,
    foto:"https://jornadajs-food.s3.amazonaws.com/mega.png"
},
{
    id:5,
    name:'Penne',
    descricao:'Penne ao molho especial de tomates rústicos, ervas aromáticas e cebola',
    preco:27.00,
    foto:"https://jornadajs-food.s3.amazonaws.com/penne.png"
},
{
    id:6,
    name:'Fritas',
    descricao:'Batata frita crocante com molho especial de maionese de casa',
    preco:27.00,
    foto:"https://jornadajs-food.s3.amazonaws.com/fritas.png"
},
{
    id:7,
    name:'Coca-cola Lata',
    descricao:'Coca-cola em lata de 300ml, trincando de gelada para você',
    preco:27.00,
    foto:"https://jornadajs-food.s3.amazonaws.com/coca.png"
}
]


const pedidos = [
    { id_pedido: 541561, dt: "14/01/2024", total: 150.3 },
    { id_pedido: 841562, dt: "15/01/2024", total: 95 },
    { id_pedido: 887453, dt: "18/01/2024", total: 119.9 },
    { id_pedido: 995411, dt: "19/01/2024", total: 37.2 },
    { id_pedido: 985852, dt: "14/01/2024", total: 49.9 },
    { id_pedido: 985852, dt: "14/01/2024", total: 78.8 },
    { id_pedido: 998524, dt: "14/01/2024", total: 50.0 },
  ];

const carrinho =[
{
    id:1,
    nome:'X-Tudo',
    preco:20.00,
    foto:'https://jornadajs-food.s3.amazonaws.com/spicy.png',
    qtd:2
},
{
    id:2,
    nome:'Sanduba',
    preco:15.00,
    foto:'https://jornadajs-food.s3.amazonaws.com/sanduba.png',
    qtd:1
},
]
  export {produtos, pedidos, carrinho}