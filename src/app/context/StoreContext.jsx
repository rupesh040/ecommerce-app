"use client"
import { createContext, useEffect, useState } from "react";
import { product_data } from "../../../Data/data";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems,setCartItems] = useState({});
const url = "http://localhost:4000"
const[token,setToken] = useState("")
useEffect(()=> {
    if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
    }
},[])
    const addCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev) => ({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        }
    }

    const removeCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue = {
        product_data,
        cartItems,
        addCart,
        removeCart,
        url,
        token,
        setToken
    }

    return (
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider
