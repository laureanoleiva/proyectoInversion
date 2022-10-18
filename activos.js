//CREACION DE OBJETOS LITERALES

const acciones = [
    {
        id: 1,
        ticker: "AMZN",
        name: "Amazon",
        sector: "Tecnológico",
        price: 114,
        image: "./imagenes/amazon.png"
    },
    {
        
        id: 2,
        ticker: "APPL",
        name: "Apple",
        sector: "Tecnológico",
        price: 142,
        image: "./imagenes/apple.png"
    },
    {
        id: 3,
        ticker: "GOOGL",
        name: "Alphabet Inc.",
        sector: "Tecnológico",
        price: 100,
        image: "./imagenes/google.png"
    },
    /*{
        id: 4,
        ticker: "KO",
        name: "Coca-Cola Co.",
        sector: "Industrial",
        price: 56,
        image: "./imagenes/cocacola.png"
    },
    {
        id: 5,
        ticker: "V",
        name: "Visa Inc.",
        sector: "Tecnológico",
        price: 185,
        image: "./imagenes/visa.jpg"
    }*/
]


//CREACION DE OBJETOS CONSTRUCTORES

function Criptomonedas (id, ticker, name, price){
    this.id=id;
    this.ticker=ticker;
    this.name=name;
    this.price=price;
}

const crypto = [
    crypto1 = new Criptomonedas(1,"BTC","Bitcoin",20000),
    crypto2 = new Criptomonedas(2,"ETH","Ethereum",1300)
]