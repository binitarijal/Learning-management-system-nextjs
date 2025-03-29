
import categorySlice from './category/categorySlice'
import paymentSlice from './payment/paymentSlice'
import { configureStore } from "@reduxjs/toolkit";
 configureStore({
    reducer:{
        Category: categorySlice,
        payment:paymentSlice,
        
    }
 })