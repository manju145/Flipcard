import React, { useState } from 'react';
import { createContext } from 'react';

export const DataContext= createContext(null);



const DataProvider = ({children}) => {
    const [contexted, setContexted]= useState('');
  return (
       <DataContext.Provider value={{
        contexted,
        setContexted
       }}>

       {children}
       </DataContext.Provider>
  )
}

export default DataProvider;