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
        if (giaNelCarrello) {
            updateProductQuantity(product.name)
        } else { setAddedProducts([...addedProducts, { ...product, quantity: 1 }]) }


    }
    const removeFromCart = (productName) => {
        // Crea un nuovo array escludendo il prodotto con quel nome
        const nuovoCarrello = addedProducts.filter(p => p.name !== productName);

        // Aggiorna lo stato
        setAddedProducts(nuovoCarrello);
    };

    const updateProductQuantity = (pName) => {
        setAddedProducts(preCart =>
            preCart.map(item =>
                item.name === pName
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        )
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
                    <p key={i}>{item.name} che costa {item.price.toFixed(2)}€ e nel carrello è presente in quantità {item.quantity}
                        <button onClick={() => removeFromCart(item.name)}>Rimuovi dal carrello</button>
                    </p>
                ))}
            </section>
        </>
    )
}