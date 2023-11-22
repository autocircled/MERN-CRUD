import { useEffect, useState } from "react"
import { GetAllProducts } from "../apiRequest/apiRequest"
import { Link } from "react-router-dom"

const ProductList = () => {
    const [products, setProducts] = useState([])


    useEffect(() => {
        GetAllProducts().then((data) => {
            setProducts(data)
            console.log(data)
        })
    }, [])
    if (products.length === 0) {
        return <p className="display-3 text-center">Loading...</p>
    }

    const add2Cart = (id) => {
        console.log(id)
    }
    return (
        <section className="product-list">
            <div className="container">
                <div className="row">
                    {products.map((product, index) => {
                        return (
                            <div key={index.toString()} className="col-md-4">
                                <div className="card">
                                    <img
                                        src={product.img}
                                        className="card-img-top"
                                        alt="..."
                                    />
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
                                        <button className="btn btn-warning" onClick={() => { add2Cart(product._id) }}>Add to Cart</button>
                                        <Link className="btn btn-primary ms-3" to={`/product/${product._id}`}>Details</Link>
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
