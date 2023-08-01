const express = require('express')
const axios = require('axios')
const ejs = require('ejs')

const app = express()

app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
    try {
        // Conexão com a API
        const response = await axios.get('https://fakestoreapi.com/products')
        const products = response.data
        res.render('products', { products })
    }
    catch (error) {
        console.log(error)
    }
})

app.get('/joias', async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/category/jewelery')
        const jewelery = response.data
        res.render('jewelery', { jewelery })
    }
    catch (error) {
        console.log(error)
    }

})

app.get('/eletronicos', async (req, res) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products/category/electronics')
        const products_elet = response.data
        res.render('products_elet', { products_elet })
    }
    catch (error) {
        console.log(error)
    }

})

app.get('/vestuario', async (req, res) => {
    try {
        const responseM = await axios.get("https://fakestoreapi.com/products/category/men's clothing")
        const responseF = await axios.get("https://fakestoreapi.com/products/category/women's clothing")

        const roupasM = responseM.data
        const roupasF = responseF.data
        roupas = [...roupasM, ...roupasF]
        res.render('roupas', { roupas })
    }
    catch (error) {
        console.log(error)
    }

})



app.listen(3000, () => {
    console.log('Server ON')
})
