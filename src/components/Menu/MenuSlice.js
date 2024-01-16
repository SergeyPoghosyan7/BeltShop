import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const getCategories = createAsyncThunk(
   "Categories/getCategories",
   async () => {
       try {
           const response = await axios.get("http://localhost:3001/categories");
           console.log(response.data);
           return response.data;
       } catch (error) {
           console.error("errorrr", error);
           throw error;
       }
   }
);
export const addCategories = createAsyncThunk(
   "Categories/addCategories",
   async (data) => {
       try {
           const response = await axios.post("http://localhost:3001/categories",data);
           console.log(response.data);
           return response.data;
       } catch (error) {
           console.error("errorrr", error);
           throw error;
       }
   }
);
export const getSubcategory = createAsyncThunk(
   "Subcategory/getSubcategory",
   async () => {
       try {
           const response = await axios.get("http://localhost:3001/subCategory");
           console.log(response.data);
           return response.data;
       } catch (error) {
           console.error("errorrr", error);
           throw error;
       }
   }
);
export const addSubcategory = createAsyncThunk(
   "Subcategory/getSubcategory",
   async (data) => {
       try {
           const response = await axios.post("http://localhost:3001/subCategory",data);
           console.log(response.data,"rd");
           return response.data;
       } catch (error) {
           console.error("errorrr", error);
           throw error;
       }
   }
);
export const getMenus = createAsyncThunk(
   "menu/getMenus",
   async () => {
       try {
           const response = await axios.get("http://localhost:3001/menu");
           console.log(response.data);
           return response.data;
       } catch (error) {
           console.error("errorrr", error);
           throw error;
       }
   }
);
export const addMenu = createAsyncThunk(
   "menu/addMenu",
   async (data) => {
       try {
           const response = await axios.post("http://localhost:3001/menu",data);
           console.log(response.data);
           return response.data;
       } catch (error) {
           console.error("errorrr", error);
           throw error;
       }
   }
);
const menuSlice = createSlice({
   name:"menu",
   initialState:{
      menuList: [],
      categoriesList: [],
      subcategoryList: [],


   },
   reducers:{

   }, 
   extraReducers:{
      [getMenus.fulfilled](state, action){
         state.menuList = action.payload

      },
      [getCategories.fulfilled](state, action){
         state.categoriesList = action.payload

      },
      [getSubcategory.fulfilled](state, action){
        if(Array.isArray(action.payload)){
            state.subcategoryList = action.payload
           
        }
      },
   }
})
export default menuSlice.reducer