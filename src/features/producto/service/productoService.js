import axios from "axios"
// async : asincrono 
export const getProducto = async ()=> {
    const producto = await axios.get("https://api.escuelajs.co/api/v1/products")
    console.log(producto)
    return producto.data 
}

export const getProductoUnico = async (id) => {
    const producto = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
    console.log(producto);
    return producto.data;
};