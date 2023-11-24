import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { MdAlternateEmail, MdOutlinePassword } from "react-icons/md";
import { Link } from 'react-router-dom';

const CreateProductForm = () => {
    const [validated, setValidated] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const handleChange = (event, name) => {
        const value = event.target.value;
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setValidated(true);
        alert(JSON.stringify(data, null, 4))
    };

    return (
        <section className='login-form py-5'>
            <h2 className='text-center mb-5'>Login</h2>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Container>
                    <Row className="mb-3 justify-content-center">
                        <Form.Group as={Col} md="4" controlId="email">
                            <InputGroup hasValidation>
                                <InputGroup.Text><MdAlternateEmail /></InputGroup.Text>
                                <Form.Control
                                    type="email"
                                    placeholder="Email address"
                                    aria-describedby="email"
                                    onChange={(event) => handleChange(event, 'email')}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Email address is required
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 justify-content-center">
                        <Form.Group as={Col} md="4" controlId="password">
                            <InputGroup hasValidation>
                                <InputGroup.Text><MdOutlinePassword /></InputGroup.Text>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    aria-describedby="password"
                                    onChange={(event) => handleChange(event, 'password')}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    Password is required
                                </Form.Control.Feedback>
                            </InputGroup>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3 justify-content-center">
                        <Form.Group as={Col} md="4" className='text-center'>
                            <Button type="submit">Login</Button>
                        </Form.Group>
                        <Form.Text className='text-center mt-3'>
                            Are you new here? <Link to="/register">Register</Link>
                        </Form.Text>
                    </Row>
                </Container>
            </Form>
        </section>
    );
}



// import { useEffect, useRef, useState } from "react"
// import { CreateProduct } from "../apiRequest/apiRequest"
// import { Container, Form, Row, Col } from 'react-bootstrap';

// const CreateProductForm = () => {
//     let nameInput, skuInput, descriptionInput, priceInput, imgInput, qtyInput = useRef();
//     const [validated, setValidated] = useState(false);
//     const [formdata, setFormdata] = useState({
//         "name": "",
//         "sku": "",
//         "description": "",
//         "price": '',
//         "img": "",
//         "qty": ''
//     })
//     const [error, setError] = useState({
//         "name": "",
//         "sku": "",
//         "description": "",
//         "price": '',
//         "img": "",
//         "qty": ''
//     })

//     const validateForm = () => {
//         const nameValue = nameInput.value
//         const skuValue = skuInput.value
//         const descriptionValue = descriptionInput.value
//         const priceValue = priceInput.value
//         const imgValue = imgInput.value
//         const qtyValue = qtyInput.value
//         let nameError, skuError, descriptionError, priceError, imgError, qtyError = "";

//         if (!nameValue) {
//             nameError = "Name is required";
//         }

//         if (!skuValue) {
//             skuError = "SKU is required";
//         }

//         if (!descriptionValue) {
//             descriptionError = "Description is required";
//         }

//         if (!priceValue) {
//             priceError = "Price is required";
//         }

//         if (!imgValue) {
//             imgError = "Image is required";
//         }

//         if (!qtyValue) {
//             qtyError = "Quantity is required";
//         }

//         setError({
//             "name": nameError,
//             "sku": skuError,
//             "description": descriptionError,
//             "price": priceError,
//             "img": imgError,
//             "qty": qtyError
//         })
//     }

//     const submitHandler = (e) => {
//         e.preventDefault()

//         setValidated(true);

//         console.log("Product created", formdata);

//         // CreateProduct(formdata).then((res) => {
//         //     if (res) {
//         //         setFormdata({
//         //             "name": "",
//         //             "sku": "",
//         //             "description": "",
//         //             "price": '',
//         //             "img": "",
//         //             "qty": ''
//         //         })
//         //     }
//         // }).catch((err) => {
//         //     console.log(err)
//         // })
//     }

//     const handleChange = (event) => {
//         const { name, value } = event.target
//         setFormdata({ ...formdata, [name]: value })
//     }

//     useEffect(() => {
//         console.log(formdata);
//     }, [formdata])

//     return (
//         <div className="container">
//             <h1>Create Product</h1>
//             <Form noValidate validated={validated} onSubmit={submitHandler}>
//                 <Container>
//                     <Row className="mb-3 justify-content-center">
//                         <Form.Group as={Col} md="12" controlId="name">
//                             <label htmlFor="name" className="form-label">Name</label>
//                             <input ref={nameInput} type="text" className="form-control" value={formdata.name} name="name" id="name" placeholder="Product Name" onChange={handleChange} />
//                         </Form.Group>
//                     </Row>
//                     <Row className="mb-3 justify-content-center">
//                         <Form.Group as={Col} md="12" controlId="price">
//                             <label htmlFor="price" className="form-label">Price</label>
//                             <input ref={priceInput} type="number" className="form-control" id="price" name="price" value={formdata.price} placeholder="Price" onChange={handleChange} />
//                         </Form.Group>
//                     </Row>
//                     <Row className="mb-3 justify-content-center">
//                         <Form.Group as={Col} md="12" controlId="sku">
//                             <label htmlFor="sku" className="form-label">SKU</label>
//                             <input ref={skuInput} type="text" className="form-control" id="sku" name="sku" value={formdata.sku} placeholder="SKU" onChange={handleChange} />
//                         </Form.Group>
//                     </Row>
//                     <Row className="mb-3 justify-content-center">
//                         <Form.Group as={Col} md="12" controlId="description">
//                             <label htmlFor="description" className="form-label">Description</label>
//                             <input ref={descriptionInput} type="text" className="form-control" id="description" name="description" value={formdata.description} placeholder="Description" onChange={handleChange} />
//                         </Form.Group>
//                     </Row>
//                     <Row className="mb-3 justify-content-center">
//                         <Form.Group as={Col} md="12" controlId="img">
//                             <label htmlFor="img" className="form-label">Image</label>
//                             <input ref={imgInput} type="text" className="form-control" id="img" name="img" value={formdata.img} placeholder="Image" onChange={handleChange} />
//                         </Form.Group>
//                     </Row>
//                     <Row className="mb-3 justify-content-center">
//                         <Form.Group as={Col} md="12" controlId="qty">
//                             <label htmlFor="qty" className="form-label">Quantity</label>
//                             <input ref={qtyInput} type="number" className="form-control" id="qty" name="qty" value={formdata.qty} placeholder="Quantity" onChange={handleChange} />
//                         </Form.Group>
//                     </Row>
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                 </Container>
//             </Form>

//         </div>
//     )
// }

export default CreateProductForm
