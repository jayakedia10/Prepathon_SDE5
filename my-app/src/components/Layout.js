import React from 'react';
import ButtonAppBar from './NavBar';
const Layout =({children}) =>{
    return(
        <>
        <div>
            <ButtonAppBar />
        </div>
        <main>{children}</main>
        </>
    )
}

export default Layout;