import productos from './productos';

export const customFetch = (time, task) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(task);
        }, time)
    })
}
export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 2000)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.categoryId === categoryId));
        }, 2000);
    })
}