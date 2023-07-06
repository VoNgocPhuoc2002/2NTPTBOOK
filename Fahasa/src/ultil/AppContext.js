import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppContextProvider =(props)=>{
    const {children} = props;

    const [isLogin,setIsLogin] = useState(false)
    const [isInfoUser,setIsInfoUser] = useState({})
    return (
        <AppContext.Provider value={{isLogin,setIsLogin,isInfoUser,setIsInfoUser}}>
            {children}
        </AppContext.Provider>
    )

}