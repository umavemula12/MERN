import { createContext, useState } from "react";

export const FormContext = createContext();
//component to access by consumer

export const FormProvider = ({childComp})=>{
    const [localDB,setDB] = useState([])
    return(
        <FormContext.Provider
        value={{localDB,setDB}}>
            {childComp}
        </FormContext.Provider>
    );
};
