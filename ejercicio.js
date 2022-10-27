const arrayPizzas = [
	pizza1 = {
		id: 1,
		nombre: 'Pizza fugazzeta',
		ingredientes: ['cebolla', 'queso'],
		precio: 3000,
	},
	pizza2 = {
		id: 2,
		nombre: 'Pizza Calabresa',
		ingredientes: ['longaniza', 'muzzarela'],
		precio: 1600,
	},
	pizza3 = {
		id: 3,
		nombre: 'Pizza napolitana',
		ingredientes: ['muzzarela', 'tomate'],
		precio: 1250,
	},
	pizza4 = {
		id: 4,
		nombre: 'Pizza Muzzarela',
		ingredientes: ['muzzarela', 'oregano'],
		precio: 500,
	},
	pizza5 = {
		id: 5,
		nombre: 'Pizza Jamon y Morron',
		ingredientes: ['muzzarela', 'jamon', 'morron'],
		precio: 1450,
    },
    pizza6 = {
		id: 6,
		nombre: 'Pizza Jamon y Tomate',
		ingredientes: ['muzzarela', 'jamon', 'Tomate'],
		precio: 900,
	},
];

//a)

/* const idImpar = arrayPizzas.filter((pizza) => pizza.id % 2 !== 0);
console.log('Pizzas con id impar: ', idImpar); */

arrayPizzas.forEach((pizza) => {
	pizza.id %2 !==0 && console.log(`Pizzas con id impar con forEach', ${pizza.nombre}`);
});

//b)

const pizzaMenor600 = arrayPizzas.some((pizza) => pizza.precio < 600);
console.log('Hay alguna pizza menor a $600?:', pizzaMenor600 ? 'si, hay una pizza menor a $600' : 'no, no hay una pizza menor a $600');

//c)

arrayPizzas.map((pizza) => console.log(`Pizza ${ pizza.nombre } tiene un valor de: $${ pizza.precio }`));

//d)

arrayPizzas.forEach((pizza) => {
    console.log(`Ingredientes de la pizza, ${pizza.nombre}:`);
    pizza.ingredientes.forEach((ingrediente) => console.log(ingrediente));
});