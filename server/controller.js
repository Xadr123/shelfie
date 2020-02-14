module.exports = {
    getGamesList: (req, res) => {
        const dbInstance = req.app.get('db')

        dbInstance.get_inventory([]).then(inventory => {
            res.status(200).send(inventory)
        }).catch(err => {
            res.status(500).send(err)
        })
    },

    newProduct: (req, res) => {
        const dbInstance = req.app.get('db')

        const { product_name, product_price, product_image } = req.body

        // const newItem = {
        //     product_name: product_name,
        //     product_price: product_price,
        //     product_image: product_image
        // }

        // res.status(200).send(newItem)

        dbInstance.create_product([product_name, product_price, product_image]).then(() => res.status(200).send(req.body)).catch(err => {
            res.status(500).send({ errorMessage: 'Its broken, fix it.' })
            console.log(err)
        })
    },

    deleteProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const { product_id } = req.params

        dbInstance.deleteProduct(product_id).then(() => res.sendStatus(200)).catch(err => {
            res.status(500).send({ errorMessage: 'Its broken, fix it.' })
            console.log(err)
        })
    }
}