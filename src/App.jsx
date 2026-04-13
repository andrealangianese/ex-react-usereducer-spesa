export default function app() {
    const products = [
        { name: 'Mela', price: 0.5 },
        { name: 'Pane', price: 1.2 },
        { name: 'Latte', price: 1.0 },
        { name: 'Pasta', price: 0.7 },
    ];
    return (
        <>
            <h2>miei prodotti</h2>
            <ul>
                {products.map((product, i) => (
                    <li key={i}>{product.name} costa {product.price}</li>
                ))}
            </ul>
        </>
    )
}