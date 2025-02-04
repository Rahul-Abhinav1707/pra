import mongoose from 'mongoose'

const productModel = new mongoose.Schema({
    Name: {

    },

    Price: {


    },

    Description : {

    }

})


export const Product = mongoose.model('Product',productModel )