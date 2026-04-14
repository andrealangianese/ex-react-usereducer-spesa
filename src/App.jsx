import { useState } from "react"

export default function app() {

    const [addedProducts, setAddedProducts] = useState([])

    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ]

    const addToCart = (product) => {
        const giaNelCarrello = addedProducts.find(p => p.name === product.name)

        // se non ce lo aggiungiamo
        if (!giaNelCarrello) {
            setAddedProducts([...addedProducts, { ...product, quantity: 1 }])
        }
    }
    return (
        <>
            <h2>miei prodotti</h2>
            <ul>
                {products.map((product, i) => (
                    <>
                        <li key={i}>{product.name} costa {product.price.toFixed(2)}</li>
                        <button onClick={() => addToCart(product)}>aggiungi al carrello</button>
                    </>
                ))}
            </ul>
            <h3>questo è il carrello</h3>
            <section>
                {addedProducts.map((item, i) => (
                    <p key={i}>{item.name} che costa {item.price.toFixed(2)}€ e nel carrello è presente in quantità {item.quantity}</p>
                ))}
            </section>
        </>
    )
}