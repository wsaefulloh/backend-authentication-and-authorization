const db = require('../configs/db')
const bag = {}

bag.getAll = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT id_bag, name_product, price_product, brand_product, count, store_name, image_product, public.bag.id_product AS product_id FROM public.bag INNER JOIN public.detail_product ON public.bag.id_product = public.detail_product.id_product")
        .then((res) => {
            const productJSON = res.rows
            const dataProduct = productJSON.map((data) => {
                const totalPrice = data.price_product * data.count;
                const object = {
                    id_bag : data.id_bag,
                    id_product : data.product_id,
                    name : data.name_product,
                    brand : data.brand_product,
                    image : data.image_product,
                    store : data.store_name,
                    price : data.price_product,
                    count : data.count,
                    total : totalPrice
                }
                return object;
            })
            resolve(dataProduct)
        }).catch((err) => {
            reject(err.message)
        });
    })
}

bag.addData = (data) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO public.bag (id_product, count) VALUES ($1, $2)', [data.id_product, data.count])
        .then((res) => {
            resolve('Add product to bag success')
        }).catch((err) => {
            reject(err.message)
        });
    })
}

bag.updateData = (data) => {
    return new Promise((resolve, reject) => {
        db.query("UPDATE public.bag SET count = $1 WHERE id_bag = $2",[data.count, data.id_bag])
        .then((res) => {
            resolve('Update product in bag success')
        }).catch((err) => {
            reject(err.message)
        });
    })
}

bag.removeData = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM public.bag WHERE id_bag = ${id}`)
        .then((res) => {
            resolve('Delete product in bag success')
        }).catch((err) => {
            reject(err.message)
        });
    })
}

module.exports = bag