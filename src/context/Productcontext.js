import { createContext, useEffect } from "react"; 
import axios from "axios";
const AppContext = createContext();
const API = "https://api.pujakaitem.com/api/products";
const AppProviders = ({}) => {
    const getProducts = async (url) => {
const res = await  axios.get(url);
    };
    useEffect(() => {
getProducts(API);
    },[]);
}


const AppProvider = ({children}) => {
return <AppContext.Provider>{children}</AppContext.Provider>
};
export {AppProvider, AppContext };