const productos = [
    {
        id: 1,
        title: 'Cartera',
        precio: "6100",
        descripcion: 'Cartera Amayra',
        image: '/img/cartera01.png',
        stock: "10"
    },
    {
        id: 2,
        title: 'Mochila',
        precio: "5800",
        descripcion: 'Mochila Amayra',
        image: '/img/mochila.png',
        stock:"5"
    },
    {
        id: 3,
        title: 'Billetera',
        precio: "1350",
        descripcion: 'Billetera Juvenil',
        image: '/img/billetera.png',
        stock:"11"
    }
]

const producto = {
    id: 2,
    title: 'Mochila',
    precio: "5800",
    descripcion: 'Mochila Amayra',
    image: '/img/mochila.png',
    stock: "5",
};

export const traerProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(producto);
        }, 1000);
    });
};

export default productos;