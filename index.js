let books = [
    {
        title: "Eloquent JavaScript: A Modern Introduction to Programming",
        price: 16.00,
        inventory: 5,
    },
    {
        title: "JavaScript & JQuery: Interactive Front-End Web Development",
        price: 10.50,
        inventory: 30,
    },
    {
        title: "JavaScript: The Good Parts",
        price: 25.00,
        inventory: 2,
    },
    {
        title: "JavaScript: The Definitive Guide",
        price: 60.00,
        inventory: 8,
    },
    {
        title: "You don\'t know JS",
        price: 18.95,
        inventory: 0,
    },
];

const reducer = (accumulator, item) => {
    console.log(accumulator, item)
    return accumulator +", " + item.title
//     console.log(accumulator, item);
//     let total = item.price * item.inventory;
//    return accumulator +=total;
}

let total = books.reduce(reducer, "").substring(2) //substring removes the initial coma and space
//let total = books.reduce(reducer, 0);