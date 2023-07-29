import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppContextProvider =(props)=>{
    const {children} = props;

    const [isLogin,setIsLogin] = useState(false)
    const [isInfoUser,setIsInfoUser] = useState({})
    const [selectedProducts,setSelectedProducts] = useState({})
    const [isTotalPrice,setIsTotalPrice] = useState()
    const [isAddressId,setIsAddressId] = useState()
    return (
        <AppContext.Provider value={{isLogin,setIsLogin,isInfoUser,setIsInfoUser,isTotalPrice,setIsTotalPrice,selectedProducts,isAddressId,setSelectedProducts,setIsAddressId}}>
            {children}
        </AppContext.Provider>
    )

}