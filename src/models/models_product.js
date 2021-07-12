const db = require('../configs/db')
const products = {}

products.getAll = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT public.detail_product.*, public.category.name_category AS category_name FROM public.detail_product INNER JOIN public.category ON public.detail_product.id_category = public.category.id_category ORDER BY date_update DESC")
        .then((res) => {
            const productJSON = res.rows
            const dataProduct = productJSON.map((data) => {
                const object = {
                    id : data.id_product,
                    name : data.name_product,
                    category : data.category_name,
                    brand : data.brand_product,
                    store : data.store_name,
                    price : data.price_product,
                    create : data.date_create,
                    update : data.date_update
                }
                return object;
            })
            resolve(dataProduct)
        }).catch((err) => {
            reject(err.message)
        });
    })
}

products.sortbyDate = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT public.detail_product.*, public.category.name_category AS category_name FROM public.detail_product INNER JOIN public.category ON public.detail_product.id_category = public.category.id_category ORDER BY date_update DESC")
        .then((res) => {
            const productJSON = res.rows
            const dataProduct = productJSON.map((data) => {
                const object = {
                    id : data.id_product,
                    name : data.name_product,
                    category : data.category_name,
                    brand : data.brand_product,
                    store : data.store_name,
                    price : data.price_product,
                    create : data.date_create,
                    update : data.date_update
                }
                return object;
            })
            resolve(dataProduct)
        }).catch((err) => {
            reject(err.message)
        });
    })
}

products.sortbyName = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT public.detail_product.*, public.category.name_category AS category_name FROM public.detail_product INNER JOIN public.category ON public.detail_product.id_category = public.category.id_category ORDER BY name_product ASC")
        .then((res) => {
            const productJSON = res.rows
            const dataProduct = productJSON.map((data) => {
                const object = {
                    id : data.id_product,
                    name : data.name_product,
                    category : data.category_name,
                    brand : data.brand_product,
                    store : data.store_name,
                    price : data.price_product,
                    create : data.date_create,
                    update : data.date_update
                }
                return object;
            })
            resolve(dataProduct)
        }).catch((err) => {
            reject(err.message)
        });
    })
}

products.sortbyPriceASC = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT public.detail_product.*, public.category.name_category AS category_name FROM public.detail_product INNER JOIN public.category ON public.detail_product.id_category = public.category.id_category ORDER BY price_product ASC")
        .then((res) => {
            const productJSON = res.rows
            const dataProduct = productJSON.map((data) => {
                const object = {
                    id : data.id_product,
                    name : data.name_product,
                    category : data.category_name,
                    brand : data.brand_product,
                    store : data.store_name,
                    price : data.price_product,
                    create : data.date_create,
                    update : data.date_update
                }
                return object;
            })
            resolve(dataProduct)
        }).catch((err) => {
            reject(err.message)
        });
    })
}

products.sortbyPriceDESC = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT public.detail_product.*, public.category.name_category AS category_name FROM public.detail_product INNER JOIN public.category ON public.detail_product.id_category = public.category.id_category ORDER BY price_product DESC")
        .then((res) => {
            const productJSON = res.rows
            const dataProduct = productJSON.map((data) => {
                const object = {
                    id : data.id_product,
                    name : data.name_product,
                    category : data.category_name,
                    brand : data.brand_product,
                    store : data.store_name,
                    price : data.price_product,
                    create : data.date_create,
                    update : data.date_update
                }
                return object;
            })
            resolve(dataProduct)
        }).catch((err) => {
            reject(err.message)
        });
    })
}

products.sortbyCategory = (category) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT public.detail_product.*, public.category.name_category AS category_name FROM public.detail_product INNER JOIN public.category ON public.detail_product.id_category = public.category.id_category WHERE name_category ILIKE '%${category}%' ORDER BY date_update DESC`)
        .then((res) => {
            if (res.rowsCount){
                const productJSON = res.rows
                const dataProduct = productJSON.map((data) => {
                const object = {
                    id : data.id_product,
                    name : data.name_product,
                    category : data.category_name,
                    brand : data.brand_product,
                    store : data.store_name,
                    price : data.price_product,
                    create : data.date_create,
                    update : data.date_update
                }
                return object;
            })
            resolve(dataProduct)
            } else {
                resolve({message: 'category not found!'})
            }
        }).catch((err) => {
            reject(err.message)
        });
    })
}

products.searchbyName = (name) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT public.detail_product.*, public.category.name_category AS category_name FROM public.detail_product INNER JOIN public.category ON public.detail_product.id_category = public.category.id_category WHERE name_product ILIKE '%${name}%' ORDER BY date_update DESC`)
        .then((res) => {
            if (res.rowsCount){
                const productJSON = res.rows
                const dataProduct = productJSON.map((data) => {
                const object = {
                    id : data.id_product,
                    name : data.name_product,
                    category : data.category_name,
                    brand : data.brand_product,
                    store : data.store_name,
                    price : data.price_product,
                    image : data.image_product,
                    create : data.date_create,
                    update : data.date_update
                }
                return object;
            })
            resolve(dataProduct)
            } else {
                resolve({message: 'product not found!'})
            }
        }).catch((err) => {
            reject(err.message)
        });
    })
}

products.addData = (data) => {
    return new Promise((resolve, reject) => {
        let date_create = new Date()
        db.query('INSERT INTO public.detail_product (name_product, price_product, brand_product, image_product, store_name, id_category, date_create, date_update) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [data.name_product, data.price_product, data.brand_product, data.image_product, data.store_name, data.id_category, date_create, date_create])
        .then((res) => {
            resolve('Add product success')
        }).catch((err) => {
            reject(err.message)
        });
    })
}

products.updateData = (data) => {
    return new Promise((resolve, reject) => {
        let date_create = new Date()
        db.query("UPDATE public.detail_product SET price_product = $1, date_update = $2 WHERE id_product = $3",[data.price_product, date_create, data.id_product])
        .then((res) => {
            resolve('Update product success')
        }).catch((err) => {
            reject(err.message)
        });
    })
}

products.removeData = (id) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM public.detail_product WHERE id_product = $1", [id])
        .then((res) => {
            resolve('Delete product success')
        }).catch((err) => {
            reject(err.message)
        });
    })
}

module.exports = products