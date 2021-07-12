const db = require('../configs/db')
const users = {}

users.getAll = () => {
    return new Promise((resolve, reject) => {
        db.query("SELECT * FROM public.users ORDER BY id_users DESC")
        .then((res) => {
            const productJSON = res.rows
            const dataProduct = productJSON.map((data) => {
                const object = {
                    id_users : data.id_users,
                    name : data.name_users,
                    username : data.username,
                    password : data.password,
                    role : data.role
                }
                return object;
            })
            resolve(dataProduct)
        }).catch((err) => {
            reject(err.message)
        });
    })
}

users.getbyUsername = (username) => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM public.users WHERE username = '${username}'`)
        .then((res) => {
            resolve(res.rows)
        }).catch((err) => {
            reject(err.message)
        });
    })
}

users.addData = (data) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO public.users (username, "password", name_users, "role") VALUES ($1, $2, $3, $4)',[data.username, data.password, data.name_users, data.role])
        .then((res) => {
            resolve('Add users success')
        }).catch((err) => {
            reject(err.message)
        });
    })
}

users.updateData = (data) => {
    return new Promise((resolve, reject) => {
        db.query("UPDATE public.users SET name_users = $1, password = $2, role = $3 WHERE username = $4",[data.name_users, data.password, data.role, data.username])
        .then((res) => {
            resolve('Update users success')
        }).catch((err) => {
            reject(err.message)
        });
    })
}

users.removeData = (username) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM public.users WHERE username = '${username}'`)
        .then((res) => {
            resolve('Delete users success')
        }).catch((err) => {
            reject(err.message)
        });
    })
}

module.exports = users