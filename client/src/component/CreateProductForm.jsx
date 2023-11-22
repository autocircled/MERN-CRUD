import { useState } from "react"
import { CreateProduct } from "../apiRequest/apiRequest"

const CreateProductForm = () => {
    const [data, setData] = useState({
        "name": "",
        "sku": "",
        "description": "",
        "price": '',
        "img": "",
        "qty": ''
    })

    const submitHandler = (e) => {
        e.preventDefault()

        CreateProduct(data).then((res) => {
            console.log(res)
            if (res) {
                setData({
                    "name": "",
                    "sku": "",
                    "description": "",
                    "price": '',
                    "img": "",
                    "qty": ''
                })
            }
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="container">
            <h1>Create Product</h1>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" onChange={(e) => setData({ ...data, name: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" onChange={(e) => setData({ ...data, price: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="sku" className="form-label">SKU</label>
                    <input type="text" className="form-control" id="sku" onChange={(e) => setData({ ...data, sku: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="description" onChange={(e) => setData({ ...data, description: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="img" className="form-label">Image</label>
                    <input type="text" className="form-control" id="img" onChange={(e) => setData({ ...data, img: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="qty" className="form-label">Quantity</label>
                    <input type="number" className="form-control" id="qty" onChange={(e) => setData({ ...data, qty: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default CreateProductForm
