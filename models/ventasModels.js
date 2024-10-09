import mongoose, { Schema } from "mongoose";

const salesSchema = new Schema({
    name_product: {
        type: String,
        required: true
    },
    price_product: {
        type: Number,
        required: true
    },
    date_sale: {
        type: Date,
        required: true
    },
    id_employee: {
        type: Schema.Types.ObjectId,
        ref: "employee",
        required: true
    }
})

export const sales = mongoose.model('sales', salesSchema)