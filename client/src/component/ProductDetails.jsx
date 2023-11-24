import { useEffect, useState } from "react"
import { GetProductByID } from "../apiRequest/apiRequest"
import { useParams } from "react-router-dom"

const ProductDetails = () => {
    const [productID, setProductID] = useState('')
    const [product, setProduct] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        setProductID(id)
    }, [id])

    useEffect(() => {
        window.scrollTo(0, 0) // for scrolling to top


        GetProductByID(productID).then((data) => {
            setProduct(data)
        }).catch((err) => {
            console.log(err)
        })

    }, [productID])

    const add2Cart = (id) => {
        console.log("Added to cart", id);
    }

    const editProduct = (id) => {
        console.log("Edit product", id);
    }

    if (!product) {
        return <p className="display-3 text-center">Loading...</p>
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-12">
                    <img src={product.img} alt={product.name} height="500" />
                    <h1 className="display-3">{product.name}</h1>
                    <p className="lead">Price: ${product.price}</p>
                    <p className="lead">SKU: {product.sku}</p>
                    <p className="lead">{product.description}</p>
                    <button className="btn btn-primary" onClick={() => { add2Cart(productID) }}>Add to Cart</button>
                    <button className="btn btn-info ms-3" onClick={() => { editProduct(productID) }}>Edit this Product</button>

                </div>
            </div>
        </div>
    )
}

export default ProductDetails