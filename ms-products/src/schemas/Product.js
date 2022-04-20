import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ProductSchema = new Schema(
    {
        name:  String,
        description: String,
        price: {
            type: Number,
            get: v => v && `R$ ${v.toFixed(2).toString().replace('.',',') }`,
            set: v => v.toFixed(2),
        }
    },
    { 
        toJSON: { getters: true }
    }
);

export default model("Product", ProductSchema);