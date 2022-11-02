//CREACION DE OBJETOS LITERALES

const acciones = [
    {
        id: 1,
        ticker: "AMZN",
        name: "Amazon",
        sector: "Tecnológico",
        price: 114,
        image: "amazon.png",
        cantidad: 1
    },
    {

        id: 2,
        ticker: "APPL",
        name: "Apple",
        sector: "Tecnológico",
        price: 142,
        image: "apple.png",
        cantidad: 1
    },
    {
        id: 3,
        ticker: "GOOGL",
        name: "Alphabet Inc.",
        sector: "Tecnológico",
        price: 100,
        image: "google.png",
        cantidad: 1
    },
    {
        id: 4,
        ticker: "KO",
        name: "Coca-Cola Co.",
        sector: "Industrial",
        price: 56,
        image: "cocacola.png",
        cantidad: 1
    },
    {
        id: 5,
        ticker: "V",
        name: "Visa Inc.",
        sector: "Tecnológico",
        price: 185,
        image: "visa.jpg",
        cantidad: 1
    }
]


//CREACION DE OBJETOS CONSTRUCTORES

function Criptomonedas(image, id, ticker, name, price, cantidad) {
    this.image = image;
    this.id = id;
    this.ticker = ticker;
    this.name = name;
    this.price = price;
    this.cantidad = cantidad
}

const crypto = [
    crypto01 = new Criptomonedas("btc.png", 1, "BTC", "Bitcoin", 20000, 1),
    crypto02 = new Criptomonedas("ethereum.png", 2, "ETH", "Ethereum", 1300, 1),
    crypto03 = new Criptomonedas("solana.png", 3, "SOL", "Solana", 145, 1),
    crypto04 = new Criptomonedas("bnb.png", 4, "BNB", "Binance Coin", 405, 1)
]