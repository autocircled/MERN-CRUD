import { useEffect, useState } from "react"
import { DeleteProduct, GetAllProducts } from "../apiRequest/apiRequest"
import { Link } from "react-router-dom"

const ProductList = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        GetAllProducts().then((data) => {
            setProducts(data)
        })
    }, [])

    const add2Cart = (id) => {
        console.log("Added to cart", id);
    }

    const deleteProduct = async (id) => {
        console.log("Delete product", id);
        await DeleteProduct(id).then((data) => {
            if (data) {
                setProducts(products.filter((product) => product._id !== id))
                console.log("Product deleted")
            }
        })
    }

    if (products.length === 0) {
        return <p className="display-3 text-center">Loading...</p>
    }

    return (
        <section className="product-list">
            <div className="container">
                <div className="row">
                    {products.map((product, index) => {
                        return (
                            <div key={index.toString()} className="col-md-4 mb-4">
                                <div className="card">
                                    <div className="thumb" style={{ height: '196px', overflow: 'hidden', backgroundImage: `url(${product.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                                    <div className="card-body">
                                        <p className="card-text">
                                            {product.name}
                                        </p>
                                        <p className="card-text">
                                            ${product.price}
                                        </p>
                                        <p className="card-text">
                                            SKU: {product.sku}
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <button className="btn btn-warning" onClick={() => { add2Cart(product._id) }}>Add Cart</button>
                                        <Link className="btn btn-primary ms-2" to={`/product/${product._id}`}>Details</Link>
                                        <button className="btn btn-danger ms-2" onClick={() => { deleteProduct(product._id) }}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ProductList
