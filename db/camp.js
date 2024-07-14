 //created this page for creating databse and schema

import { Schema as _Schema, model } from "mongoose"; 

const Schema = _Schema;
const CampSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    tel: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    district: {
        type: String,

        required: true        
    },

    block: {
        type: String,

        required: true
    },

    panchayat: {
        type: String,

        required: true
    }
    
});

export default model('Camp',CampSchema);
