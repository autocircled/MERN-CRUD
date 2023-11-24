import axios from 'axios';

export const CreateProduct = (postBody) => {
    const EndPoint = 'http://localhost:5000/api/v1/create-product'
    return axios.post(EndPoint, postBody).then((res) => {
        if (res.status === 200) {
            return true;
        } else {
            return false;
        }
    }).catch((err) => {
        console.log(err)
        return false;
    });
}

export const GetAllProducts = () => {
    const EndPoint = 'http://localhost:5000/api/v1/products'
    return axios.get(EndPoint).then((res) => {
        if (res.status === 200) {
            return res.data['data'];
        } else {
            return false;
        }
    }).catch((err) => {
        console.log(err)
        return false;
    });
}

export const GetProductByID = (id) => {
    const EndPoint = 'http://localhost:5000/api/v1/product/' + id;
    return axios.get(EndPoint).then((res) => {
        if (res.status === 200) {
            return res.data['data'];
        } else {
            return false;
        }
    }).catch((err) => {
        console.log(err)
        return false;
    });
}

export const DeleteProduct = async (id) => {
    const EndPoint = 'http://localhost:5000/api/v1/delete-product/' + id;
    return await axios.post(EndPoint).then((res) => {
        if (res.status === 200) {
            return true;
        } else {
            return false;
        }
    }).catch((err) => {
        console.log(err)
        return false;
    });
}

export const UpdateProduct = (postBody, id) => {
    const EndPoint = 'http://localhost:5000/api/v1/update-product/' + id;
    return axios.post(EndPoint, postBody).then((res) => {
        if (res.status === 200) {
            return true;
        } else {
            return false;
        }
    }).catch((err) => {
        console.log(err)
        return false;
    });
}